'use client';
import { dateTypeToDateObject, dayjsTimezone, isValidDate } from "../date-calendar/helpers.mjs";
import dayjs from "dayjs";
//#region src/components/date-range-calendar/helpers.ts
const isSameDateForView = (date1, date2, view, timezone) => {
	if (!isValidDate(date1) || !isValidDate(date2)) return false;
	const d1 = dayjsTimezone(dayjs(date1), timezone);
	const d2 = dayjsTimezone(dayjs(date2), timezone);
	return d1.isSame(d2, view);
};
const isDateInRangeForView = (date, start, end, view, timezone) => {
	if (!isValidDate(date) || !isValidDate(start) || !isValidDate(end)) return false;
	const d = dayjsTimezone(dayjs(date), timezone);
	const s = dayjsTimezone(dayjs(start), timezone);
	const e = dayjsTimezone(dayjs(end), timezone);
	return d.isBetween(s, e, view, "[]");
};
const getDisplayRange = (rangeValue, hoveredDate, activePosition, timezone) => {
	const [start, end] = rangeValue;
	if (isValidDate(start) && isValidDate(end)) return rangeValue;
	if (isValidDate(start) && activePosition === "end" && hoveredDate) {
		const startDate = dateTypeToDateObject(start, timezone);
		if (dayjs(hoveredDate).isBefore(dayjs(startDate), "day")) return [hoveredDate, startDate];
		return [startDate, hoveredDate];
	}
	return [void 0, void 0];
};
/**
* Focuses a date element in the range calendar container.
* Uses string-based data attributes (ISO format for day/month, number string for year).
*/
const focusRangeDate = (type, value, containerRef) => {
	switch (type) {
		case "day": return containerRef.current?.querySelector(`[data-date="${value}"]:not([aria-disabled='true'])`)?.focus();
		case "month": return containerRef.current?.querySelector(`[data-month="${value}"]`)?.focus();
		case "year": return containerRef.current?.querySelector(`[data-year="${value}"]`)?.focus();
	}
};
const scrollIntoViewRangeDate = (type, value, containerRef) => {
	switch (type) {
		case "year": return containerRef.current?.querySelector(`[data-year="${value}"]`)?.scrollIntoView({ block: "center" });
		case "month": return containerRef.current?.querySelector(`[data-month="${value}"]`)?.scrollIntoView({ block: "center" });
	}
};
const isDateInVisiblePanels = (date, baseDate, calendars, timezone) => {
	const base = dayjsTimezone(dayjs(baseDate), timezone);
	for (let i = 0; i < calendars; i++) {
		const panelMonth = base.add(i, "month");
		if (date.isSame(panelMonth, "month")) return true;
	}
	return false;
};
//#endregion
export { focusRangeDate, getDisplayRange, isDateInRangeForView, isDateInVisiblePanels, isSameDateForView, scrollIntoViewRangeDate };
