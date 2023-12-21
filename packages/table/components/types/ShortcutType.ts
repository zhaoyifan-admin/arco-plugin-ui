import type {VNode} from "vue";

export interface ShortcutType {
    /**
     * @zh 选项的内容
     * @en the content of shortcut
     */
    label: string | number | (() => VNode);
    /**
     * @zh 选项值
     * @en the value of shortcut
     */
    value:
        | (Date | string | number)
        | (Date | string | number)[]
        | (() => (Date | string | number) | (Date | string | number)[]);
    /**
     * @zh 解析值所使用的格式，参考[字符串解析格式](#字符串解析格式)
     * @en the format use to parse value, refer to [String Parsing Format](#string-parsing-format)
     */
    format?: string;
}