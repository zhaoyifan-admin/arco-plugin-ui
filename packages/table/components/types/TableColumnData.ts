import type {TransferItem} from "./TransferItem";
import type {TreeNodeData} from "./TreeNodeData";

export interface TableColumnData {
    align?: 'left' | 'center' | 'right'; /*对齐方向*/
    data?: TransferItem[];/*穿梭框的数据*/
    dataIndex: string; /*列信息的标识，对应 `TableData` 中的数据*/
    defaultValue?: string;/*默认值（非受控状态）*/
    dicData?: any[];/*字典*/
    disabled?: boolean;/*是否禁用*/
    ellipsis?: boolean;/*是否显示省略号*/
    fixed?: 'left' | 'right';/*固定位置*/
    format?: string;/*展示日期的格式*/
    hide?: boolean;
    maxLength?: number;/*输入值的最大长度*/
    mode?: string;/*范围选择器的类型*/
    options?: any[];/*级联选择器的选项*/
    placeholder?: string;/*输入框提示文字*/
    readonly?: boolean;/*是否为只读状态*/
    rules?: any[];/*表单项校验规则（优先级高于 form 的 rules）*/
    search?: boolean;/*是否查询*/
    showLimit?: boolean;/*是否显示字数统计*/
    showTime?: boolean;/*是否增加时间选择|`boolean`|`false`|*/
    slot?: string
    span?: number/*栅栏布局*/
    timePickerProps?: any;/*时间显示的参数*/
    title?: string;/*列标题*/
    tooltip?: boolean | Record<string, any>;/*是否在显示省略号时显示文本提示。可填入 tooltip 组件属性*/
    treeData?: TreeNodeData[]/*数据*/
    type?: string;/*列属性*/
    width?: number;/*列宽度*/
}