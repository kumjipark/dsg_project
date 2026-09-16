'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const require_runtime = require("../../_virtual/_rolldown/runtime.js");
const require_components_date_calendar_helpers = require("../date-calendar/helpers.js");
const require_components_date_picker_helpers = require("../date-picker/helpers.js");
const require_components_time_view_helpers = require("./helpers.js");
let react = require("react");
let dayjs = require("dayjs");
dayjs = require_runtime.__toESM(dayjs);
//#region src/components/time-view/hooks.ts
const useTimeList = ({ view, value, timezone, locale, hourType, minTime, maxTime }) => {
	return {
		hourType,
		currentTimeValue: (0, react.useMemo)(() => {
			if (!require_components_date_calendar_helpers.isValidDate(value)) return;
			switch (view) {
				case "meridiem": return require_components_date_calendar_helpers.getMeridiem(locale).findIndex((meridiem) => meridiem.upper === require_components_date_picker_helpers.toFormat(value, "A", locale, timezone)).toString();
				case "hour": return require_components_date_picker_helpers.toFormat(value, hourType === "12" ? "h" : "H", locale, timezone);
				case "minute": return require_components_date_picker_helpers.toFormat(value, "m", locale, timezone);
				case "second": return require_components_date_picker_helpers.toFormat(value, "s", locale, timezone);
			}
		}, [
			value,
			timezone,
			view,
			locale,
			hourType
		]),
		timeList: (0, react.useMemo)(() => {
			const currentHour = require_components_date_calendar_helpers.isValidDate(value) ? require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(value), timezone).hour() : 0;
			switch (view) {
				case "meridiem": return require_components_date_calendar_helpers.getMeridiem(locale).map((meridiem, index) => ({
					value: index,
					text: meridiem.upper
				}));
				case "hour":
					const hoursWithDisabled = require_components_time_view_helpers.getHours({
						locale,
						hourType
					}).map((hour) => {
						let targetHour = hour.value;
						if (hourType === "12") if (currentHour >= 12) targetHour = hour.value === 12 ? 12 : hour.value + 12;
						else targetHour = hour.value === 12 ? 0 : hour.value;
						const disabled = require_components_time_view_helpers.isDisabledTime({
							minTime,
							maxTime,
							value: (0, dayjs.default)().hour(targetHour).minute(0).second(0).toDate(),
							timezone
						});
						return {
							...hour,
							disabled
						};
					});
					return hourType === "12" ? [hoursWithDisabled.pop(), ...hoursWithDisabled] : hoursWithDisabled;
				case "minute": return require_components_time_view_helpers.getMinutes().map((minute) => {
					const disabled = require_components_time_view_helpers.isDisabledTime({
						minTime,
						maxTime,
						value: (0, dayjs.default)().hour(currentHour).minute(minute.value).second(0).toDate(),
						timezone
					});
					return {
						...minute,
						disabled
					};
				});
				case "second": return require_components_time_view_helpers.getSeconds().map((second) => {
					const currentMinute = require_components_date_calendar_helpers.isValidDate(value) ? require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(value), timezone).minute() : 0;
					const disabled = require_components_time_view_helpers.isDisabledTime({
						minTime,
						maxTime,
						value: (0, dayjs.default)().hour(currentHour).minute(currentMinute).second(second.value).toDate(),
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
exports.useTimeList = useTimeList;
