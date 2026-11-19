import { AbcMotionPreset } from '@abc-design/tokens';
import { ControlSize } from '@abc-design/react';
import { default as default_2 } from 'react';
import { Edge } from '@xyflow/react';
import { EdgeProps } from '@xyflow/react';
import { Node as Node_2 } from '@xyflow/react';
import { ReactFlowProps } from '@xyflow/react';

/** 从模板字符串中提取所有 {{variable}} 占位符列表 */
export declare function extractTemplateVariables(text: string): TemplateVariableToken[];

/**
 * 极简圆角白底悬浮图标细条 + 按需滑出 Flyout 浮层 (FloatingIconRail)
 * 适用于可视化画布、流程编排器与设计工具左侧类目入口，点击激活类目平滑滑出内容浮层，再次点击收起。
 */
export declare const FloatingIconRail: default_2.ForwardRefExoticComponent<FloatingIconRailProps & default_2.RefAttributes<HTMLDivElement>>;

export declare interface FloatingIconRailItem {
    /** 类目唯一标识 */
    key: string;
    /** 图标下方短标签（建议 1~2 词或 2~4 汉字） */
    label: default_2.ReactNode;
    /** 类目图标节点 */
    icon: default_2.ReactNode;
    /** 可选原生 title / 读屏完整说明 */
    title?: string;
    /** 可选右上角轻量角标（如数字或小红点） */
    badge?: default_2.ReactNode;
    /** 是否禁用该类目 */
    disabled?: boolean;
    /** 该类目展开时的默认 Flyout 内容插槽（优先级低于 renderFlyout） */
    content?: default_2.ReactNode;
}

export declare interface FloatingIconRailProps extends Omit<default_2.HTMLAttributes<HTMLDivElement>, 'children'> {
    /** 左侧垂直类目图标项列表 */
    items: ReadonlyArray<FloatingIconRailItem>;
    /** 受控当前展开的类目 key（null 表示收起 Flyout） */
    activeKey?: string | null;
    /** 非受控初始展开的类目 key（默认 null 收起） */
    defaultActiveKey?: string | null;
    /** 展开/切换/收起类目回调 */
    onActiveKeyChange?: (key: string | null) => void;
    /** 自定义 Flyout 浮层内容渲染器（优先于 item.content 与 flyoutContent） */
    renderFlyout?: (activeItem: FloatingIconRailItem, helpers: {
        close: () => void;
    }) => default_2.ReactNode;
    /** 通用 Flyout 浮层内容回退插槽 */
    flyoutContent?: default_2.ReactNode;
    /** 自定义 Flyout 头部（传 null 可隐藏内置头部） */
    flyoutHeader?: default_2.ReactNode | ((activeItem: FloatingIconRailItem, helpers: {
        close: () => void;
    }) => default_2.ReactNode);
    /** 是否显示内置 Flyout 标题栏与关闭按钮（默认 true） */
    showFlyoutHeader?: boolean;
    /** Flyout 面板宽度（数字按 px 处理，默认 264） */
    flyoutWidth?: number | string;
    /** 悬浮条停靠侧：left 表示条在左、Flyout 向右滑出；right 反之（默认 'left'） */
    side?: FloatingIconRailSide;
    /** 图标栏紧凑尺寸档位（默认 'md'） */
    size?: FloatingIconRailSize;
    /** 图标栏底部附加插槽（如设置/快捷帮助按钮） */
    footer?: default_2.ReactNode;
    /** 点击悬浮条与 Flyout 外部区域时是否自动收起 Flyout（默认 true） */
    closeOnOutsideClick?: boolean;
    /** 按下 Escape 键时是否自动收起 Flyout（默认 true） */
    closeOnEscape?: boolean;
    /** 关闭按钮无障碍文案 */
    closeLabel?: string;
    /** 微交互动效预设 */
    motion?: AbcMotionPreset;
    /** 图标细条容器附加类名 */
    railClassName?: string;
    /** 滑出 Flyout 浮层附加类名 */
    flyoutClassName?: string;
}

export declare type FloatingIconRailSide = 'left' | 'right';

export declare type FloatingIconRailSize = 'sm' | 'md';

/** 节点出口状态圆点与文字语义样式 */
export declare const FLOW_PORT_TONE_STYLES: Record<FlowPortTone, {
    dot: string;
    text: string;
}>;

