/** 将年月日格式化为标准 YYYY-MM-DD */
export function formatIsoDate(year, monthZeroBased, day) {
    const d = new Date(year, monthZeroBased, day);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
}
/** 生成 6 行 × 7 列（共 42 格，周日为首列）的日历面板网格数据 */
export function buildCalendarMonthGrid(year, monthZeroBased, today = new Date()) {
    const todayIso = formatIsoDate(today.getFullYear(), today.getMonth(), today.getDate());
    const firstDayWeek = new Date(year, monthZeroBased, 1).getDay();
    const daysInCurrent = new Date(year, monthZeroBased + 1, 0).getDate();
    const daysInPrev = new Date(year, monthZeroBased, 0).getDate();
    const cells = [];
    // 补齐上月尾部日期
    for (let i = firstDayWeek - 1; i >= 0; i--) {
        const day = daysInPrev - i;
        const iso = formatIsoDate(year, monthZeroBased - 1, day);
        cells.push({ iso, day, inCurrentMonth: false, isToday: iso === todayIso });
    }
    // 当月日期
    for (let day = 1; day <= daysInCurrent; day++) {
        const iso = formatIsoDate(year, monthZeroBased, day);
        cells.push({ iso, day, inCurrentMonth: true, isToday: iso === todayIso });
    }
    // 补齐下月头部日期至 42 格，保证日历弹层高度恒定不抖动
    let nextDay = 1;
    while (cells.length < 42) {
        const iso = formatIsoDate(year, monthZeroBased + 1, nextDay);
        cells.push({ iso, day: nextDay, inCurrentMonth: false, isToday: iso === todayIso });
        nextDay += 1;
    }
    return cells;
}
/** 生成指定年份的 12 个月份面板数据 */
export function buildCalendarYearMonths(year, today = new Date()) {
    const curYear = today.getFullYear();
    const curMonth = today.getMonth() + 1;
    return Array.from({ length: 12 }, (_, idx) => {
        const month = idx + 1;
        return {
            year,
            month,
            value: `${year}-${String(month).padStart(2, '0')}`,
            label: `${month} 月`,
            isCurrent: year === curYear && month === curMonth,
        };
    });
}
/** 生成指定年份的 Q1-Q4 季度面板数据 */
export function buildCalendarYearQuarters(year, today = new Date()) {
    const curYear = today.getFullYear();
    const curQuarter = Math.floor(today.getMonth() / 3) + 1;
    const quarters = [1, 2, 3, 4];
    return quarters.map((q) => {
        const startMonth = (q - 1) * 3 + 1;
        const endMonth = q * 3;
        return {
            year,
            quarter: q,
            value: `${year}-Q${q}`,
            label: `Q${q}`,
            monthsLabel: `${startMonth}-${endMonth} 月`,
            startMonth,
            endMonth,
            isCurrent: year === curYear && q === curQuarter,
        };
    });
}
/** 生成 12 格（含前后相邻年份）年代选择网格 */
export function buildCalendarDecadeGrid(year, today = new Date()) {
    const startYear = Math.floor(year / 10) * 10;
    const endYear = startYear + 9;
    const curYear = today.getFullYear();
    const cells = [];
    for (let y = startYear - 1; y <= endYear + 1; y += 1) {
        cells.push({
            year: y,
            value: String(y),
            inDecade: y >= startYear && y <= endYear,
            isCurrent: y === curYear,
        });
    }
    return { startYear, endYear, cells };
}
/** 计算给定 YYYY-MM-DD 所属 ISO-8601 周（周一至周日）信息 */
export function getIsoWeekInfo(isoDate) {
    const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(isoDate.trim());
    const base = match
        ? new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]))
        : new Date();
    // 使用本地日期构造无夏令时偏移的 UTC 时间戳以计算标准 ISO 周序号
    const utcDate = new Date(Date.UTC(base.getFullYear(), base.getMonth(), base.getDate()));
    const dayNum = utcDate.getUTCDay() || 7;
    const mondayUtc = new Date(utcDate);
    mondayUtc.setUTCDate(utcDate.getUTCDate() - dayNum + 1);
    const sundayUtc = new Date(mondayUtc);
    sundayUtc.setUTCDate(mondayUtc.getUTCDate() + 6);
    const thursdayUtc = new Date(utcDate);
    thursdayUtc.setUTCDate(utcDate.getUTCDate() + 4 - dayNum);
    const weekYear = thursdayUtc.getUTCFullYear();
    const yearStart = new Date(Date.UTC(weekYear, 0, 1));
    const week = Math.ceil(((thursdayUtc.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
    const formatUtc = (d) => `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}-${String(d.getUTCDate()).padStart(2, '0')}`;
    return {
        weekYear,
        week,
        value: `${weekYear}-W${String(week).padStart(2, '0')}`,
        startIso: formatUtc(mondayUtc),
        endIso: formatUtc(sundayUtc),
    };
}
/** 将 YYYY-Www 字符串解析为该周周一的 YYYY-MM-DD（非法时返回 null） */
export function parseIsoWeekStart(weekStr) {
    const m = /^(\d{4})-W(\d{1,2})$/i.exec(weekStr.trim());
    if (!m)
        return null;
    const year = Number(m[1]);
    const week = Number(m[2]);
    if (!Number.isFinite(year) || week < 1 || week > 53)
        return null;
    // ISO 第 1 周始终包含 1 月 4 日
    const jan4 = new Date(Date.UTC(year, 0, 4));
    const dayNum = jan4.getUTCDay() || 7;
    const week1Monday = new Date(jan4);
    week1Monday.setUTCDate(jan4.getUTCDate() - dayNum + 1);
    const targetMonday = new Date(week1Monday);
    targetMonday.setUTCDate(week1Monday.getUTCDate() + (week - 1) * 7);
    return `${targetMonday.getUTCFullYear()}-${String(targetMonday.getUTCMonth() + 1).padStart(2, '0')}-${String(targetMonday.getUTCDate()).padStart(2, '0')}`;
}
/** 生成时/分/秒步进刻度序列（如 0..23 或 0..59 按 step 步进） */
export function buildTimeUnitOptions(maxExclusive, step = 1) {
    const safeStep = Number.isFinite(step) && step >= 1 ? Math.floor(step) : 1;
    const out = [];
    for (let i = 0; i < maxExclusive; i += safeStep) {
        out.push(i);
    }
    return out;
}
/** 格式化时分秒为 HH:mm:ss 或 HH:mm */
export function formatTimeParts(hour, minute, second = 0, showSecond = true) {
    const hh = String(Math.min(23, Math.max(0, Math.floor(hour)))).padStart(2, '0');
    const mm = String(Math.min(59, Math.max(0, Math.floor(minute)))).padStart(2, '0');
    if (!showSecond)
        return `${hh}:${mm}`;
    const ss = String(Math.min(59, Math.max(0, Math.floor(second)))).padStart(2, '0');
    return `${hh}:${mm}:${ss}`;
}
/** 从 HH:mm、HH:mm:ss 或 YYYY-MM-DD HH:mm(:ss) 提取时分秒 */
export function parseTimeParts(raw) {
    if (!raw)
        return null;
    const m = /(?:^|[T\s])(\d{1,2}):(\d{2})(?::(\d{2}))?$/.exec(raw.trim());
    if (!m)
        return null;
    const hour = Number(m[1]);
    const minute = Number(m[2]);
    const second = m[3] !== undefined ? Number(m[3]) : 0;
    if (hour < 0 || hour > 23 || minute < 0 || minute > 59 || second < 0 || second > 59) {
        return null;
    }
    return { hour, minute, second };
}
//# sourceMappingURL=calendar.js.map