import { AbcBrandColor } from '@abc-design/tokens';
import { AbcDensity } from '@abc-design/tokens';
import { AbcFontScale } from '@abc-design/tokens';
import { AbcMotionPreset } from '@abc-design/tokens';
import { AbcPageTransition } from '@abc-design/tokens';
import { AbcRadius } from '@abc-design/tokens';
import { AbcResolvedTheme } from '@abc-design/tokens';
import { AbcSize } from '@abc-design/tokens';
import { AbcThemeConfig } from '@abc-design/tokens';
import { AbcThemeMode } from '@abc-design/tokens';
import { AbcTreeNode } from '@abc-design/core';
import { AbcVisualMode } from '@abc-design/tokens';
import { ClassValue } from 'clsx';
import { default as default_2 } from 'react';
import { JSX } from 'react';
import * as React_2 from 'react';

export declare const ABC_HEADER_HEIGHT_BY_SIZE: Record<AbcSize, number>;

/** 随全局四档尺寸联动的默认侧边栏宽度与顶栏高度对照表 */
export declare const ABC_SIDEBAR_WIDTH_BY_SIZE: Record<AbcSize, number>;

/** 品牌信息协议（支持多租户动态 Logo/SVG/项目名与快捷编辑回调） */
export declare interface AbcBrandInfo {
    name: string;
    subtitle?: string;
    /** 支持图片 URL、内联 <svg> 字符串或自定义 React 节点 */
    logo?: string | default_2.ReactNode;
    onClick?: () => void;
    onEditBrand?: () => void;
}

/** 验证码拉取适配器：由宿主接入后端 /get-captcha 接口，不传时 SliderVerify 自动启用内置矢量拼图挑战 */
export declare type AbcCaptchaAdapter = () => Promise<AbcCaptchaData>;

/** 滑块拼图验证码后端载荷数据结构 */
export declare interface AbcCaptchaData {
    nonceStr: string;
    blockSrc: string;
    blockY: number;
    canvasSrc: string;
}

export declare interface AbcColumn<T = Record<string, any>> {
    key: string;
    title: string;
    dataIndex?: keyof T | string;
    width?: number;
    align?: 'left' | 'center' | 'right';
    fixed?: 'left' | 'right';
    sortable?: boolean;
    /** 表头问号提示文案 */
    tooltip?: default_2.ReactNode;
    /** 是否支持表头快速过滤 */
    filterable?: boolean;
    filterType?: 'text' | 'select';
    filterOptions?: SelectOption[];
    /** 内置格式化语义类型（未传自定义 render 时自动格式化） */
    valueType?: AbcColumnValueType;
    /** 状态/枚举映射字典选项（未传自定义 render 时自动渲染 StatusTag） */
    options?: AbcColumnOption[];
    /** 点击单元格直接唤起详情查看回调 */
    linkToView?: boolean;
    /** 超长文本单行省略并展示悬浮完整值 */
    ellipsis?: boolean;
    /** 点击一键复制单元格内容 */
    copyable?: boolean;
    hideInTable?: boolean;
    render?: (value: any, record: T, index: number) => default_2.ReactNode;
}

export declare interface AbcColumnOption {
    label: string;
    value: string | number | boolean;
    status?: StatusTone | 'error' | 'default';
    color?: string;
}

export declare type AbcColumnValueType = 'text' | 'status' | 'tag' | 'money' | 'number' | 'date' | 'datetime' | 'image' | 'progress' | 'code' | 'link' | 'switch';

/**
 * 命令式 Promise 确认框 API
 * 用法：const ok = await abcConfirm({ title: '确认删除', message: '删除后不可恢复', tone: 'danger' })
 */
export declare function abcConfirm(options: ConfirmOptions | string): Promise<boolean>;

/** 全局命令式确认弹窗挂载器（由 AbcProvider 默认自动挂载，自动防重复渲染） */
export declare const AbcConfirmHost: default_2.FC;

/** 主内容区宽度策略 */
export declare type AbcContentWidth = 'fluid' | 'fixed';

/** AbcProvider 上下文暴露的完整能力接口 */
export declare interface AbcContextValue {
    theme: AbcThemeConfig;
    resolvedTheme: AbcResolvedTheme;
    pageTransition: AbcPageTransition;
    watermarkText?: string | string[];
    watermarkEnabled: boolean;
    setThemeMode: (mode: AbcThemeMode, origin?: {
        clientX: number;
        clientY: number;
    }) => void;
    toggleTheme: (origin?: {
        clientX: number;
        clientY: number;
    }) => void;
    setBrand: (brand: AbcBrandColor) => void;
    setCustomBrandColor: (hex?: string) => void;
    setDensity: (density: AbcDensity) => void;
    setRadius: (radius: AbcRadius) => void;
    setFontScale: (scale: AbcFontScale) => void;
    setVisualMode: (mode: AbcVisualMode) => void;
    setComponentSize: (size?: AbcSize) => void;
    setMotion: (motion: AbcMotionPreset) => void;
    updateTheme: (patch: Partial<AbcThemeConfig>) => void;
    setPageTransition: (transition: AbcPageTransition) => void;
    setWatermarkEnabled: (enabled: boolean) => void;
    resetTheme: () => void;
    toast: AbcToastAdapter;
    uploadAdapter?: AbcUploadAdapter;
    dictAdapter?: AbcDictAdapter;
    permissionAdapter?: AbcPermissionAdapter;
    captchaAdapter?: AbcCaptchaAdapter;
    iconRegistry: Record<string, AbcIconComponent>;
    /** 多级抽屉全局默认展示交互模式：'adjacent' 为平级并排展开（企业级推荐），'stack' 为传统向左层叠推挤 */
    defaultDrawerCascadeMode?: 'stack' | 'adjacent';
}

/** 数据字典适配器：按字典编码同步或异步返回选项列表 */
export declare type AbcDictAdapter = (dictCode: string) => AbcDictOption[] | Promise<AbcDictOption[]>;

export declare type AbcDictItem = AbcDictOption;

/** 通用字典项数据结构 */
export declare interface AbcDictOption {
    label: string;
    value: string | number;
    tone?: 'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
    disabled?: boolean;
}

/** 图标组件渲染签名 */
export declare type AbcIconComponent = default_2.ComponentType<{
    size?: number | string;
    className?: string;
    strokeWidth?: number;
}>;

/** 5 大标准企业级布局拓扑模式 */
export declare type AbcLayoutMode = 'sidebar' | 'top' | 'mix' | 'dual-column' | 'auth';

/** 布局壳层运行时可调配置项 */
export declare interface AbcLayoutSettings {
    mode: AbcLayoutMode;
    sidebarTone: AbcSidebarTone;
    sidebarCollapsed: boolean;
    sidebarAccordion: boolean;
    showTabs: boolean;
    tabStyle?: AbcTabStyle;
    keepAlive: boolean;
    contentWidth: AbcContentWidth;
    /** 侧边栏展开像素宽度（不指定时随 componentSize 自动联动，自定义时可设为 196-288） */
    sidebarWidth?: number;
    /** 顶栏像素高度（不指定时随 componentSize 自动联动，自定义时可设为 46-66） */
    headerHeight?: number;
    /** 是否启用顶栏毛玻璃半透明模糊质感 */
    headerBlur?: boolean;
    /** 是否在侧栏/双栏模式下显示顶栏面包屑路径 */
    showBreadcrumb?: boolean;
    /** 是否在主内容区底部展示应用页脚 */
    showFooter?: boolean;
}

/** 路由无关的树形导航菜单节点协议 */
export declare interface AbcMenuItem {
    key: string;
    label: string;
    path?: string;
    icon?: string | default_2.ReactNode;
    badge?: string | number;
    disabled?: boolean;
    groupTitle?: string;
    children?: AbcMenuItem[];
}

/** 权限校验适配器：判断当前用户是否具备指定权限码 */
export declare type AbcPermissionAdapter = (permission: string | string[], mode?: 'any' | 'all') => boolean;

/**
 * ABC Design 顶层全局配置与主题适配器容器
 */
export declare const AbcProvider: default_2.FC<AbcProviderProps>;

export declare interface AbcProviderProps {
    children: default_2.ReactNode;
    /** 初始主题配置 */
    defaultTheme?: Partial<AbcThemeConfig>;
    /** 默认页面切换动画 */
    defaultPageTransition?: AbcPageTransition;
    /** 全局水印文案 */
    watermarkText?: string | string[];
    /** 默认是否开启水印 */
    defaultWatermarkEnabled?: boolean;
    /** 是否持久化用户主题偏好到 localStorage（默认开启） */
    persist?: boolean;
    /** 自定义 Toast 适配器（不传则使用内置零依赖 ToastContainer / AbcToastViewport） */
    toastAdapter?: AbcToastAdapter;
    /** 全局 ToastContainer 属性配置（如挂载位置、最大数量、动效预设等） */
    toastContainerProps?: ToastContainerProps;
    /** 注入全局文件上传实现（供 ImageUpload / ProConfigForm 使用） */
    uploadAdapter?: AbcUploadAdapter;
    /** 注入数据字典查询实现（供 DictSelect / DictTag / ProTable 使用） */
    dictAdapter?: AbcDictAdapter;
    /** 注入权限码判定实现（供 PermissionGuard / ProTable 操作按钮使用） */
    permissionAdapter?: AbcPermissionAdapter;
    /** 注入滑块拼图验证码拉取实现（供 SliderVerify 使用） */
    captchaAdapter?: AbcCaptchaAdapter;
    /** 按需注入扩展图标注册表 */
    iconRegistry?: Record<string, AbcIconComponent>;
    /** 多级抽屉全局默认展示交互模式：'adjacent' 为平级并排展开（企业级推荐），'stack' 为传统向左层叠推挤 */
    defaultDrawerCascadeMode?: 'stack' | 'adjacent';
}

/** 侧边栏独立视觉色调（允许亮色工作区搭配深色专业侧栏，或全浅色通透侧栏） */
export declare type AbcSidebarTone = 'dark' | 'light';

/** 多页签项数据结构 */
export declare interface AbcTabItem {
    path: string;
    title: string;
    icon?: string | default_2.ReactNode;
    closable?: boolean;
    pinned?: boolean;
}

export declare type AbcTableDensity = 'compact' | 'default' | 'comfortable';

export declare interface AbcTableExpandableConfig<T = Record<string, any>> {
    /** 自定义展开子面板渲染函数 */
    expandedRowRender?: (record: T, index: number) => default_2.ReactNode;
    /** 判断某行是否允许展开 */
    rowExpandable?: (record: T) => boolean;
    /** 初始默认展开全部可展开行 */
    defaultExpandAllRows?: boolean;
    /** 受控展开行主键集合 */
    expandedRowKeys?: Array<string | number>;
    /** 展开行变更回调 */
    onExpandedRowsChange?: (keys: Array<string | number>) => void;
}

export declare interface AbcTablePersistedSettings {
    hiddenKeys: string[];
    columnOrder: string[];
    columnWidths: Record<string, number>;
    /** 用户自定义列左右固定覆盖（null 表示显式取消列默认固定，未设置则沿用列定义） */
    columnFixed: Record<string, 'left' | 'right' | null>;
    /** 用户自定义顶部检索字段显隐（false 表示从筛选栏隐藏） */
    searchVisible: Record<string, boolean>;
    density: AbcTableDensity;
}

/** 多页签导航栏视觉风格 */
export declare type AbcTabStyle = 'card' | 'pill' | 'underline';

/** 零外部依赖的内置全局轻量消息通知实例 */
export declare const abcToast: AbcToastMethods;

/** 轻量消息提示适配器协议 */
export declare interface AbcToastAdapter {
    success: (message: string) => void;
    error: (message: string) => void;
    info: (message: string) => void;
    warning: (message: string) => void;
}

export declare interface AbcToastMethods extends AbcToastAdapter {
    success: (messageOrOptions: default_2.ReactNode | ToastOptions, duration?: number) => string;
    error: (messageOrOptions: default_2.ReactNode | ToastOptions, duration?: number) => string;
    info: (messageOrOptions: default_2.ReactNode | ToastOptions, duration?: number) => string;
    warning: (messageOrOptions: default_2.ReactNode | ToastOptions, duration?: number) => string;
    loading: (messageOrOptions: default_2.ReactNode | ToastOptions, duration?: number) => string;
    push: (tone: ToastTone, messageOrOptions: default_2.ReactNode | ToastOptions, duration?: number) => string;
    dismiss: (id: string) => void;
    clear: () => void;
}

/** 全局消息队列挂载宿主（由 AbcProvider 默认渲染，底层基于 ToastContainer） */
export declare const AbcToastViewport: default_2.FC<AbcToastViewportProps>;

/** 兼容导出命名 */
export declare interface AbcToastViewportProps extends ToastContainerProps {
}

export { AbcTreeNode }

/** 文件上传适配器：接收 File 并返回可访问 URL */
export declare type AbcUploadAdapter = (file: File) => Promise<string>;

/** 顶栏登录用户信息协议 */
export declare interface AbcUserInfo {
    name: string;
    role?: string;
    avatar?: string;
    menuItems?: DropdownMenuItem[];
}

/**
 * 快捷入口与工作台导航卡片 (ActionCard)
 * 基于 ::after 拉伸点击热区实现语义化整卡可点击（主动作落在真实 <a> / <button> 上，次要按钮通过 z-10 隔离冒泡）
 */
export declare const ActionCard: default_2.FC<ActionCardProps>;

export declare interface ActionCardProps {
    title: default_2.ReactNode;
    description?: default_2.ReactNode;
    icon?: default_2.ReactNode;
    tags?: string[];
    /** 独立右上角次要动作插槽（z-10 独立捕获点击，不触发整卡主跳转） */
    extra?: default_2.ReactNode;
    href?: string;
    target?: string;
    disabled?: boolean;
    onClick?: () => void;
    size?: AbcSize;
    motion?: AbcMotionPreset;
    className?: string;
}

/** 全局活跃抽屉栈项：支撑多级抽屉自动计算宽度与平级并排/层叠推挤 */
export declare interface ActiveDrawerEntry {
    id: string;
    cascadeMode?: 'stack' | 'adjacent';
    widthPx: number;
}

/**
 * 页内提示横幅组件 (Alert)
 */
export declare const Alert: default_2.FC<AlertProps>;

export declare interface AlertProps {
    tone?: AlertTone;
    title?: default_2.ReactNode;
    description?: default_2.ReactNode;
    children?: default_2.ReactNode;
    showIcon?: boolean;
    closable?: boolean;
    onClose?: () => void;
    action?: default_2.ReactNode;
    size?: AbcSize;
    motion?: AbcMotionPreset;
    className?: string;
}

export declare type AlertTone = 'info' | 'success' | 'warning' | 'danger';

export declare function AsyncInlineError({ error, fallbackTitle, fallbackMessage, action, retry, retryLabel, isRetrying, className, ...props }: AsyncInlineErrorProps): React_2.JSX.Element | null;

export declare interface AsyncInlineErrorProps extends React_2.HTMLAttributes<HTMLDivElement> {
    error: unknown;
    fallbackTitle?: React_2.ReactNode;
    fallbackMessage?: React_2.ReactNode;
    action?: React_2.ReactNode;
    retry?: () => void;
    retryLabel?: React_2.ReactNode;
    isRetrying?: boolean;
}

export declare interface AttentionEntry {
    kind: string;
    severity: 'critical' | 'high' | 'medium' | 'low' | string;
    count: number;
    label: string;
    href?: string;
    restriction?: string;
    onClick?: () => void;
}

/**
 * 重点待办与告警关注清单 (AttentionList)
 * 用于控制台仪表盘、运营概览中展示聚合的高危与中危告警信号
 */
export declare function AttentionList({ items, emptyMessage, className, }: AttentionListProps): JSX.Element;

export declare interface AttentionListProps {
    items: AttentionEntry[];
    emptyMessage?: string;
    className?: string;
}

/** 柔和极光背景装饰层（适配 Auth 登录布局及大屏视觉头部） */
export declare const AuroraBackground: default_2.FC<{
    motion?: AbcMotionPreset;
    className?: string;
}>;

/**
 * 登录 / SSO / 租户入驻独立认证页布局框架
 * 支持分屏品牌视觉展示与极简居中卡片两种主流企业范式
 */