/**
 * 5 套柔和低饱和语义色板（柔和蓝/浅薄荷绿/暖杏琥珀/浅粉玫瑰/清灰石板）
 * 全部通过 --abc-flow-* CSS 变量在亮暗双主题及局部覆盖子树下自动切换，免疫宿主 Tailwind 层叠冲突。
 */
export declare const FLOW_TONE_STYLES: Record<FlowTone, FlowToneStyleTokens>;

/**
 * ABC Design 主题化 ReactFlow 画布容器 (FlowCanvasSurface)
 * 统一封装浅色/暗色点阵背景、四角 Panel 布局槽、按需 MiniMap、隐藏默认水印与加载遮罩，
 * 屏蔽重复的 ReactFlow 样板配置，保持 100% 业务无关。
 */
export declare function FlowCanvasSurface<NodeType extends Node_2 = Node_2, EdgeType extends Edge = Edge>({ withProvider, containerClassName, testId, containerRef, onDragOver, onDrop, showDotsBackground, backgroundGap, backgroundDotSize, backgroundColor, leftRailSlot, topCenterSlot, topRightSlot, bottomLeftSlot, bottomRightSlot, showMiniMap, miniMapClassName, loading, loadingText, children, overlaySlot, className, proOptions, ...reactFlowProps }: FlowCanvasSurfaceProps<NodeType, EdgeType>): default_2.JSX.Element;

export declare interface FlowCanvasSurfaceProps<NodeType extends Node_2 = Node_2, EdgeType extends Edge = Edge> extends Omit<ReactFlowProps<NodeType, EdgeType>, 'children'> {
    /** 是否内置包裹 ReactFlowProvider（外部已包 Provider 且调用 useReactFlow 时保持 false） */
    withProvider?: boolean;
    /** 外层舞台容器类名 */
    containerClassName?: string;
    /** 外层舞台容器 data-testid */
    testId?: string;
    /** 外层舞台容器 ref（用于拖拽坐标换算或尺寸测量） */
    containerRef?: default_2.Ref<HTMLDivElement>;
    /** 外层舞台拖拽悬停事件 */
    onDragOver?: default_2.DragEventHandler<HTMLDivElement>;
    /** 外层舞台拖放事件 */
    onDrop?: default_2.DragEventHandler<HTMLDivElement>;
    /** 背景点阵样式开关（默认 true） */
    showDotsBackground?: boolean;
    /** 点阵间距（默认 18） */
    backgroundGap?: number;
    /** 点阵圆点半径（默认 1.25） */
    backgroundDotSize?: number;
    /** 点阵颜色（默认柔和浅灰，支持传入 CSS 变量） */
    backgroundColor?: string;
    /** 左上角悬浮插槽（如 FloatingIconRail） */
    leftRailSlot?: default_2.ReactNode;
    /** 顶部居中悬浮插槽（如环境摘要胶囊） */
    topCenterSlot?: default_2.ReactNode;
    /** 右上角悬浮插槽 */
    topRightSlot?: default_2.ReactNode;
    /** 左下角悬浮插槽（如 FlowViewportControls） */
    bottomLeftSlot?: default_2.ReactNode;
    /** 右下角悬浮插槽 */
    bottomRightSlot?: default_2.ReactNode;
    /** 是否展示缩略图（默认关闭保持画布清爽） */
    showMiniMap?: boolean;
    /** MiniMap 附加类名 */
    miniMapClassName?: string;
    /** 画布加载态遮罩 */
    loading?: boolean;
    /** 加载态提示文案 */
    loadingText?: string;
    /** 画布内自定义子元素（额外 Panel / SVG defs 等） */
    children?: default_2.ReactNode;
    /** 舞台外层浮层插槽（如画中画小窗） */
    overlaySlot?: default_2.ReactNode;
}

export declare type FlowEdgeRouteStyle = 'bezier' | 'smoothstep';

export declare type FlowEdgeTone = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'muted';

/**
 * 通用语义标签连线 (FlowLabeledEdge)
 * - 正向连接采用流畅贝塞尔曲线，反向回环（目标位于源左侧）自动切换圆角正交路径防穿透节点卡片；
 * - 支持 6 套语义色阶、流动动画、中点语义徽章与可扩展的 [+] 菜单插槽。
 */
export declare const FlowLabeledEdge: default_2.FC<FlowLabeledEdgeProps>;

