import type {TransferItem} from "./TransferItem";
import type {TreeNodeData} from "./TreeNodeData";

export interface TableColumnData {
    align?: 'left' | 'center' | 'right'; /*对齐方向*/
    data?: TransferItem[]; /*列信息的标识，对应 `TableData` 中的数据*/
    dataIndex: string;/*是否显示省略号*/
    dicData?: any[];
    ellipsis?: boolean;/*固定位置*/
    fixed?: 'left' | 'right';/*字典选项*/
    format?: string;/*是否查询*/
    hide?: boolean;
    mode?: string;/*栅栏布局*/
    options?: any[];/*列标题*/
    placeholder?: string;/*列属性*/
    rules?: any[];/*列宽度*/
    search?: boolean;/*是否在显示省略号时显示文本提示。可填入 tooltip 组件属性*/
    showTime?: boolean;/*输入框提示文字*/
    slot?: string;/*表单项校验规则（优先级高于 form 的 rules）*/
    span?: number;/*字典*/
    timePickerProps?: any;/*是否增加时间选择|`boolean`|`false`|*/
    title?: string;/*时间显示的参数*/
    tooltip?: boolean | Record<string, any>;/*展示日期的格式*/
    treeData?: TreeNodeData[];/*范围选择器的类型*/
    type?: string;/*穿梭框的数据*/
    width?: number;/*数据*/
}