export declare const AuthLayout: default_2.FC<AuthLayoutProps>;

export declare interface AuthLayoutProps {
    brand?: AbcBrandInfo;
    /** 分屏双栏 ('split') 或极简居中卡片 ('centered') */
    variant?: 'split' | 'centered';
    /** 左侧品牌大标题 */
    headline?: default_2.ReactNode;
    /** 左侧副标题描述 */
    subheadline?: default_2.ReactNode;
    /** 左侧企业特性卖点列表 */
    highlights?: string[];
    /** 右上角附加插槽（如语言/主题切换按钮） */
    topRightExtra?: default_2.ReactNode;
    /** 页脚版权说明 */
    copyright?: default_2.ReactNode;
    children: default_2.ReactNode;
    className?: string;
}

/** 用户/租户头像组件（图片加载失败时自动回退至名称首字符） */
export declare const Avatar: default_2.FC<AvatarProps>;

export declare interface AvatarProps {
    src?: string;
    name?: string;
    size?: AbcSize;
    motion?: AbcMotionPreset;
    className?: string;
}

/** 数字/红点角标组件（兼具语义标签模式） */
export declare const Badge: default_2.FC<BadgeProps>;

export declare interface BadgeProps {
    count?: number;
    maxCount?: number;
    dot?: boolean;
    tone?: 'danger' | 'primary' | 'success';
    variant?: 'default' | 'secondary' | 'outline' | 'destructive';
    size?: AbcSize;
    motion?: AbcMotionPreset;
    children?: default_2.ReactNode;
    className?: string;
}

export declare const baseFieldControlClass = "w-full rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] leading-normal py-0 transition-[color,background-color,border-color,box-shadow] duration-[var(--abc-motion-fast,140ms)] ease-out enabled:hover:border-[var(--abc-border-strong)] focus-within:border-[var(--abc-primary)] focus-within:ring-2 focus-within:ring-[var(--abc-ring)] focus:border-[var(--abc-primary)] focus:ring-2 focus:ring-[var(--abc-ring)] focus:outline-none disabled:bg-[var(--abc-bg-muted)] disabled:text-[var(--abc-fg-muted)] disabled:cursor-not-allowed";

/** Bento 网格单卡（支持跨列/跨行特性视觉呈现与微交互上浮） */
export declare const BentoCard: default_2.FC<BentoCardProps>;

export declare interface BentoCardProps extends Omit<default_2.HTMLAttributes<HTMLElement>, 'title'> {
    colSpan?: 1 | 2 | 3;
    rowSpan?: 1 | 2;
    eyebrow?: default_2.ReactNode;
    title: default_2.ReactNode;
    description?: default_2.ReactNode;
    icon?: default_2.ReactNode;
    graphic?: default_2.ReactNode;
    footer?: default_2.ReactNode;
    hoverable?: boolean;
    size?: AbcSize;
    motion?: AbcMotionPreset;
}

/** 现代 Bento 异构仪表盘网格容器 */
export declare const BentoGrid: default_2.FC<BentoGridProps>;

export declare interface BentoGridProps extends default_2.HTMLAttributes<HTMLDivElement> {
    columns?: 2 | 3 | 4;
    gap?: AbcSize;
}

/** 流光边框装饰层（放置在 relative overflow-hidden 容器内部） */
export declare const BorderBeam: default_2.FC<BorderBeamProps>;

export declare interface BorderBeamProps {
    duration?: number;
    motion?: AbcMotionPreset;
    className?: string;
}

/** 品牌 Logo 与项目名展示块（支持直链图片、内联 SVG、四档尺寸联动及多租户品牌快捷编辑按钮） */
export declare const BrandLogoBlock: default_2.FC<{
    brand: AbcBrandInfo;
    collapsed?: boolean;
    tone?: 'dark' | 'light';
    size?: AbcSize;
    className?: string;
}>;

/**
 * 语义化面包屑导航 (Breadcrumb)
 * 遵循无障碍规范：<nav> + <ol> 有序层级列表，末项标记 aria-current="page"，
 * 分隔符通过 CSS ::before content: "/" / "" 注入，对读屏器静默无噪音。
 */
export declare const Breadcrumb: default_2.FC<BreadcrumbProps>;

export declare interface BreadcrumbEntry {
    label: default_2.ReactNode;
    onClick?: () => void;
}

export declare interface BreadcrumbItem {
    key?: string;
    label: default_2.ReactNode;
    href?: string;
    icon?: default_2.ReactNode;
    onClick?: (e: default_2.MouseEvent<HTMLAnchorElement>) => void;
}

export declare interface BreadcrumbProps {
    items: BreadcrumbItem[];
    ariaLabel?: string;
    size?: AbcSize;
    motion?: AbcMotionPreset;
    className?: string;
}

export declare function buildCsvContent<T extends Record<string, any>>(columns: AbcColumn<T>[], rows: T[]): string;

/**
 * 企业级通用按钮组件
 * 完全基于 --abc-* 语义化 Token 驱动，随品牌色、密度与圆角档位实时响应
 */
export declare const Button: default_2.ForwardRefExoticComponent<ButtonProps & default_2.RefAttributes<HTMLButtonElement>>;

export declare interface ButtonProps extends default_2.ButtonHTMLAttributes<HTMLButtonElement> {
    /** 视觉语义变体 */
    variant?: ButtonVariant;
    /** 控件高度规格（默认对齐企业紧凑基线 sm = var(--abc-control-h-sm)，支持全局 componentSize 继承） */
    size?: ButtonSize;
    /** 组件交互动效规格（默认继承 AbcProvider.theme.motion） */
    motion?: AbcMotionPreset;
    /** 加载中状态 */
    loading?: boolean;
    /** 加载中文案 */
    loadingText?: default_2.ReactNode;
    /** 左侧前置图标 */
    icon?: default_2.ReactNode;
    /** icon 语义别名 */
    leftIcon?: default_2.ReactNode;
    /** 右侧后置图标 */
    rightIcon?: default_2.ReactNode;
    /** 是否撑满父容器宽度 */
    block?: boolean;
    /** 是否将样式透传给子元素 */
    asChild?: boolean;
}

export declare type ButtonSize = AbcSize | 'default' | 'icon' | 'icon-sm';

export declare type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger' | 'success' | 'warning' | 'ghost' | 'text' | 'default' | 'destructive' | 'link';

export declare function buttonVariants({ variant, size, className, }?: {
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
}): string;

export declare const BYTE_UNIT_FACTORS: Record<ByteUnit, number>;

export declare const BYTE_UNITS: readonly ByteUnit[];

export declare function ByteQuotaInput({ locale, zeroMeansUnlimited, defaultZeroUnit, allowedUnits, unitAriaLabel, ...rest }: ByteQuotaInputProps): React_2.JSX.Element;

export declare interface ByteQuotaInputProps extends QuotaUnitInputBaseProps {
    locale?: 'en' | 'zh';
    zeroMeansUnlimited?: boolean;
    defaultZeroUnit?: ByteUnit;
    allowedUnits?: readonly ByteUnit[];
    unitAriaLabel?: string;
}

export declare type ByteUnit = 'B' | 'KB' | 'MB' | 'GB' | 'TB';

/**
 * 标准企业级表面容器卡片
 * 统一取代零散的 panelClass / filterCardClass / tableCardClass，支持四档尺寸、五种视觉表面、封面图与容器查询
 */
export declare const Card: default_2.FC<CardProps>;

export declare const CardContent: default_2.ForwardRefExoticComponent<CardContentProps & default_2.RefAttributes<HTMLDivElement>>;

export declare interface CardContentProps extends default_2.HTMLAttributes<HTMLDivElement> {
}

export declare const CardDescription: default_2.ForwardRefExoticComponent<CardDescriptionProps & default_2.RefAttributes<HTMLParagraphElement>>;

export declare interface CardDescriptionProps extends default_2.HTMLAttributes<HTMLParagraphElement> {
}

export declare const CardFooter: default_2.ForwardRefExoticComponent<CardFooterProps & default_2.RefAttributes<HTMLDivElement>>;

export declare interface CardFooterProps extends default_2.HTMLAttributes<HTMLDivElement> {
}

export declare const CardHeader: default_2.ForwardRefExoticComponent<CardHeaderProps & default_2.RefAttributes<HTMLDivElement>>;

export declare interface CardHeaderProps extends default_2.HTMLAttributes<HTMLDivElement> {
}

export declare interface CardProps extends Omit<default_2.HTMLAttributes<HTMLElement>, 'title'> {
    /** 语义容器标签（默认 'div'，推荐在列表/仪表盘网格中设为 'article'） */
    as?: 'div' | 'article' | 'section';
    /** 卡片主标题 */
    title?: default_2.ReactNode;
    /** 标题旁辅助说明 */
    subtitle?: default_2.ReactNode;
    /** 右上角附加操作区 */
    extra?: default_2.ReactNode;
    /** 卡片底部区域 */
    footer?: default_2.ReactNode;
    /** 通用四档密度尺寸 */
    size?: AbcSize;
    /** 内容区内边距规格（未指定时默认跟随 size） */
    padding?: 'none' | AbcSize;
    /** 视觉表面变体 */
    variant?: CardVariant;
    /** 顶部固定比例封面图插槽（防布局偏移 CLS） */
    cover?: default_2.ReactNode;
    /** 右上角状态角标 */
    statusRibbon?: {
        text: string;
        tone?: StatusTone;
    };
    /** 加载态骨架占位 */
    loading?: boolean;
    /** 动效预设 */
    motion?: AbcMotionPreset;
    /** 鼠标悬停时是否轻微浮起高亮边框 */
    hoverable?: boolean;
    /** 内容容器附加类名 */
    bodyClassName?: string;
}

export declare const CardTitle: default_2.ForwardRefExoticComponent<CardTitleProps & default_2.RefAttributes<HTMLHeadingElement>>;

export declare interface CardTitleProps extends default_2.HTMLAttributes<HTMLHeadingElement> {
}

export declare type CardVariant = 'default' | 'bordered' | 'ghost' | 'elevated' | 'glass';

/** 复选框组件（支持四档尺寸、动效规格、半选态 indeterminate、辅助描述与键盘无障碍操作） */
export declare const Checkbox: default_2.ForwardRefExoticComponent<CheckboxProps & default_2.RefAttributes<HTMLInputElement>>;

export declare interface CheckboxProps extends Omit<default_2.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size'> {
    id?: string;
    checked?: boolean;
    defaultChecked?: boolean;
    indeterminate?: boolean;
    onChange?: (checked: boolean, e: default_2.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    size?: AbcSize;
    motion?: AbcMotionPreset;
    label?: default_2.ReactNode;
    description?: default_2.ReactNode;
    className?: string;
}

/**
 * 可勾选卡片 (CheckCard)
 * 选中态仅改变边框颜色与微阴影/背景，绝不改变 border-width、padding 或 font-weight 以彻底消除重排抖动
 */
export declare const CheckCard: default_2.FC<CheckCardProps>;

/**
 * 表单选择卡片组 (CheckCardGroup)
 * 支持单选与多选模式，通过原生语义 input 保证键盘方向键/空格操作与读屏器兼容
 */
export declare const CheckCardGroup: default_2.FC<CheckCardGroupProps>;

export declare interface CheckCardGroupProps {
    multiple?: boolean;
    value?: CheckCardValue | CheckCardValue[];
    defaultValue?: CheckCardValue | CheckCardValue[];
    onChange?: (nextValue: CheckCardValue | CheckCardValue[]) => void;
    disabled?: boolean;
    size?: AbcSize;
    motion?: AbcMotionPreset;
    columns?: 1 | 2 | 3 | 4;
    className?: string;
    children: default_2.ReactNode;
}

export declare interface CheckCardProps {
    value?: CheckCardValue;
    title: default_2.ReactNode;
    description?: default_2.ReactNode;
    avatar?: default_2.ReactNode;
    icon?: default_2.ReactNode;
    extra?: default_2.ReactNode;
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    size?: AbcSize;
    motion?: AbcMotionPreset;
    className?: string;
    children?: default_2.ReactNode;
}

export declare type CheckCardValue = string | number;

/** 清空当前所有进行中的 Toast 通知 */
export declare function clearToasts(): void;

/** 合并条件类名并自动消解 Tailwind 工具类冲突 */
export declare function cn(...inputs: ClassValue[]): string;

/**
 * 原生 <details> + <summary> 手风琴/折叠面板 (Collapse)
 * 遵循现代 Web 标准：指示箭头紧邻标题文本左侧便于视觉垂直扫读，不在 <summary> 内嵌套标题标签避免读屏器吞语义
 */
export declare const Collapse: default_2.FC<CollapseProps>;

export declare interface CollapseItem {
    key: string;
    label: default_2.ReactNode;
    extra?: default_2.ReactNode;
    children: default_2.ReactNode;
    disabled?: boolean;
}

export declare interface CollapseProps {
    items: CollapseItem[];
    /** 是否开启排他手风琴模式（一次仅允许展开一项） */
    accordion?: boolean;
    defaultActiveKeys?: string[];
    activeKeys?: string[];
    onChange?: (activeKeys: string[]) => void;
    size?: AbcSize;
    motion?: AbcMotionPreset;
    className?: string;
}

/**
 * 可折叠详情分组卡片 (CollapsibleCard)
 * 使用 CSS Grid 0fr -> 1fr 平滑高度过渡，适合参数配置高级选项与多区块巡检详情
 */
export declare const CollapsibleCard: default_2.FC<CollapsibleCardProps>;

export declare interface CollapsibleCardProps {
    title: default_2.ReactNode;
    subtitle?: default_2.ReactNode;
    icon?: default_2.ReactNode;
    extra?: default_2.ReactNode;
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    size?: AbcSize;
    motion?: AbcMotionPreset;
    className?: string;
    bodyClassName?: string;
    children: default_2.ReactNode;
}

export declare interface CommandActionItem {
    id: string;
    title: string;
    group?: string;
    subtitle?: string;
    icon?: string | default_2.ReactNode;
    keywords?: string;
    onTrigger: () => void;
}

/**
 * 企业级 Spotlight 全局指令与菜单快速跳转中心（支持 ⌘K / Ctrl+K 唤醒、中文拼音首字母检索、分组筛选与最近访问记忆）
 */
export declare const CommandPalette: default_2.FC<CommandPaletteProps>;

export declare interface CommandPaletteProps {
    open: boolean;
    onClose: () => void;
    menuItems?: AbcMenuItem[];
    onNavigate?: (path: string, item: AbcMenuItem) => void;
    extraActions?: CommandActionItem[];
}

/** abcConfirm 简短别名 */
declare const confirm_2: typeof abcConfirm;
export { confirm_2 as confirm }

/**
 * 结构化二次确认对话框 (ConfirmDialog)
 * 相比命令式 confirm()，支持自定义表单内容、破坏性警示样式、异步加载中与完全无障碍支持
 */
export declare function ConfirmDialog({ open, title, description, cancelLabel, confirmLabel, workingLabel, variant, loading, closeLabel, className, onCancel, onConfirm, children, }: ConfirmDialogProps): React_2.JSX.Element;

export declare interface ConfirmDialogProps {
    open: boolean;
    title: React_2.ReactNode;
    description?: React_2.ReactNode;
    cancelLabel?: React_2.ReactNode;
    confirmLabel?: React_2.ReactNode;
    workingLabel?: React_2.ReactNode;
    variant?: 'default' | 'destructive';
    loading?: boolean;
    closeLabel?: string;
    className?: string;
    onCancel: () => void;
    onConfirm: () => void;
    children?: React_2.ReactNode;
}

export declare interface ConfirmOptions {
    title?: string;
    message?: default_2.ReactNode;
    /** message 语义别名 */
    content?: default_2.ReactNode;
    confirmText?: string;
    cancelText?: string;
    tone?: 'danger' | 'warning' | 'primary' | 'success';
    /** tone 语义别名 */
    type?: 'warning' | 'info' | 'success' | 'error' | 'danger';
    onConfirm?: () => void | Promise<void>;
    onCancel?: () => void;
}

/** 兼容包裹容器（若外层已存在 AbcProvider，内部自动去重不会重复挂载弹窗） */
export declare const ConfirmProvider: default_2.FC<{
    children: default_2.ReactNode;
}>;

