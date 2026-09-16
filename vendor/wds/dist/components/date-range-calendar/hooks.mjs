'use client';
import { dateTypeToDateObject, dayjsTimezone, isValidDate } from "../date-calendar/helpers.mjs";
import { DEFAULT_RANGE_VALUE } from "./constants.mjs";
import { useCallback, useState } from "react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import dayjs from "dayjs";
//#region src/components/date-range-calendar/hooks.ts
const useRangeSelection = ({ value, defaultValue, onChange, onChangeComplete, timezone, disabled, readOnly }) => {
	const [rangeValue, setRangeValue] = useControllableState({
		prop: value,
		defaultProp: defaultValue ?? DEFAULT_RANGE_VALUE,
		onChange
	});
	const [activePosition, setActivePosition] = useState("start");
	const [hoveredDate, setHoveredDate] = useState(null);
	return {
		rangeValue,
		setRangeValue,
		activePosition,
		setActivePosition,
		hoveredDate,
		setHoveredDate,
		handleDateSelect: useCallback((date) => {
			if (disabled || readOnly) return;
			if (activePosition === "start") {
				setRangeValue([date, void 0]);
				setActivePosition("end");
			} else {
				const start = rangeValue[0];
				if (isValidDate(start)) {
					const startDate = dateTypeToDateObject(start, timezone);
					let newRange;
					if (dayjsTimezone(dayjs(date), timezone).isBefore(dayjsTimezone(dayjs(startDate), timezone), "day")) newRange = [date, startDate];
					else newRange = [startDate, date];
					setRangeValue(newRange);
					setHoveredDate(null);
					onChangeComplete?.(newRange);
					setActivePosition("start");
				} else {
					setRangeValue([date, void 0]);
					setActivePosition("end");
				}
			}
		}, [
			activePosition,
			disabled,
			onChangeComplete,
			rangeValue,
			readOnly,
			setRangeValue,
			timezone
		])
	};
};
//#endregion
export { useRangeSelection };
