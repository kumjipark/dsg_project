'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const require_runtime = require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_typography_index = require("../typography/index.js");
const require_components_with_interaction_index = require("../with-interaction/index.js");
const require_components_text_button_index = require("../text-button/index.js");
const require_components_scroll_area_index = require("../scroll-area/index.js");
const require_components_icon_button_index = require("../icon-button/index.js");
const require_components_grid_index = require("../grid/index.js");
const require_components_grid_item_index = require("../grid-item/index.js");
const require_utils_internal_date = require("../../utils/internal/date.js");
const require_components_date_calendar_style = require("./style.js");
const require_components_date_calendar_helpers = require("./helpers.js");
const require_components_date_calendar_hooks = require("./hooks.js");
const require_components_date_calendar_constants = require("./constants.js");
const require_components_date_calendar_contexts = require("./contexts.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let _radix_ui_react_use_controllable_state = require("@radix-ui/react-use-controllable-state");
let _wanteddev_wds_icon = require("@wanteddev/wds-icon");
let _radix_ui_react_compose_refs = require("@radix-ui/react-compose-refs");
let react_jsx_runtime = require("react/jsx-runtime");
let dayjs = require("dayjs");
dayjs = require_runtime.__toESM(dayjs);
//#region src/components/date-calendar/index.tsx
require_utils_internal_date.extendDayjs();
const DateCalendar = (0, react.forwardRef)(({ value: originValue, defaultValue, onChange, onChangeComplete, max = require_components_date_calendar_constants.ACCESSIBLE_MAX_DATE, min = require_components_date_calendar_constants.ACCESSIBLE_MIN_DATE, views = ["year", "day"], view: originView, defaultView: givenDefaultView = views.at(views.length - 1) ?? "day", onViewChange, locale = "ko-KR", yearsOrder = "asc", timezone, disabled, readOnly, ...props }, ref) => {
	const [value, setValue] = (0, _radix_ui_react_use_controllable_state.useControllableState)({
		prop: originValue,
		defaultProp: defaultValue,
		onChange
	});
	const [view, setView] = (0, _radix_ui_react_use_controllable_state.useControllableState)({
		prop: originView,
		defaultProp: givenDefaultView,
		onChange: onViewChange
	});
	const { defaultSelectedDate, setDefaultSelectedDate, now } = require_components_date_calendar_hooks.useDefaultSelectedDate(value, min, max, timezone);
	const containerRef = (0, react.useRef)(null);
	const composedRefs = (0, _radix_ui_react_compose_refs.useComposedRefs)(ref, containerRef);
	const isOnlySelectYear = views.length === 1 && views.at(0) === "year";
	const isOnlySelectMonth = views.length === 1 && views.at(0) === "month";
	const isOnlySelectDay = views.length === 1 && views.at(0) === "day";
	const headerLabel = Intl.DateTimeFormat(locale, {
		month: "long",
		year: "numeric",
		timeZone: timezone
	}).format(defaultSelectedDate);
	const headerExpanded = isOnlySelectYear || isOnlySelectMonth || views.includes("day") && (view === "month" || view === "year") || views.includes("month") && view === "year";
	const handleNextView = (0, react.useCallback)((newView, newValue) => {
		if (disabled || readOnly) return;
		switch (newView) {
			case "year":
				if (isOnlySelectYear) {
					setValue(newValue);
					onChangeComplete?.(newValue);
				} else {
					setDefaultSelectedDate(require_components_date_calendar_helpers.dateTypeToDateObject(newValue, timezone));
					setView(views.includes("month") ? "month" : "day");
				}
				break;
			case "month":
				if (isOnlySelectMonth || !views.includes("day")) {
					setValue(newValue);
					onChangeComplete?.(newValue);
				} else {
					setDefaultSelectedDate(require_components_date_calendar_helpers.dateTypeToDateObject(newValue, timezone));
					setView("day");
				}
				break;
			case "day":
				setValue(newValue);
				onChangeComplete?.(newValue);
				break;
		}
	}, [
		disabled,
		isOnlySelectMonth,
		isOnlySelectYear,
		onChangeComplete,
		readOnly,
		setDefaultSelectedDate,
		setValue,
		setView,
		timezone,
		views
	]);
	const weekdays = (0, react.useMemo)(() => require_components_date_calendar_helpers.getWeekdays(locale), [locale]);
	const calendarComponent = {
		year: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(YearCalendar, { order: yearsOrder }),
		month: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(MonthCalendar, {}),
		day: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(DayCalendar, {})
	};
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_date_calendar_contexts.DateCalendarContextProvider, {
		defaultSelectedDate,
		setDefaultSelectedDate,
		now,
		min,
		max,
		locale,
		timezone,
		value,
		handleNextView,
		containerRef,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
			ref: composedRefs,
			"wds-component": "date-calendar",
			flexDirection: "column",
			alignItems: "flex-start",
			...props,
			sx: [require_components_date_calendar_style.dateCalendarStyle, props.sx],
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_scroll_area_index.ScrollArea, {
				sx: require_components_date_calendar_style.dateCalendarWrapperStyle,
				zIndex: 11,
				role: view === "day" ? "grid" : "radiogroup",
				"aria-label": `Select ${view}`,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
					sx: require_components_date_calendar_style.stickyDateCalendarStyle,
					"data-role": "date-calendar-header",
					flexDirection: "column",
					children: [!isOnlySelectYear && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
						sx: require_components_date_calendar_style.dateCalendarHeaderStyle,
						alignItems: "center",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
							sx: require_components_date_calendar_style.dateCalendarHeaderLabelStyle,
							flex: "1",
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_text_button_index.TextButton, {
								"wds-ignore-first-focus": "true",
								onClick: () => {
									if (isOnlySelectDay || isOnlySelectMonth) return;
									setView((prev) => {
										switch (prev) {
											case "year": return views.includes("day") ? "day" : "month";
											case "month": return views.includes("day") ? "day" : "year";
											case "day": return views.includes("year") ? "year" : "month";
										}
									});
								},
								color: "assistive",
								size: "medium",
								"aria-expanded": headerExpanded,
								sx: [require_components_date_calendar_style.dateCalendarHeaderLabelButtonStyle, (isOnlySelectDay || isOnlySelectMonth) && { pointerEvents: "none" }],
								trailingContent: isOnlySelectDay || isOnlySelectMonth ? null : headerExpanded ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconCaretUp, {}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconCaretDown, {}),
								children: headerLabel
							})
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
							gap: "18px",
							sx: require_components_date_calendar_style.dateCalendarHeaderNavigationStyle,
							children: views.includes("day") && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_icon_button_index.IconButton, {
								"wds-ignore-first-focus": "true",
								size: 18,
								"aria-label": "Previous month",
								disabled: require_components_date_calendar_helpers.isValidDate(min) && require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(defaultSelectedDate), timezone).isSameOrBefore(require_components_date_calendar_helpers.dateTypeToDateObject(min, timezone), "month"),
								onClick: () => setDefaultSelectedDate(require_components_date_calendar_helpers.dateTypeToDateObject(require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(defaultSelectedDate), timezone).subtract(1, "month"), timezone)),
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconChevronLeftSmall, {})
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_icon_button_index.IconButton, {
								"wds-ignore-first-focus": "true",
								size: 18,
								"aria-label": "Next month",
								disabled: require_components_date_calendar_helpers.isValidDate(max) && require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(defaultSelectedDate), timezone).isSameOrAfter((0, dayjs.default)(require_components_date_calendar_helpers.dateTypeToDateObject(max, timezone)), "month"),
								onClick: () => setDefaultSelectedDate(require_components_date_calendar_helpers.dateTypeToDateObject(require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(defaultSelectedDate), timezone).add(1, "month"), timezone)),
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconChevronRightSmall, {})
							})] })
						})]
					}), view === "day" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
						role: "row",
						sx: require_components_date_calendar_style.dateCalendarHeaderLabelStyle,
						children: weekdays.map((day, i) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
							role: "columnheader",
							"aria-label": day.long,
							sx: require_components_date_calendar_style.weekdayCellStyle,
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
					children: calendarComponent[view ?? "day"]
				})]
			})
		})
	});
});
DateCalendar.displayName = "DateCalendar";
const YearCalendar = (0, react.forwardRef)(({ order = "asc", ...props }, ref) => {
	const { min, max, defaultSelectedDate, handleNextView, now, value, containerRef, timezone } = require_components_date_calendar_contexts.useDateCalendarContext("YearCalendar");
	const yearRange = (0, react.useMemo)(() => {
		const startDate = require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(min ?? "1900-01-01"), timezone);
		const endDate = require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(max ?? "2099-12-31"), timezone);
		const years = [];
		let current = startDate;
		while (current.year() <= endDate.year()) {
			years.push(current.get("year"));
			current = current.add(1, "year");
		}
		return order === "asc" ? years : years.reverse();
	}, [
		min,
		timezone,
		max,
		order
	]);
	const [focusedIdx, setFocusedIdx] = (0, react.useState)(yearRange.length > 0 ? 0 : -1);
	(0, react.useEffect)(() => {
		const selectedDateIdx = require_components_date_calendar_helpers.isValidDate(value) ? yearRange.findIndex((v) => v === require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(value), timezone).year()) : -1;
		if (selectedDateIdx !== -1) {
			require_components_date_calendar_helpers.scrollIntoViewDate("year", yearRange[selectedDateIdx], containerRef);
			require_components_date_calendar_helpers.focusDate("year", yearRange[selectedDateIdx], containerRef);
			setFocusedIdx(selectedDateIdx);
			return;
		}
		const todayDateIdx = require_components_date_calendar_helpers.isValidDate(now.toDate()) ? yearRange.findIndex((v) => v === require_components_date_calendar_helpers.dayjsTimezone(now, timezone).year()) : -1;
		if (todayDateIdx !== -1) {
			require_components_date_calendar_helpers.scrollIntoViewDate("year", yearRange[todayDateIdx], containerRef);
			require_components_date_calendar_helpers.focusDate("year", yearRange[todayDateIdx], containerRef);
			setFocusedIdx(todayDateIdx);
			return;
		}
		const fallbackDateIdx = yearRange.length > 0 ? 0 : -1;
		if (fallbackDateIdx !== -1) require_components_date_calendar_helpers.focusDate("year", yearRange[fallbackDateIdx], containerRef);
		setFocusedIdx(fallbackDateIdx);
	}, yearRange.map((v) => v));
	const handleKeyDown = (0, react.useCallback)((e) => {
		switch (e.key) {
			case "ArrowUp": {
				const newYear = require_components_date_calendar_helpers.findClosestEnableDate({
					value: require_components_date_calendar_helpers.dateTypeToDateObject((0, dayjs.default)(defaultSelectedDate).year(Number(e.currentTarget.getAttribute("data-year") ?? 1) - 3), timezone),
					min,
					max,
					timezone
				}).getFullYear();
				require_components_date_calendar_helpers.focusDate("year", newYear, containerRef);
				setFocusedIdx(yearRange.findIndex((v) => v === newYear));
				e.preventDefault();
				break;
			}
			case "ArrowDown": {
				const newYear = require_components_date_calendar_helpers.findClosestEnableDate({
					value: require_components_date_calendar_helpers.dateTypeToDateObject((0, dayjs.default)(defaultSelectedDate).year(Number(e.currentTarget.getAttribute("data-year") ?? 2999) + 3), timezone),
					min,
					max,
					timezone
				}).getFullYear();
				require_components_date_calendar_helpers.focusDate("year", newYear, containerRef);
				setFocusedIdx(yearRange.findIndex((v) => v === newYear));
				e.preventDefault();
				break;
			}
			case "ArrowLeft": {
				const newYear = require_components_date_calendar_helpers.findClosestEnableDate({
					value: require_components_date_calendar_helpers.dateTypeToDateObject((0, dayjs.default)(defaultSelectedDate).year(Number(e.currentTarget.getAttribute("data-year") ?? 1) - 1), timezone),
					min,
					max,
					timezone
				}).getFullYear();
				require_components_date_calendar_helpers.focusDate("year", newYear, containerRef);
				setFocusedIdx(yearRange.findIndex((v) => v === newYear));
				e.preventDefault();
				break;
			}
			case "ArrowRight": {
				const newYear = require_components_date_calendar_helpers.findClosestEnableDate({
					value: require_components_date_calendar_helpers.dateTypeToDateObject((0, dayjs.default)(defaultSelectedDate).year(Number(e.currentTarget.getAttribute("data-year") ?? 2999) + 1), timezone),
					min,
					max,
					timezone
				}).getFullYear();
				require_components_date_calendar_helpers.focusDate("year", newYear, containerRef);
				setFocusedIdx(yearRange.findIndex((v) => v === newYear));
				e.preventDefault();
				break;
			}
			case "Home": {
				const newYear = yearRange[0] ?? require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)("1900-01-01"), timezone).year();
				require_components_date_calendar_helpers.focusDate("year", newYear, containerRef);
				setFocusedIdx(yearRange.findIndex((v) => v === newYear));
				e.preventDefault();
				break;
			}
			case "End": {
				const newYear = yearRange[yearRange.length - 1] ?? require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)("2099-12-31"), timezone).year();
				require_components_date_calendar_helpers.focusDate("year", newYear, containerRef);
				setFocusedIdx(yearRange.findIndex((v) => v === newYear));
				e.preventDefault();
				break;
			}
			default: break;
		}
	}, [
		containerRef,
		defaultSelectedDate,
		max,
		min,
		timezone,
		yearRange
	]);
	const handleClick = (0, react.useCallback)((year) => () => {
		handleNextView("year", require_components_date_calendar_helpers.findClosestEnableDate({
			min,
			max,
			value: require_components_date_calendar_helpers.dateTypeToDateObject((0, dayjs.default)(defaultSelectedDate).set("year", year), timezone),
			timezone
		}));
		setFocusedIdx(yearRange.findIndex((v) => v === year));
	}, [
		min,
		max,
		defaultSelectedDate,
		timezone,
		handleNextView,
		yearRange
	]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_grid_index.Grid, {
		columnSpacing: 2,
		rowSpacing: 0,
		ref,
		...props,
		sx: [require_components_date_calendar_style.dateYearMonthWrapperStyle, props.sx],
		children: yearRange.map((year, i) => {
			const isActive = Boolean(value) && require_components_date_calendar_helpers.isValidDate(value) && require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(value), timezone).year() === year;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_grid_item_index.GridItem, {
				columns: 4,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(DateItem, {
					sx: { width: "calc(100% - 4px)" },
					onClick: handleClick(year),
					"data-year": year,
					isCurrent: now.year() === year,
					"aria-label": `${year} Year`,
					isActive,
					onKeyDown: handleKeyDown,
					tabIndex: focusedIdx === i ? 0 : -1,
					children: year
				})
			}, `${year + 1} year`);
		})
	});
});
YearCalendar.displayName = "YearCalendar";
const MonthCalendar = (0, react.memo)((0, react.forwardRef)((props, ref) => {
	const { min, max, defaultSelectedDate, locale, handleNextView, now, value, containerRef, timezone } = require_components_date_calendar_contexts.useDateCalendarContext("MonthCalendar");
	const monthRange = (0, react.useMemo)(() => {
		return new Array(12).fill(0).map((_, i) => {
			const minDate = require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(min ?? "1900-01-01"), timezone);
			const maxDate = require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(max ?? "2099-12-31"), timezone);
			const minDateCurrentMonth = require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(minDate), timezone).set("month", i);
			const maxDateCurrentMonth = require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(maxDate), timezone).set("month", i);
			return {
				value: i,
				label: Intl.DateTimeFormat(locale, { month: "short" }).format(require_components_date_calendar_helpers.dateTypeToDateObject((0, dayjs.default)().set("month", i), timezone)),
				disabled: minDateCurrentMonth.isBefore(minDate, "month") && minDate.year() >= require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(defaultSelectedDate), timezone).year() || maxDateCurrentMonth.isAfter(maxDate, "month") && maxDate.year() <= require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(defaultSelectedDate), timezone).year()
			};
		});
	}, [
		min,
		timezone,
		max,
		locale,
		defaultSelectedDate
	]);
	const [focusedIdx, setFocusedIdx] = (0, react.useState)(monthRange.findIndex((v) => !v.disabled));
	(0, react.useEffect)(() => {
		const selectedDateIdx = require_components_date_calendar_helpers.isValidDate(value) ? monthRange.findIndex((v) => !v.disabled && v.value === require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(value), timezone).month()) : -1;
		if (selectedDateIdx !== -1) {
			require_components_date_calendar_helpers.scrollIntoViewDate("month", monthRange[selectedDateIdx].value, containerRef);
			require_components_date_calendar_helpers.focusDate("month", monthRange[selectedDateIdx].value, containerRef);
			setFocusedIdx(selectedDateIdx);
			return;
		}
		const todayDateIdx = require_components_date_calendar_helpers.isValidDate(now.toDate()) ? monthRange.findIndex((v) => !v.disabled && v.value === require_components_date_calendar_helpers.dayjsTimezone(now, timezone).month() && require_components_date_calendar_helpers.dayjsTimezone(now, timezone).year() === require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(defaultSelectedDate), timezone).year()) : -1;
		if (todayDateIdx !== -1) {
			require_components_date_calendar_helpers.scrollIntoViewDate("month", monthRange[todayDateIdx].value, containerRef);
			require_components_date_calendar_helpers.focusDate("month", monthRange[todayDateIdx].value, containerRef);
			setFocusedIdx(todayDateIdx);
			return;
		}
		const fallbackDateIdx = monthRange.findIndex((v) => !v.disabled);
		if (fallbackDateIdx !== -1) require_components_date_calendar_helpers.focusDate("month", monthRange[fallbackDateIdx].value, containerRef);
		setFocusedIdx(fallbackDateIdx);
	}, monthRange.map((v) => v.value));
	const handleKeyDown = (0, react.useCallback)((e) => {
		const changeMonthByKeyDown = (month) => {
			const newMonth = Number(e.currentTarget.getAttribute("data-month") ?? "0") + month;
			const newValue = require_components_date_calendar_helpers.findClosestEnableDate({
				min,
				max,
				value: require_components_date_calendar_helpers.dateTypeToDateObject((0, dayjs.default)(defaultSelectedDate).set("month", newMonth < 0 ? 0 : newMonth > 11 ? 11 : newMonth), timezone),
				timezone
			});
			setFocusedIdx(monthRange.findIndex((v) => v.value === newValue.getMonth()));
			requestAnimationFrame(() => {
				require_components_date_calendar_helpers.focusDate("month", newValue.getMonth(), containerRef);
			});
		};
		switch (e.key) {
			case "ArrowUp":
				changeMonthByKeyDown(-3);
				e.preventDefault();
				break;
			case "ArrowDown":
				changeMonthByKeyDown(3);
				e.preventDefault();
				break;
			case "ArrowLeft":
				changeMonthByKeyDown(-1);
				e.preventDefault();
				break;
			case "ArrowRight":
				changeMonthByKeyDown(1);
				e.preventDefault();
				break;
			case "Home":
				changeMonthByKeyDown(0);
				e.preventDefault();
				break;
			case "End":
				changeMonthByKeyDown(11);
				e.preventDefault();
				break;
			default: break;
		}
	}, [
		containerRef,
		defaultSelectedDate,
		max,
		min,
		monthRange,
		timezone
	]);
	const handleClick = (0, react.useCallback)((newMonth) => () => {
		handleNextView("month", require_components_date_calendar_helpers.findClosestEnableDate({
			min,
			max,
			timezone,
			value: require_components_date_calendar_helpers.dateTypeToDateObject((0, dayjs.default)(defaultSelectedDate).set("month", newMonth), timezone)
		}));
		setFocusedIdx(monthRange.findIndex((v) => v.value === newMonth));
	}, [
		defaultSelectedDate,
		handleNextView,
		max,
		min,
		monthRange,
		timezone
	]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_grid_index.Grid, {
		columnSpacing: 2,
		rowSpacing: 0,
		ref,
		...props,
		sx: [require_components_date_calendar_style.dateYearMonthWrapperStyle, props.sx],
		children: monthRange.map((month, i) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_grid_item_index.GridItem, {
			columns: 4,
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(DateItem, {
				sx: { width: "calc(100% - 4px)" },
				onClick: handleClick(month.value),
				disabled: month.disabled,
				isCurrent: now.month() === month.value && now.year() === require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(defaultSelectedDate), timezone).year(),
				"data-month": month.value,
				"aria-label": month.label,
				tabIndex: focusedIdx === i ? 0 : -1,
				isActive: Boolean(value) && require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(value), timezone).month() === month.value,
				onKeyDown: handleKeyDown,
				children: month.label
			})
		}, `${require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(defaultSelectedDate), timezone).year()} / ${month.label}`))
	});
}));
MonthCalendar.displayName = "MonthCalendar";
const DayCalendar = (0, react.memo)((0, react.forwardRef)((props, ref) => {
	const { min, max, defaultSelectedDate, value, handleNextView, setDefaultSelectedDate, now, containerRef, timezone } = require_components_date_calendar_contexts.useDateCalendarContext("DayCalendar");
	const dayRange = (0, react.useMemo)(() => {
		const firstDayOfMonth = require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(defaultSelectedDate), timezone).set("date", 1);
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
		const monDaysWithPrevMonthDays = [...prevMonthDays, ...monthDays];
		const nextMonthDays = new Array(monDaysWithPrevMonthDays.length / 7 > 5 ? 6 - firstDayOfMonth.date(firstDayOfMonth.daysInMonth()).weekday() : 13 - firstDayOfMonth.date(firstDayOfMonth.daysInMonth()).weekday()).fill(0).map((_, i) => {
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
		return [...monDaysWithPrevMonthDays, ...nextMonthDays];
	}, [
		defaultSelectedDate,
		max,
		min,
		timezone
	]);
	const dayRangeRow = (0, react.useMemo)(() => {
		return dayRange.reduce((acc, cur, idx) => {
			const chunkIndex = Math.floor(idx / 7);
			if (!acc[chunkIndex]) acc[chunkIndex] = [];
			acc[chunkIndex].push(cur);
			return acc;
		}, []);
	}, [dayRange]);
	const [focusedIdx, setFocusedIdx] = (0, react.useState)(dayRange.findIndex((v) => !v.isOtherMonth));
	(0, react.useEffect)(() => {
		const selectedDateIdx = require_components_date_calendar_helpers.isValidDate(value) ? dayRange.findIndex((v) => !v.isOtherMonth && !v.disabled && v.value.format("YYYY MM DD") === require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(value), timezone).format("YYYY MM DD")) : -1;
		if (selectedDateIdx !== -1) {
			setFocusedIdx(selectedDateIdx);
			require_components_date_calendar_helpers.focusDate("day", dayRange[selectedDateIdx].value.date(), containerRef);
			return;
		}
		const todayDateIdx = require_components_date_calendar_helpers.isValidDate(now.toDate()) ? dayRange.findIndex((v) => !v.isOtherMonth && !v.disabled && v.value.format("YYYY MM DD") === require_components_date_calendar_helpers.dayjsTimezone(now, timezone).format("YYYY MM DD")) : -1;
		if (todayDateIdx !== -1) {
			setFocusedIdx(todayDateIdx);
			require_components_date_calendar_helpers.focusDate("day", dayRange[todayDateIdx].value.date(), containerRef);
			return;
		}
		const fallbackDateIdx = dayRange.findIndex((v) => !v.isOtherMonth && !v.disabled);
		if (fallbackDateIdx !== -1) require_components_date_calendar_helpers.focusDate("day", dayRange[fallbackDateIdx].value.date(), containerRef);
		setFocusedIdx(fallbackDateIdx);
	}, dayRange.map((v) => v.value.format("YYYY MM DD")));
	const handleClick = (0, react.useCallback)((v) => () => {
		const newValue = require_components_date_calendar_helpers.findClosestEnableDate({
			min,
			max,
			value: v,
			timezone
		});
		handleNextView("day", newValue);
		setFocusedIdx(dayRange.findIndex((day) => !day.isOtherMonth && !day.disabled && day.value.format("YYYY MM DD") === require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(newValue), timezone).format("YYYY MM DD")));
	}, [
		dayRange,
		handleNextView,
		max,
		min,
		timezone
	]);
	const handleKeyDown = (0, react.useCallback)((e) => {
		const changeDateByKeyDown = (date) => {
			let newValue;
			if (typeof date === "number") {
				const newDay = Number(e.currentTarget.getAttribute("data-date") ?? "0") + date;
				newValue = require_components_date_calendar_helpers.findClosestEnableDate({
					min,
					max,
					value: require_components_date_calendar_helpers.dateTypeToDateObject((0, dayjs.default)(defaultSelectedDate).set("date", newDay), timezone),
					timezone
				});
			} else newValue = require_components_date_calendar_helpers.findClosestEnableDate({
				min,
				max,
				value: require_components_date_calendar_helpers.dateTypeToDateObject(date, timezone),
				timezone
			});
			setDefaultSelectedDate(newValue);
			setFocusedIdx(dayRange.findIndex((v) => v.value.format("YYYY MM DD") === require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(newValue), timezone).format("YYYY MM DD")));
			requestAnimationFrame(() => {
				require_components_date_calendar_helpers.focusDate("day", newValue.getDate(), containerRef);
			});
		};
		switch (e.key) {
			case "ArrowUp":
				changeDateByKeyDown(-7);
				e.preventDefault();
				break;
			case "ArrowDown":
				changeDateByKeyDown(7);
				e.preventDefault();
				break;
			case "ArrowLeft":
				changeDateByKeyDown(-1);
				e.preventDefault();
				break;
			case "ArrowRight":
				changeDateByKeyDown(1);
				e.preventDefault();
				break;
			case "Home":
				changeDateByKeyDown((0, dayjs.default)(defaultSelectedDate).subtract((0, dayjs.default)(defaultSelectedDate).weekday(), "day"));
				e.preventDefault();
				break;
			case "End":
				changeDateByKeyDown((0, dayjs.default)(defaultSelectedDate).add(6 - (0, dayjs.default)(defaultSelectedDate).weekday(), "day"));
				e.preventDefault();
				break;
			case "PageDown":
				changeDateByKeyDown((0, dayjs.default)(defaultSelectedDate).subtract(1, "month"));
				e.preventDefault();
				break;
			case "PageUp":
				changeDateByKeyDown((0, dayjs.default)(defaultSelectedDate).add(1, "month"));
				e.preventDefault();
				break;
			default: break;
		}
	}, [
		containerRef,
		dayRange,
		defaultSelectedDate,
		max,
		min,
		setDefaultSelectedDate,
		timezone
	]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
		flexWrap: "wrap",
		ref,
		role: "rowgroup",
		...props,
		columnGap: "0px",
		rowGap: "2px",
		sx: [require_components_date_calendar_style.dateYearMonthWrapperStyle, props.sx],
		children: dayRangeRow.map((days, idx) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
			role: "row",
			"aria-rowindex": idx + 1,
			children: days.map((day, dayIdx) => {
				const isSelected = require_components_date_calendar_helpers.isValidDate(value) && day.value.format("YYYY MM DD") === require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(value), timezone).format("YYYY MM DD");
				const isOtherMonth = day.value.month() !== require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(defaultSelectedDate), timezone).month();
				return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(DayItem, {
					sx: { width: "32px" },
					role: "gridcell",
					disabled: day.disabled,
					isActive: isSelected,
					isOtherMonth,
					isCurrent: now.format("YYYY MM DD") === (0, dayjs.default)(day.value).format("YYYY MM DD"),
					"data-date": day.label,
					tabIndex: focusedIdx === idx * 7 + dayIdx ? 0 : -1,
					"aria-colindex": dayIdx + 1,
					"aria-label": day.label.toString(),
					onClick: handleClick(require_components_date_calendar_helpers.dateTypeToDateObject(day.value, timezone)),
					onKeyDown: handleKeyDown,
					children: day.label
				}, `${day.value.year()} / ${day.value.month()} / ${day.label} / ${dayIdx}`);
			})
		}, `${require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(defaultSelectedDate), timezone).year()} / ${defaultSelectedDate.getMonth() + 1} / ${idx}`))
	});
}));
DayCalendar.displayName = "DayCalendar";
const DateItem = (0, react.memo)((0, react.forwardRef)(({ disabled, isCurrent, isOtherMonth, isActive, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_with_interaction_index.WithInteraction, {
		disabled,
		variant: "light",
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
			as: "button",
			disabled,
			ref,
			role: "radio",
			type: "button",
			...props,
			"aria-checked": isActive,
			"aria-disabled": disabled,
			"aria-current": isCurrent ? "date" : void 0,
			"data-other-month": isOtherMonth,
			sx: [
				require_components_date_calendar_style.dayItemButtonStyle,
				{ borderRadius: 8 },
				props.sx
			]
		})
	});
}));
DateItem.displayName = "DateItem";
const DayItem = (0, react.forwardRef)(({ disabled, isCurrent, isOtherMonth, isActive, ...props }, ref) => {
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
			sx: [require_components_date_calendar_style.dayItemButtonStyle, props.sx]
		})
	});
});
DayItem.displayName = "DayItem";
//#endregion
exports.DateCalendar = DateCalendar;