export declare type ControlSize = AbcSize | 'default';

export declare const CopyableCode: React_2.ForwardRefExoticComponent<CopyableCodeProps & React_2.RefAttributes<HTMLSpanElement>>;

export declare interface CopyableCodeProps extends React_2.HTMLAttributes<HTMLSpanElement> {
    value: string;
    displayValue?: React_2.ReactNode;
    copyLabel?: string;
    copiedLabel?: string;
    hideCopyButton?: boolean;
    codeClassName?: string;
}

/**
 * 一键点击复制文本组件
 * 通过 AbcProvider.toast 发送反馈，阻止事件冒泡避免误触表格行点击
 */
export declare const CopyableText: default_2.FC<CopyableTextProps>;

export declare interface CopyableTextProps {
    /** 实际要写入剪贴板的文本 */
    text: string;
    /** 可选自定义展示内容（例如脱敏或截断显示），默认展示 text */
    displayText?: default_2.ReactNode;
    children?: default_2.ReactNode;
    /** 是否显示右侧复制状态图标（默认 true） */
    showIcon?: boolean;
    /** 是否仅渲染复制图标按钮 */
    iconOnly?: boolean;
    /** 是否等宽字体渲染（适合订单号、ID、IP） */
    mono?: boolean;
    /** 复制成功提示文案 */
    successMessage?: string;
    /** successMessage 别名 */
    successText?: string;
    /** 悬停 title 文案 */
    tooltip?: string;
    /** 复制成功回调 */
    onCopy?: (text: string) => void;
    size?: AbcSize;
    motion?: AbcMotionPreset;
    className?: string;
}

/**
 * 独立的轻量复制图标按钮
 * 广泛用于表格列、卡片、代码块内快速复制 ID/Key 等场景
 */
export declare const CopyButton: default_2.FC<CopyButtonProps>;

export declare interface CopyButtonProps extends default_2.ButtonHTMLAttributes<HTMLButtonElement> {
    value: string;
    title?: string;
    copyLabel?: string;
    copiedLabel?: string;
    successDuration?: number;
}

/**
 * 写入文本至系统剪贴板（优先使用 Clipboard API，非安全上下文下自动回退至隐藏 textarea）
 */
export declare function copyToClipboard(text: string): Promise<boolean>;

/** 游标流式分页器（专用于 CDP 抓包、高频作业队列等无深总数的大数据场景） */
export declare const CursorPagination: default_2.FC<PaginationProps>;

/**
 * 企业级单日期选择器 (DatePicker)
 * 基于 @abc-design/core 42 格月历算法 + Portal 浮层定位，支持年/月四向切换、快捷预设与深色模式
 */
export declare const DatePicker: default_2.ForwardRefExoticComponent<DatePickerProps & default_2.RefAttributes<HTMLDivElement>>;

export declare interface DatePickerProps {
    value?: string;
    defaultValue?: string;
    onChange?: (dateStr: string) => void;
    placeholder?: string;
    allowClear?: boolean;
    clearable?: boolean;
    disabled?: boolean;
    format?: string;
    shortcuts?: boolean | DatePickerShortcut[];
    id?: string;
    name?: string;
    minDate?: string;
    maxDate?: string;
    size?: ControlSize;
    motion?: AbcMotionPreset;
    className?: string;
}

export declare interface DatePickerShortcut {
    label: string;
    value: string | (() => string);
}

export declare interface DateRange {
    start: string;
    end: string;
}

export declare type DateRangeInput = DateRangeTuple | {
    start?: string;
    end?: string;
} | null;

/**
 * 企业级双月联动日期区间选择器 (DateRangePicker)
 * 支持双日历面板范围悬停高亮、反向点击自动排序、常用预设胶囊及 { start, end } / [start, end] 多态数据格式
 */
export declare const DateRangePicker: default_2.ForwardRefExoticComponent<DateRangePickerProps & default_2.RefAttributes<HTMLDivElement>>;

export declare interface DateRangePickerProps {
    value?: DateRangeInput;
    defaultValue?: DateRangeInput;
    /** 根据传入 value/defaultValue 形态自动返回对象 { start, end } 或元组 [start, end] */
    onChange?: (range: any) => void;
    placeholder?: string | [string, string];
    allowClear?: boolean;
    clearable?: boolean;
    disabled?: boolean;
    format?: string;
    shortcuts?: boolean | DateRangeShortcut[];
    id?: string;
    minDate?: string;
    maxDate?: string;
    size?: ControlSize;
    motion?: AbcMotionPreset;
    className?: string;
}

export declare interface DateRangeShortcut {
    label: string;
    getValue: () => DateRangeTuple | DateRange;
}

export declare type DateRangeTuple = [string, string];

export declare const DEFAULT_ABC_LAYOUT_SETTINGS: AbcLayoutSettings;

export declare interface DescriptionItem {
    key?: string;
    label: default_2.ReactNode;
    children: default_2.ReactNode;
    /** 占据的网格列数（默认 1） */
    span?: number;
}

export declare interface DescriptionItemData {
    key?: React_2.Key;
    label: React_2.ReactNode;
    value: React_2.ReactNode;
    mono?: boolean;
    copyValue?: string;
    span?: 1 | 2 | 3 | 'full';
    className?: string;
}

export declare interface DescriptionItemProps extends Omit<React_2.HTMLAttributes<HTMLDivElement>, 'title'> {
    label: React_2.ReactNode;
    value?: React_2.ReactNode;
    mono?: boolean;
    copyValue?: string;
    span?: 1 | 2 | 3 | 'full';
    variant?: 'default' | 'cards' | 'divided' | 'compact';
    valueClassName?: string;
}

/**
 * 结构化元数据描述列表组件
 * 基于语义化 dl/dt/dd 标签，支持多列网格、卡片化、分隔线与紧凑排版
 */
export declare const DescriptionList: React_2.ForwardRefExoticComponent<DescriptionListProps & React_2.RefAttributes<HTMLDListElement>>;

export declare const DescriptionListItem: React_2.ForwardRefExoticComponent<DescriptionItemProps & React_2.RefAttributes<HTMLDivElement>>;

export declare type DescriptionListItemProps = DescriptionItemProps;

export declare interface DescriptionListProps extends React_2.HTMLAttributes<HTMLDListElement> {
    columns?: 1 | 2 | 3 | 4;
    variant?: 'default' | 'cards' | 'divided' | 'compact';
    density?: 'default' | 'compact';
    bordered?: boolean;
    items?: DescriptionItemData[];
}

/**
 * 详情键值对描述列表 (Descriptions)
 * 用于用户画像抽屉、订单详情弹窗与配置参数核对面板
 */
export declare const Descriptions: default_2.FC<DescriptionsProps>;

export declare interface DescriptionsProps {
    title?: default_2.ReactNode;
    extra?: default_2.ReactNode;
    items: DescriptionItem[];
    column?: 1 | 2 | 3 | 4;
    bordered?: boolean;
    size?: AbcSize;
    motion?: AbcMotionPreset;
    className?: string;
}

/**
 * 企业级模态对话框
 *
 * 【交互与容器选型规范】
 * 1. 专用于小表单操作与轻量确认（如重命名、状态流转、单字段修改、二次确认等少字段场景），居中聚焦单一任务。
 * 2. 天然支持多级遮罩堆叠（通过多层 Dialog 依次弹出与关闭）。
 * 3. 严禁承载大表单或复杂长表单（大表单必须使用 Drawer，避免顶部被顶出视口）。
 *
 * 采用原生 HTML <dialog> + showModal() 顶层渲染，天然具备背景 inert 隔离、焦点锁与归还能力；
 * 结合 CSS overscroll-behavior: contain 杜绝滚动穿透且不篡改 body overflow 导致页面滚动条跳动。
 */
export declare const Dialog: default_2.FC<DialogProps>;

export declare function DialogContent({ className, children, closeLabel, closeDisabled, closable, onClose: contentOnClose, ...props }: DialogContentProps): default_2.JSX.Element;

export declare interface DialogContentProps extends default_2.HTMLAttributes<HTMLDivElement> {
    closeLabel?: string;
    closeDisabled?: boolean;
    closable?: boolean;
    onClose?: () => void;
}

export declare const DialogContext: default_2.Context<DialogContextValue | null>;

export declare interface DialogContextValue {
    isOpen: boolean;
    handleClose: () => void;
    closeDisabled: boolean;
    hasHeader: boolean;
    titleId: string;
}

export declare function DialogDescription({ className, children, ...props }: default_2.HTMLAttributes<HTMLParagraphElement>): default_2.JSX.Element;

export declare function DialogFooter({ className, children, ...props }: default_2.HTMLAttributes<HTMLDivElement>): default_2.JSX.Element;

export declare function DialogHeader({ className, children, ...props }: default_2.HTMLAttributes<HTMLDivElement>): default_2.JSX.Element;

export declare interface DialogProps {
    /** 控制模态框显隐（兼容 open / visible / isOpen 三种命名习惯） */
    open?: boolean;
    visible?: boolean;
    isOpen?: boolean;
    /** 请求关闭回调（兼容 onClose / onCancel） */
    onClose?: () => void;
    onCancel?: () => void;
    /** 兼容 onOpenChange 签名 */
    onOpenChange?: (open: boolean) => void;
    /** 是否展示右上角关闭按钮（默认 true） */
    closable?: boolean;
    /** 是否禁用关闭按钮（如表单提交中） */
    closeDisabled?: boolean;
    /** 关闭按钮无障碍文案，默认 '关闭' */
    closeLabel?: string;
    /** 标题内容 */
    title?: default_2.ReactNode;
    /** 副标题或辅助描述 */
    description?: default_2.ReactNode;
    /** 主体内容 */
    children: default_2.ReactNode;
    /** 底部操作区 */
    footer?: default_2.ReactNode;
    /** 预设宽度规格 */
    size?: DialogSize | string;
    /** size 语义别名 */
    maxWidth?: DialogSize | string;
    /** 自定义宽度 CSS 值（如 '680px'） */
    width?: string;
    /** 点击遮罩空白处是否允许关闭（默认 true） */
    closeOnClickModal?: boolean;
    /** 是否支持按住标题栏拖拽位移（默认 true） */
    draggable?: boolean;
    /** 是否显示最大化/还原全屏按钮（默认 true） */
    fullscreenable?: boolean;
    /** 受控全屏状态 */
    fullscreen?: boolean;
    /** 全屏状态变化回调 */
    onFullscreenChange?: (fullscreen: boolean) => void;
    /** 是否启用焦点锁定（原生 showModal 天然支持，保留字段兼容既有调用） */
    focusTrap?: boolean;
    /** 面板显隐动效规格 */
    motion?: AbcMotionPreset;
    /** 面板附加类名 */
    className?: string;
}

/**
 * 企业级高保真模态弹窗组件 (Dialog / Modal)
 *
 * 【容器交互选型与多级交互铁律】
 * 1. 对于大表单交互操作展示必须使用抽屉（Drawer），全高右侧贴合具备吸附 Header/Footer 与原生垂直滚动流，避免居中 Modal 在大表单下顶部被顶出可视区。
 * 2. 打开一层抽屉是大表单、在该表单上需要打开另一个表单也是大表单的情况，必须使用子级抽屉（二级抽屉 L1 -> L2），优先使用 cascadeMode="adjacent"（平级并排对比展示），避免多层遮罩覆盖与内容割裂。
 * 3. 如果是小表单或轻量确认操作（操作项较小、步骤简单），使用 Modal/Dialog，支持多级堆叠展示（z-index 自动高于抽屉）。
 * 4. Dialog 内部采用显式绝对居中规范，彻底避免在非标准视口或长内容下被顶出可视区。
 */
export declare type DialogSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';

export declare function DialogTitle({ className, children, id, ...props }: default_2.HTMLAttributes<HTMLHeadingElement>): default_2.JSX.Element;

/** 字典驱动下拉框（通过 AbcProvider.dictAdapter 解耦具体业务接口） */
export declare const DictSelect: default_2.FC<DictSelectProps>;

export declare interface DictSelectProps extends Omit<SelectProps, 'options'> {
    dictCode?: string;
    /** dictCode 语义别名 */
    dictKey?: string;
    /** 前置扩展静态选项（如“全部”） */
    prependOptions?: SelectOption[];
    /** 后置扩展静态选项 */
    appendOptions?: SelectOption[];
}

/** 字典值自动映射状态标签 */
export declare const DictTag: default_2.FC<DictTagProps>;

export declare interface DictTagProps {
    dictCode?: string;
    /** dictCode 语义别名 */
    dictKey?: string;
    value: string | number | undefined | null;
    dot?: boolean;
    size?: AbcSize;
    motion?: AbcMotionPreset;
    emptyText?: string;
    fallbackTone?: StatusTone;
    className?: string;
}

/** 关闭并销毁指定 ID 的 Toast 通知 */
export declare function dismissToast(id: string): void;

/** 分割线组件 */
export declare const Divider: default_2.FC<DividerProps>;

export declare interface DividerProps extends default_2.HTMLAttributes<HTMLDivElement> {
    orientation?: 'horizontal' | 'vertical';
    label?: default_2.ReactNode;
}

export declare function downloadTableCsv<T extends Record<string, any>>(filename: string, columns: AbcColumn<T>[], rows: T[]): string;

/**
 * 企业级多级可调宽抽屉组件
 *
 * 【容器交互选型与多级交互铁律】
 * 1. 对于大表单交互操作展示必须使用抽屉（Drawer），全高右侧贴合具备吸附 Header/Footer 与原生垂直滚动流，避免居中 Modal 在大表单下顶部被顶出可视区。
 * 2. 打开一层抽屉是大表单、在该表单上需要打开另一个表单也是大表单的情况，必须使用子级抽屉（二级抽屉 L1 -> L2），优先使用 cascadeMode="adjacent"（平级并排对比展示），避免多层遮罩覆盖与内容割裂。
 * 3. 如果是小表单或轻量确认操作（操作项较小、步骤简单），使用 Modal/Dialog，支持多级堆叠展示（z-index 自动高于抽屉）。
 * 4. 支持多抽屉栈自动协同管理、视口宽度碰撞自适应等比缩放、拖拽边缘无级调宽与本地记忆。
 */
export declare const Drawer: default_2.FC<DrawerProps>;

export declare function DrawerBody({ className, ...props }: default_2.HTMLAttributes<HTMLDivElement>): default_2.JSX.Element;

export declare function DrawerDescription({ className, ...props }: default_2.HTMLAttributes<HTMLParagraphElement>): default_2.JSX.Element;

export declare function DrawerFooter({ className, ...props }: default_2.HTMLAttributes<HTMLDivElement>): default_2.JSX.Element;

export declare function DrawerHeader({ className, ...props }: default_2.HTMLAttributes<HTMLDivElement>): default_2.JSX.Element;

export declare interface DrawerProps {
    open?: boolean;
    visible?: boolean;
    onClose: () => void;
    title?: default_2.ReactNode;
    description?: default_2.ReactNode;
    children: default_2.ReactNode;
    footer?: default_2.ReactNode;
    size?: DrawerSize;
    motion?: AbcMotionPreset;
    width?: number | string;
    placement?: 'right' | 'left';
    closeOnClickModal?: boolean;
    /** 是否允许拖拽边缘调节宽度（默认开启） */
    resizable?: boolean;
    /** 拖拽调节的最小像素宽度 */
    minWidth?: number;
    /** 持久化记忆抽屉宽度的存储键 */
    storageKey?: string;
    /** 打开子抽屉时当前抽屉是否自动向左层叠推移（默认开启） */
    push?: boolean;
    /** 每层子抽屉推移像素值（stack 模式下生效，默认 140） */
    pushDistance?: number;
    /** 多级抽屉展示交互模式：'stack' 为传统向左堆叠推挤缩放，'adjacent' 为平级并排展开以便两级同时清晰观测 */
    cascadeMode?: 'stack' | 'adjacent';
    /** 平级并排展示模式下的向左推移间距（默认 560px） */
    adjacentOffset?: number;
    bodyClassName?: string;
    className?: string;
    role?: string;
}

export declare type DrawerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export declare function DrawerTitle({ className, ...props }: default_2.HTMLAttributes<HTMLHeadingElement>): default_2.JSX.Element;

