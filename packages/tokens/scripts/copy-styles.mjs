import { cpSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

// 将源码中的纯 CSS Token 与动画预设文件复制到 dist 目录供下游直接引用
const currentDir = dirname(fileURLToPath(import.meta.url))
const srcStyles = resolve(currentDir, '../src/styles')
const distStyles = resolve(currentDir, '../dist/styles')

mkdirSync(distStyles, { recursive: true })
cpSync(srcStyles, distStyles, { recursive: true })
