'use client';
import { dateTypeToDateObject, dayjsTimezone, findClosestEnableDate, isValidDate } from "./helpers.mjs";
import { useCallback, useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
//#region src/components/date-calendar/hooks.ts
const useDefaultSelectedDate = (value, min, max, timezone) => {
	const now = useRef(dayjsTimezone(dayjs(), timezone).set("hour", 0).set("minute", 0).set("second", 0)).current;
	const getDefaultSelectedDate = useCallback(() => {
		if (Boolean(value) && isValidDate(value)) return dateTypeToDateObject(value, timezone);
		if (isValidDate(min) && isValidDate(max) && now.isBetween(min, max)) return dateTypeToDateObject(now, timezone);
		return findClosestEnableDate({
			value: dateTypeToDateObject(now, timezone),
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
	const [defaultSelectedDate, setDefaultSelectedDate] = useState(getDefaultSelectedDate());
	useEffect(() => {
		setDefaultSelectedDate(getDefaultSelectedDate());
	}, [getDefaultSelectedDate]);
	return {
		defaultSelectedDate,
		setDefaultSelectedDate,
		now
	};
};
//#endregion
export { useDefaultSelectedDate };
