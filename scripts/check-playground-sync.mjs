#!/usr/bin/env node
/**
 * ABC Design — Playground 组件同步与目录锚点强制门禁 (check:playground-sync)
 *
 * 强约束项：
 * 1. 基于 TypeScript AST 解析 @abc-design/react、@abc-design/charts、@abc-design/markdown 的全部公开运行时导出组件（PascalCase）；
 * 2. 校验 100% 导出组件必须注册在 apps/playground/src/registry/domains/*.ts 中（纳入分类导航与 ⌘K 组件搜索）；
 * 3. 校验 100% 导出组件必须挂载在 apps/playground/src/pages/** 的 <ComponentDocPreview components={[...]} /> 演练卡片中；
 * 4. 校验注册表中的每个 anchorSymbol 均对应真实存在的 ComponentDocPreview 首符号或显式 id 锚点，杜绝搜索跳转悬空；
 * 5. 校验 apps/playground/src 下单文件体积上限（.tsx <= 600 行，硬红线 <= 800 行），防止单页无序堆砌组件。
 */

import fs from 'node:fs'
import { createRequire } from 'node:module'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, '..')
const require = createRequire(path.join(repoRoot, 'package.json'))
const ts = require('typescript')

const PACKAGE_ENTRIES = [
  { pkg: '@abc-design/react', entry: path.join(repoRoot, 'packages/react/src/index.ts') },
  { pkg: '@abc-design/charts', entry: path.join(repoRoot, 'packages/charts/src/index.ts') },
  { pkg: '@abc-design/markdown', entry: path.join(repoRoot, 'packages/markdown/src/index.ts') },
  { pkg: '@abc-design/flow', entry: path.join(repoRoot, 'packages/flow/src/index.ts') },
]

function collectFiles(dir, exts) {
  const out = []
  if (!fs.existsSync(dir)) return out
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name)
    if (ent.isDirectory()) {
      out.push(...collectFiles(full, exts))
    } else if (exts.some((ext) => ent.name.endsWith(ext))) {
      out.push(full)
    }
  }
  return out.sort()
}

// 1. 使用 TypeScript Compiler API 提取三大 UI 包的全部 PascalCase 值导出
const tsconfigPath = path.join(repoRoot, 'tsconfig.base.json')
const configFile = ts.readConfigFile(tsconfigPath, ts.sys.readFile)
const parsedConfig = ts.parseJsonConfigFileContent(configFile.config, ts.sys, repoRoot)

const program = ts.createProgram(
  PACKAGE_ENTRIES.map((p) => p.entry),
  {
    ...parsedConfig.options,
    baseUrl: repoRoot,
    paths: {
      '@abc-design/tokens': ['packages/tokens/src/index.ts'],
      '@abc-design/core': ['packages/core/src/index.ts'],
      '@abc-design/react': ['packages/react/src/index.ts'],
      '@abc-design/flow': ['packages/flow/src/index.ts'],
    },
  }
)
const checker = program.getTypeChecker()

/** @type {Map<string, { pkg: string; declFile: string; isAliasOrContext: boolean }>} */
const exportedComponents = new Map()

// 仅在 AbcProvider 根部全局挂载一次的单例浮层宿主（无需在单个演练卡内重复创建全局 Portal 队列）
const SINGLETON_PORTAL_HOSTS = new Set([
  'ToastContainer',
  'AbcToastViewport',
  'Toaster',
  'ConfirmProvider',
  'AbcConfirmHost',
])

for (const { pkg, entry } of PACKAGE_ENTRIES) {
  const sf = program.getSourceFile(entry)
  if (!sf) {
    console.error(`❌ [check:playground-sync] 无法加载包入口文件: ${entry}`)
    process.exit(1)
  }
  const modSym = checker.getSymbolAtLocation(sf)
  const exports = modSym ? checker.getExportsOfModule(modSym) : []

  for (const exp of exports) {
    const target = exp.flags & ts.SymbolFlags.Alias ? checker.getAliasedSymbol(exp) : exp
    if (!(target.flags & ts.SymbolFlags.Value)) continue
    const name = exp.getName()
    // 筛选全部以大写字母开头且包含小写字母的组件/容器符号（排除全大写常量如 DEFAULT_* / ABC_*）
    if (!/^[A-Z][a-z0-9]/.test(name)) continue
    if (!exportedComponents.has(name)) {
      const decl = target.valueDeclaration || target.declarations?.[0]
      const declFile = decl
        ? path.relative(repoRoot, decl.getSourceFile().fileName).split(path.sep).join('/')
        : pkg

      // 识别等价导出别名（如 Modal = Dialog）或 createContext 上下文对象（如 DialogContext）
      let isAliasOrContext = target.getName() !== name
      if (decl && ts.isVariableDeclaration(decl) && decl.initializer) {
        if (ts.isIdentifier(decl.initializer)) {
          isAliasOrContext = true
        } else if (
          ts.isCallExpression(decl.initializer) &&
          /createContext$/.test(decl.initializer.expression.getText())
        ) {
          isAliasOrContext = true
        }
      }

      exportedComponents.set(name, { pkg, declFile, isAliasOrContext })
    }
  }
}