/**
 * 视口感知顶层下拉菜单与气泡浮层组件 (Dropdown / Popover)
 * 遵循无障碍规范：
 * 1. 当使用 hover 触发时，同时保留点击、触控与键盘激活能力，并配备安全悬停桥接延迟与 Esc 关闭（WCAG 2.1.1 / 1.4.13）；
 * 2. 声明式菜单模式完整实现上下方向键、Home/End 焦点巡航契约；自定义面板模式不滥用 role="menu"。
 */
export declare const Dropdown: default_2.FC<DropdownProps>;

export declare interface DropdownMenuItem {
    key: string;
    label: default_2.ReactNode;
    icon?: default_2.ReactNode;
    danger?: boolean;
    disabled?: boolean;
    /** 独立分割线菜单项 */
    divider?: boolean;
    dividerAbove?: boolean;
    onClick?: () => void;
}

export declare interface DropdownProps {
    items?: DropdownMenuItem[];
    /** 自定义弹层面板内容（未传 items 或需要复杂布局时使用） */
    content?: default_2.ReactNode;
    align?: 'left' | 'right';
    /** 弹出方位（兼容 bottomLeft / bottomRight / topLeft / topRight） */
    placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight';
    trigger?: 'click' | 'hover';
    /** 受控打开状态 */
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    motion?: AbcMotionPreset;
    children: default_2.ReactNode;
    className?: string;
    panelClassName?: string;
}

/** 双栏紧凑导航（左侧极窄主轨 Rail + 右侧二级子菜单面板，同步响应四档尺寸与动效规格） */
export declare const DualColumnNav: default_2.FC<{
    brand?: AbcBrandInfo;
    items: AbcMenuItem[];
    pathname: string;
    tone?: AbcSidebarTone;
    size?: AbcSize;
    motion?: AbcMotionPreset;
    className?: string;
    onNavigate: (path: string, item: AbcMenuItem) => void;
}>;

export declare const DURATION_UNIT_FACTORS: Record<DurationUnit, number>;

export declare const DURATION_UNITS: readonly DurationUnit[];

export declare function DurationQuotaInput({ locale, zeroMeansUnlimited, defaultZeroUnit, allowedUnits, unitAriaLabel, ...rest }: DurationQuotaInputProps): React_2.JSX.Element;

export declare interface DurationQuotaInputProps extends QuotaUnitInputBaseProps {
    locale?: 'en' | 'zh';
    zeroMeansUnlimited?: boolean;
    defaultZeroUnit?: DurationUnit;
    allowedUnits?: readonly DurationUnit[];
    unitAriaLabel?: string;
}

export declare type DurationUnit = 's' | 'm' | 'h' | 'd';

/** 空状态占位组件（支持多尺寸层级与一键重置筛选交互） */
export declare const EmptyState: default_2.FC<EmptyStateProps>;

export declare interface EmptyStateProps {
    title?: default_2.ReactNode;
    description?: default_2.ReactNode;
    icon?: default_2.ReactNode;
    action?: default_2.ReactNode;
    /** 快捷重置筛选回调（未传自定义 action 时自动渲染重置按钮） */
    onReset?: () => void;
    /** 重置按钮文案 */
    resetText?: string;
    size?: AbcSize;
    motion?: AbcMotionPreset;
    compact?: boolean;
    className?: string;
}

/**
 * 页面与多页签级异常隔离边界 (ErrorBoundary / TabErrorBoundary)
 * 防止单个子模块渲染崩溃导致整个管理后台白屏，支持重试自愈与切换路由自动复位
 */
export declare class ErrorBoundary extends default_2.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state: ErrorBoundaryState;
    static getDerivedStateFromError(error: Error): ErrorBoundaryState;
    componentDidUpdate(prevProps: ErrorBoundaryProps): void;
    handleReset: () => void;
    render(): default_2.ReactNode;
}

export declare interface ErrorBoundaryProps {
    children: default_2.ReactNode;
    /** 路由或页签标识变更时自动重置错误状态 */
    resetKey?: string | number;
    /** 自定义标题（兼容 TabErrorBoundary tabTitle 用法） */
    title?: string;
    tabTitle?: string;
    /** 自定义降级渲染节点 */
    fallback?: default_2.ReactNode | ((error: Error, reset: () => void) => default_2.ReactNode);
    onReset?: () => void;
}

declare interface ErrorBoundaryState {
    error: Error | null;
}

/**
 * 分类胶囊单选组 (FilterPillGroup)
 * 用于状态过滤（如 全部/待审批/已通过/已拒绝）的快速切换
 */
export declare function FilterPillGroup<T extends string = string>({ options, value, onValueChange, size, className, ...props }: FilterPillGroupProps<T>): React_2.JSX.Element;

export declare interface FilterPillGroupProps<T extends string = string> extends Omit<React_2.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    options: ReadonlyArray<FilterPillOption<T>>;
    value: T;
    onValueChange: (value: T) => void;
    size?: 'sm' | 'md';
}

export declare interface FilterPillOption<T extends string = string> {
    value: T;
    label: React_2.ReactNode;
    count?: number;
    icon?: React_2.ReactNode;
    disabled?: boolean;
}

/**
 * 筛选工具栏 (FilterToolbar)
 * 用于统一容纳快速搜索框、筛选项下拉组、枚举胶囊组与全局重置按钮
 */
export declare const FilterToolbar: React_2.ForwardRefExoticComponent<FilterToolbarProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface FilterToolbarProps extends React_2.HTMLAttributes<HTMLDivElement> {
    surface?: boolean;
    hasActiveFilters?: boolean;
    onReset?: () => void;
    resetLabel?: React_2.ReactNode;
    search?: React_2.ReactNode;
    filters?: React_2.ReactNode;
    trailing?: React_2.ReactNode;
}

export declare function findBreadcrumbChain(items: AbcMenuItem[], pathname: string, acc?: AbcMenuItem[]): AbcMenuItem[];

export declare type FloatingPlacement = 'top' | 'bottom' | 'left' | 'right' | 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight' | 'rightStart';

export declare interface FloatingPositionResult {
    style: default_2.CSSProperties;
    actualSide: FloatingSide;
    /** 箭头在主轴方向相对浮层左上角的像素偏移量 */
    arrowOffset: number;
    portalContainer: HTMLElement | null;
    update: () => void;
}

export declare type FloatingSide = 'top' | 'bottom' | 'left' | 'right';

export declare function formatQuotaBytes(bytes: number, _locale?: 'en' | 'zh', zeroLabel?: string): string;

export declare function formatQuotaDuration(seconds: number, locale?: 'en' | 'zh', zeroLabel?: string): string;

/**
 * 标准表单项包装容器
 * 统一标签字重、必填星号、错误提示与辅助说明间距
 */
export declare const FormField: default_2.FC<FormFieldProps>;

export declare interface FormFieldProps {
    /** 字段名称标签 */
    label?: default_2.ReactNode;
    /** 关联表单控件的 htmlFor ID */
    htmlFor?: string;
    /** 是否必填标识 */
    required?: boolean;
    /** 标签右侧悬浮说明提示 */
    tooltip?: default_2.ReactNode;
    /** 校验错误提示文本 */
    error?: string;
    /** 底部辅助说明信息 */
    helperText?: default_2.ReactNode;
    /** 右上角附加信息（如字数统计、快捷填充链接） */
    extra?: default_2.ReactNode;
    /** 排版方向 */
    layout?: 'vertical' | 'horizontal';
    /** 控件标签与间距规格（xs | sm | md | lg） */
    size?: AbcSize;
    /** 组件交互动效规格 */
    motion?: AbcMotionPreset;
    className?: string;
    children: default_2.ReactNode;
}

/**
 * 解析浮层挂载的顶层安全容器：
 * 当触发器位于通过 showModal() 晋升至浏览器 #top-layer 的原生 <dialog open> 内部时，
 * 若盲目 Portal 到 document.body，会被模态层的背景 inert 机制拦截点击且绘制在遮罩下方；
 * 挂载到最近的 dialog[open] 既能逃逸内部滚动区的 overflow 裁剪，又保留在同一个 #top-layer 中。
 */
export declare function getOverlayPortalContainer(anchor?: Element | null): HTMLElement | null;

export declare const HeaderColumnFilterPopover: default_2.FC<HeaderColumnFilterPopoverProps>;

export declare interface HeaderColumnFilterPopoverProps {
    title: string;
    filterType?: 'text' | 'select';
    filterOptions?: SelectOption[];
    value: any;
    onApply: (nextValue: any) => void;
}

export declare const Icon: default_2.FC<IconProps>;

export declare const ICON_CATALOG: IconItem[];

/**
 * 图标文字组合徽标 (IconBadge)
 */
export declare function IconBadge({ icon, label, variant, size, className, ...props }: IconBadgeProps): React_2.JSX.Element;

export declare interface IconBadgeProps extends React_2.HTMLAttributes<HTMLSpanElement> {
    icon?: React_2.ReactNode;
    label: React_2.ReactNode;
    variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
    size?: 'xs' | 'sm' | 'md';
}

export declare interface IconItem {
    name: string;
    label: string;
    category: string;
}

/**
 * 企业级可视化菜单图标选择器 (IconPicker)
 * 同时支持两种调用模式：
 * 1. 受控弹窗模式：<IconPicker open={open} current={val} onClose={...} onSelect={...} />
 * 2. 内联表单控件模式：<IconPicker value={val} onChange={setVal} />
 */
export declare const IconPicker: default_2.FC<IconPickerProps>;

export declare interface IconPickerProps {
    /** 受控模态窗打开状态；若省略则自动渲染为带触发器的表单选择控件 */
    open?: boolean;
    /** 当前图标值（兼容旧版受控模态属性名） */
    current?: string;
    /** 受控表单图标值 */
    value?: string;
    /** 关闭模态回调 */
    onClose?: () => void;
    /** 选择图标回调（兼容旧版受控模态属性名） */
    onSelect?: (iconName: string) => void;
    /** 表单值变更回调 */
    onChange?: (iconName: string) => void;
    /** 内联触发器占位提示 */
    placeholder?: string;
    /** 是否允许一键清空 */
    clearable?: boolean;
    /** 是否禁用 */
    disabled?: boolean;
    /** 内联触发器尺寸规格 */
    size?: AbcSize;
    /** 组件交互动效规格 */
    motion?: AbcMotionPreset;
    className?: string;
}

export declare interface IconProps {
    /** 图标注册名称（支持 Lucide 名、语义短名或 el-icon-* 历史名称） */
    name?: string;
    /** 可选传入菜单文本用于智能语义推导最佳图标 */
    text?: string;
    /** 像素尺寸 */
    size?: number | string;
    /** 线条粗细 */
    strokeWidth?: number;
    /** 自定义类名 */
    className?: string;
    /** 局部注入的额外注册表 */
    registry?: Record<string, AbcIconComponent>;
}

/**
 * 统一图形缩略图与灯箱预览组件
 * 原生兼容常规图片 URL 与内联 SVG 源码字符串，并在 src 变更时自动复位加载异常状态
 */
export declare const ImagePreview: default_2.FC<ImagePreviewProps>;

export declare interface ImagePreviewProps {
    /** 支持远程图片直链、DataURL 或原始内联 <svg>...</svg> 代码 */
    src?: string | null;
    alt?: string;
    size?: AbcSize;
    motion?: AbcMotionPreset;
    width?: number | string;
    height?: number | string;
    rounded?: boolean;
    fit?: 'cover' | 'contain';
    placeholder?: default_2.ReactNode;
    className?: string;
    /** 是否允许点击打开灯箱放大旋转查看（默认开启） */
    zoomable?: boolean;
}

/**
 * 零业务耦合图片/SVG 上传组件
 * 通过 AbcProvider.uploadAdapter 或 customUpload 注入上传逻辑，彻底剥离固定后端 API 耦合
 */
export declare const ImageUpload: default_2.FC<ImageUploadProps>;

export declare interface ImageUploadProps {
    /** 当前图片 URL 或内联 <svg> 字符串 */
    value?: string;
    /** 上传成功或清空后的回调 */
    onChange?: (nextUrl: string) => void;
    /** 可选内联表单标签 */
    label?: default_2.ReactNode;
    /** 底部辅助说明文案 */
    helperText?: default_2.ReactNode;
    /** 校验错误信息 */
    error?: string;
    /** 允许的 MIME 类型 */
    accept?: string;
    /** 最大单文件体积（MB） */
    maxSizeMB?: number;
    /** 是否禁用 */
    disabled?: boolean;
    /** 局部自定义上传函数（优先级高于 AbcProvider.uploadAdapter；若均未注入则自动转 DataURL 预览用于原型演练） */
    customUpload?: (file: File) => Promise<string>;
    size?: AbcSize;
    motion?: AbcMotionPreset;
    placeholder?: string;
    className?: string;
}

/**
 * 企业级文本输入框
 * 支持受控/非受控、前置/后置插槽、一键清空并自动回焦、密码明密文切换、字数统计与内联校验提示
 */
export declare const Input: default_2.ForwardRefExoticComponent<InputProps & default_2.RefAttributes<HTMLInputElement>>;

/** 步进数值输入框（等宽数字对齐） */
export declare const InputNumber: default_2.FC<InputNumberProps>;

export declare interface InputNumberProps {
    value?: number | null;
    defaultValue?: number;
    onChange?: (val: number | null) => void;
    min?: number;
    max?: number;
    step?: number;
    size?: ControlSize;
    motion?: AbcMotionPreset;
    disabled?: boolean;
    placeholder?: string;
    invalid?: boolean;
    className?: string;
}

export declare interface InputProps extends Omit<default_2.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
    size?: ControlSize;
    /** 组件交互动效规格 */
    motion?: AbcMotionPreset;
    /** 内联字段标签（亦可配合外层 FormField 使用） */
    label?: default_2.ReactNode;
    /** 校验错误提示文案，存在时自动开启危险态高亮 */
    error?: string;
    /** 底部辅助提示说明 */
    helperText?: default_2.ReactNode;
    /** 前置插槽 */
    prefix?: default_2.ReactNode;
    /** 前置图标别名 */
    prefixIcon?: default_2.ReactNode;
    /** 后置插槽 */
    suffix?: default_2.ReactNode;
    /** 后置图标别名 */
    suffixIcon?: default_2.ReactNode;
    /** 是否支持一键清空 */
    allowClear?: boolean;
    /** allowClear 语义别名 */
    clearable?: boolean;
    /** 当 type="password" 时是否展示明密文切换按钮（默认开启） */
    passwordToggle?: boolean;
    /** 切换显示明文时的提示或无障碍标签 */
    showPasswordLabel?: string;
    /** 切换隐藏明文时的提示或无障碍标签 */
    hidePasswordLabel?: string;
    /** 是否展示底部字数统计 */
    showCount?: boolean;
    onClear?: () => void;
    invalid?: boolean;
    wrapperClassName?: string;
}

/**
 * 右侧检视面板 (InspectorPanel)
 * 用于承载右侧选定项的字段详情、状态流转和关联操作
 */
export declare const InspectorPanel: React_2.ForwardRefExoticComponent<InspectorPanelProps & React_2.RefAttributes<HTMLElement>>;

export declare interface InspectorPanelProps extends Omit<React_2.HTMLAttributes<HTMLElement>, 'title'> {
    'aria-label'?: string;
    title?: React_2.ReactNode;
    subtitle?: React_2.ReactNode;
    badge?: React_2.ReactNode;
    headerActions?: React_2.ReactNode;
    showClear?: boolean;
    onClear?: () => void;
    clearLabel?: string;
    loading?: boolean;
    loadingText?: React_2.ReactNode;
    error?: React_2.ReactNode;
    isEmpty?: boolean;
    hasSelection?: boolean;
    emptyIcon?: React_2.ReactNode;
    emptyMessage?: React_2.ReactNode;
    emptyDescription?: React_2.ReactNode;
    footer?: React_2.ReactNode;
}

export declare function isSvgSource(src?: string | null): boolean;

/** 键盘快捷键徽标 */
export declare const Kbd: default_2.FC<KbdProps>;

export declare interface KbdProps extends default_2.HTMLAttributes<HTMLElement> {
    size?: AbcSize;
    motion?: AbcMotionPreset;
}