export declare interface FlowLabeledEdgeData extends Record<string, unknown> {
    /** 连线语义色阶 */
    tone?: FlowEdgeTone;
    /** 路径曲线风格（反向/回环时自动切换圆角正交避障路径） */
    routeStyle?: FlowEdgeRouteStyle;
    /** 连线中点短标签（如 Found / Else / Next） */
    label?: string;
    /** 是否虚线绘制 */
    dashed?: boolean;
    /** 是否启用流动虚线动画 */
    animated?: boolean;
    /** 是否弱化半透明显示 */
    dimmed?: boolean;
    /** 连线线宽（未设时按 tone 自动选择） */
    strokeWidth?: number;
    /** 自定义 <g data-testid> */
    testId?: string;
    /** 是否在中点展示快捷 [+] 操作触发按钮 */
    showActionTrigger?: boolean;
    /** 中点 [+] 按钮无障碍标签 */
    actionAriaLabel?: string;
    /** 直接点击中点按钮的回调（未提供 renderActionMenu 时触发） */
    onActionClick?: (edgeId: string) => void;
    /** 中点按钮点击后弹出的自定义浮层菜单渲染函数 */
    renderActionMenu?: (helpers: {
        close: () => void;
    }) => default_2.ReactNode;
}

export declare interface FlowLabeledEdgeProps extends EdgeProps<FlowLabeledEdgeType> {
    /** 选中态高亮线条颜色（默认 #4f46e5） */
    selectedStroke?: string;
    /** 覆盖中点菜单渲染（优先于 data.renderActionMenu） */
    renderActionMenu?: (helpers: {
        close: () => void;
    }) => default_2.ReactNode;
}

export declare type FlowLabeledEdgeType = Edge<FlowLabeledEdgeData, 'flow-labeled'>;

/**
 * Flow 画布通用柔和浅色语义节点卡片 (FlowNodeCard)
 * - 视觉结构：柔和浅色圆角外框 + 紧凑语义卡头 + 纯白内嵌正文面 + 行内右对齐状态出口行；
 * - 零业务耦合且外层保持 overflow-visible，允许外部直接挂接 ReactFlow <Handle /> 与 <FlowNodeToolbar />；
 * - 原生支持 5 套浅色语义 tone 与 selected / running / error 状态边框。
 */
export declare const FlowNodeCard: default_2.ForwardRefExoticComponent<FlowNodeCardProps & default_2.RefAttributes<HTMLDivElement>>;

export declare interface FlowNodeCardProps extends Omit<default_2.HTMLAttributes<HTMLDivElement>, 'title'> {
    /** 卡片顶部主标题 */
    title: default_2.ReactNode;
    /** 可选标题旁副标题或短说明 */
    subtitle?: default_2.ReactNode;
    /** 卡头左侧主图标 */
    icon?: default_2.ReactNode;
    /** 卡头标题旁轻量徽标 */
    badge?: default_2.ReactNode;
    /** 卡头右侧副图标/紧凑微操作区 */
    headerExtra?: default_2.ReactNode;
    /** 柔和浅色语义卡头色调（默认 'blue'） */
    tone?: FlowNodeTone;
    /** 白色正文区顶部副图标（例如类型标识） */
    subIcon?: default_2.ReactNode;
    /** 白色正文区顶部副标题 */
    subTitle?: default_2.ReactNode;
    /** 白色正文区顶部右侧扩展插槽（如拖拽把手 || 图标） */
    subExtra?: default_2.ReactNode;
    /** 声明式紧凑元数据行列表（默认最多渲染 maxMetaRows=3 行） */
    metaRows?: ReadonlyArray<FlowNodeMetaRow>;
    /** 最大展示元数据行数（默认 3，符合画布卡片 ≤3 行密度规范） */
    maxMetaRows?: number;
    /** 行内状态/分支出口行列表（如绿点 Success / 红点 Else） */
    outputs?: ReadonlyArray<FlowNodeOutputPort>;
    /** 统一为每个出口行生成外部连接点（如 ReactFlow <Handle />），优先级低于单项 port.handle */
    renderOutputHandle?: (port: FlowNodeOutputPort) => default_2.ReactNode;
    /** 外部入参连接点插槽（如 ReactFlow <Handle type="target" position={Position.Left} />） */
    inputHandle?: default_2.ReactNode;
    /** 卡片顶部悬浮微操作条插槽（推荐传入 <FlowNodeToolbar />） */
    toolbar?: default_2.ReactNode;
    /** 白色正文区底部扩展插槽 */
    footer?: default_2.ReactNode;
    /** 卡片是否处于选中态 */
    selected?: boolean;
    /** 卡片是否处于运行中态（等价 status="running"） */
    running?: boolean;
    /** 卡片是否处于异常错误态（等价 status="error"，优先级高于 running） */
    error?: boolean;
    /** 统一状态枚举（与 running/error 布尔属性兼容） */
    status?: FlowNodeStatus;
    /** 卡片宽度（数字按 px 处理，默认 256） */
    width?: number | string;
    /** 微交互动效预设 */
    motion?: AbcMotionPreset;
    /** 卡头附加类名 */
    headerClassName?: string;
    /** 白色正文容器附加类名 */
    bodyClassName?: string;
}

