'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const require_runtime = require("../../_virtual/_rolldown/runtime.js");
const require_components_date_calendar_helpers = require("./helpers.js");
let react = require("react");
let dayjs = require("dayjs");
dayjs = require_runtime.__toESM(dayjs);
//#region src/components/date-calendar/hooks.ts
const useDefaultSelectedDate = (value, min, max, timezone) => {
	const now = (0, react.useRef)(require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(), timezone).set("hour", 0).set("minute", 0).set("second", 0)).current;
	const getDefaultSelectedDate = (0, react.useCallback)(() => {
		if (Boolean(value) && require_components_date_calendar_helpers.isValidDate(value)) return require_components_date_calendar_helpers.dateTypeToDateObject(value, timezone);
		if (require_components_date_calendar_helpers.isValidDate(min) && require_components_date_calendar_helpers.isValidDate(max) && now.isBetween(min, max)) return require_components_date_calendar_helpers.dateTypeToDateObject(now, timezone);
		return require_components_date_calendar_helpers.findClosestEnableDate({
			value: require_components_date_calendar_helpers.dateTypeToDateObject(now, timezone),
			min,
			max,
			timezone
		});
	}, [
		max,
		min,
		now,
		value,
		timezone
	]);
	const [defaultSelectedDate, setDefaultSelectedDate] = (0, react.useState)(getDefaultSelectedDate());
	(0, react.useEffect)(() => {
		setDefaultSelectedDate(getDefaultSelectedDate());
	}, [getDefaultSelectedDate]);
	return {
		defaultSelectedDate,
		setDefaultSelectedDate,
		now
	};
};
//#endregion
exports.useDefaultSelectedDate = useDefaultSelectedDate;
