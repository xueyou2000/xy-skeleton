export interface SkeletonProps {
    /**
     * 附加类名
     */
    prefixCls?: string;
    /**
     * 根节点的附加类名
     */
    className?: string;
    /**
     * 内联样式
     */
    style?: React.CSSProperties;
    /**
     * 是否显示加载状态
     */
    loading?: boolean;
    /**
     * 显示多少行骨架
     */
    rows?: number;
    /**
     * 包裹内容
     */
    children?: React.ReactNode;
}
