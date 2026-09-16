'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const require_runtime = require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_list_index = require("../list/index.js");
const require_components_scroll_area_index = require("../scroll-area/index.js");
const require_utils_internal_date = require("../../utils/internal/date.js");
const require_components_date_calendar_helpers = require("../date-calendar/helpers.js");
const require_components_date_calendar_hooks = require("../date-calendar/hooks.js");
const require_components_time_view_constants = require("./constants.js");
const require_components_time_view_style = require("./style.js");
const require_components_time_view_helpers = require("./helpers.js");
const require_components_time_view_hooks = require("./hooks.js");
const require_components_time_view_contexts = require("./contexts.js");
let react = require("react");
let _radix_ui_react_use_controllable_state = require("@radix-ui/react-use-controllable-state");
let react_jsx_runtime = require("react/jsx-runtime");
let _radix_ui_react_roving_focus = require("@radix-ui/react-roving-focus");
let dayjs = require("dayjs");
dayjs = require_runtime.__toESM(dayjs);
//#region src/components/time-view/index.tsx
require_utils_internal_date.extendDayjs();
const TimeView = (0, react.forwardRef)(({ value: originValue, defaultValue, minTime, maxTime, views = ["hour", "minute"], locale = "ko-KR", timezone, disabled = false, readOnly = false, onChange, onChangeComplete, sx, ...props }, ref) => {
	const id = (0, react.useId)();
	const [value, setValue] = (0, _radix_ui_react_use_controllable_state.useControllableState)({
		prop: originValue,
		defaultProp: defaultValue,
		onChange
	});
	const { now } = require_components_date_calendar_hooks.useDefaultSelectedDate(value, minTime, maxTime, timezone);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_time_view_contexts.TimeViewContextProvider, {
		value,
		now,
		hourType: (0, react.useMemo)(() => views.includes("meridiem") ? "12" : "24", [views]),
		timezone,
		disabled,
		readOnly,
		onChange: setValue,
		onChangeComplete,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
			ref,
			"wds-component": "time-view",
			sx: [require_components_time_view_style.timeViewStyle, sx],
			...props,
			children: views.map((view, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TimeList, {
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
TimeView.displayName = require_components_time_view_constants.TIME_VIEW_NAME;
const TimeList = (0, react.memo)((0, react.forwardRef)(({ views, view, value, locale, variant, timezone, minTime, maxTime }, ref) => {
	const id = (0, react.useId)();
	const { hourType } = require_components_time_view_contexts.useTimeViewContext(require_components_time_view_constants.TIME_VIEW_NAME);
	const { currentTimeValue, timeList } = require_components_time_view_hooks.useTimeList({
		view,
		value,
		timezone,
		locale,
		hourType,
		minTime,
		maxTime
	});
	const scrollViewportRef = (0, react.useRef)(null);
	(0, react.useEffect)(() => {
		if (currentTimeValue) require_components_time_view_helpers.scrollToTime(view, currentTimeValue, scrollViewportRef);
	}, [currentTimeValue]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_radix_ui_react_roving_focus.RovingFocusGroup, {
		tabIndex: 0,
		orientation: "vertical",
		dir: "ltr",
		asChild: true,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_scroll_area_index.ScrollArea, {
			viewportRef: scrollViewportRef,
			size: "small",
			zIndex: 11,
			sx: require_components_time_view_style.timeListScrollAreaStyle,
			"data-role": "time-list-scroll-area",
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_list_index.List, {
				"data-role": `time-list-${view}`,
				role: "listbox",
				"aria-label": `Select ${view}`,
				ref,
				sx: require_components_time_view_style.timeListStyle,
				children: timeList.map((time) => time ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TimeItem, {
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
TimeList.displayName = require_components_time_view_constants.TIME_LIST_NAME;
const TimeItem = (0, react.forwardRef)(({ views, value, text, variant, view, currentTimeValue, disabled: itemDisabled, ...props }, ref) => {
	const { value: time, disabled: contextDisabled, readOnly, now, hourType, timezone, onChange, onChangeComplete } = require_components_time_view_contexts.useTimeViewContext(require_components_time_view_constants.TIME_ITEM_NAME);
	const textValue = view === "meridiem" ? value.toString() : text;
	const active = currentTimeValue ? currentTimeValue === textValue : false;
	const isDisabled = contextDisabled || itemDisabled || false;
	const handleClick = (0, react.useCallback)(() => {
		if (readOnly || isDisabled) return;
		let newValue = require_components_date_calendar_helpers.isValidDate(time) ? require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(time), timezone) : now;
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
		const parsedDateNewValue = require_components_date_calendar_helpers.dateTypeToDateObject(newValue, timezone);
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
	const handleKeyDown = (0, react.useCallback)((e) => {
		if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
		const timeViewElement = e.currentTarget.closest("[wds-component=\"time-view\"]");
		const currentTimeListScrollArea = e.currentTarget.closest("[data-role=\"time-list-scroll-area\"]");
		if (!timeViewElement || !currentTimeListScrollArea) return;
		const scrollAreaList = Array.from(timeViewElement.querySelectorAll("[data-role=\"time-list-scroll-area\"]"));
		const currentIndex = scrollAreaList.indexOf(currentTimeListScrollArea);
		const moveIndex = e.key === "ArrowLeft" ? currentIndex - 1 : currentIndex + 1;
		if (moveIndex >= 0 && moveIndex < scrollAreaList.length) scrollAreaList[moveIndex].focus();
	}, []);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_radix_ui_react_roving_focus.RovingFocusGroupItem, {
		asChild: true,
		focusable: !isDisabled,
		active,
		"data-active": active,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_list_index.ListCell, {
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
			sx: require_components_time_view_style.timeItemStyle({
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
TimeItem.displayName = require_components_time_view_constants.TIME_ITEM_NAME;
//#endregion
exports.TimeView = TimeView;
