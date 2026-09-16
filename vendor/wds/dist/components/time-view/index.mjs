'use client';
import { FlexBox } from "../flex-box/index.mjs";
import { List, ListCell } from "../list/index.mjs";
import { ScrollArea } from "../scroll-area/index.mjs";
import { extendDayjs } from "../../utils/internal/date.mjs";
import { dateTypeToDateObject, dayjsTimezone, isValidDate } from "../date-calendar/helpers.mjs";
import { useDefaultSelectedDate } from "../date-calendar/hooks.mjs";
import { TIME_ITEM_NAME, TIME_LIST_NAME, TIME_VIEW_NAME } from "./constants.mjs";
import { timeItemStyle, timeListScrollAreaStyle, timeListStyle, timeViewStyle } from "./style.mjs";
import { scrollToTime } from "./helpers.mjs";
import { useTimeList } from "./hooks.mjs";
import { TimeViewContextProvider, useTimeViewContext } from "./contexts.mjs";
import { forwardRef, memo, useCallback, useEffect, useId, useMemo, useRef } from "react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { jsx } from "react/jsx-runtime";
import { RovingFocusGroup, RovingFocusGroupItem } from "@radix-ui/react-roving-focus";
import dayjs from "dayjs";
//#region src/components/time-view/index.tsx
extendDayjs();
const TimeView = forwardRef(({ value: originValue, defaultValue, minTime, maxTime, views = ["hour", "minute"], locale = "ko-KR", timezone, disabled = false, readOnly = false, onChange, onChangeComplete, sx, ...props }, ref) => {
	const id = useId();
	const [value, setValue] = useControllableState({
		prop: originValue,
		defaultProp: defaultValue,
		onChange
	});
	const { now } = useDefaultSelectedDate(value, minTime, maxTime, timezone);
	return /* @__PURE__ */ jsx(TimeViewContextProvider, {
		value,
		now,
		hourType: useMemo(() => views.includes("meridiem") ? "12" : "24", [views]),
		timezone,
		disabled,
		readOnly,
		onChange: setValue,
		onChangeComplete,
		children: /* @__PURE__ */ jsx(FlexBox, {
			ref,
			"wds-component": "time-view",
			sx: [timeViewStyle, sx],
			...props,
			children: views.map((view, index) => /* @__PURE__ */ jsx(TimeList, {
				view,
				views,
				value,
				locale,
				timezone,
				minTime,
				maxTime,
				variant: views.length === 1 ? "single" : index === 0 ? "first" : index === views.length - 1 ? "last" : "middle"
			}, `${id}-${view}`))
		})
	});
});
TimeView.displayName = TIME_VIEW_NAME;
const TimeList = memo(forwardRef(({ views, view, value, locale, variant, timezone, minTime, maxTime }, ref) => {
	const id = useId();
	const { hourType } = useTimeViewContext(TIME_VIEW_NAME);
	const { currentTimeValue, timeList } = useTimeList({
		view,
		value,
		timezone,
		locale,
		hourType,
		minTime,
		maxTime
	});
	const scrollViewportRef = useRef(null);
	useEffect(() => {
		if (currentTimeValue) scrollToTime(view, currentTimeValue, scrollViewportRef);
	}, [currentTimeValue]);
	return /* @__PURE__ */ jsx(RovingFocusGroup, {
		tabIndex: 0,
		orientation: "vertical",
		dir: "ltr",
		asChild: true,
		children: /* @__PURE__ */ jsx(ScrollArea, {
			viewportRef: scrollViewportRef,
			size: "small",
			zIndex: 11,
			sx: timeListScrollAreaStyle,
			"data-role": "time-list-scroll-area",
			children: /* @__PURE__ */ jsx(List, {
				"data-role": `time-list-${view}`,
				role: "listbox",
				"aria-label": `Select ${view}`,
				ref,
				sx: timeListStyle,
				children: timeList.map((time) => time ? /* @__PURE__ */ jsx(TimeItem, {
					views,
					view,
					variant,
					currentTimeValue,
					...time
				}, `${id}-${time.value}`) : null)
			})
		})
	});
}));
TimeList.displayName = TIME_LIST_NAME;
const TimeItem = forwardRef(({ views, value, text, variant, view, currentTimeValue, disabled: itemDisabled, ...props }, ref) => {
	const { value: time, disabled: contextDisabled, readOnly, now, hourType, timezone, onChange, onChangeComplete } = useTimeViewContext(TIME_ITEM_NAME);
	const textValue = view === "meridiem" ? value.toString() : text;
	const active = currentTimeValue ? currentTimeValue === textValue : false;
	const isDisabled = contextDisabled || itemDisabled || false;
	const handleClick = useCallback(() => {
		if (readOnly || isDisabled) return;
		let newValue = isValidDate(time) ? dayjsTimezone(dayjs(time), timezone) : now;
		switch (view) {
			case "meridiem":
				newValue = newValue.set("hour", value === 0 ? newValue.hour() >= 12 ? newValue.hour() - 12 : newValue.hour() : newValue.hour() < 12 ? newValue.hour() + 12 : newValue.hour());
				break;
			case "hour":
				if (hourType === "12") newValue = newValue.hour(value === 12 ? newValue.hour() >= 12 ? 12 : 0 : newValue.hour() >= 12 ? value + 12 : value);
				else newValue = newValue.hour(value);
				break;
			case "minute":
				newValue = newValue.minute(value);
				break;
			case "second":
				newValue = newValue.second(value);
				break;
		}
		if (!views.includes("second")) newValue = newValue.second(0);
		if (!views.includes("minute")) newValue = newValue.minute(0);
		const parsedDateNewValue = dateTypeToDateObject(newValue, timezone);
		onChange(parsedDateNewValue);
		if (variant === "last" || variant === "single") onChangeComplete?.(parsedDateNewValue);
	}, [
		readOnly,
		isDisabled,
		time,
		timezone,
		now,
		view,
		views,
		value,
		hourType,
		onChange,
		variant,
		onChangeComplete
	]);
	const handleKeyDown = useCallback((e) => {
		if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
		const timeViewElement = e.currentTarget.closest("[wds-component=\"time-view\"]");
		const currentTimeListScrollArea = e.currentTarget.closest("[data-role=\"time-list-scroll-area\"]");
		if (!timeViewElement || !currentTimeListScrollArea) return;
		const scrollAreaList = Array.from(timeViewElement.querySelectorAll("[data-role=\"time-list-scroll-area\"]"));
		const currentIndex = scrollAreaList.indexOf(currentTimeListScrollArea);
		const moveIndex = e.key === "ArrowLeft" ? currentIndex - 1 : currentIndex + 1;
		if (moveIndex >= 0 && moveIndex < scrollAreaList.length) scrollAreaList[moveIndex].focus();
	}, []);
	return /* @__PURE__ */ jsx(RovingFocusGroupItem, {
		asChild: true,
		focusable: !isDisabled,
		active,
		"data-active": active,
		children: /* @__PURE__ */ jsx(ListCell, {
			ref,
			fillWidth: true,
			verticalPadding: "small",
			selected: active,
			value,
			role: "option",
			"aria-current": void 0,
			"aria-selected": active,
			"aria-label": text,
			"data-role": `time-item-${view}`,
			disabled: isDisabled,
			[`data-${view}`]: textValue,
			sx: timeItemStyle({
				active,
				disabled: isDisabled,
				variant
			}),
			...props,
			onClick: handleClick,
			onKeyDown: handleKeyDown,
			children: text
		})
	});
});
TimeItem.displayName = TIME_ITEM_NAME;
//#endregion
export { TimeView };