/** 节点正文紧凑元数据行（默认最多展示 3 行，保持画布卡片轻盈可读） */
export declare interface FlowNodeMetaRow {
    /** 行唯一键（未传时回退数组下标） */
    key?: string;
    /** 行首小图标 */
    icon?: default_2.ReactNode;
    /** 可选字段短标签（如 Model / URL） */
    label?: default_2.ReactNode;
    /** 字段值内容（自动单行截断） */
    value: default_2.ReactNode;
    /** 是否使用等宽字体 */
    mono?: boolean;
    /** 悬停完整提示文本 */
    title?: string;
}

/** 节点行内状态/分支出口定义（支持外部挂载 ReactFlow <Handle />） */
export declare interface FlowNodeOutputPort {
    /** 出口唯一 ID（建议与 ReactFlow Handle id 保持一致） */
    id: string;
    /** 出口展示文案（如 Success / Else / Branch A） */
    label: default_2.ReactNode;
    /** 状态圆点与文案语义色（默认 'neutral'） */
    tone?: FlowPortTone;
    /** 文案前可选语义小图标 */
    icon?: default_2.ReactNode;
    /** 出口旁辅助微标签 */
    hint?: default_2.ReactNode;
    /**
     * 外部挂接的连接点元素（如 ReactFlow 的 <Handle type="source" position={Position.Right} id={port.id} />）。
     * 该节点会直接挂载在带 `relative` 且右边界贴齐卡片外缘的出口行内，确保连线坐标与该行垂直中心精准对齐且不被裁剪。
     */
    handle?: default_2.ReactNode;
    /**
     * 是否在右侧展示内置语义状态圆点：
     * 未传入 handle 时默认 true；传入自定义 handle 时默认 false（可显式设为 true 实现透明 Handle 叠盖圆点）。
     */
    showDot?: boolean;
    /** 是否置灰禁用该出口行 */
    disabled?: boolean;
    /** 出口行附加类名 */
    className?: string;
}

/** FlowNodeCard 运行状态枚举 */
export declare type FlowNodeStatus = 'idle' | 'running' | 'success' | 'error';

/** FlowNodeCard 柔和卡头色调类型 */
export declare type FlowNodeTone = FlowTone;

/**
 * Flow 节点顶部紧凑悬浮微操作条 (FlowNodeToolbar)
 * 圆角白底阴影容器 + 图标按钮组 + 视口感知 Tooltip，默认附加 `nodrag nopan` 防止画布拖拽冲突。
 */
export declare const FlowNodeToolbar: default_2.ForwardRefExoticComponent<FlowNodeToolbarProps & default_2.RefAttributes<HTMLDivElement>>;

export declare interface FlowNodeToolbarItem {
    /** 操作项唯一键 */
    key: string;
    /** 图标节点 */
    icon: default_2.ReactNode;
    /** 按钮无障碍名称与默认提示文案 */
    label: string;
    /** 自定义 Tooltip 浮层内容（默认回退 label） */
    tooltip?: default_2.ReactNode;
    /** 点击回调 */
    onClick?: (event: default_2.MouseEvent<HTMLButtonElement>) => void;
    /** 是否禁用 */
    disabled?: boolean;
    /** 是否处于激活/选中高亮态 */
    active?: boolean;
    /** 是否为危险操作（悬停红色语义高亮） */
    danger?: boolean;
    /** 在该按钮前插入轻量分隔竖线/横线 */
    dividerBefore?: boolean;
    /** 自定义按钮无障碍标签（默认取 label） */
    'aria-label'?: string;
    /** 单项按钮附加类名 */
    className?: string;
}