/**
 * 路由无关的视图 DOM 保活与滚动位置记忆容器
 * 保持缓存子节点的稳定挂载顺序，避免路由切换时销毁重建组件树
 */
export declare const KeepAliveContainer: default_2.FC<KeepAliveContainerProps>;

export declare interface KeepAliveContainerProps {
    /** 当前激活视图唯一键（通常为路由 pathname） */
    activeKey: string;
    /** 是否开启缓存保活；为 false 时仅渲染当前视图 */
    enabled?: boolean;
    /** 最大缓存实例上限（超出后按最近最少访问淘汰） */
    maxCached?: number;
    /** 允许保留的活跃 key 白名单（如关闭页签后同步剔除缓存） */
    aliveKeys?: string[];
    /** 外部滚动容器引用，用于在切换回旧页签时自动恢复之前的阅读滚动高度 */
    scrollContainerRef?: default_2.RefObject<HTMLElement | null>;
    /** 强制刷新计数器：变化时销毁重建当前 activeKey 实例 */
    refreshSeed?: number;
    /** 当前激活视图容器的附加过渡动效类名 */
    activeClassName?: string;
    children: default_2.ReactNode;
}

/**
 * 独立的表单控件文本标签 (Label)
 * 语义化 label 标签，保持与 FormField 完全一致的字体规范、必填星号与色值
 */
export declare const Label: default_2.ForwardRefExoticComponent<LabelProps & default_2.RefAttributes<HTMLLabelElement>>;

export declare interface LabelProps extends default_2.LabelHTMLAttributes<HTMLLabelElement> {
    size?: AbcSize;
    required?: boolean;
}

/** 轻量加载指示器与局部容器遮罩组件 */
export declare const Loading: default_2.FC<LoadingProps>;

export declare interface LoadingProps {
    /** 是否处于加载态（包裹 children 时作为遮罩开关） */
    spinning?: boolean;
    /** 提示文字 */
    tip?: string;
    /** tip 语义别名 */
    text?: string;
    /** 尺寸规格 */
    size?: AbcSize;
    /** 动效规格 */
    motion?: AbcMotionPreset;
    /** 是否铺满全屏居中 */
    fullscreen?: boolean;
    /** fullscreen 驼峰别名 */
    fullScreen?: boolean;
    className?: string;
    children?: default_2.ReactNode;
}

export declare function LoadingStateCard({ message, paused, size, className, ...props }: LoadingStateCardProps): React_2.JSX.Element;

export declare interface LoadingStateCardProps extends React_2.HTMLAttributes<HTMLDivElement> {
    message: React_2.ReactNode;
    paused?: boolean;
    size?: 'sm' | 'md';
}

export declare function menuContainsPath(item: AbcMenuItem, pathname: string): boolean;

/**
 * 轻量级 KPI 指标卡 (MetricCard)
 * 内置趋势箭头徽标与纯 SVG 迷你折线走势图，无需加载重量级图表库即可用于密集仪表盘网格
 */
export declare const MetricCard: default_2.FC<MetricCardProps>;

export declare interface MetricCardProps extends Omit<default_2.HTMLAttributes<HTMLElement>, 'title' | 'prefix'> {
    title: default_2.ReactNode;
    value: default_2.ReactNode;
    prefix?: default_2.ReactNode;
    suffix?: default_2.ReactNode;
    trend?: MetricCardTrend;
    /** 轻量迷你走势折线数值序列（零 ECharts 依赖，直接渲染响应式内联 SVG） */
    sparkline?: number[];
    icon?: default_2.ReactNode;
    footer?: default_2.ReactNode;
    loading?: boolean;
    hoverable?: boolean;
    size?: AbcSize;
    motion?: AbcMotionPreset;
}

export declare interface MetricCardTrend {
    value: string | number;
    direction?: 'up' | 'down' | 'flat';
    label?: string;
}

export declare const Modal: default_2.FC<DialogProps>;

export declare type ModalProps = DialogProps;

/**
 * 企业级多页签导航栏
 * 支持卡片式 (card)、胶囊式 (pill)、极简下划线 (underline) 三种视觉风格，同步响应四档尺寸与动效规格
 */
export declare const MultiTabBar: default_2.FC<MultiTabBarProps>;

export declare interface MultiTabBarProps {
    tabs: AbcTabItem[];
    activePath: string;
    variant?: AbcTabStyle;
    size?: AbcSize;
    motion?: AbcMotionPreset;
    onSelect: (path: string) => void;
    onClose?: (path: string) => void;
    onCloseOthers?: (path: string) => void;
    onCloseRight?: (path: string) => void;
    onCloseAll?: () => void;
    onTogglePin?: (path: string) => void;
    onRefresh?: (path: string) => void;
    className?: string;
}

/**
 * 统一页内通知横幅
 * 支持 4 种语义状态、状态码与请求 ID 追踪徽章、操作按钮与关闭能力
 */
export declare const NotificationBanner: React_2.ForwardRefExoticComponent<NotificationBannerProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface NotificationBannerProps extends Omit<React_2.HTMLAttributes<HTMLDivElement>, 'title'> {
    variant?: NotificationVariant;
    title?: React_2.ReactNode;
    message?: React_2.ReactNode;
    description?: React_2.ReactNode;
    code?: string;
    status?: number;
    requestId?: string;
    actionHint?: React_2.ReactNode;
    action?: React_2.ReactNode;
    onDismiss?: () => void;
    dismissLabel?: string;
    hideIcon?: boolean;
}

export declare type NotificationVariant = 'error' | 'warning' | 'success' | 'info';

/**
 * 一次性敏感密钥/凭证展示弹窗 (OneTimeSecretDialog)
 * 专用于只下发一次的 API Key、Token、临时密码，强制提醒管理员及时安全保存
 */
export declare function OneTimeSecretDialog({ title, secret, open, secretValue, description, secretLabel, metadata, closeLabel, acknowledgeLabel, copyLabel, copiedLabel, copyErrorMessage, className, onClose, }: OneTimeSecretDialogProps): React_2.JSX.Element | null;

export declare interface OneTimeSecretDialogProps {
    title: string;
    secret?: string | null;
    open?: boolean;
    secretValue?: string | null;
    description?: string;
    secretLabel?: string;
    metadata?: OneTimeSecretMetadataItem[];
    closeLabel?: string;
    acknowledgeLabel?: string;
    copyLabel?: string;
    copiedLabel?: string;
    copyErrorMessage?: string;
    className?: string;
    onClose: () => void;
}

export declare interface OneTimeSecretMetadataItem {
    label: string;
    value: string;
}

/**
 * 标准业务页面布局容器
 * 统一封装企业后台页面的标题栏、面包屑、右上角动作按钮、KPI 摘要区与底部吸底提交栏
 */
export declare const PageContainer: default_2.FC<PageContainerProps>;

export declare interface PageContainerProps {
    /** 页面主标题 */
    title?: default_2.ReactNode;
    /** 页面副标题说明 */
    subtitle?: default_2.ReactNode;
    /** 标题旁状态徽标插槽 */
    tags?: default_2.ReactNode;
    /** 面包屑路径项 */
    breadcrumbs?: BreadcrumbEntry[];
    /** 右上角主操作按钮区 */
    extra?: default_2.ReactNode;
    /** 页头下方的数据指标/概览插槽 */
    headerContent?: default_2.ReactNode;
    /** 底部吸底固定操作栏（适合长表单保存/提交） */
    footer?: default_2.ReactNode;
    className?: string;
    children: default_2.ReactNode;
}

/** 企业级紧凑数据分页器（支持快速页码跳转、边界自动 Clamp、双模游标流水与零数据优雅提示） */
export declare const Pagination: default_2.FC<PaginationProps>;

export declare interface PaginationCursorMeta {
    /** 游标模式：是否包含下一页数据 */
    hasNext?: boolean;
    /** 游标模式：是否包含上一页数据 */
    hasPrev?: boolean;
    /** 下一页游标标识符 */
    nextCursor?: string | null;
    /** 上一页游标标识符 */
    prevCursor?: string | null;
    /** 当前游标标识符 */
    currentCursor?: string | null;
    /** 已加载累计记录数 */
    loadedCount?: number;
    /** 点击下一页游标回调 */
    onNext?: () => void;
    /** 点击上一页游标回调 */
    onPrev?: () => void;
    /** 重置游标返回第一批/最新数据 */
    onResetCursor?: () => void;
}

export declare interface PaginationProps extends Partial<PaginationCursorMeta> {
    /** 分页模式：'offset' 页码偏移模式（默认） | 'cursor' 游标时间线模式 */
    mode?: 'offset' | 'cursor';
    current?: number;
    currentPage?: number;
    page?: number;
    pageSize?: number;
    /** 每页条数（数字）或控件尺寸规格（xs/sm/md/lg） */
    size?: number | AbcSize;
    /** 分页器控件尺寸规格（避免与数字型 pageSize 冲突时的显式指定入口） */
    controlSize?: AbcSize;
    motion?: AbcMotionPreset;
    total?: number;
    pageSizeOptions?: number[];
    onChange?: (page: number, pageSize: number) => void;
    onPageChange?: (page: number) => void;
    onSizeChange?: (size: number) => void;
    onPageSizeChange?: (size: number) => void;
    showTotal?: boolean | ((total: number) => default_2.ReactNode);
    showQuickJumper?: boolean;
    className?: string;
    loading?: boolean;
}

/** 暂停指定 Toast 的自动关闭倒计时 */
export declare function pauseToast(id: string): void;

/** PermissionGuard 简短语义别名 */
export declare const Permission: default_2.FC<PermissionGuardProps>;

/** 声明式细粒度权限守卫包装组件（支持无权限隐藏与置灰禁用双策略） */
export declare const PermissionGuard: default_2.FC<PermissionGuardProps>;

export declare interface PermissionGuardProps {
    /** 所需权限码（单个或多个） */
    permission?: string | string[];
    /** permission 语义别名 */
    code?: string | string[];
    /** 多权限判定模式：满足任一 ('any') 或全部满足 ('all') */
    mode?: 'any' | 'all';
    /** 无权限时的降级策略：'hide' 隐藏或渲染 fallback，'disable' 置灰禁用并展示气泡提示 */
    fallbackStrategy?: 'hide' | 'disable';
    /** 禁用策略下的 Tooltip 提示语 */
    disabledTip?: string;
    /** 无权限时的降级占位节点 */
    fallback?: default_2.ReactNode;
    /** fallback 语义别名 */
    fallbackNode?: default_2.ReactNode;
    children: default_2.ReactNode;
}

export declare function pickBestByteUnit(bytes: number, zeroUnit?: ByteUnit, allowedUnits?: readonly ByteUnit[]): {
    unit: ByteUnit;
    amount: string;
};

export declare function pickBestDurationUnit(seconds: number, zeroUnit?: DurationUnit, allowedUnits?: readonly DurationUnit[]): {
    unit: DurationUnit;
    amount: string;
};

/** 气泡卡片组件（基于顶层视口感知 Portal 引擎，承载富交互面板、筛选器或说明卡片） */
export declare const Popover: default_2.FC<PopoverProps>;

export declare interface PopoverProps extends Omit<DropdownProps, 'items' | 'align' | 'content'> {
    title?: default_2.ReactNode;
    content: default_2.ReactNode;
    align?: 'left' | 'right' | 'start' | 'end';
}

/**
 * SaaS 租户套餐订阅对比卡 (PricingCard)
 */
export declare const PricingCard: default_2.FC<PricingCardProps>;

export declare interface PricingCardProps {
    tier: default_2.ReactNode;
    price: default_2.ReactNode;
    period?: default_2.ReactNode;
    description?: default_2.ReactNode;
    features: Array<PricingFeatureItem | string>;
    recommended?: boolean;
    badge?: default_2.ReactNode;
    ctaText?: string;
    disabled?: boolean;
    loading?: boolean;
    onSelect?: () => void;
    size?: AbcSize;
    motion?: AbcMotionPreset;
    className?: string;
}

export declare interface PricingFeatureItem {
    text: default_2.ReactNode;
    included?: boolean;
}

export declare function ProColumnSettingsPopover<T = Record<string, any>>({ columns, searchableFieldNames, settings, hasActionColumn, defaultActionWidth, motion, onToggleVisible, onSetAllVisible, onSetFixed, onSetWidth, onSetOrder, onSetSearchVisible, onReset, }: ProColumnSettingsPopoverProps<T>): default_2.JSX.Element;

export declare interface ProColumnSettingsPopoverProps<T = Record<string, any>> {
    columns: AbcColumn<T>[];
    searchableFieldNames: Set<string>;
    settings: AbcTablePersistedSettings;
    hasActionColumn?: boolean;
    defaultActionWidth?: number;
    motion?: AbcMotionPreset;
    onToggleVisible: (key: string) => void;
    onSetAllVisible: (allKeys: string[], visible: boolean) => void;
    onSetFixed: (key: string, fixed: 'left' | 'right' | null | undefined) => void;
    onSetWidth: (key: string, width: number) => void;
    onSetOrder: (order: string[]) => void;
    onSetSearchVisible: (key: string, visible: boolean) => void;
    onReset: () => void;
}

export declare interface ProConfigFieldSchema {
    name: string;
    label: string;
    type?: ProConfigFieldType;
    placeholder?: string;
    helperText?: string;
    required?: boolean;
    options?: SelectOption[];
    /** image 类型：支持同时直接粘贴 URL/内联 SVG 源码并实时在左侧缩略框预览 */
    allowDirectUrlInput?: boolean;
}

export declare type ProConfigFieldType = 'text' | 'password' | 'number' | 'textarea' | 'switch' | 'select' | 'image';

/**
 * Schema 驱动的企业级分组参数配置页组件 (ProConfigForm)
 * 原生支持图片直链、文件上传与内联 <svg> 源码的实时灯箱预览及脏数据重置
 */
export declare function ProConfigForm<T extends Record<string, any> = Record<string, any>>({ groups, initialValues, layoutMode, onSubmit, submitText, }: ProConfigFormProps<T>): default_2.JSX.Element;

export declare interface ProConfigFormProps<T extends Record<string, any> = Record<string, any>> {
    groups: ProConfigGroupSchema[];
    initialValues: T;
    layoutMode?: 'split' | 'grid';
    onSubmit: (values: T) => void | Promise<void>;
    submitText?: string;
}

export declare interface ProConfigGroupSchema {
    key: string;
    title: string;
    description?: string;
    columns?: 1 | 2;
    fields: ProConfigFieldSchema[];
}

export declare function ProFloatingBatchBar<T = Record<string, any>>({ selectedKeys, selectedRows, batchActions, onBatchDelete, onClear, motion, }: {
    selectedKeys: Array<string | number>;
    selectedRows: T[];
    batchActions?: ProTableBatchAction<T>[];
    onBatchDelete?: () => void;
    onClear: () => void;
    motion?: AbcMotionPreset;
}): default_2.JSX.Element | null;

/**
 * 企业级分组表单排版引擎
 * 支持 Vercel/Stripe 风格的左侧说明导览 + 右侧卡片分栏 ('split') 与经典多列卡片 ('grid')
 */
export declare const ProFormLayout: default_2.FC<ProFormLayoutProps>;

export declare interface ProFormLayoutProps {
    /** 排版形态：左右导览分栏 ('split') 或卡片网格堆叠 ('grid') */
    mode?: 'split' | 'grid';
    sections: ProFormSection[];
    className?: string;
}

export declare interface ProFormSection {
    key: string;
    title: default_2.ReactNode;
    description?: default_2.ReactNode;
    columns?: 1 | 2 | 3;
    children: default_2.ReactNode;
}

/**
 * 线性与 SVG 环形进度条 (Progress)
 */
export declare const Progress: default_2.FC<ProgressProps>;

export declare interface ProgressProps {
    /** 0 ~ 100 进度百分比 */
    percent: number;
    type?: 'line' | 'circle';
    tone?: 'primary' | 'success' | 'warning' | 'danger';
    showInfo?: boolean;
    /** 环形直径 / 线性条高度（支持具体像素或通用 xs/sm/md/lg 规格） */
    size?: number | AbcSize;
    motion?: AbcMotionPreset;
    className?: string;
}