// 2. AST 解析 apps/playground/src/registry/domains/*.ts 中的注册符号与 anchorSymbol
const registryDomainFiles = collectFiles(
  path.join(repoRoot, 'apps/playground/src/registry/domains'),
  ['.ts']
)
const registeredSymbols = new Set()
/** @type {Array<{ symbol: string; anchorSymbol: string; file: string }>} */
const registeredAnchors = []

for (const regFile of registryDomainFiles) {
  const rel = path.relative(repoRoot, regFile).split(path.sep).join('/')
  const sf = ts.createSourceFile(
    regFile,
    fs.readFileSync(regFile, 'utf8'),
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS
  )

  function visitReg(node) {
    if (ts.isObjectLiteralExpression(node)) {
      let symbolVal = null
      let anchorVal = null
      const subVals = []

      for (const prop of node.properties) {
        if (!ts.isPropertyAssignment(prop)) continue
        const propName = prop.name.getText(sf)
        if (propName === 'symbol' && ts.isStringLiteralLike(prop.initializer)) {
          symbolVal = prop.initializer.text
        } else if (propName === 'anchorSymbol' && ts.isStringLiteralLike(prop.initializer)) {
          anchorVal = prop.initializer.text
        } else if (propName === 'subSymbols' && ts.isArrayLiteralExpression(prop.initializer)) {
          for (const el of prop.initializer.elements) {
            if (ts.isStringLiteralLike(el)) subVals.push(el.text)
          }
        }
      }

      if (symbolVal && anchorVal) {
        registeredSymbols.add(symbolVal)
        for (const sub of subVals) registeredSymbols.add(sub)
        registeredAnchors.push({ symbol: symbolVal, anchorSymbol: anchorVal, file: rel })
      }
    }
    ts.forEachChild(node, visitReg)
  }

  visitReg(sf)
}

// 3. AST 解析 apps/playground/src/** 中的 <ComponentDocPreview> 卡片声明、真实 JSX 挂载与违规假挂载检查
const pageFiles = collectFiles(path.join(repoRoot, 'apps/playground/src/pages'), ['.tsx'])
const allPlaygroundTsxFiles = collectFiles(path.join(repoRoot, 'apps/playground/src'), ['.tsx'])
const allPlaygroundFiles = collectFiles(path.join(repoRoot, 'apps/playground/src'), ['.ts', '.tsx'])

const previewListedSymbols = new Set()
const availableCardAnchors = new Set()
const renderedJsxSymbols = new Set()
/** @type {string[]} */
const antiCheatErrors = []
let totalPreviewCards = 0

function hasHiddenUtilityClass(attrs, sf) {
  for (const prop of attrs.properties) {
    if (!ts.isJsxAttribute(prop) || !prop.initializer) continue
    if (prop.name.getText(sf) !== 'className') continue
    if (ts.isStringLiteral(prop.initializer)) {
      const tokens = prop.initializer.text.trim().split(/\s+/)
      if (tokens.includes('hidden')) return true
    }
  }
  return false
}

