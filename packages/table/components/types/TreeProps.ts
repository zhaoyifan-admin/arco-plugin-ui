import type {Slot, VNode} from "vue";
export const SIZES = ['mini', 'small', 'medium', 'large'] as const;
export type Size = typeof SIZES[number];
export type CheckableType =
    | boolean
    | ((
    node: TreeNodeData,
    info: {
        level: number;
        isLeaf: boolean;
    }
) => boolean);
export type TreeNodeKey = number | string;
export type DropPosition = -1 | 0 | 1;
export type CheckedStrategy = 'all' | 'parent' | 'child';
export type VirtualItemKey = string | number;
export type SelectableType = CheckableType;
export type LoadMore = (node: TreeNodeData) => Promise<void>;
export interface TreeNodeData {
    /**
     * @zh 唯一标示
     * @en Unique key
     * */
    key?: string | number;
    /**
     * @zh 该节点显示的标题
     * @en The title of the node
     * */
    title?: string;
    /**
     * @zh 是否允许选中
     * @en Whether to allow selection
     * */
    selectable?: boolean;
    /**
     * @zh 是否禁用节点
     * @en Whether to disable the node
     * */
    disabled?: boolean;
    /**
     * @zh 是否禁用复选框
     * @en Whether to disable the checkbox
     * */
    disableCheckbox?: boolean;
    /**
     * @zh 是否显示多选框
     * @en Whether to show checkbox
     * */
    checkable?: boolean;
    /**
     * @zh 是否可以拖拽
     * @en Whether it can be dragged
     * */
    draggable?: boolean;
    /**
     * @zh 是否是叶子节点。动态加载时有效
     * @en Whether it is a leaf node. Effective when loading dynamically
     * */
    isLeaf?: boolean;
    /**
     * @zh 节点的图标
     * @en Node icon
     * */
    icon?: () => VNode;
    /**
     * @zh 定制 switcher 图标，优先级大于 tree
     * @en Custom switcher icon, priority is greater than tree
     * */
    switcherIcon?: () => VNode;
    /**
     * @zh 定制 loading 图标，优先级大于 tree
     * @en Customize loading icon, priority is greater than tree
     * */
    loadingIcon?: () => VNode;
    /**
     * @zh 定制 drag 图标，优先级大于 tree
     * @en Custom drag icon, priority is greater than tree
     * */
    dragIcon?: () => VNode;
    /**
     * @zh 子节点
     * @en Child node
     * */
    children?: TreeNodeData[];
}
export interface TreeFieldNames {
    /**
     * @zh 指定 key 在 TreeNodeData 中的字段名
     * @en Specify the field name of key in TreeNodeData
     * @defaultValue key
     */
    key?: string;
    /**
     * @zh 指定 title 在 TreeNodeData 中的字段名
     * @en Specify the field name of title in TreeNodeData
     * @defaultValue title
     */
    title?: string;
    /**
     * @zh 指定 disabled 在 TreeNodeData 中的字段名
     * @en Specify the field name of disabled in TreeNodeData
     * @defaultValue disabled
     */
    disabled?: string;
    /**
     * @zh 指定 children 在 TreeNodeData 中的字段名
     * @en Specify the field name of children in TreeNodeData
     * @defaultValue children
     */
    children?: string;
    /**
     * @zh 指定 isLeaf 在 TreeNodeData 中的字段名
     * @en Specify the field name of isLeaf in TreeNodeData
     * @defaultValue isLeaf
     */
    isLeaf?: string;
    /**
     * @zh 指定 disableCheckbox 在 TreeNodeData 中的字段名
     * @en Specify the field name of disableCheckbox in TreeNodeData
     * @defaultValue disableCheckbox
     */
    disableCheckbox?: string;
    /**
     * @zh 指定 checkable 在 TreeNodeData 中的字段名
     * @en Specify the field name of checkable in TreeNodeData
     * @defaultValue checkable
     */
    checkable?: string;
    /**
     * @zh 指定 icon 在 TreeNodeData 中的字段名
     * @en Specify the field name of icon in TreeNodeData
     * @defaultValue checkable
     */
    icon?: string;
}
export interface VirtualListProps {
    /**
     * @zh 可视区域高度
     * @en Viewable area height
     */
    height?: number | string;
    /**
     * @zh 开启虚拟滚动的元素数量阈值，当数据数量小于阈值时不会开启虚拟滚动。
     * @en The threshold of the number of elements to enable virtual scrolling. When the number of data is less than the threshold, virtual scrolling will not be enabled.
     */
    threshold?: number;
    /**
     * @zh （已废除）元素高度是否是固定的。2.34.1 版本废除，请使用 `fixedSize`
     * @en (Repealed) Is the element height fixed. Version 2.18.0 deprecated, please use `fixedSize`
     */
    isStaticItemHeight?: boolean;
    /**
     * @zh 元素高度是否是固定的。
     * @en Is the element height fixed.
     * @version 2.34.1
     */
    fixedSize?: boolean;
    /**
     * @zh 元素高度不固定时的预估高度。
     * @en Is the element height fixed.
     * @version 2.34.1
     */
    estimatedSize?: number;
    /**
     * @zh 视口边界外提前挂载的元素数量。
     * @en The number of elements mounted in advance outside the boundary of the viewport.
     * @defaultValue 10
     * @version 2.34.1
     */
    buffer?: number;
    data?: unknown[];
    itemKey?: string | ((item: unknown) => VirtualItemKey);
    component?: keyof HTMLElementTagNameMap;
}
export interface TreeProps {
    size: Size;
    blockNode: boolean;
    defaultExpandAll: boolean;
    multiple: boolean;
    checkable: CheckableType;
    draggable: boolean;
    allowDrop?: (options: {
        dropNode: TreeNodeData;
        dropPosition: DropPosition;
    }) => boolean;
    selectable: SelectableType;
    checkStrictly: boolean;
    checkedStrategy: CheckedStrategy;
    defaultSelectedKeys?: TreeNodeKey[];
    selectedKeys?: TreeNodeKey[];
    defaultCheckedKeys?: TreeNodeKey[];
    checkedKeys?: TreeNodeKey[];
    halfCheckedKeys: TreeNodeKey[] | undefined;
    defaultExpandedKeys?: TreeNodeKey[];
    expandedKeys?: TreeNodeKey[];
    data: TreeNodeData[];
    fieldNames?: TreeFieldNames;
    virtualListProps?: VirtualListProps;
    showLine: boolean;
    loadMore?: LoadMore;
    defaultExpandSelected?: boolean;
    defaultExpandChecked?: boolean;
    autoExpandParent?: boolean;
    onlyCheckLeaf: boolean;
    animation: boolean;
    actionOnNodeClick?: 'expand';
    disableSelectActionOnly: boolean;
    dragIcon?: Slot;
    switcherIcon?: Slot;
    loadingIcon?: Slot;
    extra?: Slot;
    title?: Slot;
    onSelect?: (
        selectedKeys: TreeNodeKey[],
        event: {
            selected?: boolean;
            selectedNodes: TreeNodeData[];
            node?: TreeNodeData;
            e?: Event;
        }
    ) => void;
    onCheck?: (
        checkedKeys: TreeNodeKey[],
        event: {
            checked?: boolean;
            checkedNodes: TreeNodeData[];
            node?: TreeNodeData;
            halfCheckedKeys: TreeNodeKey[];
            halfCheckedNodes: TreeNodeData[];
            e?: Event;
        }
    ) => void;
    onExpand?: (
        expandedKeys: TreeNodeKey[],
        event: {
            expanded: boolean;
            expandedNodes: TreeNodeData[];
            node: TreeNodeData;
            e?: Event;
        }
    ) => void;
    onDragStart?: (e: DragEvent, node: TreeNodeData) => void;
    onDragEnd?: (e: DragEvent, node: TreeNodeData) => void;
    onDragOver?: (e: DragEvent, node: TreeNodeData) => void;
    onDragLeave?: (e: DragEvent, node: TreeNodeData) => void;
    onDrop?: (event: {
        e: DragEvent;
        dragNode: TreeNodeData;
        dropNode: TreeNodeData;
        dropPosition: DropPosition;
    }) => void;
    filterTreeNode?: (node: TreeNodeData) => boolean;
}