/**
 * ABC Design 企业级全功能自适应壳层 (ProLayout)
 * 一套统一 API 支持 5 种主流中后台布局拓扑（sidebar / top / mix / dual-column / auth）
 * 并内置移动端抽屉导航、多页签栏、KeepAlive 保活、⌘K 拼音指令面板、防篡改水印与实时定制中心。
 */
export declare const ProLayout: default_2.FC<ProLayoutProps>;

export declare interface ProLayoutProps {
    /** 品牌标识与项目名称 */
    brand?: AbcBrandInfo;
    /** 树形菜单数据（路由无关） */
    menuItems: AbcMenuItem[];
    /** 当前路由路径 */
    pathname: string;
    /** 路由跳转处理回调 */
    onNavigate: (path: string, item?: AbcMenuItem) => void;
    /** 受控布局设置 */
    settings?: Partial<AbcLayoutSettings>;
    /** 默认初始布局设置 */
    defaultSettings?: Partial<AbcLayoutSettings>;
    /** 布局设置变更回调 */
    onSettingsChange?: (next: AbcLayoutSettings) => void;
    /** 当前登录用户信息与下拉菜单项 */
    user?: AbcUserInfo;
    /** 顶栏右侧扩展插槽（如多租户切换器、消息中心铃铛） */
    headerExtra?: default_2.ReactNode;
    /** 注入全局指令面板的自定义快捷动作 */
    commandActions?: CommandActionItem[];
    /** 受控页签列表（若不传则由 ProLayout 根据访问轨迹自动维护） */
    tabs?: AbcTabItem[];
    onTabsChange?: (tabs: AbcTabItem[]) => void;
    /** 当切换至 auth 模式时的认证卡片内容（若未提供则渲染当前 children） */
    authRender?: default_2.ReactNode;
    authProps?: Partial<AuthLayoutProps>;
    /** 是否显示右上角主题与布局配置触发器（默认开启） */
    showCustomizerTrigger?: boolean;
    /** 覆写壳层、侧栏与导航控件尺寸规格（默认继承 AbcProvider.theme.componentSize） */
    size?: AbcSize;
    /** 覆写壳层交互动效规格（默认继承 AbcProvider.theme.motion） */
    motion?: AbcMotionPreset;
    children: default_2.ReactNode;
}

export declare const ProRowActionsOverflow: default_2.FC<{
    actions: ResolvedRowActionItem[];
    maxInline?: number;
}>;

/**
 * Schema 驱动的企业级全功能 CRUD 数据表格 (ProTable)
 * 完整对齐并融合 CrudTable 交互范式：
 * - 可折叠多维搜索卡片（支持文本、数值、多选、单日期、双月日期区间）
 * - 表头单列气泡筛选 + 表头内联筛选行双模式 + 表头右键快捷菜单
 * - 服务端接口检索与客户端本地拼音检索一键切换
 * - 定时自动轮询、UTF-8 CSV 导出、沉浸全屏工作台、列宽/列序/左右冻结/筛选项持久化
 * - 行操作自动溢出折叠、毛玻璃悬浮批量操作胶囊栏、草稿自动记忆与字段级校验
 */
export declare function ProTable<T extends Record<string, any> = Record<string, any>>({ storageKey, title, columns, fields, dataSource, loading: propLoading, request, rowKey, defaultPageSize, pagination, renderPagination, selectedRowKey, onRowClick, searchVariant, onSearchChange, onSearchSubmit, onSearchReset, clientFilter: initialClientFilter, showClientFilterSwitch, defaultSearchCollapsed, autoRefresh, exportable, onExport, syncToUrl, viewable, formContainer, formColumns, rowActions, maxInlineActions, rowSelection, batchActions, expandable, maxHeight, permissions, toolbarExtra, motion, onSaveRecord, onDeleteRecords, }: ProTableProps<T>): default_2.JSX.Element;

export declare interface ProTableBatchAction<T = Record<string, any>> {
    key: string;
    label: default_2.ReactNode;
    icon?: default_2.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'danger';
    permission?: string;
    onClick: (selectedKeys: Array<string | number>, selectedRows: T[]) => void | Promise<void>;
}

export declare interface ProTableFieldSchema {
    name: string;
    label: string;
    type?: 'text' | 'number' | 'select' | 'textarea' | 'switch' | 'date' | 'dateRange' | 'tags' | 'icon';
    options?: SelectOption[];
    /** 下拉选择器是否启用多选模式 */
    multiple?: boolean;
    placeholder?: string;
    helperText?: string;
    defaultValue?: any;
    /** 栅格跨度（在双列表单或 4 列检索面板中可跨 2 列） */
    span?: 1 | 2;
    required?: boolean;
    disabled?: boolean | ((editingRecord: Record<string, any> | null) => boolean);
    /** 自定义同步校验器，返回错误提示字符串即拦截提交 */
    validator?: (value: any, allValues: Record<string, any>) => string | undefined;
    hideInSearch?: boolean;
    hideInForm?: boolean;
}

export declare type ProTablePaginationConfig = boolean | (PaginationProps & {
    mode?: 'offset' | 'cursor';
});

export declare interface ProTableProps<T extends Record<string, any> = Record<string, any>> {
    /** 表格标识键（用于本地持久化列宽、列序、固定列、显隐与新建表单草稿） */
    storageKey?: string;
    title?: default_2.ReactNode;
    columns: AbcColumn<T>[];
    /** 搜索与新建/编辑弹窗共用的字段定义 */
    fields?: ProTableFieldSchema[];
    /** 静态数据源（纯前端模式或外层受控数据） */
    dataSource?: T[];
    /** 是否处于加载状态（支持受控外部 loading，默认在 request 查询期间自驱动） */
    loading?: boolean;
    /** 异步服务端查询函数 */
    request?: (params: ProTableRequestParams) => Promise<ProTableRequestResult<T>>;
    rowKey?: keyof T | ((record: T) => string | number);
    defaultPageSize?: number;
    /** 自定义分页器配置：传 false 隐藏底栏分页，或传具体 Pagination 配置，或完全由 request 自动推导 */
    pagination?: ProTablePaginationConfig;
    /** 自定义底部分页插槽渲染函数 */
    renderPagination?: (paginationMeta: {
        current: number;
        pageSize: number;
        total: number;
        mode: 'offset' | 'cursor';
    }) => default_2.ReactNode;
    /** 受控单行高亮键值（与 Drawer 抽屉详情联动） */
    selectedRowKey?: string | number | null;
    /** 行点击回调（单行点击唤起 Drawer 或选中） */
    onRowClick?: (record: T, event: default_2.MouseEvent<HTMLTableRowElement>) => void;
    /** 搜索面板展示形态：'card' 默认多维折叠卡片 | 'toolbar' 紧凑水平工具条 | 'none' 不展示搜索面板 */
    searchVariant?: 'card' | 'toolbar' | 'none';
    /** 搜索条件实时变更时的受控回调 */
    onSearchChange?: (filters: Record<string, any>) => void;
    /** 点击搜索按钮或提交检索时的回调 */
    onSearchSubmit?: (filters: Record<string, any>) => void;
    /** 点击重置按钮时的回调 */
    onSearchReset?: () => void;
    /**
     * 是否启用当前数据本地前端筛选模式（默认自动判断：无 request 时开启；后端接口不支持搜索时亦可开启）
     */
    clientFilter?: boolean;
    /** 是否在工具栏展示“前端筛选 / 接口筛选”实时切换开关 */
    showClientFilterSwitch?: boolean;
    /** 搜索面板超出 3 项时初始是否自动折叠为单行（默认 true） */
    defaultSearchCollapsed?: boolean;
    /** 是否在工具栏显示定时自动轮询控件（默认在传入 request 时开启） */
    autoRefresh?: boolean;
    /** 是否启用 CSV 数据导出按钮（默认 true） */
    exportable?: boolean;
    /** 自定义导出回调（未传时默认导出当前可见列与过滤后数据的 UTF-8 CSV） */
    onExport?: (rows: T[]) => void;
    /** 是否将当前页码与筛选条件双向同步至浏览器 URL 查询参数 */
    syncToUrl?: boolean;
    /** 是否自动开启操作列“详情”只读查看弹窗（基于 Descriptions 渲染） */
    viewable?: boolean;
    /** 新建/编辑表单承载容器形态：模态弹窗 ('dialog') 或侧滑抽屉 ('drawer') */
    formContainer?: 'dialog' | 'drawer';
    /** 新建/编辑表单栅格列数（1 单列 / 2 双列并排，默认字段 >= 6 时自动采用 2 列） */
    formColumns?: 1 | 2;
    /** 操作列扩展自定义按钮 */
    rowActions?: ProTableRowAction<T>[];
    /** 操作列最多平铺按钮数，超出自动收纳至 `...` 下拉菜单（默认 3） */
    maxInlineActions?: number;
    /** 是否强制开启多选框（默认当配置 onDeleteRecords 或 batchActions 时自动开启） */
    rowSelection?: boolean;
    /** 悬浮批量操作栏扩展动作 */
    batchActions?: ProTableBatchAction<T>[];
    /** 展开详情子面板与树形数据配置 */
    expandable?: AbcTableExpandableConfig<T>;
    /** 表格纵向最大高度（开启后表头吸顶内滚） */
    maxHeight?: number | string;
    /** 细粒度 CRUD 权限码绑定 */
    permissions?: {
        create?: string;
        update?: string;
        delete?: string;
    };
    /** 工具栏左侧附加按钮插槽 */
    toolbarExtra?: default_2.ReactNode;
    /** 表格整体交互动效规格 */
    motion?: AbcMotionPreset;
    /** 新建/编辑保存回调 */
    onSaveRecord?: (values: Record<string, any>, editingRecord: T | null) => void | Promise<void>;
    /** 单行或批量删除回调 */
    onDeleteRecords?: (keys: Array<string | number>) => void | Promise<void>;
}

export declare interface ProTableRequestParams {
    current: number;
    pageSize: number;
    filters: Record<string, any>;
    sortField?: string;
    sortOrder?: SortDirection;
}

export declare interface ProTableRequestResult<T> {
    data: T[];
    total: number;
}

export declare interface ProTableRowAction<T = Record<string, any>> {
    key: string;
    label: default_2.ReactNode;
    icon?: default_2.ReactNode;
    danger?: boolean;
    permission?: string;
    hidden?: (record: T) => boolean;
    onClick: (record: T) => void;
}

/** 向全局队列推送一条 Toast 消息 */
export declare function pushToast(tone: ToastTone, messageOrOptions: default_2.ReactNode | ToastOptions, duration?: number): string;

/**
 * 快捷选择条 (QuickSelectBar)
 * 紧凑型水平快速筛选器
 */
export declare function QuickSelectBar({ label, items, selectedId, headerAction, onSelect, onClear, allLabel, className, }: QuickSelectBarProps): React_2.JSX.Element;

export declare interface QuickSelectBarItem {
    id?: string;
    key?: string;
    label: React_2.ReactNode;
    code?: string;
    active?: boolean;
    count?: number;
    onSelect?: () => void;
}

export declare interface QuickSelectBarProps {
    label: string;
    items: QuickSelectBarItem[];
    selectedId?: string | null;
    headerAction?: React_2.ReactNode;
    onSelect?: (id: string | null) => void;
    onClear?: () => void;
    allLabel?: string;
    className?: string;
}

export declare interface QuotaUnitInputBaseProps {
    id?: string;
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    size?: 'default' | 'sm';
    disabled?: boolean;
    hideHint?: boolean;
    className?: string;
    'aria-label'?: string;
    'aria-describedby'?: string;
    placeholder?: string;
}

/** 单选组（支持常规圆点与分段胶囊卡片双样式、全四档尺寸规格及动效规格） */
export declare const RadioGroup: default_2.FC<RadioGroupProps>;

export declare interface RadioGroupOption {
    label: default_2.ReactNode;
    value: string | number;
    disabled?: boolean;
}

export declare interface RadioGroupProps {
    options: RadioGroupOption[];
    value?: string | number;
    defaultValue?: string | number;
    onChange?: (val: string | number) => void;
    variant?: 'default' | 'segmented';
    size?: AbcSize;
    motion?: AbcMotionPreset;
    disabled?: boolean;
    className?: string;
}

export declare function ReadErrorBanner({ message, code, status, requestId, onRetry, retryLabel, pendingLabel, retryAriaLabel, pending, action, ...props }: ReadErrorBannerProps): React_2.JSX.Element;

export declare interface ReadErrorBannerProps extends Omit<NotificationBannerProps, 'action' | 'variant'> {
    onRetry?: () => void;
    retryLabel?: string;
    pendingLabel?: string;
    retryAriaLabel?: string;
    pending?: boolean;
    action?: React_2.ReactNode;
}

/**
 * 必填审计原因确认弹窗 (ReasonedActionDialog)
 * 专用于高安全等级操作（如删除租户、切换环境、强制变更配额、重置密钥等），强制要求填入审计说明
 */
export declare function ReasonedActionDialog({ open, title, description, confirmLabel, cancelLabel, onCancel, workingLabel, reasonLabel, reasonPlaceholder, reasonHint, reasonTooLongMessage, closeLabel, minReasonLength, maxReasonLength, destructive, variant, pending, confirmDisabled, error, maxWidthClass, className, children, onOpenChange, onConfirm, }: ReasonedActionDialogProps): React_2.JSX.Element;

export declare interface ReasonedActionDialogProps {
    open: boolean;
    title: React_2.ReactNode;
    description: React_2.ReactNode;
    confirmLabel: React_2.ReactNode;
    cancelLabel?: React_2.ReactNode;
    onCancel?: () => void;
    workingLabel?: React_2.ReactNode;
    reasonLabel?: React_2.ReactNode;
    reasonPlaceholder?: string;
    reasonHint?: React_2.ReactNode;
    reasonTooLongMessage?: React_2.ReactNode;
    closeLabel?: string;
    minReasonLength?: number;
    maxReasonLength?: number;
    destructive?: boolean;
    variant?: 'default' | 'destructive';
    pending?: boolean;
    confirmDisabled?: boolean;
    error?: string | null;
    maxWidthClass?: string;
    className?: string;
    children?: React_2.ReactNode;
    onOpenChange: (open: boolean) => void;
    onConfirm: (reason: string) => void;
}

/**
 * 必填审计原因侧边抽屉 (ReasonedActionDrawer)
 * 专用于承载复杂大表单（如配额上限配置、权限清单）且需要强制填写审计原因的场景，支持与主抽屉平级并排展开
 */
export declare function ReasonedActionDrawer({ open, onClose, title, description, confirmLabel, cancelLabel, workingLabel, reasonLabel, reasonPlaceholder, reasonHint, reasonTooLongMessage, minReasonLength, maxReasonLength, destructive, pending, confirmDisabled, error, width, cascadeMode, children, onConfirm, }: ReasonedActionDrawerProps): React_2.JSX.Element;

export declare interface ReasonedActionDrawerProps {
    open: boolean;
    onClose: () => void;
    title: React_2.ReactNode;
    description?: React_2.ReactNode;
    confirmLabel: React_2.ReactNode;
    cancelLabel?: React_2.ReactNode;
    workingLabel?: React_2.ReactNode;
    reasonLabel?: React_2.ReactNode;
    reasonPlaceholder?: string;
    reasonHint?: React_2.ReactNode;
    reasonTooLongMessage?: React_2.ReactNode;
    minReasonLength?: number;
    maxReasonLength?: number;
    destructive?: boolean;
    pending?: boolean;
    confirmDisabled?: boolean;
    error?: string | null;
    width?: number | string;
    cascadeMode?: 'stack' | 'adjacent';
    children?: React_2.ReactNode;
    onConfirm: (reason: string) => void;
}

/** 全局注册自定义业务图标映射，供菜单路由配置按字符串名称动态解析 */
export declare function registerAbcIcons(icons: Record<string, AbcIconComponent>): void;

export declare interface ResolvedRowActionItem {
    key: string;
    label: default_2.ReactNode;
    icon?: default_2.ReactNode;
    danger?: boolean;
    onClick: () => void;
}

/**
 * 企业级结果与异常状态反馈页 (Result: 403 / 404 / 500 / 成功 / 失败)
 */
export declare const Result: default_2.FC<ResultProps>;

