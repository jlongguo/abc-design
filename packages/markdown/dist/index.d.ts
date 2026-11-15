import { default as default_2 } from 'react';
import { MDEditorProps } from '@uiw/react-md-editor';

/**
 * ABC Design 企业级 Markdown 编辑器 (@abc-design/markdown)
 * 独立子包封装 @uiw/react-md-editor，保持 @abc-design/react 核心包零重型编辑器依赖，
 * 并自动联动设计系统明暗主题与命令式光标文本插入。
 */
declare const MarkdownEditor: default_2.ForwardRefExoticComponent<MarkdownEditorProps & default_2.RefAttributes<MarkdownEditorHandle>>;
export { MarkdownEditor }
export default MarkdownEditor;

export declare interface MarkdownEditorHandle {
    /** 向当前光标选区插入文本（未聚焦时默认追加至末尾） */
    insertText: (text: string) => void;
    /** 主动聚焦编辑区域 */
    focus: () => void;
}

export declare interface MarkdownEditorProps {
    /** 编辑器内容（Markdown 文本） */
    value?: string;
    /** 内容变更回调 */
    onChange?: (val?: string) => void;
    /** 编辑器高度（默认 450px） */
    height?: number;
    /** 预览布局模式：live(双栏分屏) | edit(仅编辑) | preview(仅预览) */
    preview?: 'live' | 'edit' | 'preview';
    /** 主题颜色模式：'auto' 默认自动跟随 AbcProvider 及根文档深浅色状态 */
    colorMode?: 'light' | 'dark' | 'auto';
    /** 是否隐藏顶部快捷工具栏 */
    hideToolbar?: boolean;
    /** 占位提示文案 */
    placeholder?: string;
    /** 是否禁用输入 */
    disabled?: boolean;
    /** 自定义外层容器样式类名 */
    className?: string;
    /** 透传底层 @uiw/react-md-editor 的扩展属性 */
    editorProps?: Omit<MDEditorProps, 'value' | 'onChange' | 'height' | 'preview' | 'hideToolbar'>;
}

export { }