for (const tsxFile of allPlaygroundTsxFiles) {
  const rel = path.relative(repoRoot, tsxFile).split(path.sep).join('/')
  const isPageFile = tsxFile.includes(`${path.sep}pages${path.sep}`)
  const sf = ts.createSourceFile(
    tsxFile,
    fs.readFileSync(tsxFile, 'utf8'),
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX
  )

  function inspectPreviewAttr(tagNode, attrs) {
    if (!isPageFile || tagNode.getText(sf) !== 'ComponentDocPreview') return
    totalPreviewCards += 1

    let explicitId = null
    const cardSyms = []

    for (const attr of attrs.properties) {
      if (!ts.isJsxAttribute(attr) || !attr.initializer) continue
      const attrName = attr.name.getText(sf)

      if (attrName === 'id') {
        if (ts.isStringLiteral(attr.initializer)) {
          explicitId = attr.initializer.text
        } else if (
          ts.isJsxExpression(attr.initializer) &&
          attr.initializer.expression &&
          ts.isStringLiteralLike(attr.initializer.expression)
        ) {
          explicitId = attr.initializer.expression.text
        }
      }

      if (
        attrName === 'components' &&
        ts.isJsxExpression(attr.initializer) &&
        attr.initializer.expression &&
        ts.isArrayLiteralExpression(attr.initializer.expression)
      ) {
        for (const el of attr.initializer.expression.elements) {
          if (ts.isStringLiteralLike(el)) {
            cardSyms.push(el.text)
            previewListedSymbols.add(el.text)
          }
        }
      }
    }

    if (explicitId) {
      availableCardAnchors.add(explicitId.replace(/^comp-/, ''))
    }
    if (cardSyms.length > 0) {
      availableCardAnchors.add(cardSyms[0])
    }
  }

  function visitTsx(node, insideHiddenWrapper) {
    // 拦截 void SomeComponent 掩耳盗铃式假引用
    if (ts.isVoidExpression(node) && ts.isIdentifier(node.expression)) {
      const symName = node.expression.getText(sf)
      if (exportedComponents.has(symName)) {
        const line = sf.getLineAndCharacterOfPosition(node.getStart(sf)).line + 1
        antiCheatErrors.push(
          `[forbidden-void-reference] ${rel}:${line} 严禁使用 "void ${symName}" 伪造组件引用；请在演练区真实渲染组件或移除未使用的兼容别名导入。`
        )
      }
    }

    let nextHidden = insideHiddenWrapper
    if (ts.isJsxElement(node)) {
      const tag = node.openingElement.tagName.getText(sf)
      inspectPreviewAttr(node.openingElement.tagName, node.openingElement.attributes)
      if (hasHiddenUtilityClass(node.openingElement.attributes, sf)) {
        nextHidden = true
      }
      if (!nextHidden) {
        renderedJsxSymbols.add(tag)
      }
    } else if (ts.isJsxSelfClosingElement(node)) {
      const tag = node.tagName.getText(sf)
      inspectPreviewAttr(node.tagName, node.attributes)
      const selfHidden = hasHiddenUtilityClass(node.attributes, sf)
      if (!nextHidden && !selfHidden) {
        renderedJsxSymbols.add(tag)
      }
    }

    ts.forEachChild(node, (child) => visitTsx(child, nextHidden))
  }

  visitTsx(sf, false)
}

// 4. 汇总违规项
const errors = [...antiCheatErrors]

for (const [sym, meta] of exportedComponents.entries()) {
  if (!registeredSymbols.has(sym)) {
    errors.push(
      `[missing-in-registry] ${meta.pkg} 导出了组件 "${sym}" (${meta.declFile})，但未在 apps/playground/src/registry/domains/*.ts 注册（将无法被分类导航与 ⌘K 组件搜索检索）。`
    )
  }
  if (!previewListedSymbols.has(sym)) {
    errors.push(
      `[missing-in-preview] ${meta.pkg} 导出了组件 "${sym}" (${meta.declFile})，但未在 apps/playground/src/pages/** 的任何 <ComponentDocPreview components={[...]} /> 中挂载声明。`
    )
  }
  if (
    !meta.isAliasOrContext &&
    !SINGLETON_PORTAL_HOSTS.has(sym) &&
    !renderedJsxSymbols.has(sym)
  ) {
    errors.push(
      `[fake-preview-not-rendered] ${meta.pkg} 导出的独立组件 "${sym}" (${meta.declFile}) 仅在 components 数组中挂名，未在 apps/playground/src/** 中作为可见 JSX 元素 (<${sym} />) 真实挂载渲染！`
    )
  }
}

for (const { symbol, anchorSymbol, file } of registeredAnchors) {
  if (!availableCardAnchors.has(anchorSymbol)) {
    errors.push(
      `[broken-anchor] ${file} 中组件 "${symbol}" 的 anchorSymbol="${anchorSymbol}" 未对应任何 <ComponentDocPreview> 首组件或显式 id，会导致 ⌘K 精准跳转失效。`
    )
  }
}

for (const f of allPlaygroundFiles) {
  const rel = path.relative(repoRoot, f).split(path.sep).join('/')
  const lineCount = fs.readFileSync(f, 'utf8').split('\n').length
  const maxLines = f.endsWith('.tsx') ? 600 : 800
  if (lineCount > maxLines) {
    errors.push(
      `[file-too-large] ${rel} 当前 ${lineCount} 行，超过 Playground 模块化上限 (${maxLines} 行)；请按组件职责拆分为独立子组件，禁止单文件无序堆砌！`
    )
  }
}

if (errors.length > 0) {
  console.error(
    `\n❌ [check:playground-sync] 发现 ${errors.length} 项 Playground 组件同步或结构违规：\n`
  )
  for (const err of errors) {
    console.error(`  - ${err}`)
  }
  console.error(
    '\n💡 修复规范：每当在 @abc-design/* 新增或重命名公开组件时，必须同步：\n' +
      '   1) 在 apps/playground/src/pages/ 对应分类下新增独立的 <ComponentDocPreview> 交互预览卡片；\n' +
      '   2) 在 apps/playground/src/registry/domains/ 登记该组件以接入 7 大分类与 ⌘K 组件搜索。\n'
  )
  process.exit(1)
}

console.log(
  `✅ [check:playground-sync] 校验通过：共核对 ${exportedComponents.size} 个导出组件符号、${totalPreviewCards} 张交互预览卡片与 ${allPlaygroundFiles.length} 个源码文件，Playground 覆盖率 = 100%，锚点与体积零违规。`
)
