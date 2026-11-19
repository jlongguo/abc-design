import fs from 'node:fs'
import path from 'node:path'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Button, buttonVariants } from '../components/button/Button'
import { SliderVerify, Tree } from '../components/form/AdvancedControls'
import { Cascader } from '../components/form/Cascader'
import { CheckableTag, CheckableTagGroup, Checkbox, RadioGroup, Switch } from '../components/form/Controls'
import { DatePicker, DateRangePicker } from '../components/form/DatePicker'
import { FileUpload } from '../components/form/FileUpload'
import { FormField } from '../components/form/FormField'
import { ImageUpload } from '../components/form/ImageUpload'
import { Input, InputNumber, Textarea } from '../components/form/Input'
import { KeyValueInput } from '../components/form/KeyValueInput'
import { ByteQuotaInput, DurationQuotaInput } from '../components/form/QuotaUnitInput'
import {
  RadixSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/form/RadixSelectCompat'
import { SearchInput } from '../components/form/SearchInput'
import { Select, SelectField } from '../components/form/Select'
import { TagInput } from '../components/form/TagInput'
import { Transfer } from '../components/form/Transfer'
import { TreeSelect } from '../components/form/TreeSelect'
import { IconPicker } from '../components/icon/IconPicker'
import { SegmentedControl } from '../components/navigation/SegmentedControl'
import { CheckCard, CheckCardGroup } from '../components/surface/cards/CheckCard'
import { FilterBuilder } from '../pro/FilterBuilder'
import { DictSelect } from '../pro/PermissionAndDict'
import { ProFormList } from '../pro/ProFormList'
import { SavedFilterViews } from '../pro/SavedFilterViews'
import { ProIconFieldControl } from '../pro/pro-crud-form/extraControls'
import { AbcProvider } from '../provider/AbcProvider'

const FORBIDDEN_ACTIVE_SCALE_PATTERN = /(?:^|\s)(?:abc-motion-control|(?:[\w-]+:)*active:scale(?:-|\b))/

function assertNoActiveScale(root: ParentNode, label: string) {
  const elements: Element[] = []
  if (root instanceof Element) {
    elements.push(root)
  }
  elements.push(...Array.from(root.querySelectorAll('*')))

  const violations: string[] = []
  for (const el of elements) {
    const cls = typeof el.className === 'string' ? el.className : el.getAttribute('class') ?? ''
    if (FORBIDDEN_ACTIVE_SCALE_PATTERN.test(cls)) {
      const tag = el.tagName.toLowerCase()
      const slot = el.getAttribute('data-slot') || el.getAttribute('aria-label') || el.getAttribute('role') || ''
      violations.push(`<${tag}${slot ? ` [${slot}]` : ''}> class="${cls}"`)
    }
  }

  expect(violations, `${label} 不应包含 abc-motion-control 或 active:scale*`).toEqual([])
}

describe('所有 Input / 表单录入相关组件禁止 active scale 回归测试', () => {
  it('1. 文本、数值、搜索与配额输入组件均无 active scale 类', () => {
    const { container } = render(
      <AbcProvider persist={false}>
        <div className="space-y-2">
          <Input allowClear type="password" defaultValue="secret123" />
          <InputNumber defaultValue={10} min={0} max={100} />
          <Textarea defaultValue="多行内容" showCount maxLength={200} />
          <FormField label="表单项" allowClear defaultValue="field-val" />
          <SearchInput defaultValue="query" onClear={vi.fn()} />
          <ByteQuotaInput value={1024 * 1024} onChange={vi.fn()} />
          <DurationQuotaInput value={3600} onChange={vi.fn()} />
          <TagInput defaultValue={['prod', 'canary']} allowClear />
        </div>
      </AbcProvider>
    )

    assertNoActiveScale(container, '基础与增强输入框集合')

    // 验证 InputNumber 的步进小按钮点击交互正常且无缩放类
    const incBtn = screen.getByRole('button', { name: '增加数值' })
    const decBtn = screen.getByRole('button', { name: '减少数值' })
    fireEvent.click(incBtn)
    expect((container.querySelector('[data-slot="input-number"] input') as HTMLInputElement).value).toBe('11')
    fireEvent.click(decBtn)
    expect((container.querySelector('[data-slot="input-number"] input') as HTMLInputElement).value).toBe('10')
  })

  it('2. Checkbox / Switch / RadioGroup(default & segmented) / CheckableTag / CheckCard / SegmentedControl 均无 active scale 类', () => {
    const { container } = render(
      <AbcProvider persist={false}>
        <div className="space-y-2">
          <Checkbox defaultChecked label="勾选框" />
          <Switch defaultChecked label="启用开关" />
          <RadioGroup
            defaultValue="a"
            options={[
              { value: 'a', label: '选项 A' },
              { value: 'b', label: '选项 B' },
            ]}
          />
          <RadioGroup
            variant="segmented"
            defaultValue="a"
            options={[
              { value: 'a', label: '分段 A' },
              { value: 'b', label: '分段 B' },
            ]}
          />
          <CheckableTag checked onCheckedChange={vi.fn()}>
            单标签
          </CheckableTag>
          <CheckableTagGroup options={['k8s', 'docker']} value={['k8s']} onValueChange={vi.fn()} />
          <CheckCardGroup defaultValue="std">
            <CheckCard value="std" title="标准版" description="适用中小规模集群" />
            <CheckCard value="pro" title="旗舰版" description="高可用多活集群" />
          </CheckCardGroup>
          <SegmentedControl
            value="day"
            onChange={vi.fn()}
            options={[
              { value: 'day', label: '按天' },
              { value: 'week', label: '按周' },
            ]}
          />
        </div>
      </AbcProvider>
    )

    assertNoActiveScale(container, '单复选与开关控件集合')
  })

  it('3. Select / DictSelect / RadixSelect / TreeSelect / Tree / Cascader / DatePicker / DateRangePicker / IconPicker（含展开浮层）均无 active scale 类', () => {
    const { container } = render(
      <AbcProvider persist={false} dictAdapter={() => [{ label: '启用', value: '1' }]}>
        <div className="space-y-2">
          <Select
            allowClear
            searchable
            defaultValue="cn"
            options={[
              { value: 'cn', label: '中国' },
              { value: 'us', label: '美国' },
            ]}
          />
          <SelectField
            value="cn"
            options={[{ value: 'cn', label: '中国' }]}
            onValueChange={vi.fn()}
          />
          <DictSelect dictCode="status" />
          <RadixSelect defaultValue="r1">
            <SelectTrigger>
              <SelectValue placeholder="请选择" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="r1">项 1</SelectItem>
            </SelectContent>
          </RadixSelect>
          <TreeSelect
            allowClear
            searchable
            showToolbar
            treeCheckable
            defaultValue={['n1']}
            treeData={[
              {
                key: 'root',
                value: 'root',
                title: '根节点',
                children: [{ key: 'n1', value: 'n1', title: '子节点' }],
              },
            ]}
          />
          <Tree
            checkable
            searchable
            showToolbar
            treeData={[
              {
                key: 'dept-1',
                title: '研发中心',
                children: [{ key: 'dept-1-1', title: '前端组' }],
              },
            ]}
          />
          <Cascader
            clearable
            searchable
            multiple
            defaultValue={[['zj', 'hz']]}
            options={[
              {
                value: 'zj',
                label: '浙江',
                children: [{ value: 'hz', label: '杭州' }],
              },
            ]}
          />
          <DatePicker defaultValue="2026-11-20" />
          <DateRangePicker defaultValue={{ start: '2026-11-01', end: '2026-11-20' }} />
          <IconPicker value="Users" onChange={vi.fn()} />
        </div>
      </AbcProvider>
    )

    assertNoActiveScale(container, '下拉、树、级联、日期与图标选择器触发态')

    // 逐一展开 Portal 浮层并校验浮层内全部按钮（搜索、全展开、复选框、翻月、日期格、图标网格）也无 active scale
    fireEvent.click(container.querySelector('[data-slot="select-trigger"]') as HTMLElement)
    fireEvent.click(container.querySelector('[data-slot="tree-select-trigger"]') as HTMLElement)
    fireEvent.click(container.querySelector('[data-slot="radix-select-trigger"]') as HTMLElement)
    fireEvent.click(container.querySelector('[data-slot="cascader"] button[role="combobox"]') as HTMLElement)
    fireEvent.click(container.querySelector('[data-datepicker-trigger]') as HTMLElement)
    fireEvent.click(container.querySelector('[data-daterangepicker-trigger]') as HTMLElement)
    fireEvent.click(container.querySelector('[data-slot="icon-picker-trigger"]') as HTMLElement)

    assertNoActiveScale(document.body, '展开态全部输入选择器与 Portal 浮层')
  })

  it('4. KeyValueInput / Transfer / FileUpload / ImageUpload / SliderVerify / ProFormList / FilterBuilder / ProIconFieldControl 内嵌按钮均无 active scale 类', () => {
    const { container } = render(
      <AbcProvider persist={false}>
        <div className="space-y-4">
          <KeyValueInput
            allowSecretMask
            defaultValue={[{ id: 'row-1', key: 'API_KEY', value: 'sk-123', enabled: true, secret: true }]}
          />
          <Transfer
            dataSource={[
              { key: 'a', title: '权限 A' },
              { key: 'b', title: '权限 B' },
            ]}
            defaultTargetKeys={['b']}
          />
          <FileUpload
            defaultValue={[{ uid: 'f1', name: 'spec.pdf', size: 2048, status: 'done' }]}
          />
          <ImageUpload value="https://example.com/logo.png" onChange={vi.fn()} />
          <SliderVerify onSuccess={vi.fn()} />
          <ProFormList
            sortable
            copyable
            defaultValue={[{ name: 'route-1' }, { name: 'route-2' }]}
            initialItem={{ name: '' }}
          >
            {(item, _idx, helpers) => (
              <Input value={item.name} onChange={(e) => helpers.update({ name: e.target.value })} />
            )}
          </ProFormList>
          <FilterBuilder
            fields={[
              { name: 'env', label: '环境', type: 'enum', options: [{ label: 'prod', value: 'prod' }] },
              { name: 'latency', label: '延迟', type: 'number' },
            ]}
            defaultValue={{
              id: 'g1',
              type: 'group',
              combinator: 'AND',
              children: [
                { id: 'c1', type: 'condition', field: 'latency', operator: 'gt', value: 100 },
                {
                  id: 'g2',
                  type: 'group',
                  combinator: 'OR',
                  children: [{ id: 'c2', type: 'condition', field: 'env', operator: 'eq', value: 'prod' }],
                },
              ],
            }}
          />
          <ProIconFieldControl
            value="Users"
            presetIcons={['Users', 'Settings']}
            onChange={vi.fn()}
          />
          <SavedFilterViews
            defaultViews={[{ id: 'v1', name: '全部', filter: { status: '' }, builtIn: true }]}
            currentFilter={{ status: 'active' }}
          />
        </div>
      </AbcProvider>
    )

    // 展开 SavedFilterViews 内联输入框保存组，验证其紧邻输入框的微小按钮无 active scale
    fireEvent.click(screen.getByRole('button', { name: '另存为视图' }))
    const inlineSaveGroup = screen.getByRole('group', { name: '另存为新视图' })
    assertNoActiveScale(inlineSaveGroup, 'SavedFilterViews 内联视图名称输入组')

    // 验证除 SavedFilterViews 外置工具按钮外，全部复合输入与动态表单组件均无 active scale
    const formScope = container.cloneNode(true) as HTMLElement
    formScope.querySelector('[data-slot="saved-filter-views"]')?.remove()
    assertNoActiveScale(formScope, '复合输入与动态表单组件（结构化模式）')

    // 切换 KeyValueInput 至批量文本编辑模式，验证批量模式的取消/应用按钮也无 active scale
    fireEvent.click(screen.getByRole('button', { name: '批量文本' }))
    const kvRoot = container.querySelector('[data-slot="key-value-input"]') as HTMLElement
    assertNoActiveScale(kvRoot, 'KeyValueInput 批量文本模式')
  })

  it('5. Button 与 buttonVariants 默认禁用按压缩放，仅显式传入 pressScale={true} 时启用 abc-motion-control', () => {
    render(
      <>
        <Button data-testid="btn-default">默认按钮</Button>
        <Button data-testid="btn-scale" pressScale>
          按压缩放按钮
        </Button>
        <Button data-testid="btn-flat" pressScale={false} size="xs" iconOnly aria-label="微小图标按钮">
          ×
        </Button>
      </>
    )

    expect(screen.getByTestId('btn-default').className).not.toContain('abc-motion-control')
    expect(screen.getByTestId('btn-scale').className).toContain('abc-motion-control')
    expect(screen.getByTestId('btn-flat').className).not.toContain('abc-motion-control')
    expect(screen.getByTestId('btn-flat').className).not.toContain('active:scale')

    expect(buttonVariants()).not.toContain('abc-motion-control')
    expect(buttonVariants({ pressScale: true })).toContain('abc-motion-control')
    expect(buttonVariants({ pressScale: false })).not.toContain('abc-motion-control')
    expect(buttonVariants({ pressScale: false })).not.toContain('active:scale')
  })

  it('6. 源码与 CSS 防御守卫校验：components/form 目录零残留 abc-motion-control / active:scale，animations.css 锁定输入容器 --abc-press-scale: 1', () => {
    const formDir = path.resolve(__dirname, '../components/form')
    const walkTsx = (dir: string): string[] => {
      const out: string[] = []
      for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, ent.name)
        if (ent.isDirectory()) out.push(...walkTsx(full))
        else if (ent.name.endsWith('.ts') || ent.name.endsWith('.tsx')) out.push(full)
      }
      return out
    }

    const formFiles = walkTsx(formDir)
    expect(formFiles.length).toBeGreaterThan(0)
    for (const file of formFiles) {
      const content = fs.readFileSync(file, 'utf-8')
      expect(content, `${path.relative(formDir, file)} 不应包含 abc-motion-control`).not.toContain(
        'abc-motion-control'
      )
      expect(content, `${path.relative(formDir, file)} 不应包含 active:scale`).not.toContain(
        'active:scale'
      )
    }

    const animationsCssPath = path.resolve(__dirname, '../../../tokens/src/styles/animations.css')
    const animationsCss = fs.readFileSync(animationsCssPath, 'utf-8')
    expect(animationsCss).toContain('[data-slot="input-wrapper"]')
    expect(animationsCss).toContain('[data-slot="input-number"]')
    expect(animationsCss).toContain('[data-slot="icon-picker-trigger"]')
    expect(animationsCss).toContain('--abc-press-scale: 1;')
  })
})