export declare interface ResultProps {
    status?: ResultStatus;
    title: default_2.ReactNode;
    subTitle?: default_2.ReactNode;
    extra?: default_2.ReactNode;
    children?: default_2.ReactNode;
    size?: AbcSize;
    motion?: AbcMotionPreset;
    className?: string;
}

export declare type ResultStatus = 'success' | 'info' | 'warning' | 'error' | '403' | '404' | '500';

/** 恢复指定 Toast 的自动关闭倒计时 */
export declare function resumeToast(id: string): void;

/**
 * 富图标文本解析组件 (RichIconText)
 * 兼容 `[icon:xxx]` 占位符解析
 */
export declare function RichIconText({ text, iconSize, preserveSrToken, className, ...props }: RichIconTextProps): React_2.JSX.Element;

export declare interface RichIconTextProps extends React_2.HTMLAttributes<HTMLSpanElement> {
    text: string;
    iconSize?: number;
    preserveSrToken?: boolean;
}

/**
 * 统一定制搜索框组件 (SearchInput)
 * 基于 Input 的原生 prefix/suffix 机制，图标垂直精确居中，支持一键清空与回车监听
 */
export declare const SearchInput: React_2.ForwardRefExoticComponent<SearchInputProps & React_2.RefAttributes<HTMLInputElement>>;

export declare interface SearchInputProps extends Omit<InputProps, 'prefix'> {
    containerClassName?: string;
    wrapperClassName?: string;
    onClear?: () => void;
    clearLabel?: string;
}

/**
 * 分段选择器控件 (SegmentedControl)
 * 用于在多个互斥选项之间进行快捷切换，支持图标、角标、等宽/流式自适应布局
 */
export declare function SegmentedControl<T extends string | number>({ options, value, onChange, onValueChange, disabled, size, motion, block, className, ...props }: SegmentedControlProps<T>): React_2.JSX.Element;

export declare interface SegmentedControlProps<T extends string | number> extends Omit<React_2.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    options: ReadonlyArray<SegmentedOption<T>>;
    value: T;
    onChange?: (value: T) => void;
    onValueChange?: (value: T) => void;
    disabled?: boolean;
    size?: AbcSize;
    motion?: AbcMotionPreset;
    block?: boolean;
}

export declare interface SegmentedOption<T extends string | number> {
    value: T;
    label: React_2.ReactNode;
    icon?: React_2.ReactNode;
    disabled?: boolean;
    badge?: React_2.ReactNode;
}

/**
 * 企业级选择器组件
 * 支持单选/多选胶囊标签、拼音首字母检索、Portal 顶层挂载（兼容原生 <dialog> Top-Layer 模态层）、
 * 视口碰撞上下翻转及无障碍键盘循环导航。
 */
export declare const Select: default_2.FC<SelectProps>;

export declare interface SelectOption {
    label: string;
    value: string | number;
    disabled?: boolean;
    description?: string;
}

export declare interface SelectProps {
    options: SelectOption[];
    value?: string | number | Array<string | number>;
    defaultValue?: string | number | Array<string | number>;
    onChange?: (val: any) => void;
    onBlur?: default_2.FocusEventHandler<HTMLElement>;
    label?: default_2.ReactNode;
    error?: string;
    helperText?: default_2.ReactNode;
    id?: string;
    name?: string;
    title?: string;
    placeholder?: string;
    multiple?: boolean;
    searchable?: boolean;
    allowClear?: boolean;
    clearable?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    size?: ControlSize;
    motion?: AbcMotionPreset;
    className?: string;
    /** 外层容器扩展样式类名（如控制宽度 w-32 或 shrink-0 等） */
    wrapperClassName?: string;
    /** 下拉浮层容器扩展样式类名 */
    dropdownClassName?: string;
    /** 是否同步触发器宽度至下拉菜单最小宽度（默认 true） */
    matchWidth?: boolean;
    /** 无障碍语义标签 */
    'aria-label'?: string;
}

/** 经典侧边栏树形菜单渲染器（支持深浅双色、四档尺寸与动效、折叠 Portal 悬浮子菜单与平滑网格手风琴展开） */
export declare const SidebarNav: default_2.FC<{
    brand?: AbcBrandInfo;
    items: AbcMenuItem[];
    pathname: string;
    collapsed?: boolean;
    accordion?: boolean;
    tone?: AbcSidebarTone;
    size?: AbcSize;
    motion?: AbcMotionPreset;
    onNavigate: (path: string, item: AbcMenuItem) => void;
    className?: string;
}>;

/**
 * 骨架屏占位原语
 * 复用 @abc-design/tokens 全局声明的 .abc-skeleton-wave，零运行时内联 <style> 注入
 */
export declare const Skeleton: default_2.FC<SkeletonProps>;

export declare type SkeletonAnimation = 'wave' | 'pulse' | 'none';

/** 指标卡预设骨架屏（消除首屏 KPI 卡片 CLS 跳动） */
export declare const SkeletonCard: default_2.FC<SkeletonCardProps>;

export declare interface SkeletonCardProps extends default_2.HTMLAttributes<HTMLDivElement> {
    animation?: SkeletonAnimation;
}

/** 图表容器预设骨架屏（用于报表页异步加载阶段防 CLS） */
export declare const SkeletonChart: default_2.FC<SkeletonChartProps>;

export declare interface SkeletonChartProps extends default_2.HTMLAttributes<HTMLDivElement> {
    height?: number | string;
    animation?: SkeletonAnimation;
}

export declare interface SkeletonProps extends default_2.HTMLAttributes<HTMLDivElement> {
    variant?: SkeletonVariant;
    animation?: SkeletonAnimation;
    motion?: AbcMotionPreset;
    width?: number | string;
    height?: number | string;
}

/** 数据表格预设骨架屏 */
export declare const SkeletonTable: default_2.FC<SkeletonTableProps>;

export declare interface SkeletonTableProps extends default_2.HTMLAttributes<HTMLDivElement> {
    rows?: number;
    columns?: number;
    showHeader?: boolean;
    animation?: SkeletonAnimation;
}

export declare type SkeletonVariant = 'text' | 'circular' | 'rectangular' | 'rounded';

export declare const SliderVerify: default_2.FC<SliderVerifyProps>;

export declare interface SliderVerifyProps {
    canvasWidth?: number;
    canvasHeight?: number;
    size?: AbcSize;
    motion?: AbcMotionPreset;
    /** 验证通过回调，携带服务端 nonceStr 与滑块横向偏移像素值 */
    onSuccess: (data: {
        nonceStr: string;
        value: number;
    }) => void;
    onFail?: () => void;
    /** 局部自定义验证码拉取函数（优先级高于 AbcProvider.captchaAdapter；均未传时启用内置离线 SVG 拼图挑战） */
    captchaFetcher?: AbcCaptchaAdapter;
}

/** 智能双模分页器（自动根据是否提供 total 或游标属性平滑降级切换） */
export declare const SmartPagination: default_2.FC<PaginationProps>;

export declare type SortDirection = 'asc' | 'desc' | null;

/** 弹性间距编排容器 */
export declare const Space: default_2.FC<SpaceProps>;

export declare interface SpaceProps extends default_2.HTMLAttributes<HTMLDivElement> {
    direction?: 'horizontal' | 'vertical';
    size?: AbcSize;
    wrap?: boolean;
    align?: 'start' | 'center' | 'end' | 'stretch';
}

/**
 * 主从分栏布局 (SplitInspectorLayout)
 * 广泛用于主表/右侧实时详情检视的经典工作台模式，支持自适应断点与粘性定位
 */
export declare function SplitInspectorLayout({ children, inspector, ratio, stickyInspector, className, ...props }: SplitInspectorLayoutProps): React_2.JSX.Element;

export declare interface SplitInspectorLayoutProps extends React_2.HTMLAttributes<HTMLDivElement> {
    children: React_2.ReactNode;
    inspector?: React_2.ReactNode;
    ratio?: 'default' | 'balanced' | 'wide-master';
    stickyInspector?: boolean;
}

/** 聚光灯跟随交互卡片（常用于登录页、仪表盘核心指标卡与亮眼特性展示） */
export declare const SpotlightCard: default_2.FC<SpotlightCardProps>;

export declare interface SpotlightCardProps extends default_2.HTMLAttributes<HTMLDivElement> {
    spotlightColor?: string;
    size?: AbcSize;
    motion?: AbcMotionPreset;
    hoverable?: boolean;
}

/** 语义化状态标签（兼容 tone / status / color 与 text / label / children） */
export declare const StatusTag: default_2.FC<StatusTagProps>;

export declare interface StatusTagProps extends default_2.HTMLAttributes<HTMLSpanElement> {
    tone?: StatusTone;
    /** tone 语义别名（如 'success' | 'warning' | 'error' | 'default' | 'info'） */
    status?: string;
    /** 自定义色板别名（如 'purple' | 'cyan' | 'orange' | 'teal' | 'pink'） */
    color?: string;
    /** 快捷文案属性（未传 children 时生效） */
    text?: default_2.ReactNode;
    /** text 别名 */
    label?: default_2.ReactNode;
    /** 是否显示前置圆点指示器 */
    dot?: boolean;
    /** 圆点是否带呼吸脉冲（适合运行中/处理中） */
    pulse?: boolean;
    size?: AbcSize;
    motion?: AbcMotionPreset;
}

export declare type StatusTone = 'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'purple' | 'cyan' | 'orange' | 'teal' | 'pink';

export declare interface StepItem {
    key?: string;
    title: default_2.ReactNode;
    description?: default_2.ReactNode;
    icon?: default_2.ReactNode;
    status?: StepStatus;
    disabled?: boolean;
}

/**
 * 企业级分步引导条 (Steps)
 * 支持水平/垂直双向排布、错误中断态与可点击跳步
 */
export declare const Steps: default_2.FC<StepsProps>;

export declare interface StepsProps {
    items: StepItem[];
    /** 当前激活步骤索引（从 0 开始） */
    current?: number;
    /** 当前步骤整体状态 */
    status?: StepStatus;
    direction?: 'horizontal' | 'vertical';
    size?: AbcSize;
    motion?: AbcMotionPreset;
    onChange?: (nextStepIndex: number) => void;
    className?: string;
}

export declare type StepStatus = 'wait' | 'process' | 'finish' | 'error';

/** 拨动开关组件（支持四档尺寸规格、动效规格、异步 loading 防重入态与旧尺寸别名兼容） */
export declare const Switch: default_2.FC<SwitchProps>;

export declare interface SwitchProps {
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    loading?: boolean;
    size?: AbcSize | 'small' | 'default';
    motion?: AbcMotionPreset;
    checkedLabel?: default_2.ReactNode;
    uncheckedLabel?: default_2.ReactNode;
    checkedChildren?: default_2.ReactNode;
    unCheckedChildren?: default_2.ReactNode;
    ariaLabel?: string;
    className?: string;
}

export declare const TabErrorBoundary: typeof ErrorBoundary;

export declare interface TabItem<K extends string = string> {
    key: K;
    label: default_2.ReactNode;
    icon?: default_2.ReactNode;
    badge?: default_2.ReactNode;
    disabled?: boolean;
    children?: default_2.ReactNode;
}

export declare const Table: React_2.ForwardRefExoticComponent<TableProps & React_2.RefAttributes<HTMLTableElement>>;

export declare const TableBody: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLTableSectionElement> & React_2.RefAttributes<HTMLTableSectionElement>>;

export declare const TableCaption: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLTableCaptionElement> & React_2.RefAttributes<HTMLTableCaptionElement>>;

export declare const TableCell: React_2.ForwardRefExoticComponent<React_2.TdHTMLAttributes<HTMLTableCellElement> & React_2.RefAttributes<HTMLTableCellElement>>;

/**
 * 企业级核心数据表格引擎 (TableCore)
 * 支持多列累加粘性左/右固定列、表头右键快捷菜单、拖拽调节列宽、拖拽交换列序、
 * 排序、表头气泡/内联双模筛选、可展开子面板与树形数据、语义化 valueType 渲染及键盘可访问滚动区
 */
export declare function TableCore<T extends Record<string, any> = Record<string, any>>({ columns, data, rowKey, loading, density, selectedKeys, onSelectionChange, sortState, onSortChange, headerFilterMode, headerFilters, onHeaderFilterChange, headerFilterRender, columnWidths, onColumnResize, resizable, motion, columnFixed, onColumnPin, onColumnHide, onResetColumns, onColumnReorder, expandable, onRowView, activeRowKey, onRowClick, onEmptyReset, maxHeight, ariaLabel, emptyText, className, }: TableCoreProps<T>): default_2.JSX.Element;

export declare interface TableCoreProps<T = Record<string, any>> {
    columns: AbcColumn<T>[];
    data: T[];
    rowKey?: keyof T | ((record: T) => string | number);
    loading?: boolean;
    density?: AbcTableDensity;
    /** 选中行主键数组 */
    selectedKeys?: Array<string | number>;
    onSelectionChange?: (keys: Array<string | number>, rows: T[]) => void;
    /** 排序状态与回调 */
    sortState?: {
        key: string;
        direction: SortDirection;
    };
    onSortChange?: (key: string, direction: SortDirection) => void;
    /** 是否开启表头内联筛选行 */
    headerFilterMode?: boolean;
    headerFilters?: Record<string, any>;
    onHeaderFilterChange?: (key: string, value: any) => void;
    /** 表头单列气泡筛选器插槽 */
    headerFilterRender?: (col: AbcColumn<T>) => default_2.ReactNode;
    /** 个性化列宽覆盖 */
    columnWidths?: Record<string, number>;
    onColumnResize?: (key: string, width: number) => void;
    /** 是否允许表头边缘拖拽调节列宽（默认传入 onColumnResize 时开启，也可显式 true 启用内部自适应列宽） */
    resizable?: boolean;
    /** 交互动效规格 */
    motion?: AbcMotionPreset;
    /** 个性化列左右固定覆盖（null 表示显式取消固定） */
    columnFixed?: Record<string, 'left' | 'right' | null>;
    onColumnPin?: (key: string, fixed: 'left' | 'right' | null) => void;
    /** 右键隐藏单列回调 */
    onColumnHide?: (key: string) => void;
    /** 右键重置列配置回调 */
    onResetColumns?: () => void;
    /** 拖拽调整列顺序回调 */
    onColumnReorder?: (nextOrder: string[]) => void;
    /** 行展开与树形 children 子行配置 */
    expandable?: AbcTableExpandableConfig<T>;
    /** linkToView 列点击触发查看详情回调 */
    onRowView?: (record: T) => void;
    /** 受控单行高亮键值（如与抽屉详情联动） */
    activeRowKey?: string | number | null;
    /** 行点击回调（单行点击唤起 Drawer 或选中） */
    onRowClick?: (record: T, event: default_2.MouseEvent<HTMLTableRowElement>) => void;
    /** 空状态下一键清空筛选条件回调 */
    onEmptyReset?: () => void;
    /** 表格滚动区域最大高度（开启后表头纵向吸顶） */
    maxHeight?: number | string;
    ariaLabel?: string;
    emptyText?: string;
    className?: string;
}

export declare const TableFooter: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLTableSectionElement> & React_2.RefAttributes<HTMLTableSectionElement>>;

export declare const TableHead: React_2.ForwardRefExoticComponent<React_2.ThHTMLAttributes<HTMLTableCellElement> & React_2.RefAttributes<HTMLTableCellElement>>;

export declare const TableHeader: React_2.ForwardRefExoticComponent<TableHeaderProps & React_2.RefAttributes<HTMLTableSectionElement>>;

export declare interface TableHeaderProps extends React_2.HTMLAttributes<HTMLTableSectionElement> {
    sticky?: boolean;
}

export declare interface TableProps extends React_2.HTMLAttributes<HTMLTableElement> {
    scrollLabel?: string;
    wrapperClassName?: string;
}

export declare const TableRow: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLTableRowElement> & React_2.RefAttributes<HTMLTableRowElement>>;

/**
 * 响应式无障碍标签页组件
 * 遵循规范：单行不换行横向滚动、基于 [aria-selected="true"] 伪元素底边线提供非纯色形状指示、
 * 非激活面板采用 hidden="until-found" 并在内层子容器施加内边距避免空白占高。
 */
export declare function Tabs<K extends string = string>({ items, activeKey, value, defaultActiveKey, onChange, variant, size, motion, ariaLabel, extra, className, panelClassName, }: TabsProps<K>): default_2.JSX.Element;

