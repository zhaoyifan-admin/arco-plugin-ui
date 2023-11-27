declare interface TableBorder {
    bodyCell?: boolean; // 是否展示主体单元格边框
    cell?: boolean; // 是否展示单元格边框（表头+主体）
    headerCell?: boolean; // 是否展示表头单元格边框
    wrapper?: boolean; // 是否展示外边框
}

declare interface TableColumnData {
    align?: 'left' | 'center' | 'right'
    dataIndex?: string
    hide?: boolean
    slot?: string
    title?: string
    width?: number
}

declare interface TableOptions {
    index?: boolean // 是否有序号
    indexWidth?: number
    columns?: TableColumnData[]
}

declare interface Pagination {
    currentPage?: number // 当前页码
    pageSize?: number // 每页条数
    pageSizes?: any[]
    total?: number // 总条数
}