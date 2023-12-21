import type {TransferItem} from "./TransferItem";
import type {TreeNodeData} from "./TreeNodeData";
import type {ScrollbarProps} from "./ScrollbarProps";
import type {TagProps} from "./TagProps";
import type {ShortcutType} from "./ShortcutType";
import type {DisabledTimeProps} from "./DisabledTimeProps";
import type {TreeProps} from "./TreeProps";
import type {TriggerProps} from "./TriggerProps";

export interface TableColumnData {
    abbreviation?: boolean;/*是否启用缩写*/
    animation?:boolean;/*是否开启过渡动画*/
    align?: 'left' | 'center' | 'right'; /*对齐方向*/
    allowCreate?:boolean;/*是否允许创建*/
    allowSearch?:boolean;/*是否允许搜索*/
    autoSize?:boolean | { minRows?: number; maxRows?: number };/*是否让文本框自适应内容高度*/
    bordered?:boolean;/*是否显示输入框的边框*/
    checkedValue?: string | number | boolean;/*选中时的值*/
    checkedColor?: string;/*选中时的开关颜色*/
    checkedText?: string;/*打开状态时的文案（type='line'和size='small'时不生效）*/
    checkStrictly?:boolean;/*是否开启严格选择模式*/
    color?:string|object;/*进度条的颜色*/
    data?: TransferItem[];/*穿梭框的数据*/
    dataIndex: string; /*列信息的标识，对应 `TableData` 中的数据*/
    dayStartOfWeek?:0 | 1 | 2 | 3 | 4 | 5 | 6;/*每周的第一天开始于周几，0 - 周日，1 - 周一，以此类推。*/
    defaultValue?: string | number | boolean;/*默认值（非受控状态）*/
    defaultActiveFirstOption?:boolean;/*是否在无值时默认选择第一个选项*/
    defaultPickerValue?:Date | string | number;/*面板默认显示的日期*/
    dicData?: any[];/*字典*/
    direction?: string;/*单选框组的方向*/
    disabled?: boolean;/*是否禁用*/
    disabledDate?: (current?: Date) => boolean;/*不可选取的日期*/
    disabledTime?: (current: Date) => DisabledTimeProps;/*不可选取的时间*/
    disabledInput?: boolean;/*是否禁止键盘输入日期*/
    ellipsis?: boolean;/*是否显示省略号*/
    error?: boolean;/*是否为错误状态*/
    fixed?: 'left' | 'right';/*固定位置*/
    formatter?: any;/*定义输入框展示值*/
    format?: string;/*展示日期的格式*/
    grading?: boolean;/*是否开启笑脸分级*/
    hide?: boolean;
    hideButton?: boolean;/*是否隐藏按钮*/
    labelInValue?:boolean;/*设置value格式。默认是string，设置为true时候，value格式为： { label: string, value: string }*/
    limit?:number;/*多选时最多的选择个数*/
    loading?: boolean;/*是否为加载中状态*/
    max?: number;/*最大值*/
    maxTagCount?:number;/*多选模式下，最多显示的标签数量。0 表示不限制*/
    maxLength?: number;/*输入值的最大长度*/
    marks?:Record<number, string>;/*设置显示的标签*/
    min?: number;/*最小值*/
    mode?: string;/*范围选择器的类型*/
    multiple?:boolean;/*是否开启多选模式（多选模式默认开启搜索）*/
    oneWay?:boolean;/*是否开启单向模式（仅可移动到目标选择框）*/
    options?: any[];/*级联选择器的选项*/
    pickerValue?:Date | string | number;/*面板显示的日期*/
    placeholder?: string;/*输入框提示文字*/
    precision?: number;/*数字精度*/
    position?:'top' | 'tl' | 'tr' | 'bottom' | 'bl' | 'br';/*弹出的框的位置*/
    range?:boolean;/*是否开启范围选择*/
    readonly?: boolean;/*是否为只读状态*/
    rules?: any[];/*表单项校验规则（优先级高于 form 的 rules）*/
    scrollbar?: boolean | ScrollbarProps
    search?: boolean;/*是否查询*/
    shortcuts?:ShortcutType[];/*预设时间范围快捷选择*/
    shortcutsPosition?:'left' | 'bottom' | 'right';/*预设范围在面板上的位置，默认放在下方，侧边一般用于大量预设时间的场景*/
    showConfirmBtn?: boolean;/*是否显示确认按钮，showTime = true 的时候始终显示。*/
    showLimit?: boolean;/*是否显示字数统计*/
    showTicks?:boolean;/*是否显示刻度线*/
    showTooltip?: boolean;/*是否显示tooltip*/
    showInput?: boolean;/*是否显示输入框*/
    showSearch?:boolean;/*是否显示搜索框*/
    showSelectAll?:boolean;/*是否展示全选勾选框*/
    showText?:boolean;/*是否显示文字*/
    showTime?: boolean;/*是否增加时间选择|`boolean`|`false`|*/
    showWordLimit?:boolean;/*是否显示字数统计*/
    simple?:boolean;/*是否开启简单模式（点击选项即移动）*/
    size?:number;/*头像的尺寸大小，单位是 px。未填写时使用样式中的大小 40px*/
    slot?: string;
    step?: number;/*数字变化步长*/
    status?:'normal' | 'success' | 'warning' | 'danger';/*进度条状态*/
    steps?: number;/*开启步骤条模式，并设置步骤数*/
    strokeWidth?:number;/*进度条的线宽*/
    span?: number/*栅栏布局*/
    tagProps?: TagProps;/*展示的标签属性*/
    timePickerProps?: any;/*时间显示的参数*/
    title?: string;/*列标题*/
    tooltip?: boolean | Record<string, any>;/*是否在显示省略号时显示文本提示。可填入 tooltip 组件属性*/
    trackColor?:string;/*进度条的轨道颜色*/
    transferTitle?:string[];/*源选择框和目标选择框的标题   参考：['Source', 'Target'] */
    treeCheckable?:boolean;/*是否展示复选框*/
    treeCheckStrictly?:boolean;/*父子节点是否关联*/
    treeCheckedStrategy?:'all' | 'parent' | 'child';/*定制回显方式*/
    treeData?: TreeNodeData[]/*数据*/
    treeProps?:Partial<TreeProps>;/*可以接受所有 Tree 组件的Props*/
    triggerProps?:Partial<TriggerProps>/*可以接受所有 Trigger 组件的Props*/
    type?: string | undefined;/*列属性*/
    uncheckedValue?: string | number | boolean;/*未选中时的值*/
    uncheckedColor?: string;/*未选中时的开关颜色*/
    uncheckedText?: string;/*关闭状态时的文案（type='line'和size='small'时不生效）*/
    valueFormat?: 'timestamp' | 'Date' | string;
    valueKey?:string;/*用于确定选项键值的属性名*/
    width?: number;/*列宽度*/
}