export declare interface FlowNodeToolbarProps extends default_2.HTMLAttributes<HTMLDivElement> {
    /** 图标微操作按钮集合 */
    items: ReadonlyArray<FlowNodeToolbarItem>;
    /** 排列方向（默认水平 'horizontal'） */
    orientation?: 'horizontal' | 'vertical';
    /** 按钮紧凑尺寸（默认 'sm'） */
    size?: FlowNodeToolbarSize;
    /** 控制工具条是否显示（为 false 时不渲染，便于绑定节点 selected / hovered 态） */
    visible?: boolean;
    /** Tooltip 弹出方向（默认 'top'） */
    tooltipPlacement?: 'top' | 'bottom' | 'left' | 'right';
    /** 是否关闭内置 Tooltip 提示 */
    disableTooltips?: boolean;
    /** 点击按钮时是否阻止事件冒泡到画布节点（默认 true，防止误触发节点拖拽或取消选中） */
    stopPropagation?: boolean;
    /** 微交互动效预设 */
    motion?: AbcMotionPreset;
    /** 尾部可选自定义扩展节点（如嵌套 Dropdown 更多菜单） */
    children?: default_2.ReactNode;
}

export declare type FlowNodeToolbarSize = 'xs' | 'sm';

/** Flow 节点行内出口状态色调 */
export declare type FlowPortTone = 'success' | 'danger' | 'warning' | 'info' | 'neutral';

/**
 * Flow 画布圆角虚线视觉分组注释框 (FlowSectionFrame)
 * 支持空注释说明块（居中排版，如画布左下角分组标注）与包裹子节点的分区容器（左上角标题栏 + 内容区）双形态。
 */
export declare const FlowSectionFrame: default_2.ForwardRefExoticComponent<FlowSectionFrameProps & default_2.RefAttributes<HTMLDivElement>>;

export declare type FlowSectionFrameAlign = 'center' | 'top-left';

export declare interface FlowSectionFrameProps extends Omit<default_2.HTMLAttributes<HTMLDivElement>, 'title'> {
    /** 分组框标题（支持文本或自定义节点） */
    title?: default_2.ReactNode;
    /** 可选辅助说明文案 */
    description?: default_2.ReactNode;
    /** 标题前置图标 */
    icon?: default_2.ReactNode;
    /** 标题旁徽标 */
    badge?: default_2.ReactNode;
    /** 右上角附加操作区（仅在顶部对齐或存在 children 时展示在右上角） */
    headerExtra?: default_2.ReactNode;
    /** 柔和语义色调（默认 'slate'） */
    tone?: FlowTone;
    /** 标题排版对齐方式：无 children 默认 'center'（注释卡片风），有 children 默认 'top-left'（分组包裹框） */
    align?: FlowSectionFrameAlign;
    /** 是否使用虚线边框（默认 true） */
    dashed?: boolean;
    /** 画布选中态高亮边框 */
    selected?: boolean;
    /** 自定义宽度（数字按 px 处理） */
    width?: number | string;
    /** 自定义高度（数字按 px 处理） */
    height?: number | string;
    /** 最小宽度 */
    minWidth?: number | string;
    /** 最小高度 */
    minHeight?: number | string;
    /** 标题区附加类名 */
    headerClassName?: string;
    /** 内容区附加类名 */
    bodyClassName?: string;
}

/**
 * Flow 画布通用原语视觉令牌与纯函数辅助工具
 * 严格零业务耦合，统一消费 @abc-design/tokens CSS 变量并兼顾亮暗双主题可读性。
 */
/** Flow 画布通用语义色调 */
export declare type FlowTone = 'blue' | 'green' | 'amber' | 'rose' | 'slate';

export declare interface FlowToneStyleTokens {
    /** 卡片柔和浅色外框（壳层背景 + 边框） */
    cardShell: string;
    /** 卡头文本与图标强调色 */
    headerText: string;
    /** 卡头副操作图标柔和底色 */
    headerBadgeBg: string;
    /** 选中态光环颜色 */
    selectedRing: string;
    /** 虚线分组框边框与浅色填充 */
    sectionFrame: string;
    /** 虚线分组框标题文本色 */
    sectionTitle: string;
}

