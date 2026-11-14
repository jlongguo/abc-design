/** 通用树节点数据结构 */
export interface AbcTreeNode {
    key: string | number;
    title: string;
    disabled?: boolean;
    icon?: string;
    badge?: string | number;
    children?: AbcTreeNode[];
    [extra: string]: unknown;
}
export interface AbcTreeCheckResult {
    checkedKeys: Array<string | number>;
    halfCheckedKeys: Array<string | number>;
}
/**
 * 计算树形结构在级联模式下的精确选中集与半选（indeterminate）祖先集
 */
export declare function computeTreeCheckState(nodes: AbcTreeNode[], rawCheckedKeys: ReadonlyArray<string | number>, checkStrictly?: boolean): AbcTreeCheckResult;
/**
 * 切换指定树节点的勾选状态，并在非严格模式下自动级联更新子孙与祖先节点状态
 */
export declare function toggleTreeNodeChecked(nodes: AbcTreeNode[], currentCheckedKeys: ReadonlyArray<string | number>, targetNode: AbcTreeNode, nextChecked: boolean, checkStrictly?: boolean): AbcTreeCheckResult;
/**
 * 按关键字（含拼音首字母）过滤树形结构，并自动保留命中节点的祖先路径及需要自动展开的 key 列表
 */
export declare function filterTreeNodes(nodes: AbcTreeNode[], keyword: string): {
    filteredNodes: AbcTreeNode[];
    autoExpandedKeys: Array<string | number>;
};
/** 提取整棵树的全部可展开父节点 key（用于“展开全部”） */
export declare function collectAllExpandableKeys(nodes: AbcTreeNode[]): Array<string | number>;
//# sourceMappingURL=tree.d.ts.map