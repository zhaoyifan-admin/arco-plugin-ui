import type {TableColumnData} from "./types/TableColumnData";
import type {TableRowSelection} from "@arco-design/web-vue";

export interface TableBorder {
    bodyCell?: boolean; // 是否展示主体单元格边框
    cell?: boolean; // 是否展示单元格边框（表头+主体）
    headerCell?: boolean; // 是否展示表头单元格边框
    wrapper?: boolean; // 是否展示外边框
}

export interface TableOptions {
    columns?: TableColumnData[]
    index?: boolean
    indexWidth?: number
    loading?: boolean
    maskClosable?: boolean
    maxHeight?: number | string
    menuBtnStyle?: string
    menuWidth?: number
    rowSelection?: TableRowSelection
    scrollX?: string | number
    search?: boolean
    searchBtnSpan?: number
    searchSpan?: number
    summary?: boolean
}

export interface Pagination {
    currentPage: number // 当前页码
    pageSize: number // 每页条数
    pageSizes: any[]
    total: number // 总条数
}