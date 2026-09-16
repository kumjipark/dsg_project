'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const require_runtime = require("../../_virtual/_rolldown/runtime.js");
let dayjs = require("dayjs");
dayjs = require_runtime.__toESM(dayjs);
//#region src/components/date-calendar/helpers.ts
const isDateTypeEmpty = (date) => date === void 0 || date === null || date === "";
const isValidDate = (date) => {
	if (isDateTypeEmpty(date)) return false;
	return (0, dayjs.default)(date).isValid();
};
const isDisabledDate = ({ min, max, value, timezone }) => {
	if (isValidDate(min) && dayjsTimezone((0, dayjs.default)(min), timezone).isAfter(dayjsTimezone((0, dayjs.default)(value), timezone))) return true;
	if (isValidDate(max) && dayjsTimezone((0, dayjs.default)(max), timezone).isBefore(dayjsTimezone((0, dayjs.default)(value), timezone))) return true;
	return false;
};
const dateTypeToDateObject = (v, timezone) => new Date(dayjsTimezone((0, dayjs.default)(v), timezone).toISOString());
const dayjsTimezone = (v, timezone) => {
	if (timezone?.toLowerCase() === "utc") return v.utc();
	return v.tz(timezone);
};
const findClosestEnableDate = ({ min, max, value, timezone }) => {
	if (isValidDate(min) && dayjsTimezone((0, dayjs.default)(min), timezone).isAfter(dayjsTimezone((0, dayjs.default)(value), timezone))) return dateTypeToDateObject(min, timezone);
	if (isValidDate(max) && dayjsTimezone((0, dayjs.default)(max), timezone).isBefore(dayjsTimezone((0, dayjs.default)(value), timezone))) return dateTypeToDateObject(max, timezone);
	return dateTypeToDateObject(value, timezone);
};
const getWeekdays = (locale) => {
	return new Array(7).fill(0).map((_, i) => ({
		narrow: new Intl.DateTimeFormat(locale, { weekday: "narrow" }).format((0, dayjs.default)().weekday(i).toDate()),
		long: new Intl.DateTimeFormat(locale, { weekday: "long" }).format((0, dayjs.default)().weekday(i).toDate()),
		short: new Intl.DateTimeFormat(locale, { weekday: "short" }).format((0, dayjs.default)().weekday(i).toDate())
	}));
};
const getMonths = (locale) => {
	return new Array(12).fill(0).map((_, i) => ({
		"2-digit": new Intl.DateTimeFormat(locale, { month: "2-digit" }).format((0, dayjs.default)().month(i).toDate()),
		long: new Intl.DateTimeFormat(locale, { month: "long" }).format((0, dayjs.default)().month(i).toDate()),
		narrow: new Intl.DateTimeFormat(locale, { month: "narrow" }).format((0, dayjs.default)().month(i).toDate()),
		short: new Intl.DateTimeFormat(locale, { month: "short" }).format((0, dayjs.default)().month(i).toDate()),
		numeric: new Intl.DateTimeFormat(locale, { month: "numeric" }).format((0, dayjs.default)().month(i).toDate())
	}));
};
const getMeridiem = (locale) => {
	return new Array(2).fill(0).map((_, i) => ({
		lower: new Intl.DateTimeFormat(locale, {
			hour: "numeric",
			hour12: true
		}).formatToParts((0, dayjs.default)().hour(i * 12).toDate()).find((v) => v.type === "dayPeriod")?.value || "a",
		upper: new Intl.DateTimeFormat(locale, {
			hour: "numeric",
			hour12: true
		}).formatToParts((0, dayjs.default)().hour(i * 12).toDate()).find((v) => v.type === "dayPeriod")?.value.toUpperCase() || "A"
	}));
};
const focusDate = (type, value, containerRef) => {
	switch (type) {
		case "year": return containerRef.current?.querySelector(`[data-year='${value}']`)?.focus();
		case "month": return containerRef.current?.querySelector(`[data-month='${value}']`)?.focus();
		case "day": return containerRef.current?.querySelector(`[data-date='${value}']:not([aria-disabled='true'])[data-other-month='false']`)?.focus();
	}
};
const scrollIntoViewDate = (type, value, containerRef) => {
	switch (type) {
		case "year": return containerRef.current?.querySelector(`[data-year='${value}']`)?.scrollIntoView();
		case "month": return containerRef.current?.querySelector(`[data-month='${value}']`)?.scrollIntoView();
	}
};
//#endregion
exports.dateTypeToDateObject = dateTypeToDateObject;
exports.dayjsTimezone = dayjsTimezone;
exports.findClosestEnableDate = findClosestEnableDate;
exports.focusDate = focusDate;
exports.getMeridiem = getMeridiem;
exports.getMonths = getMonths;
exports.getWeekdays = getWeekdays;
exports.isDateTypeEmpty = isDateTypeEmpty;
exports.isDisabledDate = isDisabledDate;
exports.isValidDate = isValidDate;
exports.scrollIntoViewDate = scrollIntoViewDate;
