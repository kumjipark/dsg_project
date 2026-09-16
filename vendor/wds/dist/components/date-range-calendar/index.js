'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const require_runtime = require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_responsive_props = require("../../utils/internal/responsive-props.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_typography_index = require("../typography/index.js");
const require_components_with_interaction_index = require("../with-interaction/index.js");
const require_components_scroll_area_index = require("../scroll-area/index.js");
const require_components_icon_button_index = require("../icon-button/index.js");
const require_utils_internal_date = require("../../utils/internal/date.js");
const require_components_date_calendar_helpers = require("../date-calendar/helpers.js");
const require_components_date_calendar_hooks = require("../date-calendar/hooks.js");
const require_components_date_calendar_constants = require("../date-calendar/constants.js");
const require_hooks_internal_use_media = require("../../hooks/internal/use-media.js");
const require_components_date_range_calendar_helpers = require("./helpers.js");
const require_components_date_range_calendar_style = require("./style.js");
const require_components_date_range_calendar_hooks = require("./hooks.js");
const require_components_date_range_calendar_contexts = require("./contexts.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let _wanteddev_wds_icon = require("@wanteddev/wds-icon");
let _radix_ui_react_compose_refs = require("@radix-ui/react-compose-refs");
let react_jsx_runtime = require("react/jsx-runtime");
let dayjs = require("dayjs");
dayjs = require_runtime.__toESM(dayjs);
//#region src/components/date-range-calendar/index.tsx
require_utils_internal_date.extendDayjs();
const DateRangeCalendar = (0, react.forwardRef)(({ value: originValue, defaultValue, onChange, onChangeComplete, calendars: givenCalendars = 1, max = require_components_date_calendar_constants.ACCESSIBLE_MAX_DATE, min = require_components_date_calendar_constants.ACCESSIBLE_MIN_DATE, view = "day", locale = "ko-KR", yearsOrder = "asc", timezone, disabled, readOnly, xs, sm, md, lg, xl, ...props }, ref) => {
	const theme = (0, _wanteddev_wds_engine.useTheme)();
	const breakpoints = (0, react.useMemo)(() => Object.keys(theme.breakpoint), [theme.breakpoint]);
	const calendars = require_hooks_internal_use_media.useMedia(breakpoints.map((v) => `(min-width: ${theme.breakpoint[v]})`), breakpoints.map((v) => require_utils_internal_responsive_props.getPreviousValue({
		xs,
		sm,
		md,
		lg,
		xl
	}, "calendars", givenCalendars, v)), givenCalendars) ?? givenCalendars;
	const { rangeValue, activePosition, hoveredDate, setHoveredDate, handleDateSelect: baseHandleDateSelect } = require_components_date_range_calendar_hooks.useRangeSelection({
		value: originValue,
		defaultValue,
		onChange,
		onChangeComplete,
		timezone,
		disabled,
		readOnly
	});
	const initialStart = (0, react.useRef)(originValue?.[0] ?? defaultValue?.[0]).current;
	const { defaultSelectedDate, setDefaultSelectedDate, now } = require_components_date_calendar_hooks.useDefaultSelectedDate(initialStart, min, max, timezone);
	const containerRef = (0, react.useRef)(null);
	const composedRefs = (0, _radix_ui_react_compose_refs.useComposedRefs)(ref, containerRef);
	const effectiveCalendars = view === "day" ? Math.max(1, calendars) : 1;
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_date_range_calendar_contexts.DateRangeCalendarContextProvider, {
		rangeValue,
		hoveredDate,
		setHoveredDate,
		activePosition,
		handleDateSelect: baseHandleDateSelect,
		defaultSelectedDate,
		setDefaultSelectedDate,
		now,
		min,
		max,
		locale,
		timezone,
		containerRef,
		view,
		calendars: effectiveCalendars,
		disabled,
		readOnly,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
			ref: composedRefs,
			"wds-component": "date-range-calendar",
			sx: [require_components_date_range_calendar_style.rangeCalendarContainerStyle, props.sx],
			onMouseLeave: () => {
				if (!disabled && !readOnly) setHoveredDate(null);
			},
			children: [
				view === "day" && Array.from({ length: effectiveCalendars }).map((_, panelIdx) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(RangeDayPanel, { panelIndex: panelIdx }, panelIdx)),
				view === "month" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(RangeMonthPanel, {}),
				view === "year" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(RangeYearPanel, { yearsOrder })
			]
		})
	});
});
DateRangeCalendar.displayName = "DateRangeCalendar";
const RangeDayPanel = (0, react.memo)(({ panelIndex }) => {
	const { defaultSelectedDate, setDefaultSelectedDate, locale, timezone, min, max, calendars } = require_components_date_range_calendar_contexts.useDateRangeCalendarContext("RangeDayPanel");
	const panelMonth = (0, react.useMemo)(() => require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(defaultSelectedDate), timezone).add(panelIndex, "month"), [
		defaultSelectedDate,
		panelIndex,
		timezone
	]);
	const headerLabel = (0, react.useMemo)(() => Intl.DateTimeFormat(locale, {
		month: "long",
		year: "numeric",
		timeZone: timezone
	}).format(require_components_date_calendar_helpers.dateTypeToDateObject(panelMonth, timezone)), [
		locale,
		panelMonth,
		timezone
	]);
	const weekdays = (0, react.useMemo)(() => require_components_date_calendar_helpers.getWeekdays(locale), [locale]);
	const showPrevArrow = panelIndex === 0;
	const showNextArrow = panelIndex === calendars - 1;
	const isOnlyOneCalendar = calendars === 1;
	const prevArrow = (0, react.useMemo)(() => {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_icon_button_index.IconButton, {
			"wds-ignore-first-focus": "true",
			size: 18,
			"aria-label": "Previous month",
			disabled: require_components_date_calendar_helpers.isValidDate(min) && require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(defaultSelectedDate), timezone).isSameOrBefore(require_components_date_calendar_helpers.dateTypeToDateObject(min, timezone), "month"),
			onClick: () => setDefaultSelectedDate(require_components_date_calendar_helpers.dateTypeToDateObject(require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(defaultSelectedDate), timezone).subtract(1, "month"), timezone)),
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconChevronLeftSmall, {})
		});
	}, [
		min,
		defaultSelectedDate,
		timezone,
		setDefaultSelectedDate
	]);
	const nextArrow = (0, react.useMemo)(() => {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_icon_button_index.IconButton, {
			"wds-ignore-first-focus": "true",
			size: 18,
			"aria-label": "Next month",
			disabled: require_components_date_calendar_helpers.isValidDate(max) && require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(defaultSelectedDate), timezone).add(calendars - 1, "month").isSameOrAfter((0, dayjs.default)(require_components_date_calendar_helpers.dateTypeToDateObject(max, timezone)), "month"),
			onClick: () => setDefaultSelectedDate(require_components_date_calendar_helpers.dateTypeToDateObject(require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(defaultSelectedDate), timezone).add(1, "month"), timezone)),
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconChevronRightSmall, {})
		});
	}, [
		max,
		defaultSelectedDate,
		timezone,
		calendars,
		setDefaultSelectedDate
	]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
		flexDirection: "column",
		alignItems: "flex-start",
		sx: require_components_date_range_calendar_style.rangePanelStyle,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_scroll_area_index.ScrollArea, {
			sx: require_components_date_range_calendar_style.rangePanelWrapperStyle,
			zIndex: 11,
			role: "grid",
			"aria-multiselectable": true,
			"aria-label": "Select day range",
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
				sx: require_components_date_range_calendar_style.rangeStickyHeaderStyle,
				"data-role": "date-range-calendar-header",
				flexDirection: "column",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
					sx: require_components_date_range_calendar_style.rangePanelHeaderStyle,
					alignItems: "center",
					children: isOnlyOneCalendar ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
						sx: require_components_date_range_calendar_style.rangePanelHeaderLabelStyle,
						flex: "1",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(PanelHeaderLabel, { label: headerLabel })
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
						gap: "18px",
						sx: require_components_date_range_calendar_style.rangePanelHeaderNavigationStyle,
						children: [prevArrow, nextArrow]
					})] }) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
						alignItems: "center",
						justifyContent: "space-between",
						flex: "1",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
								sx: require_components_date_range_calendar_style.rangePanelHeaderNavigationStyle,
								children: showPrevArrow ? prevArrow : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, { sx: { width: 18 } })
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
								sx: require_components_date_range_calendar_style.rangePanelHeaderLabelStyle,
								justifyContent: "center",
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(PanelHeaderLabel, { label: headerLabel })
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
								sx: require_components_date_range_calendar_style.rangePanelHeaderNavigationStyle,
								children: showNextArrow ? nextArrow : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, { sx: { width: 18 } })
							})
						]
					})
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
					role: "row",
					sx: require_components_date_range_calendar_style.rangePanelHeaderLabelStyle,
					children: weekdays.map((day, i) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
						role: "columnheader",
						"aria-label": day.long,
						sx: require_components_date_range_calendar_style.rangeWeekdayCellStyle,
						variant: "caption2",
						weight: "medium",
						color: "semantic.label.alternative",
						align: "center",
						children: day.narrow
					}, day.long + i))
				})]
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
				sx: { paddingBottom: 14 },
				flexDirection: "column",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(RangeDayGrid, {
					panelMonth,
					panelIndex
				})
			})]
		})
	});
});
RangeDayPanel.displayName = "RangeDayPanel";
const RangeDayGrid = (0, react.memo)(({ panelMonth, panelIndex }) => {
	const { min, max, rangeValue, hoveredDate, activePosition, handleDateSelect, setHoveredDate, defaultSelectedDate, setDefaultSelectedDate, now, containerRef, timezone, calendars, disabled, readOnly } = require_components_date_range_calendar_contexts.useDateRangeCalendarContext("RangeDayGrid");
	const displayRange = (0, react.useMemo)(() => require_components_date_range_calendar_helpers.getDisplayRange(rangeValue, hoveredDate, activePosition, timezone), [
		rangeValue,
		hoveredDate,
		activePosition,
		timezone
	]);
	const dayRange = (0, react.useMemo)(() => {
		const firstDayOfMonth = panelMonth.set("date", 1);
		const prevMonthDays = new Array(firstDayOfMonth.weekday()).fill(0).map((_, i) => {
			const nextDay = firstDayOfMonth.day(i);
			return {
				value: nextDay,
				disabled: require_components_date_calendar_helpers.isDisabledDate({
					min,
					max,
					value: require_components_date_calendar_helpers.dateTypeToDateObject(nextDay, timezone),
					timezone
				}),
				label: nextDay.date(),
				isOtherMonth: true
			};
		});
		const monthDays = new Array(firstDayOfMonth.daysInMonth()).fill(0).map((_, i) => {
			const nextDay = firstDayOfMonth.date(i + 1);
			return {
				value: nextDay,
				disabled: require_components_date_calendar_helpers.isDisabledDate({
					min,
					max,
					value: require_components_date_calendar_helpers.dateTypeToDateObject(nextDay, timezone),
					timezone
				}),
				label: nextDay.date(),
				isOtherMonth: false
			};
		});
		const allDays = [...prevMonthDays, ...monthDays];
		const nextMonthDays = new Array(allDays.length / 7 > 5 ? 6 - firstDayOfMonth.date(firstDayOfMonth.daysInMonth()).weekday() : 13 - firstDayOfMonth.date(firstDayOfMonth.daysInMonth()).weekday()).fill(0).map((_, i) => {
			const nextDay = firstDayOfMonth.date(firstDayOfMonth.daysInMonth() + i + 1);
			return {
				value: nextDay,
				disabled: require_components_date_calendar_helpers.isDisabledDate({
					min,
					max,
					value: require_components_date_calendar_helpers.dateTypeToDateObject(nextDay, timezone),
					timezone
				}),
				label: nextDay.date(),
				isOtherMonth: true
			};
		});
		return [...allDays, ...nextMonthDays];
	}, [
		panelMonth,
		min,
		max,
		timezone
	]);
	const dayRangeRows = (0, react.useMemo)(() => {
		return dayRange.reduce((acc, cur, idx) => {
			const chunkIndex = Math.floor(idx / 7);
			if (!acc[chunkIndex]) acc[chunkIndex] = [];
			acc[chunkIndex].push(cur);
			return acc;
		}, []);
	}, [dayRange]);
	const [focusedIdx, setFocusedIdx] = (0, react.useState)(dayRange.findIndex((v) => !v.isOtherMonth));
	(0, react.useEffect)(() => {
		if (panelIndex !== 0) {
			setFocusedIdx(dayRange.findIndex((v) => !v.isOtherMonth));
			return;
		}
		const [start] = rangeValue;
		const selectedDateIdx = require_components_date_calendar_helpers.isValidDate(start) ? dayRange.findIndex((v) => !v.isOtherMonth && !v.disabled && v.value.format("YYYY MM DD") === require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(start), timezone).format("YYYY MM DD")) : -1;
		if (selectedDateIdx !== -1) {
			setFocusedIdx(selectedDateIdx);
			return;
		}
		const todayDateIdx = require_components_date_calendar_helpers.isValidDate(now.toDate()) ? dayRange.findIndex((v) => !v.isOtherMonth && !v.disabled && v.value.format("YYYY MM DD") === require_components_date_calendar_helpers.dayjsTimezone(now, timezone).format("YYYY MM DD")) : -1;
		if (todayDateIdx !== -1) {
			setFocusedIdx(todayDateIdx);
			return;
		}
		setFocusedIdx(dayRange.findIndex((v) => !v.isOtherMonth && !v.disabled));
	}, [panelMonth.format("YYYY-MM")]);
	const handleClick = (0, react.useCallback)((date) => () => {
		handleDateSelect(require_components_date_calendar_helpers.findClosestEnableDate({
			min,
			max,
			value: date,
			timezone
		}));
	}, [
		handleDateSelect,
		max,
		min,
		timezone
	]);
	const handleKeyDown = (0, react.useCallback)((e) => {
		const currentDateStr = e.currentTarget.getAttribute("data-date");
		if (!currentDateStr) return;
		const current = require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(currentDateStr), timezone);
		let target;
		switch (e.key) {
			case "ArrowUp":
				target = current.subtract(7, "day");
				break;
			case "ArrowDown":
				target = current.add(7, "day");
				break;
			case "ArrowLeft":
				target = current.subtract(1, "day");
				break;
			case "ArrowRight":
				target = current.add(1, "day");
				break;
			case "Home":
				target = current.startOf("week");
				break;
			case "End":
				target = current.endOf("week");
				break;
			case "PageUp":
				target = current.subtract(1, "month");
				break;
			case "PageDown":
				target = current.add(1, "month");
				break;
			default: return;
		}
		e.preventDefault();
		const clamped = require_components_date_calendar_helpers.findClosestEnableDate({
			min,
			max,
			value: require_components_date_calendar_helpers.dateTypeToDateObject(target, timezone),
			timezone
		});
		const clampedDayjs = require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(clamped), timezone);
		if (!require_components_date_range_calendar_helpers.isDateInVisiblePanels(clampedDayjs, defaultSelectedDate, calendars, timezone)) {
			const base = require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(defaultSelectedDate), timezone);
			const lastPanelMonth = base.add(calendars - 1, "month");
			if (clampedDayjs.isBefore(base, "month")) setDefaultSelectedDate(require_components_date_calendar_helpers.dateTypeToDateObject(clampedDayjs.startOf("month"), timezone));
			else if (clampedDayjs.isAfter(lastPanelMonth, "month")) setDefaultSelectedDate(require_components_date_calendar_helpers.dateTypeToDateObject(clampedDayjs.subtract(calendars - 1, "month").startOf("month"), timezone));
		}
		setHoveredDate(clamped);
		requestAnimationFrame(() => {
			require_components_date_range_calendar_helpers.focusRangeDate("day", clampedDayjs.format("YYYY-MM-DD"), containerRef);
		});
	}, [
		calendars,
		containerRef,
		defaultSelectedDate,
		max,
		min,
		setDefaultSelectedDate,
		setHoveredDate,
		timezone
	]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
		flexWrap: "wrap",
		role: "rowgroup",
		sx: require_components_date_range_calendar_style.rangeGridWrapperStyle,
		children: dayRangeRows.map((days, rowIdx) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
			role: "row",
			"aria-rowindex": rowIdx + 1,
			children: days.map((day, dayIdx) => {
				const dateValue = day.value.format("YYYY-MM-DD");
				if (day.value.month() !== panelMonth.month()) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
					role: "gridcell",
					sx: require_components_date_range_calendar_style.rangeDayCellStyle
				}, `${dateValue}-${dayIdx}`);
				const dateObj = require_components_date_calendar_helpers.dateTypeToDateObject(day.value, timezone);
				const isRangeStart = require_components_date_range_calendar_helpers.isSameDateForView(dateObj, displayRange[0], "day", timezone);
				const isRangeEnd = require_components_date_range_calendar_helpers.isSameDateForView(dateObj, displayRange[1], "day", timezone);
				const isInRange = require_components_date_range_calendar_helpers.isDateInRangeForView(dateObj, displayRange[0], displayRange[1], "day", timezone);
				const isSelected = isRangeStart || isRangeEnd;
				return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
					sx: require_components_date_range_calendar_style.rangeDayCellStyle,
					"data-in-range": isInRange ? true : void 0,
					"data-range-start": isRangeStart ? true : void 0,
					"data-range-end": isRangeEnd ? true : void 0,
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(RangeDateItem, {
						sx: {
							width: "32px",
							borderRadius: "999px"
						},
						role: "gridcell",
						disabled: day.disabled,
						isActive: isSelected,
						isCurrent: now.format("YYYY MM DD") === day.value.format("YYYY MM DD"),
						"data-date": dateValue,
						"data-other-month": false,
						tabIndex: focusedIdx === rowIdx * 7 + dayIdx ? 0 : -1,
						"aria-colindex": dayIdx + 1,
						"aria-label": day.label.toString(),
						onClick: handleClick(dateObj),
						onKeyDown: handleKeyDown,
						onMouseEnter: () => {
							if (!disabled && !readOnly) setHoveredDate(dateObj);
						},
						children: day.label
					})
				}, `${dateValue}-${dayIdx}`);
			})
		}, `${panelMonth.format("YYYY-MM")}-row-${rowIdx}`))
	});
});
RangeDayGrid.displayName = "RangeDayGrid";
const RangeMonthPanel = (0, react.memo)(() => {
	const { defaultSelectedDate, setDefaultSelectedDate, locale, timezone, min, max, containerRef, rangeValue, hoveredDate, activePosition, handleDateSelect, setHoveredDate, now, disabled, readOnly } = require_components_date_range_calendar_contexts.useDateRangeCalendarContext("RangeMonthPanel");
	const headerLabel = (0, react.useMemo)(() => Intl.DateTimeFormat(locale, {
		month: "long",
		year: "numeric",
		timeZone: timezone
	}).format(defaultSelectedDate), [
		defaultSelectedDate,
		locale,
		timezone
	]);
	const displayRange = (0, react.useMemo)(() => require_components_date_range_calendar_helpers.getDisplayRange(rangeValue, hoveredDate, activePosition, timezone), [
		rangeValue,
		hoveredDate,
		activePosition,
		timezone
	]);
	const { monthRange, monthRows } = (0, react.useMemo)(() => {
		const range = new Array(12).fill(0).map((_, i) => {
			const minDate = require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(min ?? "1900-01-01"), timezone);
			const maxDate = require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(max ?? "2099-12-31"), timezone);
			const currentMonth = require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(defaultSelectedDate), timezone).set("month", i);
			return {
				value: i,
				label: Intl.DateTimeFormat(locale, { month: "short" }).format(require_components_date_calendar_helpers.dateTypeToDateObject((0, dayjs.default)().set("month", i), timezone)),
				disabled: currentMonth.isBefore(minDate, "month") && minDate.year() >= require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(defaultSelectedDate), timezone).year() || currentMonth.isAfter(maxDate, "month") && maxDate.year() <= require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(defaultSelectedDate), timezone).year()
			};
		});
		return {
			monthRange: range,
			monthRows: new Array(Math.ceil(range.length / 3)).fill(0).map((_, i) => {
				return range.slice(i * 3, (i + 1) * 3);
			})
		};
	}, [
		min,
		timezone,
		max,
		locale,
		defaultSelectedDate
	]);
	const [focusedIdx, setFocusedIdx] = (0, react.useState)(monthRange.findIndex((v) => !v.disabled));
	(0, react.useEffect)(() => {
		const [start] = rangeValue;
		const selectedDateIdx = require_components_date_calendar_helpers.isValidDate(start) ? monthRange.findIndex((v) => !v.disabled && v.value === require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(start), timezone).month()) : -1;
		if (selectedDateIdx !== -1) {
			setFocusedIdx(selectedDateIdx);
			const mv = `${require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(defaultSelectedDate), timezone).year()}-${String(monthRange[selectedDateIdx].value + 1).padStart(2, "0")}`;
			require_components_date_range_calendar_helpers.scrollIntoViewRangeDate("month", mv, containerRef);
			require_components_date_range_calendar_helpers.focusRangeDate("month", mv, containerRef);
			return;
		}
		const todayDateIdx = require_components_date_calendar_helpers.isValidDate(now.toDate()) ? monthRange.findIndex((v) => !v.disabled && v.value === require_components_date_calendar_helpers.dayjsTimezone(now, timezone).month() && require_components_date_calendar_helpers.dayjsTimezone(now, timezone).year() === require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(defaultSelectedDate), timezone).year()) : -1;
		if (todayDateIdx !== -1) {
			setFocusedIdx(todayDateIdx);
			return;
		}
		setFocusedIdx(monthRange.findIndex((v) => !v.disabled));
	}, monthRange.map((v) => v.value));
	const handleClick = (0, react.useCallback)((monthIdx) => () => {
		handleDateSelect(require_components_date_calendar_helpers.findClosestEnableDate({
			min,
			max,
			timezone,
			value: require_components_date_calendar_helpers.dateTypeToDateObject((0, dayjs.default)(defaultSelectedDate).set("month", monthIdx), timezone)
		}));
	}, [
		defaultSelectedDate,
		handleDateSelect,
		max,
		min,
		timezone
	]);
	const handleKeyDown = (0, react.useCallback)((e) => {
		if (!e.currentTarget.getAttribute("data-month")) return;
		const currentMonth = Number(e.currentTarget.getAttribute("data-month-index") ?? "0");
		let newMonth;
		let yearDelta = 0;
		switch (e.key) {
			case "ArrowUp":
				if (currentMonth < 3) {
					yearDelta = -1;
					newMonth = currentMonth + 9;
				} else newMonth = currentMonth - 3;
				break;
			case "ArrowDown":
				if (currentMonth > 8) {
					yearDelta = 1;
					newMonth = currentMonth - 9;
				} else newMonth = currentMonth + 3;
				break;
			case "ArrowLeft":
				if (currentMonth === 0) {
					yearDelta = -1;
					newMonth = 11;
				} else newMonth = currentMonth - 1;
				break;
			case "ArrowRight":
				if (currentMonth === 11) {
					yearDelta = 1;
					newMonth = 0;
				} else newMonth = currentMonth + 1;
				break;
			case "PageUp":
				yearDelta = -1;
				newMonth = currentMonth;
				break;
			case "PageDown":
				yearDelta = 1;
				newMonth = currentMonth;
				break;
			case "Home":
				newMonth = 0;
				break;
			case "End":
				newMonth = 11;
				break;
			default: return;
		}
		e.preventDefault();
		if (yearDelta !== 0) {
			const clamped = require_components_date_calendar_helpers.findClosestEnableDate({
				min,
				max,
				value: require_components_date_calendar_helpers.dateTypeToDateObject(require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(defaultSelectedDate), timezone).add(yearDelta, "year").set("month", newMonth), timezone),
				timezone
			});
			setDefaultSelectedDate(require_components_date_calendar_helpers.dateTypeToDateObject(require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(clamped), timezone).startOf("month"), timezone));
			const clampedMonth = require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(clamped), timezone).month();
			setFocusedIdx(monthRange.findIndex((v) => v.value === clampedMonth));
			if (!disabled && !readOnly) setHoveredDate(clamped);
			const mv = `${require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(clamped), timezone).year()}-${String(clampedMonth + 1).padStart(2, "0")}`;
			requestAnimationFrame(() => {
				require_components_date_range_calendar_helpers.focusRangeDate("month", mv, containerRef);
			});
		} else {
			const clamped = require_components_date_calendar_helpers.findClosestEnableDate({
				min,
				max,
				timezone,
				value: require_components_date_calendar_helpers.dateTypeToDateObject(require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(defaultSelectedDate), timezone).set("month", newMonth), timezone)
			});
			const clampedMonth = require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(clamped), timezone).month();
			const clampedYear = require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(clamped), timezone).year();
			setFocusedIdx(monthRange.findIndex((v) => v.value === clampedMonth));
			if (!disabled && !readOnly) setHoveredDate(clamped);
			const mv = `${clampedYear}-${String(clampedMonth + 1).padStart(2, "0")}`;
			requestAnimationFrame(() => {
				require_components_date_range_calendar_helpers.focusRangeDate("month", mv, containerRef);
			});
		}
	}, [
		containerRef,
		defaultSelectedDate,
		disabled,
		max,
		min,
		monthRange,
		readOnly,
		setDefaultSelectedDate,
		setHoveredDate,
		timezone
	]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
		flexDirection: "column",
		alignItems: "flex-start",
		sx: require_components_date_range_calendar_style.rangePanelStyle,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_scroll_area_index.ScrollArea, {
			sx: require_components_date_range_calendar_style.rangePanelWrapperStyle,
			zIndex: 11,
			role: "grid",
			"aria-label": "Select month range",
			"aria-multiselectable": true,
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
				sx: require_components_date_range_calendar_style.rangeStickyHeaderStyle,
				"data-role": "date-range-calendar-header",
				flexDirection: "column",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
					sx: require_components_date_range_calendar_style.rangePanelHeaderStyle,
					alignItems: "center",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
						sx: require_components_date_range_calendar_style.rangePanelHeaderLabelStyle,
						flex: "1",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(PanelHeaderLabel, { label: headerLabel })
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
						gap: "18px",
						sx: require_components_date_range_calendar_style.rangePanelHeaderNavigationStyle,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_icon_button_index.IconButton, {
							"wds-ignore-first-focus": "true",
							size: 18,
							"aria-label": "Previous year",
							disabled: require_components_date_calendar_helpers.isValidDate(min) && require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(defaultSelectedDate), timezone).year() <= require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(min), timezone).year(),
							onClick: () => setDefaultSelectedDate(require_components_date_calendar_helpers.dateTypeToDateObject(require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(defaultSelectedDate), timezone).subtract(1, "year"), timezone)),
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconChevronLeftSmall, {})
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_icon_button_index.IconButton, {
							"wds-ignore-first-focus": "true",
							size: 18,
							"aria-label": "Next year",
							disabled: require_components_date_calendar_helpers.isValidDate(max) && require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(defaultSelectedDate), timezone).year() >= require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(max), timezone).year(),
							onClick: () => setDefaultSelectedDate(require_components_date_calendar_helpers.dateTypeToDateObject(require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(defaultSelectedDate), timezone).add(1, "year"), timezone)),
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconChevronRightSmall, {})
						})]
					})]
				})
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
				sx: { paddingBottom: 12 },
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
					flex: "1",
					flexDirection: "column",
					sx: require_components_date_range_calendar_style.rangeGridWrapperStyle,
					children: monthRows.map((rowMonths, rowIdx) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
						role: "row",
						"aria-rowindex": rowIdx + 1,
						children: rowMonths.map((month, colIndex) => {
							const monthDate = require_components_date_calendar_helpers.dateTypeToDateObject(require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(defaultSelectedDate), timezone).set("month", month.value), timezone);
							const year = require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(defaultSelectedDate), timezone).year();
							const monthVal = `${year}-${String(month.value + 1).padStart(2, "0")}`;
							const isRangeStart = require_components_date_range_calendar_helpers.isSameDateForView(monthDate, displayRange[0], "month", timezone);
							const isRangeEnd = require_components_date_range_calendar_helpers.isSameDateForView(monthDate, displayRange[1], "month", timezone);
							const isInRange = require_components_date_range_calendar_helpers.isDateInRangeForView(monthDate, displayRange[0], displayRange[1], "month", timezone);
							return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
								sx: [require_components_date_range_calendar_style.rangeMonthYearCellStyle, { flex: "1 0 0" }],
								"data-in-range": isInRange ? true : void 0,
								"data-range-start": isRangeStart ? true : void 0,
								"data-range-end": isRangeEnd ? true : void 0,
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(RangeDateItem, {
									sx: { width: "calc(100% - 4px)" },
									onClick: handleClick(month.value),
									disabled: month.disabled,
									isCurrent: now.month() === month.value && now.year() === year,
									isActive: isRangeStart || isRangeEnd,
									"data-month": monthVal,
									"data-month-index": month.value,
									"aria-colindex": colIndex + 1,
									"aria-label": month.label,
									tabIndex: focusedIdx === month.value ? 0 : -1,
									onKeyDown: handleKeyDown,
									onMouseEnter: () => {
										if (!disabled && !readOnly) setHoveredDate(monthDate);
									},
									children: month.label
								})
							}, `${year}-${month.label}`);
						})
					}, `month-row-${rowIdx}`))
				})
			})]
		})
	});
});
RangeMonthPanel.displayName = "RangeMonthPanel";
const RangeYearPanel = (0, react.memo)(({ yearsOrder = "asc" }) => {
	const { defaultSelectedDate, locale, timezone, min, max, containerRef, rangeValue, hoveredDate, activePosition, handleDateSelect, setHoveredDate, now, disabled, readOnly } = require_components_date_range_calendar_contexts.useDateRangeCalendarContext("RangeYearPanel");
	const headerLabel = (0, react.useMemo)(() => Intl.DateTimeFormat(locale, {
		year: "numeric",
		timeZone: timezone
	}).format(defaultSelectedDate), [
		defaultSelectedDate,
		locale,
		timezone
	]);
	const displayRange = (0, react.useMemo)(() => require_components_date_range_calendar_helpers.getDisplayRange(rangeValue, hoveredDate, activePosition, timezone), [
		rangeValue,
		hoveredDate,
		activePosition,
		timezone
	]);
	const { yearRange, yearRows } = (0, react.useMemo)(() => {
		const startDate = require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(min ?? "1900-01-01"), timezone);
		const endDate = require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(max ?? "2099-12-31"), timezone);
		const years = [];
		let current = startDate;
		while (current.year() <= endDate.year()) {
			years.push(current.get("year"));
			current = current.add(1, "year");
		}
		const range = yearsOrder === "asc" ? years : years.reverse();
		return {
			yearRange: range,
			yearRows: new Array(Math.ceil(range.length / 3)).fill(0).map((_, i) => {
				return range.slice(i * 3, (i + 1) * 3);
			})
		};
	}, [
		min,
		timezone,
		max,
		yearsOrder
	]);
	const [focusedIdx, setFocusedIdx] = (0, react.useState)(yearRange.length > 0 ? 0 : -1);
	(0, react.useEffect)(() => {
		const [start] = rangeValue;
		const selectedDateIdx = require_components_date_calendar_helpers.isValidDate(start) ? yearRange.findIndex((v) => v === require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(start), timezone).year()) : -1;
		if (selectedDateIdx !== -1) {
			require_components_date_range_calendar_helpers.scrollIntoViewRangeDate("year", String(yearRange[selectedDateIdx]), containerRef);
			require_components_date_range_calendar_helpers.focusRangeDate("year", String(yearRange[selectedDateIdx]), containerRef);
			setFocusedIdx(selectedDateIdx);
			return;
		}
		const todayDateIdx = require_components_date_calendar_helpers.isValidDate(now.toDate()) ? yearRange.findIndex((v) => v === require_components_date_calendar_helpers.dayjsTimezone(now, timezone).year()) : -1;
		if (todayDateIdx !== -1) {
			require_components_date_range_calendar_helpers.scrollIntoViewRangeDate("year", String(yearRange[todayDateIdx]), containerRef);
			require_components_date_range_calendar_helpers.focusRangeDate("year", String(yearRange[todayDateIdx]), containerRef);
			setFocusedIdx(todayDateIdx);
			return;
		}
		const fallbackDateIdx = yearRange.length > 0 ? 0 : -1;
		if (fallbackDateIdx !== -1) require_components_date_range_calendar_helpers.focusRangeDate("year", String(yearRange[fallbackDateIdx]), containerRef);
		setFocusedIdx(fallbackDateIdx);
	}, yearRange.map((v) => v));
	const handleClick = (0, react.useCallback)((year) => () => {
		handleDateSelect(require_components_date_calendar_helpers.findClosestEnableDate({
			min,
			max,
			value: require_components_date_calendar_helpers.dateTypeToDateObject((0, dayjs.default)(defaultSelectedDate).set("year", year), timezone),
			timezone
		}));
	}, [
		defaultSelectedDate,
		handleDateSelect,
		max,
		min,
		timezone
	]);
	const handleKeyDown = (0, react.useCallback)((e) => {
		const currentYearStr = e.currentTarget.getAttribute("data-year");
		if (!currentYearStr) return;
		const currentYear = Number(currentYearStr);
		let newYear;
		switch (e.key) {
			case "ArrowUp":
				newYear = currentYear - 3;
				break;
			case "ArrowDown":
				newYear = currentYear + 3;
				break;
			case "ArrowLeft":
				newYear = currentYear - 1;
				break;
			case "ArrowRight":
				newYear = currentYear + 1;
				break;
			case "Home":
				newYear = yearRange[0] ?? currentYear;
				break;
			case "End":
				newYear = yearRange[yearRange.length - 1] ?? currentYear;
				break;
			default: return;
		}
		e.preventDefault();
		const clampedYear = require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(require_components_date_calendar_helpers.findClosestEnableDate({
			min,
			max,
			value: require_components_date_calendar_helpers.dateTypeToDateObject((0, dayjs.default)(defaultSelectedDate).year(newYear), timezone),
			timezone
		})), timezone).year();
		setFocusedIdx(yearRange.findIndex((v) => v === clampedYear));
		const yearDate = require_components_date_calendar_helpers.dateTypeToDateObject((0, dayjs.default)(defaultSelectedDate).set("year", clampedYear), timezone);
		if (!disabled && !readOnly) setHoveredDate(yearDate);
		requestAnimationFrame(() => {
			require_components_date_range_calendar_helpers.focusRangeDate("year", String(clampedYear), containerRef);
		});
	}, [
		containerRef,
		defaultSelectedDate,
		disabled,
		max,
		min,
		readOnly,
		setHoveredDate,
		timezone,
		yearRange
	]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
		flexDirection: "column",
		alignItems: "flex-start",
		sx: require_components_date_range_calendar_style.rangePanelStyle,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_scroll_area_index.ScrollArea, {
			sx: require_components_date_range_calendar_style.rangePanelWrapperStyle,
			zIndex: 11,
			role: "grid",
			"aria-label": "Select year range",
			"aria-multiselectable": true,
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
				sx: require_components_date_range_calendar_style.rangeStickyHeaderStyle,
				"data-role": "date-range-calendar-header",
				flexDirection: "column",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
					sx: require_components_date_range_calendar_style.rangePanelHeaderStyle,
					alignItems: "center",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
						sx: require_components_date_range_calendar_style.rangePanelHeaderLabelStyle,
						flex: "1",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(PanelHeaderLabel, { label: headerLabel })
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
						gap: "18px",
						sx: require_components_date_range_calendar_style.rangePanelHeaderNavigationStyle
					})]
				})
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
				sx: { paddingBottom: 12 },
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
					flex: "1",
					sx: require_components_date_range_calendar_style.rangeGridWrapperStyle,
					flexDirection: "column",
					children: yearRows.map((rowYears, rowIdx) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
						role: "row",
						"aria-rowindex": rowIdx + 1,
						children: rowYears.map((year, colIndex) => {
							const yearDate = require_components_date_calendar_helpers.dateTypeToDateObject((0, dayjs.default)(defaultSelectedDate).set("year", year), timezone);
							const yearVal = String(year);
							const isRangeStart = require_components_date_range_calendar_helpers.isSameDateForView(yearDate, displayRange[0], "year", timezone);
							const isRangeEnd = require_components_date_range_calendar_helpers.isSameDateForView(yearDate, displayRange[1], "year", timezone);
							const isInRange = require_components_date_range_calendar_helpers.isDateInRangeForView(yearDate, displayRange[0], displayRange[1], "year", timezone);
							const yearIdx = yearRange.indexOf(year);
							return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
								sx: [require_components_date_range_calendar_style.rangeMonthYearCellStyle, { flex: "1 0 0" }],
								"data-in-range": isInRange ? true : void 0,
								"data-range-start": isRangeStart ? true : void 0,
								"data-range-end": isRangeEnd ? true : void 0,
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(RangeDateItem, {
									sx: { width: "calc(100% - 4px)" },
									onClick: handleClick(year),
									"data-year": yearVal,
									isCurrent: now.year() === year,
									isActive: isRangeStart || isRangeEnd,
									"aria-label": year.toString(),
									"aria-colindex": colIndex + 1,
									onKeyDown: handleKeyDown,
									tabIndex: focusedIdx === yearIdx ? 0 : -1,
									onMouseEnter: () => {
										if (!disabled && !readOnly) setHoveredDate(yearDate);
									},
									children: year
								})
							}, `${year}-year`);
						})
					}, `year-row-${rowIdx}`))
				})
			})]
		})
	});
});
RangeYearPanel.displayName = "RangeYearPanel";
const PanelHeaderLabel = (0, react.memo)(({ label }) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
		variant: "body1",
		weight: "bold",
		color: "semantic.label.normal",
		children: label
	});
});
PanelHeaderLabel.displayName = "PanelHeaderLabel";
const RangeDateItem = (0, react.memo)((0, react.forwardRef)(({ disabled, isCurrent, isOtherMonth, isActive, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_with_interaction_index.WithInteraction, {
		disabled,
		variant: "light",
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
			as: "button",
			disabled,
			ref,
			role: "gridcell",
			type: "button",
			...props,
			"aria-selected": isActive,
			"aria-disabled": disabled,
			"aria-current": isCurrent ? "date" : void 0,
			"data-other-month": isOtherMonth,
			sx: [require_components_date_range_calendar_style.rangeDayItemStyle, props.sx]
		})
	});
}));
RangeDateItem.displayName = "RangeDateItem";
//#endregion
exports.DateRangeCalendar = DateRangeCalendar;