export declare interface TabsProps<K extends string = string> {
    items: TabItem<K>[];
    activeKey?: K;
    /** activeKey 受控别名 */
    value?: K;
    defaultActiveKey?: K;
    onChange?: (key: K) => void;
    variant?: 'line' | 'pills' | 'segmented';
    size?: AbcSize;
    motion?: AbcMotionPreset;
    ariaLabel?: string;
    extra?: default_2.ReactNode;
    className?: string;
    panelClassName?: string;
}

/**
 * 语义化标签组件 (Tag)
 * 完全集成自 ABC Design 的 StatusTag 规范体系
 */
export declare const Tag: default_2.FC<TagProps>;

/**
 * 多标签胶囊输入框 (TagInput)
 * 支持四档规格、动效规格、回车或英文逗号生成标签、自动去重与退格删除末尾项
 */
export declare const TagInput: default_2.FC<TagInputProps>;

export declare interface TagInputProps {
    value?: string[];
    defaultValue?: string[];
    onChange?: (tags: string[]) => void;
    placeholder?: string;
    maxTags?: number;
    disabled?: boolean;
    size?: AbcSize;
    motion?: AbcMotionPreset;
    className?: string;
}

export declare interface TagProps extends default_2.HTMLAttributes<HTMLSpanElement> {
    variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning' | 'info' | string;
    dot?: boolean;
}

export declare function tagVariants(_opts?: {
    variant?: string;
}): string;

/** 多行文本域组件（支持四档尺寸、动效规格、内联标签、错误文案与实时字数统计） */
export declare const Textarea: default_2.ForwardRefExoticComponent<TextareaProps & default_2.RefAttributes<HTMLTextAreaElement>>;

export declare interface TextareaProps extends default_2.TextareaHTMLAttributes<HTMLTextAreaElement> {
    size?: ControlSize;
    motion?: AbcMotionPreset;
    label?: default_2.ReactNode;
    error?: string;
    helperText?: default_2.ReactNode;
    showCount?: boolean;
    invalid?: boolean;
    mono?: boolean;
}

/**
 * 实时主题、微交互沙盒与多布局可视化定制中心 (ThemeCustomizer)
 * 支持一键场景预设、实时控件交互沙盒、自定义 HEX 品牌色阶合成、无级几何滑块、无障碍视觉滤镜及 JSON/JSX 双向流转
 */
export declare const ThemeCustomizer: default_2.FC<ThemeCustomizerProps>;

export declare interface ThemeCustomizerProps {
    open: boolean;
    onClose: () => void;
    layoutSettings: AbcLayoutSettings;
    onLayoutChange: (patch: Partial<AbcLayoutSettings>) => void;
    onResetAll?: () => void;
}

/**
 * 操作审计与工单流转垂直时间轴 (Timeline)
 */
export declare const Timeline: default_2.FC<TimelineProps>;

export declare interface TimelineItem {
    key?: string;
    title: default_2.ReactNode;
    time?: default_2.ReactNode;
    description?: default_2.ReactNode;
    tone?: 'primary' | 'success' | 'warning' | 'danger' | 'neutral';
    icon?: default_2.ReactNode;
}

export declare interface TimelineProps {
    items: TimelineItem[];
    size?: AbcSize;
    motion?: AbcMotionPreset;
    className?: string;
}

/** 兼容简短别名 */
export declare const toast: AbcToastMethods;

/**
 * ToastContainer — 企业级轻量通知挂载容器
 * 支持 6 种视口定位、悬停倒计时暂停、图文/操作卡片排版、Portal 目标自定义与多容器隔离
 */
export declare const ToastContainer: default_2.FC<ToastContainerProps>;

export declare interface ToastContainerProps {
    /**
     * 挂载屏幕位置
     * @default 'top-right'
     */
    position?: ToastPosition;
    /**
     * 尺寸规格（xs | sm | md | lg），默认继承全局配置或 'sm'
     */
    size?: AbcSize;
    /**
     * 动效预设（none | subtle | smooth | spring），默认继承全局 motion
     */
    motion?: AbcMotionPreset;
    /**
     * 屏幕同屏最大展示数量
     * @default 5
     */
    maxCount?: number;
    /**
     * 鼠标悬停时是否暂停自动关闭计时
     * @default true
     */
    pauseOnHover?: boolean;
    /**
     * 是否新通知展示在最上方
     * @default false
     */
    newestOnTop?: boolean;
    /**
     * 是否默认显示关闭图标
     * @default true
     */
    closable?: boolean;
    /**
     * 外层悬浮定位容器类名
     */
    className?: string;
    /**
     * 外层悬浮定位容器样式
     */
    style?: default_2.CSSProperties;
    /**
     * 单条 Toast 附加类名
     */
    toastClassName?: string;
    /**
     * 单条 Toast 附加样式
     */
    toastStyle?: default_2.CSSProperties;
    /**
     * Portal 挂载目标 DOM 节点，默认 document.body
     */
    container?: HTMLElement | (() => HTMLElement | null) | null;
    /**
     * 容器隔离标识 ID（配合 ToastOptions.containerId 使用）
     */
    containerId?: string;
    /**
     * 自定义单项渲染器
     */
    renderItem?: (item: ToastItem, dismiss: (id: string) => void) => default_2.ReactNode;
    /**
     * 独立受控数据源（提供时脱离内置全局队列）
     */
    items?: ToastItem[];
    /**
     * 配合受控 items 时的关闭回调
     */
    onDismiss?: (id: string) => void;
}

export declare interface ToastItem extends ToastOptions {
    id: string;
    tone: ToastTone;
    message: default_2.ReactNode;
    duration: number;
    createdAt: number;
}

/** 单条 Toast 视图呈现组件 */
export declare const ToastItemView: default_2.FC<ToastItemViewProps>;

export declare interface ToastItemViewProps {
    item: ToastItem;
    resolvedSize: AbcSize;
    resolvedMotion: AbcMotionPreset;
    closable: boolean;
    pauseOnHover: boolean;
    toastClassName?: string;
    toastStyle?: default_2.CSSProperties;
    onDismiss: (id: string) => void;
}

export declare interface ToastOptions {
    /** 提示类型（success | error | warning | info | loading | danger） */
    tone?: ToastTone;
    /** 标题文本或自定义节点 */
    title?: default_2.ReactNode;
    /** 正文内容 */
    message?: default_2.ReactNode;
    /** message 语义别名 */
    content?: default_2.ReactNode;
    /** 辅助描述信息 */
    description?: default_2.ReactNode;
    /** 自定义显示时长（毫秒），0 为不自动关闭 */
    duration?: number;
    /** 是否展示关闭按钮（默认 true） */
    closable?: boolean;
    /** 自定义左侧图标（覆盖 tone 默认图标） */
    icon?: default_2.ReactNode;
    /** 操作区节点（如撤销按钮、详情链接等） */
    action?: default_2.ReactNode;
    /** 自定义指定挂载位置 */
    position?: ToastPosition;
    /** 目标容器 ID（用于多容器分流） */
    containerId?: string;
    /** 自定义类名 */
    className?: string;
    /** 自定义行内样式 */
    style?: default_2.CSSProperties;
    /** 关闭时触发的回调 */
    onClose?: () => void;
}

export declare type ToastPosition = 'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center';

export declare type ToastTone = 'success' | 'error' | 'warning' | 'info' | 'loading' | 'danger';

export declare const TONE_ICONS: Record<string, default_2.ReactNode>;

/**
 * 视口感知顶层悬浮文字提示 (Tooltip)
 * 通过 Portal 逃逸任意 overflow:hidden 卡片或滚动容器裁剪，支持视口边缘自动翻转与动态箭头对齐
 */
export declare const Tooltip: default_2.FC<TooltipProps>;

export declare interface TooltipProps {
    content?: default_2.ReactNode;
    placement?: 'top' | 'bottom' | 'left' | 'right';
    disabled?: boolean;
    /** 悬停延迟毫秒数（默认 80ms，避免光标快速划过密集工具栏时频繁闪烁） */
    delay?: number;
    motion?: AbcMotionPreset;
    children: default_2.ReactNode;
    className?: string;
}

/** 顶部水平菜单导航条（用于 top 与 mix 布局模式，同步响应四档尺寸与动效规格） */
export declare const TopHorizontalNav: default_2.FC<{
    items: AbcMenuItem[];
    pathname: string;
    /** mix 模式下仅切换一级大类，不直接展开下拉浮层 */
    topLevelOnly?: boolean;
    activeRootKey?: string;
    size?: AbcSize;
    motion?: AbcMotionPreset;
    onSelectRoot?: (item: AbcMenuItem) => void;
    onNavigate: (path: string, item: AbcMenuItem) => void;
}>;

/**
 * 企业级层级树形控件 (Tree)
 * 内置 @abc-design/core 父子级联全选/半选计算引擎、拼音首字母搜索自动展开与全部展开/折叠工具条
 */
export declare const Tree: default_2.FC<TreeProps>;

export declare interface TreeProps {
    treeData: AbcTreeNode[];
    /** 是否显示节点复选框（如角色菜单权限分配） */
    checkable?: boolean;
    /** 父子节点勾选状态是否完全独立不级联（默认 false，即默认开启父子级联） */
    checkStrictly?: boolean;
    /** 受控选中节点 key 集合 */
    checkedKeys?: Array<string | number>;
    /** 非受控初始选中节点 key 集合 */
    defaultCheckedKeys?: Array<string | number>;
    /** 勾选状态变更回调（第二个参数附带半选祖先节点集合 halfCheckedKeys，方便后端权限保存） */
    onCheck?: (checkedKeys: Array<string | number>, info: {
        halfCheckedKeys: Array<string | number>;
        node: AbcTreeNode;
        checked: boolean;
    }) => void;
    /** 受控点击高亮节点 */
    selectedKeys?: Array<string | number>;
    onSelect?: (selectedKeys: Array<string | number>, node: AbcTreeNode) => void;
    /** 默认是否全部展开（默认 true） */
    defaultExpandAll?: boolean;
    /** 是否内置顶部搜索框（支持中文与拼音首字母过滤） */
    searchable?: boolean;
    searchPlaceholder?: string;
    /** 是否显示展开全部/收起全部快捷栏 */
    showToolbar?: boolean;
    /** 节点行尺寸规格 */
    size?: AbcSize;
    /** 组件交互动效规格 */
    motion?: AbcMotionPreset;
    /** 自定义节点右侧扩展渲染区 */
    renderExtra?: (node: AbcTreeNode) => default_2.ReactNode;
    className?: string;
}

/** 读取 ABC Design 上下文（若未包裹 AbcProvider，提供安全兜底实例以保证单组件独立渲染与单测可用） */
export declare function useAbcConfig(): AbcContextValue;

/** 读取指定字典编码选项列表的 Hook（兼容同步或异步 dictAdapter） */
export declare function useAbcDict(dictCode: string): {
    options: AbcDictOption[];
    loading: boolean;
};

/**
 * 解析多级抽屉默认展现交互（'adjacent' 平级并排展开 / 'stack' 传统堆叠推挤）
 * 优先级：组件显式 cascadeMode prop > AbcProvider 全局 defaultDrawerCascadeMode > 'adjacent'
 */
export declare function useAbcDrawerCascadeMode(propMode?: 'stack' | 'adjacent'): 'stack' | 'adjacent';

/**
 * 解析组件最终生效的微交互动效规格（none | subtle | smooth | spring）
 * 优先级：组件显式 motion prop > AbcProvider 全局 motion > 'smooth'
 */
export declare function useAbcMotion(propMotion?: AbcMotionPreset): AbcMotionPreset;

/** 校验当前权限状态的通用 Hook（未配置 permissionAdapter 时默认放行以便独立开发调试） */
export declare function useAbcPermission(): {
    hasPermission: (permission: string | string[], mode?: "any" | "all") => boolean;
};

/**
 * 解析组件最终生效的尺寸规格（xs | sm | md | lg）
 * 优先级：组件显式 size prop > AbcProvider 全局 componentSize 覆盖 > 组件自身语义默认 fallback
 */
export declare function useAbcSize(propSize?: AbcSize | 'default', fallback?: AbcSize): AbcSize;

/** 返回命令式确认函数的 Hook */
export declare function useConfirm(): typeof abcConfirm;

/**
 * 统一处理组件受控 (value) 与非受控 (defaultValue) 双模式状态
 */
export declare function useControllableState<T>({ value, defaultValue, onChange, }: UseControllableStateParams<T>): [T, (updater: T | ((prev: T) => T)) => void];

export declare interface UseControllableStateParams<T> {
    value?: T;
    defaultValue: T;
    onChange?: (next: T) => void;
}

export declare function useDialog(): DialogContextValue | null;

/**
 * 表单草稿持久化存储 Hook
 * 用于新建弹窗/长表单意外关闭时保留用户输入，并在正式提交后一键清理
 */
export declare function useDraftStorage<T extends Record<string, unknown>>(storageKey?: string): {
    hasDraft: boolean;
    readDraft: () => T | null;
    saveDraft: (values: T) => void;
    clearDraft: () => void;
};

/**
 * 视口感知的浮层坐标计算与碰撞翻转引擎
 * 自动监听窗口缩放、任意嵌套滚动容器滚动及浮层自身尺寸变化，实时翻转越界方向并修正 transform-origin。
 */
export declare function useFloatingPosition({ open, triggerRef, floatingRef, placement, offset, matchWidth, viewportPadding, }: UseFloatingPositionOptions): FloatingPositionResult;

export declare interface UseFloatingPositionOptions {
    /** 浮层是否处于挂载可见周期 */
    open: boolean;
    /** 触发器元素引用 */
    triggerRef: default_2.RefObject<HTMLElement | null>;
    /** 浮层面板元素引用 */
    floatingRef: default_2.RefObject<HTMLElement | null>;
    /** 期望弹出方位 */
    placement?: FloatingPlacement;
    /** 触发器与浮层间距像素（默认 6） */
    offset?: number;
    /** 是否自动同步触发器宽度作为浮层最小宽度（用于 Select 等下拉选择器） */
    matchWidth?: boolean;
    /** 距离视口边缘的安全留白像素（默认 8） */
    viewportPadding?: number;
}

/**
 * 浮层挂载与退场动画协调 Hook
 * 1. 进入打开态时同步返回 isMounted=true 与 isVisible=true，直接启用入场关键帧，避免首帧误挂退场类造成闪烁；
 * 2. open 变为 false 时保留退场 DOM 直到 durationMs 结束（durationMs <= 0 或禁用动效时同步卸载）。
 */
export declare function usePresence(open: boolean, durationMs?: number): {
    isMounted: boolean;
    isVisible: boolean;
};

/**
 * 数据表格个性化配置（列显隐、列宽、列序、左右固定冻结、筛选项显隐、行密度）本地持久化 Hook
 */
export declare function useTableSettings(storageKey?: string, initialDensity?: AbcTableDensity): {
    settings: AbcTablePersistedSettings;
    toggleColumnVisible: (key: string) => void;
    setAllColumnsVisible: (allColumnKeys: string[], visible: boolean) => void;
    setColumnFixed: (key: string, fixed: "left" | "right" | null | undefined) => void;
    setColumnWidth: (key: string, width: number) => void;
    setColumnOrder: (order: string[]) => void;
    setSearchFieldVisible: (key: string, visible: boolean) => void;
    setDensity: (density: AbcTableDensity) => void;
    resetSettings: () => void;
};

/**
 * Retina 高清 Canvas 防篡改水印容器
 * 内置 MutationObserver 守护：当水印节点在控制台被删除或 style 属性被恶意隐藏时自动重建恢复
 * 严格防自激闭环：更新前主动切断监听、仅监听直接子节点与自身属性，杜绝微任务死循环
 */
export declare const Watermark: default_2.FC<WatermarkProps>;

export declare interface WatermarkProps {
    /** 水印单行或多行文案 */
    content?: string | string[];
    /** 是否启用渲染 */
    enabled?: boolean;
    /** 旋转角度（度） */
    rotate?: number;
    /** 横纵向间距 */
    gap?: [number, number];
    children?: default_2.ReactNode;
    className?: string;
}


export * from "@abc-design/core";
export * from "@abc-design/tokens";

export { }
