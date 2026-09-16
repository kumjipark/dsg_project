'use client';
import { dayjsTimezone, getMeridiem, isValidDate } from "../date-calendar/helpers.mjs";
import { toFormat } from "../date-picker/helpers.mjs";
import { getHours, getMinutes, getSeconds, isDisabledTime } from "./helpers.mjs";
import { useMemo } from "react";
import dayjs from "dayjs";
//#region src/components/time-view/hooks.ts
const useTimeList = ({ view, value, timezone, locale, hourType, minTime, maxTime }) => {
	return {
		hourType,
		currentTimeValue: useMemo(() => {
			if (!isValidDate(value)) return;
			switch (view) {
				case "meridiem": return getMeridiem(locale).findIndex((meridiem) => meridiem.upper === toFormat(value, "A", locale, timezone)).toString();
				case "hour": return toFormat(value, hourType === "12" ? "h" : "H", locale, timezone);
				case "minute": return toFormat(value, "m", locale, timezone);
				case "second": return toFormat(value, "s", locale, timezone);
			}
		}, [
			value,
			timezone,
			view,
			locale,
			hourType
		]),
		timeList: useMemo(() => {
			const currentHour = isValidDate(value) ? dayjsTimezone(dayjs(value), timezone).hour() : 0;
			switch (view) {
				case "meridiem": return getMeridiem(locale).map((meridiem, index) => ({
					value: index,
					text: meridiem.upper
				}));
				case "hour":
					const hoursWithDisabled = getHours({
						locale,
						hourType
					}).map((hour) => {
						let targetHour = hour.value;
						if (hourType === "12") if (currentHour >= 12) targetHour = hour.value === 12 ? 12 : hour.value + 12;
						else targetHour = hour.value === 12 ? 0 : hour.value;
						const disabled = isDisabledTime({
							minTime,
							maxTime,
							value: dayjs().hour(targetHour).minute(0).second(0).toDate(),
							timezone
						});
						return {
							...hour,
							disabled
						};
					});
					return hourType === "12" ? [hoursWithDisabled.pop(), ...hoursWithDisabled] : hoursWithDisabled;
				case "minute": return getMinutes().map((minute) => {
					const disabled = isDisabledTime({
						minTime,
						maxTime,
						value: dayjs().hour(currentHour).minute(minute.value).second(0).toDate(),
						timezone
					});
					return {
						...minute,
						disabled
					};
				});
				case "second": return getSeconds().map((second) => {
					const currentMinute = isValidDate(value) ? dayjsTimezone(dayjs(value), timezone).minute() : 0;
					const disabled = isDisabledTime({
						minTime,
						maxTime,
						value: dayjs().hour(currentHour).minute(currentMinute).second(second.value).toDate(),
						timezone
					});
					return {
						...second,
						disabled
					};
				});
			}
		}, [
			locale,
			view,
			hourType,
			minTime,
			maxTime,
			timezone,
			value
		])
	};
};
//#endregion
export { useTimeList };
