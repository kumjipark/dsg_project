'use client';
import dayjs from "dayjs";
//#region src/components/date-calendar/helpers.ts
const isDateTypeEmpty = (date) => date === void 0 || date === null || date === "";
const isValidDate = (date) => {
	if (isDateTypeEmpty(date)) return false;
	return dayjs(date).isValid();
};
const isDisabledDate = ({ min, max, value, timezone }) => {
	if (isValidDate(min) && dayjsTimezone(dayjs(min), timezone).isAfter(dayjsTimezone(dayjs(value), timezone))) return true;
	if (isValidDate(max) && dayjsTimezone(dayjs(max), timezone).isBefore(dayjsTimezone(dayjs(value), timezone))) return true;
	return false;
};
const dateTypeToDateObject = (v, timezone) => new Date(dayjsTimezone(dayjs(v), timezone).toISOString());
const dayjsTimezone = (v, timezone) => {
	if (timezone?.toLowerCase() === "utc") return v.utc();
	return v.tz(timezone);
};
const findClosestEnableDate = ({ min, max, value, timezone }) => {
	if (isValidDate(min) && dayjsTimezone(dayjs(min), timezone).isAfter(dayjsTimezone(dayjs(value), timezone))) return dateTypeToDateObject(min, timezone);
	if (isValidDate(max) && dayjsTimezone(dayjs(max), timezone).isBefore(dayjsTimezone(dayjs(value), timezone))) return dateTypeToDateObject(max, timezone);
	return dateTypeToDateObject(value, timezone);
};
const getWeekdays = (locale) => {
	return new Array(7).fill(0).map((_, i) => ({
		narrow: new Intl.DateTimeFormat(locale, { weekday: "narrow" }).format(dayjs().weekday(i).toDate()),
		long: new Intl.DateTimeFormat(locale, { weekday: "long" }).format(dayjs().weekday(i).toDate()),
		short: new Intl.DateTimeFormat(locale, { weekday: "short" }).format(dayjs().weekday(i).toDate())
	}));
};
const getMonths = (locale) => {
	return new Array(12).fill(0).map((_, i) => ({
		"2-digit": new Intl.DateTimeFormat(locale, { month: "2-digit" }).format(dayjs().month(i).toDate()),
		long: new Intl.DateTimeFormat(locale, { month: "long" }).format(dayjs().month(i).toDate()),
		narrow: new Intl.DateTimeFormat(locale, { month: "narrow" }).format(dayjs().month(i).toDate()),
		short: new Intl.DateTimeFormat(locale, { month: "short" }).format(dayjs().month(i).toDate()),
		numeric: new Intl.DateTimeFormat(locale, { month: "numeric" }).format(dayjs().month(i).toDate())
	}));
};
const getMeridiem = (locale) => {
	return new Array(2).fill(0).map((_, i) => ({
		lower: new Intl.DateTimeFormat(locale, {
			hour: "numeric",
			hour12: true
		}).formatToParts(dayjs().hour(i * 12).toDate()).find((v) => v.type === "dayPeriod")?.value || "a",
		upper: new Intl.DateTimeFormat(locale, {
			hour: "numeric",
			hour12: true
		}).formatToParts(dayjs().hour(i * 12).toDate()).find((v) => v.type === "dayPeriod")?.value.toUpperCase() || "A"
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
export { dateTypeToDateObject, dayjsTimezone, findClosestEnableDate, focusDate, getMeridiem, getMonths, getWeekdays, isDateTypeEmpty, isDisabledDate, isValidDate, scrollIntoViewDate };
