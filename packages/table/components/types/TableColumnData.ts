import type {TransferItem} from "./TransferItem";
import type {TreeNodeData} from "./TreeNodeData";

export interface TableColumnData {
    align?: 'left' | 'center' | 'right'; /*对齐方向*/
    dataIndex: string; /*列信息的标识，对应 `TableData` 中的数据*/
    ellipsis?: boolean;/*是否显示省略号*/
    hide?: boolean;
    fixed?: 'left' | 'right';/*固定位置*/
    options?: any[];/*级联选择器的选项*/
    search?: boolean;/*是否查询*/
    slot?: string
    span?: number/*栅栏布局*/
    title?: string;/*列标题*/
    type?: string;/*列属性*/
    width?: number;/*列宽度*/
    tooltip?: boolean | Record<string, any>;/*是否在显示省略号时显示文本提示。可填入 tooltip 组件属性*/
    placeholder?: string;/*输入框提示文字*/
    rules?: any[];/*表单项校验规则（优先级高于 form 的 rules）*/
    dicData?: any[];/*字典*/
    showTime?: boolean;/*是否增加时间选择|`boolean`|`false`|*/
    timePickerProps?: any;/*时间显示的参数*/
    format?: string;/*展示日期的格式*/
    mode?: string;/*范围选择器的类型*/
    data?: TransferItem[];/*穿梭框的数据*/
    treeData?: TreeNodeData[]/*数据*/
}