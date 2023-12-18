export interface TableBorder {
    /**
     * @zh 是否展示外边框
     * @en TWhether to display the outer border
     */
    wrapper?: boolean;
    /**
     * @zh 是否展示单元格边框（表头+主体）
     * @en Whether to display the cell border (header + body)
     */
    cell?: boolean;
    /**
     * @zh 是否展示表头单元格边框
     * @en Whether to display the header cell border
     */
    headerCell?: boolean;
    /**
     * @zh 是否展示主体单元格边框
     * @en Whether to display the body cell border
     */
    bodyCell?: boolean;
}