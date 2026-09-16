'use client';
import { dayjsTimezone } from "../date-calendar/helpers.mjs";
import "./constants.mjs";
import dayjs from "dayjs";
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
			}).format(dayjs().hour(value).toDate())
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
	const currentTime = dayjsTimezone(dayjs(value), timezone);
	const currentTimeOnly = dayjsTimezone(dayjs(), timezone).hour(currentTime.hour()).minute(currentTime.minute()).second(currentTime.second());
	if (minTime) {
		const minTimeObj = dayjsTimezone(dayjs(minTime), timezone);
		const minTimeOnly = dayjsTimezone(dayjs(), timezone).hour(minTimeObj.hour()).minute(minTimeObj.minute()).second(minTimeObj.second());
		if (currentTimeOnly.isBefore(minTimeOnly)) return true;
	}
	if (maxTime) {
		const maxTimeObj = dayjsTimezone(dayjs(maxTime), timezone);
		const maxTimeOnly = dayjsTimezone(dayjs(), timezone).hour(maxTimeObj.hour()).minute(maxTimeObj.minute()).second(maxTimeObj.second());
		if (currentTimeOnly.isAfter(maxTimeOnly)) return true;
	}
	return false;
};
const findClosestEnableTime = ({ minTime, maxTime, value, timezone }) => {
	if (!value) return value;
	const currentTime = dayjsTimezone(dayjs(value), timezone);
	const currentTimeOnly = dayjsTimezone(dayjs(), timezone).hour(currentTime.hour()).minute(currentTime.minute()).second(currentTime.second());
	if (minTime) {
		const minTimeObj = dayjsTimezone(dayjs(minTime), timezone);
		const minTimeOnly = dayjsTimezone(dayjs(), timezone).hour(minTimeObj.hour()).minute(minTimeObj.minute()).second(minTimeObj.second());
		if (currentTimeOnly.isBefore(minTimeOnly)) return minTime;
	}
	if (maxTime) {
		const maxTimeObj = dayjsTimezone(dayjs(maxTime), timezone);
		const maxTimeOnly = dayjsTimezone(dayjs(), timezone).hour(maxTimeObj.hour()).minute(maxTimeObj.minute()).second(maxTimeObj.second());
		if (currentTimeOnly.isAfter(maxTimeOnly)) return maxTime;
	}
	return value;
};
//#endregion
export { findClosestEnableTime, getHours, getMinutes, getSeconds, isDisabledTime, scrollToTime };
