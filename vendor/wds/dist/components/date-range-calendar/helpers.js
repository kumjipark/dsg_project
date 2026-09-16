'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const require_runtime = require("../../_virtual/_rolldown/runtime.js");
const require_components_date_calendar_helpers = require("../date-calendar/helpers.js");
let dayjs = require("dayjs");
dayjs = require_runtime.__toESM(dayjs);
//#region src/components/date-range-calendar/helpers.ts
const isSameDateForView = (date1, date2, view, timezone) => {
	if (!require_components_date_calendar_helpers.isValidDate(date1) || !require_components_date_calendar_helpers.isValidDate(date2)) return false;
	const d1 = require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(date1), timezone);
	const d2 = require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(date2), timezone);
	return d1.isSame(d2, view);
};
const isDateInRangeForView = (date, start, end, view, timezone) => {
	if (!require_components_date_calendar_helpers.isValidDate(date) || !require_components_date_calendar_helpers.isValidDate(start) || !require_components_date_calendar_helpers.isValidDate(end)) return false;
	const d = require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(date), timezone);
	const s = require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(start), timezone);
	const e = require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(end), timezone);
	return d.isBetween(s, e, view, "[]");
};
const getDisplayRange = (rangeValue, hoveredDate, activePosition, timezone) => {
	const [start, end] = rangeValue;
	if (require_components_date_calendar_helpers.isValidDate(start) && require_components_date_calendar_helpers.isValidDate(end)) return rangeValue;
	if (require_components_date_calendar_helpers.isValidDate(start) && activePosition === "end" && hoveredDate) {
		const startDate = require_components_date_calendar_helpers.dateTypeToDateObject(start, timezone);
		if ((0, dayjs.default)(hoveredDate).isBefore((0, dayjs.default)(startDate), "day")) return [hoveredDate, startDate];
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
	const base = require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(baseDate), timezone);
	for (let i = 0; i < calendars; i++) {
		const panelMonth = base.add(i, "month");
		if (date.isSame(panelMonth, "month")) return true;
	}
	return false;
};
//#endregion
exports.focusRangeDate = focusRangeDate;
exports.getDisplayRange = getDisplayRange;
exports.isDateInRangeForView = isDateInRangeForView;
exports.isDateInVisiblePanels = isDateInVisiblePanels;
exports.isSameDateForView = isSameDateForView;
exports.scrollIntoViewRangeDate = scrollIntoViewRangeDate;
