export interface AbcCalendarCell {
    /** YYYY-MM-DD 格式日期字符串 */
    iso: string;
    day: number;
    inCurrentMonth: boolean;
    isToday: boolean;
}
/** 将年月日格式化为标准 YYYY-MM-DD */
export declare function formatIsoDate(year: number, monthZeroBased: number, day: number): string;
/** 生成 6 行 × 7 列（共 42 格，周日为首列）的日历面板网格数据 */
export declare function buildCalendarMonthGrid(year: number, monthZeroBased: number, today?: Date): AbcCalendarCell[];
export interface AbcCalendarMonthCell {
    year: number;
    /** 1-12 */
    month: number;
    /** YYYY-MM 格式 */
    value: string;
    label: string;
    isCurrent: boolean;
}
/** 生成指定年份的 12 个月份面板数据 */
export declare function buildCalendarYearMonths(year: number, today?: Date): AbcCalendarMonthCell[];
export interface AbcCalendarQuarterCell {
    year: number;
    quarter: 1 | 2 | 3 | 4;
    /** YYYY-Q1 ~ YYYY-Q4 */
    value: string;
    label: string;
    monthsLabel: string;
    startMonth: number;
    endMonth: number;
    isCurrent: boolean;
}
/** 生成指定年份的 Q1-Q4 季度面板数据 */
export declare function buildCalendarYearQuarters(year: number, today?: Date): AbcCalendarQuarterCell[];
export interface AbcCalendarYearCell {
    year: number;
    value: string;
    inDecade: boolean;
    isCurrent: boolean;
}
export interface AbcCalendarDecadeGrid {
    startYear: number;
    endYear: number;
    cells: AbcCalendarYearCell[];
}
/** 生成 12 格（含前后相邻年份）年代选择网格 */
export declare function buildCalendarDecadeGrid(year: number, today?: Date): AbcCalendarDecadeGrid;
export interface AbcIsoWeekInfo {
    weekYear: number;
    week: number;
    /** 标准 YYYY-Www 格式（如 2026-W47） */
    value: string;
    /** 该 ISO 周的周一 YYYY-MM-DD */
    startIso: string;
    /** 该 ISO 周的周日 YYYY-MM-DD */
    endIso: string;
}
/** 计算给定 YYYY-MM-DD 所属 ISO-8601 周（周一至周日）信息 */
export declare function getIsoWeekInfo(isoDate: string): AbcIsoWeekInfo;
/** 将 YYYY-Www 字符串解析为该周周一的 YYYY-MM-DD（非法时返回 null） */
export declare function parseIsoWeekStart(weekStr: string): string | null;
export interface AbcTimeParts {
    hour: number;
    minute: number;
    second: number;
}
/** 生成时/分/秒步进刻度序列（如 0..23 或 0..59 按 step 步进） */
export declare function buildTimeUnitOptions(maxExclusive: number, step?: number): number[];
/** 格式化时分秒为 HH:mm:ss 或 HH:mm */
export declare function formatTimeParts(hour: number, minute: number, second?: number, showSecond?: boolean): string;
/** 从 HH:mm、HH:mm:ss 或 YYYY-MM-DD HH:mm(:ss) 提取时分秒 */
export declare function parseTimeParts(raw?: string | null): AbcTimeParts | null;
//# sourceMappingURL=calendar.d.ts.map