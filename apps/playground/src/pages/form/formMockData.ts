import type { AbcTreeNode, CascaderOption } from '@abc-design/react'

export const ORG_TREE: AbcTreeNode[] = [
  {
    key: 'sys',
    title: '系统与权限中心',
    children: [
      { key: 'sys:user', title: '管理员账号管理' },
      { key: 'sys:role', title: '角色与菜单授权' },
      { key: 'sys:dict', title: '全局数据字典' },
    ],
  },
  {
    key: 'order',
    title: '交易与结算管理',
    children: [
      { key: 'order:list', title: '订单履约中心' },
      { key: 'order:withdraw', title: '提现风控审批' },
      { key: 'order:audit', title: '高危审计锁定（禁用）', disabled: true },
    ],
  },
]

export const FLAT_SIMPLE_ORG = [
  { deptId: 'hq', parentId: null, deptName: '集团总部', deptCode: 'HQ' },
  { deptId: 'cloud', parentId: 'hq', deptName: '云原生基础架构部', deptCode: 'CLOUD' },
  { deptId: 'edge', parentId: 'cloud', deptName: '边缘沙箱网关组', deptCode: 'EDGE' },
  { deptId: 'sec', parentId: 'hq', deptName: '安全与合规委员会', deptCode: 'SEC' },
]

export const INITIAL_LAZY_TREE: AbcTreeNode[] = [
  { key: 'cn', title: '中国大区（点击箭头异步加载）', isLeaf: false },
  { key: 'sg', title: '新加坡可用区（点击箭头异步加载）', isLeaf: false },
  { key: 'global', title: '全局兜底节点（静态叶子）', isLeaf: true },
]

export const LARGE_VIRTUAL_TREE: AbcTreeNode[] = Array.from({ length: 3000 }, (_, i) => ({
  key: `vnode-${i + 1}`,
  title: `高规模节点 #${String(i + 1).padStart(4, '0')} (${i % 3 === 0 ? '华东集群' : i % 3 === 1 ? '华北集群' : '新加坡节点'})`,
}))

export const REGION_OPTIONS: CascaderOption[] = [
  {
    value: 'cn-east',
    label: '华东集群区',
    children: [
      {
        value: 'shanghai',
        label: '上海核心区',
        children: [
          { value: 'sh-1', label: '上海浦东可用区 A' },
          { value: 'sh-2', label: '上海张江可用区 B' },
        ],
      },
      {
        value: 'hangzhou',
        label: '杭州华东节点',
        children: [
          { value: 'hz-1', label: '杭州西湖节点' },
          { value: 'hz-2', label: '杭州余杭节点（维护中）', disabled: true },
        ],
      },
    ],
  },
  {
    value: 'ap-sg',
    label: '亚太新加坡区',
    children: [{ value: 'sg-main', label: '新加坡主城区', children: [{ value: 'sg-a', label: 'SG-Zone-A' }] }],
  },
]
