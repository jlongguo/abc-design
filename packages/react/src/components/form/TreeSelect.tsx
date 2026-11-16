// TreeSelect.tsx: 模块化 Barrel 入口（保持外部导入路径 100% 兼容）
export type {
  TreeSelectValue,
  TreeSelectChangeExtra,
  TreeSelectProps,
} from './tree-select/types'
export { TreeSelect, default } from './tree-select/TreeSelect'
export * from './tree-select/TreeSelectField'