export declare interface FlowViewportControlAction {
    /** 唯一标识 */
    key: string;
    /** 按钮图标 */
    icon: default_2.ReactNode;
    /** 无障碍标签与悬停标题 */
    label: string;
    /** 详细提示文案（未设时回退 label） */
    title?: string;
    /** 点击回调 */
    onClick: () => void;
    /** 是否禁用 */
    disabled?: boolean;
    /** 是否处于激活高亮态 */
    active?: boolean;
    /** 自定义测试属性 */
    testId?: string;
}

/**
 * 画布左下角极简悬浮视口控制胶囊 (FlowViewportControls)
 * 仅保留高频视口操控（缩放、居中、整理、按需 MiniMap、可选扩展图标与主行动按钮），零业务耦合。
 */
export declare const FlowViewportControls: default_2.FC<FlowViewportControlsProps>;

export declare interface FlowViewportControlsLabels {
    zoomOut?: string;
    zoomOutTitle?: string;
    zoomReset?: string;
    zoomResetTitle?: string;
    zoomIn?: string;
    zoomInTitle?: string;
    fitView?: string;
    fitViewTitle?: string;
    autoLayout?: string;
    autoLayoutTitle?: string;
    toggleMiniMap?: string;
    showMiniMapTitle?: string;
    hideMiniMapTitle?: string;
}

export declare interface FlowViewportControlsPrimaryAction {
    /** 主按钮文案 */
    label: string;
    /** 无障碍标签（未设时回退 label） */
    ariaLabel?: string;
    /** 前置图标（默认 Plus） */
    icon?: default_2.ReactNode;
    /** 点击回调 */
    onClick: () => void;
    /** 是否禁用 */
    disabled?: boolean;
    /** 自定义测试属性 */
    testId?: string;
}

export declare interface FlowViewportControlsProps {
    /** 当前缩放百分比（例如 100） */
    zoomPercent: number;
    /** 缩小回调 */
    onZoomOut: () => void;
    /** 重置 100% 缩放回调 */
    onZoomReset: () => void;
    /** 放大回调 */
    onZoomIn: () => void;
    /** 自适应居中视口回调 */
    onFitView?: () => void;
    /** 一键整理排版回调 */
    onAutoLayout?: () => void;
    /** 缩略图是否显示 */
    showMiniMap?: boolean;
    /** 切换缩略图回调（提供时才渲染 MiniMap 开关） */
    onToggleMiniMap?: () => void;
    /** 附加扩展图标操作（如便签、批量延迟等由业务注入） */
    extraActions?: ReadonlyArray<FlowViewportControlAction>;
    /** 右侧主行动按钮（如“添加步骤”） */
    primaryAction?: FlowViewportControlsPrimaryAction;
    /** 国际化文案覆盖 */
    labels?: FlowViewportControlsLabels;
    /** 控件整体自定义类名 */
    className?: string;
    /** 自定义 data-testid（默认 abc-flow-viewport-controls） */
    testId?: string;
}

/** 在指定选区（start..end）处插入变量表达式并返回新文本与新光标位置 */
export declare function insertTemplateVariableAt(text: string, expression: string, selectionStart: number | null | undefined, selectionEnd: number | null | undefined, replaceAll?: boolean): {
    nextValue: string;
    nextCaret: number;
};

/** 从模板字符串中按偏移精确移除指定 {{variable}} 片段，并清理多余相邻空白 */
export declare function removeTemplateVariableToken(text: string, token: Pick<TemplateVariableToken, 'start' | 'end'>): string;

/**
 * 通用模板变量输入器 (TemplateVariableInput)
 * - 支持单行输入与多行文本域双形态，零业务耦合；
 * - 自动识别 `{{variable}}` 并展示深色胶囊芯片（带移除按钮与变量预览标签）；
 * - 右下角提供 `{}` 快捷变量选择器浮层（Portal 定位防裁切，支持分组与搜索过滤，按光标位置精确插值）。
 */
export declare const TemplateVariableInput: default_2.ForwardRefExoticComponent<TemplateVariableInputProps & default_2.RefAttributes<HTMLInputElement | HTMLTextAreaElement>>;

