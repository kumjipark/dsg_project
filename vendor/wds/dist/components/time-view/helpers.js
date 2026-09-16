'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const require_runtime = require("../../_virtual/_rolldown/runtime.js");
const require_components_date_calendar_helpers = require("../date-calendar/helpers.js");
require("./constants.js");
let dayjs = require("dayjs");
dayjs = require_runtime.__toESM(dayjs);
//#region src/components/time-view/helpers.ts
const getHours = ({ step = 1, hourType = "24", locale }) => {
	const start = hourType === "12" ? 1 : 0;
	return new Array(Math.floor(((hourType === "12" ? 12 : 23) - start + 1) / step)).fill(0).map((_, i) => {
		const value = start + i * step;
		return {
			value,
			text: value.toString(),
			numeric: new Intl.DateTimeFormat(locale, {
				hour: "numeric",
				hour12: false
			}).format((0, dayjs.default)().hour(value).toDate())
		};
	});
};
const getMinutes = () => {
	return new Array(Math.floor(60 / 5)).fill(0).map((_, i) => {
		const value = i * 5;
		return {
			value,
			text: value.toString()
		};
	});
};
const getSeconds = () => {
	return new Array(Math.floor(60 / 5)).fill(0).map((_, i) => {
		const value = i * 5;
		return {
			value,
			text: value.toString()
		};
	});
};
const scrollToTime = (view, value, containerRef) => {
	const scrollItem = containerRef.current?.querySelector(`[data-${view}='${value}']`);
	if (scrollItem) containerRef.current?.scrollTo({ top: scrollItem.offsetTop - 8 });
};
const isDisabledTime = ({ minTime, maxTime, value, timezone }) => {
	if (!value) return false;
	const currentTime = require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(value), timezone);
	const currentTimeOnly = require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(), timezone).hour(currentTime.hour()).minute(currentTime.minute()).second(currentTime.second());
	if (minTime) {
		const minTimeObj = require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(minTime), timezone);
		const minTimeOnly = require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(), timezone).hour(minTimeObj.hour()).minute(minTimeObj.minute()).second(minTimeObj.second());
		if (currentTimeOnly.isBefore(minTimeOnly)) return true;
	}
	if (maxTime) {
		const maxTimeObj = require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(maxTime), timezone);
		const maxTimeOnly = require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(), timezone).hour(maxTimeObj.hour()).minute(maxTimeObj.minute()).second(maxTimeObj.second());
		if (currentTimeOnly.isAfter(maxTimeOnly)) return true;
	}
	return false;
};
const findClosestEnableTime = ({ minTime, maxTime, value, timezone }) => {
	if (!value) return value;
	const currentTime = require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(value), timezone);
	const currentTimeOnly = require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(), timezone).hour(currentTime.hour()).minute(currentTime.minute()).second(currentTime.second());
	if (minTime) {
		const minTimeObj = require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(minTime), timezone);
		const minTimeOnly = require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(), timezone).hour(minTimeObj.hour()).minute(minTimeObj.minute()).second(minTimeObj.second());
		if (currentTimeOnly.isBefore(minTimeOnly)) return minTime;
	}
	if (maxTime) {
		const maxTimeObj = require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(maxTime), timezone);
		const maxTimeOnly = require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(), timezone).hour(maxTimeObj.hour()).minute(maxTimeObj.minute()).second(maxTimeObj.second());
		if (currentTimeOnly.isAfter(maxTimeOnly)) return maxTime;
	}
	return value;
};
//#endregion
exports.findClosestEnableTime = findClosestEnableTime;
exports.getHours = getHours;
exports.getMinutes = getMinutes;
exports.getSeconds = getSeconds;
exports.isDisabledTime = isDisabledTime;
exports.scrollToTime = scrollToTime;
