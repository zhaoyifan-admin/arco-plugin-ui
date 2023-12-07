declare interface TableBorder {
    bodyCell?: boolean; // 是否展示主体单元格边框
    cell?: boolean; // 是否展示单元格边框（表头+主体）
    headerCell?: boolean; // 是否展示表头单元格边框
    wrapper?: boolean; // 是否展示外边框
}

declare interface TableColumnData {
    align?: 'left' | 'center' | 'right'
    dataIndex: string
    hide?: boolean
    options?: any[]
    search?: boolean
    slot?: string
    span?: number
    title: string
    type?: string
    width?: number
}

declare interface TableOptions {
    loading?: boolean
    index?: boolean
    indexWidth?: number
    columns?: TableColumnData[]
    menuWidth?: number
    search?: boolean
    searchSpan?: number
    searchBtnSpan?: number
}

declare interface Pagination {
    currentPage: number // 当前页码
    pageSize: number // 每页条数
    pageSizes: any[]
    total: number // 总条数
}