export declare interface TemplateVariableInputProps {
    /** 受控模板文本值（可包含任意数量 {{variable}}） */
    value?: string;
    /** 非受控初始值 */
    defaultValue?: string;
    /** 值变更回调 */
    onChange?: (value: string) => void;
    /** 是否启用多行文本域模式（默认 false 为单行输入） */
    multiline?: boolean;
    /** 多行模式默认行数（默认 3） */
    rows?: number;
    /** 右下角 {} 变量选择器提供的可选变量字典 */
    variables?: ReadonlyArray<TemplateVariableOption>;
    /**
     * 深色 {{variable}} 胶囊芯片展示模式：
     * - 'auto'（默认）：检测到 {{variable}} 时自动展示深色胶囊芯片区
     * - 'always'：始终保留芯片区（便于稳定布局或提示变量绑定）
     * - 'none'：仅使用文本输入与 {} 选择器，不渲染芯片条
     */
    chipDisplay?: 'auto' | 'always' | 'none';
    /** 胶囊芯片是否提供 × 移除按钮（默认 true） */
    removableChips?: boolean;
    /** 匹配到变量字典时是否在芯片或提示中展示预览标签（默认 true） */
    showPreviewLabel?: boolean;
    /** 选择变量时是否替换整个字段值（用于单变量输出绑定框，默认 false 在光标处插入） */
    replaceOnSelect?: boolean;
    /** 自定义变量插入格式（默认 `(v) => \`{{${v.key}}}\``） */
    insertFormat?: (variable: TemplateVariableOption) => string;
    /** 是否显示右下角 {} 变量选择器触发按钮（默认 true） */
    showPickerButton?: boolean;
    /** 变量浮层内是否启用关键字搜索（默认 true） */
    searchable?: boolean;
    /** 受控浮层展开状态 */
    pickerOpen?: boolean;
    /** 非受控浮层默认展开状态 */
    defaultPickerOpen?: boolean;
    /** 浮层开关状态变更回调 */
    onPickerOpenChange?: (open: boolean) => void;
    /** 选择器浮层标题 */
    pickerTitle?: default_2.ReactNode;
    /** 选择器浮层搜索框占位文案 */
    pickerPlaceholder?: string;
    /** {} 按钮无障碍标签与提示文案 */
    pickerTriggerLabel?: string;
    /** 无可用变量或无搜索匹配时的空态文案 */
    emptyVariablesText?: default_2.ReactNode;
    /** 选中并插入变量后的回调 */
    onSelectVariable?: (variable: TemplateVariableOption, nextValue: string) => void;
    /** 点击芯片移除某个变量后的回调 */
    onRemoveVariable?: (token: TemplateVariableToken, nextValue: string) => void;
    /** 标准表单字段属性 */
    id?: string;
    name?: string;
    label?: default_2.ReactNode;
    error?: default_2.ReactNode;
    helperText?: default_2.ReactNode;
    invalid?: boolean;
    required?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    placeholder?: string;
    size?: ControlSize;
    mono?: boolean;
    allowClear?: boolean;
    clearLabel?: string;
    motion?: AbcMotionPreset;
    onFocus?: default_2.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onBlur?: default_2.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
    className?: string;
    wrapperClassName?: string;
    inputClassName?: string;
    popoverClassName?: string;
}

export declare interface TemplateVariableOption {
    /** 变量键名（插入时默认包裹为 {{key}}） */
    key: string;
    /** 可读展示名称 */
    label?: string;
    /** 变量分组名称（例如 Trigger / Step Output / Context） */
    group?: string;
    /** 变量数据类型标签（例如 string / json / secret） */
    type?: string;
    /** 变量用途说明 */
    description?: string;
    /** 可选示例值或实时预览标签 */
    sampleValue?: string;
    /** 是否禁用该变量选项 */
    disabled?: boolean;
}

/** 解析出的 {{variable}} 模板变量位置与内容 */
export declare interface TemplateVariableToken {
    /** 完整匹配片段（如 "{{lastUserText}}"） */
    raw: string;
    /** 去除花括号与首尾空白后的变量键（如 "lastUserText"） */
    key: string;
    /** 在原字符串中的起始偏移 */
    start: number;
    /** 在原字符串中的结束偏移（开区间） */
    end: number;
    /** 出现序号（便于同一变量多次出现时精确区分 key 与定向移除） */
    occurrenceIndex: number;
}

export { }
