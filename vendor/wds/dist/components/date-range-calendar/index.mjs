'use client';
import { getPreviousValue } from "../../utils/internal/responsive-props.mjs";
import { FlexBox } from "../flex-box/index.mjs";
import { Typography } from "../typography/index.mjs";
import { WithInteraction } from "../with-interaction/index.mjs";
import { ScrollArea } from "../scroll-area/index.mjs";
import { IconButton } from "../icon-button/index.mjs";
import { extendDayjs } from "../../utils/internal/date.mjs";
import { dateTypeToDateObject, dayjsTimezone, findClosestEnableDate, getWeekdays, isDisabledDate, isValidDate } from "../date-calendar/helpers.mjs";
import { useDefaultSelectedDate } from "../date-calendar/hooks.mjs";
import { ACCESSIBLE_MAX_DATE, ACCESSIBLE_MIN_DATE } from "../date-calendar/constants.mjs";
import { useMedia } from "../../hooks/internal/use-media.mjs";
import { focusRangeDate, getDisplayRange, isDateInRangeForView, isDateInVisiblePanels, isSameDateForView, scrollIntoViewRangeDate } from "./helpers.mjs";
import { rangeCalendarContainerStyle, rangeDayCellStyle, rangeDayItemStyle, rangeGridWrapperStyle, rangeMonthYearCellStyle, rangePanelHeaderLabelStyle, rangePanelHeaderNavigationStyle, rangePanelHeaderStyle, rangePanelStyle, rangePanelWrapperStyle, rangeStickyHeaderStyle, rangeWeekdayCellStyle } from "./style.mjs";
import { useRangeSelection } from "./hooks.mjs";
import { DateRangeCalendarContextProvider, useDateRangeCalendarContext } from "./contexts.mjs";
import { Box, useTheme } from "@wanteddev/wds-engine";
import { forwardRef, memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { IconChevronLeftSmall, IconChevronRightSmall } from "@wanteddev/wds-icon";
import { useComposedRefs } from "@radix-ui/react-compose-refs";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import dayjs from "dayjs";
//#region src/components/date-range-calendar/index.tsx
extendDayjs();
const DateRangeCalendar = forwardRef(({ value: originValue, defaultValue, onChange, onChangeComplete, calendars: givenCalendars = 1, max = ACCESSIBLE_MAX_DATE, min = ACCESSIBLE_MIN_DATE, view = "day", locale = "ko-KR", yearsOrder = "asc", timezone, disabled, readOnly, xs, sm, md, lg, xl, ...props }, ref) => {
	const theme = useTheme();
	const breakpoints = useMemo(() => Object.keys(theme.breakpoint), [theme.breakpoint]);
	const calendars = useMedia(breakpoints.map((v) => `(min-width: ${theme.breakpoint[v]})`), breakpoints.map((v) => getPreviousValue({
		xs,
		sm,
		md,
		lg,
		xl
	}, "calendars", givenCalendars, v)), givenCalendars) ?? givenCalendars;
	const { rangeValue, activePosition, hoveredDate, setHoveredDate, handleDateSelect: baseHandleDateSelect } = useRangeSelection({
		value: originValue,
		defaultValue,
		onChange,
		onChangeComplete,
		timezone,
		disabled,
		readOnly
	});
	const initialStart = useRef(originValue?.[0] ?? defaultValue?.[0]).current;
	const { defaultSelectedDate, setDefaultSelectedDate, now } = useDefaultSelectedDate(initialStart, min, max, timezone);
	const containerRef = useRef(null);
	const composedRefs = useComposedRefs(ref, containerRef);
	const effectiveCalendars = view === "day" ? Math.max(1, calendars) : 1;
	return /* @__PURE__ */ jsx(DateRangeCalendarContextProvider, {
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
		children: /* @__PURE__ */ jsxs(FlexBox, {
			ref: composedRefs,
			"wds-component": "date-range-calendar",
			sx: [rangeCalendarContainerStyle, props.sx],
			onMouseLeave: () => {
				if (!disabled && !readOnly) setHoveredDate(null);
			},
			children: [
				view === "day" && Array.from({ length: effectiveCalendars }).map((_, panelIdx) => /* @__PURE__ */ jsx(RangeDayPanel, { panelIndex: panelIdx }, panelIdx)),
				view === "month" && /* @__PURE__ */ jsx(RangeMonthPanel, {}),
				view === "year" && /* @__PURE__ */ jsx(RangeYearPanel, { yearsOrder })
			]
		})
	});
});
DateRangeCalendar.displayName = "DateRangeCalendar";
const RangeDayPanel = memo(({ panelIndex }) => {
	const { defaultSelectedDate, setDefaultSelectedDate, locale, timezone, min, max, calendars } = useDateRangeCalendarContext("RangeDayPanel");
	const panelMonth = useMemo(() => dayjsTimezone(dayjs(defaultSelectedDate), timezone).add(panelIndex, "month"), [
		defaultSelectedDate,
		panelIndex,
		timezone
	]);
	const headerLabel = useMemo(() => Intl.DateTimeFormat(locale, {
		month: "long",
		year: "numeric",
		timeZone: timezone
	}).format(dateTypeToDateObject(panelMonth, timezone)), [
		locale,
		panelMonth,
		timezone
	]);
	const weekdays = useMemo(() => getWeekdays(locale), [locale]);
	const showPrevArrow = panelIndex === 0;
	const showNextArrow = panelIndex === calendars - 1;
	const isOnlyOneCalendar = calendars === 1;
	const prevArrow = useMemo(() => {
		return /* @__PURE__ */ jsx(IconButton, {
			"wds-ignore-first-focus": "true",
			size: 18,
			"aria-label": "Previous month",
			disabled: isValidDate(min) && dayjsTimezone(dayjs(defaultSelectedDate), timezone).isSameOrBefore(dateTypeToDateObject(min, timezone), "month"),
			onClick: () => setDefaultSelectedDate(dateTypeToDateObject(dayjsTimezone(dayjs(defaultSelectedDate), timezone).subtract(1, "month"), timezone)),
			children: /* @__PURE__ */ jsx(IconChevronLeftSmall, {})
		});
	}, [
		min,
		defaultSelectedDate,
		timezone,
		setDefaultSelectedDate
	]);
	const nextArrow = useMemo(() => {
		return /* @__PURE__ */ jsx(IconButton, {
			"wds-ignore-first-focus": "true",
			size: 18,
			"aria-label": "Next month",
			disabled: isValidDate(max) && dayjsTimezone(dayjs(defaultSelectedDate), timezone).add(calendars - 1, "month").isSameOrAfter(dayjs(dateTypeToDateObject(max, timezone)), "month"),
			onClick: () => setDefaultSelectedDate(dateTypeToDateObject(dayjsTimezone(dayjs(defaultSelectedDate), timezone).add(1, "month"), timezone)),
			children: /* @__PURE__ */ jsx(IconChevronRightSmall, {})
		});
	}, [
		max,
		defaultSelectedDate,
		timezone,
		calendars,
		setDefaultSelectedDate
	]);
	return /* @__PURE__ */ jsx(FlexBox, {
		flexDirection: "column",
		alignItems: "flex-start",
		sx: rangePanelStyle,
		children: /* @__PURE__ */ jsxs(ScrollArea, {
			sx: rangePanelWrapperStyle,
			zIndex: 11,
			role: "grid",
			"aria-multiselectable": true,
			"aria-label": "Select day range",
			children: [/* @__PURE__ */ jsxs(FlexBox, {
				sx: rangeStickyHeaderStyle,
				"data-role": "date-range-calendar-header",
				flexDirection: "column",
				children: [/* @__PURE__ */ jsx(FlexBox, {
					sx: rangePanelHeaderStyle,
					alignItems: "center",
					children: isOnlyOneCalendar ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(FlexBox, {
						sx: rangePanelHeaderLabelStyle,
						flex: "1",
						children: /* @__PURE__ */ jsx(PanelHeaderLabel, { label: headerLabel })
					}), /* @__PURE__ */ jsxs(FlexBox, {
						gap: "18px",
						sx: rangePanelHeaderNavigationStyle,
						children: [prevArrow, nextArrow]
					})] }) : /* @__PURE__ */ jsxs(FlexBox, {
						alignItems: "center",
						justifyContent: "space-between",
						flex: "1",
						children: [
							/* @__PURE__ */ jsx(FlexBox, {
								sx: rangePanelHeaderNavigationStyle,
								children: showPrevArrow ? prevArrow : /* @__PURE__ */ jsx(Box, { sx: { width: 18 } })
							}),
							/* @__PURE__ */ jsx(FlexBox, {
								sx: rangePanelHeaderLabelStyle,
								justifyContent: "center",
								children: /* @__PURE__ */ jsx(PanelHeaderLabel, { label: headerLabel })
							}),
							/* @__PURE__ */ jsx(FlexBox, {
								sx: rangePanelHeaderNavigationStyle,
								children: showNextArrow ? nextArrow : /* @__PURE__ */ jsx(Box, { sx: { width: 18 } })
							})
						]
					})
				}), /* @__PURE__ */ jsx(FlexBox, {
					role: "row",
					sx: rangePanelHeaderLabelStyle,
					children: weekdays.map((day, i) => /* @__PURE__ */ jsx(Typography, {
						role: "columnheader",
						"aria-label": day.long,
						sx: rangeWeekdayCellStyle,
						variant: "caption2",
						weight: "medium",
						color: "semantic.label.alternative",
						align: "center",
						children: day.narrow
					}, day.long + i))
				})]
			}), /* @__PURE__ */ jsx(FlexBox, {
				sx: { paddingBottom: 14 },
				flexDirection: "column",
				children: /* @__PURE__ */ jsx(RangeDayGrid, {
					panelMonth,
					panelIndex
				})
			})]
		})
	});
});
RangeDayPanel.displayName = "RangeDayPanel";
const RangeDayGrid = memo(({ panelMonth, panelIndex }) => {
	const { min, max, rangeValue, hoveredDate, activePosition, handleDateSelect, setHoveredDate, defaultSelectedDate, setDefaultSelectedDate, now, containerRef, timezone, calendars, disabled, readOnly } = useDateRangeCalendarContext("RangeDayGrid");
	const displayRange = useMemo(() => getDisplayRange(rangeValue, hoveredDate, activePosition, timezone), [
		rangeValue,
		hoveredDate,
		activePosition,
		timezone
	]);
	const dayRange = useMemo(() => {
		const firstDayOfMonth = panelMonth.set("date", 1);
		const prevMonthDays = new Array(firstDayOfMonth.weekday()).fill(0).map((_, i) => {
			const nextDay = firstDayOfMonth.day(i);
			return {
				value: nextDay,
				disabled: isDisabledDate({
					min,
					max,
					value: dateTypeToDateObject(nextDay, timezone),
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
				disabled: isDisabledDate({
					min,
					max,
					value: dateTypeToDateObject(nextDay, timezone),
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
				disabled: isDisabledDate({
					min,
					max,
					value: dateTypeToDateObject(nextDay, timezone),
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
	const dayRangeRows = useMemo(() => {
		return dayRange.reduce((acc, cur, idx) => {
			const chunkIndex = Math.floor(idx / 7);
			if (!acc[chunkIndex]) acc[chunkIndex] = [];
			acc[chunkIndex].push(cur);
			return acc;
		}, []);
	}, [dayRange]);
	const [focusedIdx, setFocusedIdx] = useState(dayRange.findIndex((v) => !v.isOtherMonth));
	useEffect(() => {
		if (panelIndex !== 0) {
			setFocusedIdx(dayRange.findIndex((v) => !v.isOtherMonth));
			return;
		}
		const [start] = rangeValue;
		const selectedDateIdx = isValidDate(start) ? dayRange.findIndex((v) => !v.isOtherMonth && !v.disabled && v.value.format("YYYY MM DD") === dayjsTimezone(dayjs(start), timezone).format("YYYY MM DD")) : -1;
		if (selectedDateIdx !== -1) {
			setFocusedIdx(selectedDateIdx);
			return;
		}
		const todayDateIdx = isValidDate(now.toDate()) ? dayRange.findIndex((v) => !v.isOtherMonth && !v.disabled && v.value.format("YYYY MM DD") === dayjsTimezone(now, timezone).format("YYYY MM DD")) : -1;
		if (todayDateIdx !== -1) {
			setFocusedIdx(todayDateIdx);
			return;
		}
		setFocusedIdx(dayRange.findIndex((v) => !v.isOtherMonth && !v.disabled));
	}, [panelMonth.format("YYYY-MM")]);
	const handleClick = useCallback((date) => () => {
		handleDateSelect(findClosestEnableDate({
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
	const handleKeyDown = useCallback((e) => {
		const currentDateStr = e.currentTarget.getAttribute("data-date");
		if (!currentDateStr) return;
		const current = dayjsTimezone(dayjs(currentDateStr), timezone);
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
		const clamped = findClosestEnableDate({
			min,
			max,
			value: dateTypeToDateObject(target, timezone),
			timezone
		});
		const clampedDayjs = dayjsTimezone(dayjs(clamped), timezone);
		if (!isDateInVisiblePanels(clampedDayjs, defaultSelectedDate, calendars, timezone)) {
			const base = dayjsTimezone(dayjs(defaultSelectedDate), timezone);
			const lastPanelMonth = base.add(calendars - 1, "month");
			if (clampedDayjs.isBefore(base, "month")) setDefaultSelectedDate(dateTypeToDateObject(clampedDayjs.startOf("month"), timezone));
			else if (clampedDayjs.isAfter(lastPanelMonth, "month")) setDefaultSelectedDate(dateTypeToDateObject(clampedDayjs.subtract(calendars - 1, "month").startOf("month"), timezone));
		}
		setHoveredDate(clamped);
		requestAnimationFrame(() => {
			focusRangeDate("day", clampedDayjs.format("YYYY-MM-DD"), containerRef);
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
	return /* @__PURE__ */ jsx(FlexBox, {
		flexWrap: "wrap",
		role: "rowgroup",
		sx: rangeGridWrapperStyle,
		children: dayRangeRows.map((days, rowIdx) => /* @__PURE__ */ jsx(FlexBox, {
			role: "row",
			"aria-rowindex": rowIdx + 1,
			children: days.map((day, dayIdx) => {
				const dateValue = day.value.format("YYYY-MM-DD");
				if (day.value.month() !== panelMonth.month()) return /* @__PURE__ */ jsx(Box, {
					role: "gridcell",
					sx: rangeDayCellStyle
				}, `${dateValue}-${dayIdx}`);
				const dateObj = dateTypeToDateObject(day.value, timezone);
				const isRangeStart = isSameDateForView(dateObj, displayRange[0], "day", timezone);
				const isRangeEnd = isSameDateForView(dateObj, displayRange[1], "day", timezone);
				const isInRange = isDateInRangeForView(dateObj, displayRange[0], displayRange[1], "day", timezone);
				const isSelected = isRangeStart || isRangeEnd;
				return /* @__PURE__ */ jsx(Box, {
					sx: rangeDayCellStyle,
					"data-in-range": isInRange ? true : void 0,
					"data-range-start": isRangeStart ? true : void 0,
					"data-range-end": isRangeEnd ? true : void 0,
					children: /* @__PURE__ */ jsx(RangeDateItem, {
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
const RangeMonthPanel = memo(() => {
	const { defaultSelectedDate, setDefaultSelectedDate, locale, timezone, min, max, containerRef, rangeValue, hoveredDate, activePosition, handleDateSelect, setHoveredDate, now, disabled, readOnly } = useDateRangeCalendarContext("RangeMonthPanel");
	const headerLabel = useMemo(() => Intl.DateTimeFormat(locale, {
		month: "long",
		year: "numeric",
		timeZone: timezone
	}).format(defaultSelectedDate), [
		defaultSelectedDate,
		locale,
		timezone
	]);
	const displayRange = useMemo(() => getDisplayRange(rangeValue, hoveredDate, activePosition, timezone), [
		rangeValue,
		hoveredDate,
		activePosition,
		timezone
	]);
	const { monthRange, monthRows } = useMemo(() => {
		const range = new Array(12).fill(0).map((_, i) => {
			const minDate = dayjsTimezone(dayjs(min ?? "1900-01-01"), timezone);
			const maxDate = dayjsTimezone(dayjs(max ?? "2099-12-31"), timezone);
			const currentMonth = dayjsTimezone(dayjs(defaultSelectedDate), timezone).set("month", i);
			return {
				value: i,
				label: Intl.DateTimeFormat(locale, { month: "short" }).format(dateTypeToDateObject(dayjs().set("month", i), timezone)),
				disabled: currentMonth.isBefore(minDate, "month") && minDate.year() >= dayjsTimezone(dayjs(defaultSelectedDate), timezone).year() || currentMonth.isAfter(maxDate, "month") && maxDate.year() <= dayjsTimezone(dayjs(defaultSelectedDate), timezone).year()
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
	const [focusedIdx, setFocusedIdx] = useState(monthRange.findIndex((v) => !v.disabled));
	useEffect(() => {
		const [start] = rangeValue;
		const selectedDateIdx = isValidDate(start) ? monthRange.findIndex((v) => !v.disabled && v.value === dayjsTimezone(dayjs(start), timezone).month()) : -1;
		if (selectedDateIdx !== -1) {
			setFocusedIdx(selectedDateIdx);
			const mv = `${dayjsTimezone(dayjs(defaultSelectedDate), timezone).year()}-${String(monthRange[selectedDateIdx].value + 1).padStart(2, "0")}`;
			scrollIntoViewRangeDate("month", mv, containerRef);
			focusRangeDate("month", mv, containerRef);
			return;
		}
		const todayDateIdx = isValidDate(now.toDate()) ? monthRange.findIndex((v) => !v.disabled && v.value === dayjsTimezone(now, timezone).month() && dayjsTimezone(now, timezone).year() === dayjsTimezone(dayjs(defaultSelectedDate), timezone).year()) : -1;
		if (todayDateIdx !== -1) {
			setFocusedIdx(todayDateIdx);
			return;
		}
		setFocusedIdx(monthRange.findIndex((v) => !v.disabled));
	}, monthRange.map((v) => v.value));
	const handleClick = useCallback((monthIdx) => () => {
		handleDateSelect(findClosestEnableDate({
			min,
			max,
			timezone,
			value: dateTypeToDateObject(dayjs(defaultSelectedDate).set("month", monthIdx), timezone)
		}));
	}, [
		defaultSelectedDate,
		handleDateSelect,
		max,
		min,
		timezone
	]);
	const handleKeyDown = useCallback((e) => {
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
			const clamped = findClosestEnableDate({
				min,
				max,
				value: dateTypeToDateObject(dayjsTimezone(dayjs(defaultSelectedDate), timezone).add(yearDelta, "year").set("month", newMonth), timezone),
				timezone
			});
			setDefaultSelectedDate(dateTypeToDateObject(dayjsTimezone(dayjs(clamped), timezone).startOf("month"), timezone));
			const clampedMonth = dayjsTimezone(dayjs(clamped), timezone).month();
			setFocusedIdx(monthRange.findIndex((v) => v.value === clampedMonth));
			if (!disabled && !readOnly) setHoveredDate(clamped);
			const mv = `${dayjsTimezone(dayjs(clamped), timezone).year()}-${String(clampedMonth + 1).padStart(2, "0")}`;
			requestAnimationFrame(() => {
				focusRangeDate("month", mv, containerRef);
			});
		} else {
			const clamped = findClosestEnableDate({
				min,
				max,
				timezone,
				value: dateTypeToDateObject(dayjsTimezone(dayjs(defaultSelectedDate), timezone).set("month", newMonth), timezone)
			});
			const clampedMonth = dayjsTimezone(dayjs(clamped), timezone).month();
			const clampedYear = dayjsTimezone(dayjs(clamped), timezone).year();
			setFocusedIdx(monthRange.findIndex((v) => v.value === clampedMonth));
			if (!disabled && !readOnly) setHoveredDate(clamped);
			const mv = `${clampedYear}-${String(clampedMonth + 1).padStart(2, "0")}`;
			requestAnimationFrame(() => {
				focusRangeDate("month", mv, containerRef);
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
	return /* @__PURE__ */ jsx(FlexBox, {
		flexDirection: "column",
		alignItems: "flex-start",
		sx: rangePanelStyle,
		children: /* @__PURE__ */ jsxs(ScrollArea, {
			sx: rangePanelWrapperStyle,
			zIndex: 11,
			role: "grid",
			"aria-label": "Select month range",
			"aria-multiselectable": true,
			children: [/* @__PURE__ */ jsx(FlexBox, {
				sx: rangeStickyHeaderStyle,
				"data-role": "date-range-calendar-header",
				flexDirection: "column",
				children: /* @__PURE__ */ jsxs(FlexBox, {
					sx: rangePanelHeaderStyle,
					alignItems: "center",
					children: [/* @__PURE__ */ jsx(FlexBox, {
						sx: rangePanelHeaderLabelStyle,
						flex: "1",
						children: /* @__PURE__ */ jsx(PanelHeaderLabel, { label: headerLabel })
					}), /* @__PURE__ */ jsxs(FlexBox, {
						gap: "18px",
						sx: rangePanelHeaderNavigationStyle,
						children: [/* @__PURE__ */ jsx(IconButton, {
							"wds-ignore-first-focus": "true",
							size: 18,
							"aria-label": "Previous year",
							disabled: isValidDate(min) && dayjsTimezone(dayjs(defaultSelectedDate), timezone).year() <= dayjsTimezone(dayjs(min), timezone).year(),
							onClick: () => setDefaultSelectedDate(dateTypeToDateObject(dayjsTimezone(dayjs(defaultSelectedDate), timezone).subtract(1, "year"), timezone)),
							children: /* @__PURE__ */ jsx(IconChevronLeftSmall, {})
						}), /* @__PURE__ */ jsx(IconButton, {
							"wds-ignore-first-focus": "true",
							size: 18,
							"aria-label": "Next year",
							disabled: isValidDate(max) && dayjsTimezone(dayjs(defaultSelectedDate), timezone).year() >= dayjsTimezone(dayjs(max), timezone).year(),
							onClick: () => setDefaultSelectedDate(dateTypeToDateObject(dayjsTimezone(dayjs(defaultSelectedDate), timezone).add(1, "year"), timezone)),
							children: /* @__PURE__ */ jsx(IconChevronRightSmall, {})
						})]
					})]
				})
			}), /* @__PURE__ */ jsx(FlexBox, {
				sx: { paddingBottom: 12 },
				children: /* @__PURE__ */ jsx(FlexBox, {
					flex: "1",
					flexDirection: "column",
					sx: rangeGridWrapperStyle,
					children: monthRows.map((rowMonths, rowIdx) => /* @__PURE__ */ jsx(FlexBox, {
						role: "row",
						"aria-rowindex": rowIdx + 1,
						children: rowMonths.map((month, colIndex) => {
							const monthDate = dateTypeToDateObject(dayjsTimezone(dayjs(defaultSelectedDate), timezone).set("month", month.value), timezone);
							const year = dayjsTimezone(dayjs(defaultSelectedDate), timezone).year();
							const monthVal = `${year}-${String(month.value + 1).padStart(2, "0")}`;
							const isRangeStart = isSameDateForView(monthDate, displayRange[0], "month", timezone);
							const isRangeEnd = isSameDateForView(monthDate, displayRange[1], "month", timezone);
							const isInRange = isDateInRangeForView(monthDate, displayRange[0], displayRange[1], "month", timezone);
							return /* @__PURE__ */ jsx(Box, {
								sx: [rangeMonthYearCellStyle, { flex: "1 0 0" }],
								"data-in-range": isInRange ? true : void 0,
								"data-range-start": isRangeStart ? true : void 0,
								"data-range-end": isRangeEnd ? true : void 0,
								children: /* @__PURE__ */ jsx(RangeDateItem, {
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
const RangeYearPanel = memo(({ yearsOrder = "asc" }) => {
	const { defaultSelectedDate, locale, timezone, min, max, containerRef, rangeValue, hoveredDate, activePosition, handleDateSelect, setHoveredDate, now, disabled, readOnly } = useDateRangeCalendarContext("RangeYearPanel");
	const headerLabel = useMemo(() => Intl.DateTimeFormat(locale, {
		year: "numeric",
		timeZone: timezone
	}).format(defaultSelectedDate), [
		defaultSelectedDate,
		locale,
		timezone
	]);
	const displayRange = useMemo(() => getDisplayRange(rangeValue, hoveredDate, activePosition, timezone), [
		rangeValue,
		hoveredDate,
		activePosition,
		timezone
	]);
	const { yearRange, yearRows } = useMemo(() => {
		const startDate = dayjsTimezone(dayjs(min ?? "1900-01-01"), timezone);
		const endDate = dayjsTimezone(dayjs(max ?? "2099-12-31"), timezone);
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
	const [focusedIdx, setFocusedIdx] = useState(yearRange.length > 0 ? 0 : -1);
	useEffect(() => {
		const [start] = rangeValue;
		const selectedDateIdx = isValidDate(start) ? yearRange.findIndex((v) => v === dayjsTimezone(dayjs(start), timezone).year()) : -1;
		if (selectedDateIdx !== -1) {
			scrollIntoViewRangeDate("year", String(yearRange[selectedDateIdx]), containerRef);
			focusRangeDate("year", String(yearRange[selectedDateIdx]), containerRef);
			setFocusedIdx(selectedDateIdx);
			return;
		}
		const todayDateIdx = isValidDate(now.toDate()) ? yearRange.findIndex((v) => v === dayjsTimezone(now, timezone).year()) : -1;
		if (todayDateIdx !== -1) {
			scrollIntoViewRangeDate("year", String(yearRange[todayDateIdx]), containerRef);
			focusRangeDate("year", String(yearRange[todayDateIdx]), containerRef);
			setFocusedIdx(todayDateIdx);
			return;
		}
		const fallbackDateIdx = yearRange.length > 0 ? 0 : -1;
		if (fallbackDateIdx !== -1) focusRangeDate("year", String(yearRange[fallbackDateIdx]), containerRef);
		setFocusedIdx(fallbackDateIdx);
	}, yearRange.map((v) => v));
	const handleClick = useCallback((year) => () => {
		handleDateSelect(findClosestEnableDate({
			min,
			max,
			value: dateTypeToDateObject(dayjs(defaultSelectedDate).set("year", year), timezone),
			timezone
		}));
	}, [
		defaultSelectedDate,
		handleDateSelect,
		max,
		min,
		timezone
	]);
	const handleKeyDown = useCallback((e) => {
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
		const clampedYear = dayjsTimezone(dayjs(findClosestEnableDate({
			min,
			max,
			value: dateTypeToDateObject(dayjs(defaultSelectedDate).year(newYear), timezone),
			timezone
		})), timezone).year();
		setFocusedIdx(yearRange.findIndex((v) => v === clampedYear));
		const yearDate = dateTypeToDateObject(dayjs(defaultSelectedDate).set("year", clampedYear), timezone);
		if (!disabled && !readOnly) setHoveredDate(yearDate);
		requestAnimationFrame(() => {
			focusRangeDate("year", String(clampedYear), containerRef);
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
	return /* @__PURE__ */ jsx(FlexBox, {
		flexDirection: "column",
		alignItems: "flex-start",
		sx: rangePanelStyle,
		children: /* @__PURE__ */ jsxs(ScrollArea, {
			sx: rangePanelWrapperStyle,
			zIndex: 11,
			role: "grid",
			"aria-label": "Select year range",
			"aria-multiselectable": true,
			children: [/* @__PURE__ */ jsx(FlexBox, {
				sx: rangeStickyHeaderStyle,
				"data-role": "date-range-calendar-header",
				flexDirection: "column",
				children: /* @__PURE__ */ jsxs(FlexBox, {
					sx: rangePanelHeaderStyle,
					alignItems: "center",
					children: [/* @__PURE__ */ jsx(FlexBox, {
						sx: rangePanelHeaderLabelStyle,
						flex: "1",
						children: /* @__PURE__ */ jsx(PanelHeaderLabel, { label: headerLabel })
					}), /* @__PURE__ */ jsx(FlexBox, {
						gap: "18px",
						sx: rangePanelHeaderNavigationStyle
					})]
				})
			}), /* @__PURE__ */ jsx(FlexBox, {
				sx: { paddingBottom: 12 },
				children: /* @__PURE__ */ jsx(FlexBox, {
					flex: "1",
					sx: rangeGridWrapperStyle,
					flexDirection: "column",
					children: yearRows.map((rowYears, rowIdx) => /* @__PURE__ */ jsx(FlexBox, {
						role: "row",
						"aria-rowindex": rowIdx + 1,
						children: rowYears.map((year, colIndex) => {
							const yearDate = dateTypeToDateObject(dayjs(defaultSelectedDate).set("year", year), timezone);
							const yearVal = String(year);
							const isRangeStart = isSameDateForView(yearDate, displayRange[0], "year", timezone);
							const isRangeEnd = isSameDateForView(yearDate, displayRange[1], "year", timezone);
							const isInRange = isDateInRangeForView(yearDate, displayRange[0], displayRange[1], "year", timezone);
							const yearIdx = yearRange.indexOf(year);
							return /* @__PURE__ */ jsx(Box, {
								sx: [rangeMonthYearCellStyle, { flex: "1 0 0" }],
								"data-in-range": isInRange ? true : void 0,
								"data-range-start": isRangeStart ? true : void 0,
								"data-range-end": isRangeEnd ? true : void 0,
								children: /* @__PURE__ */ jsx(RangeDateItem, {
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
const PanelHeaderLabel = memo(({ label }) => {
	return /* @__PURE__ */ jsx(Typography, {
		variant: "body1",
		weight: "bold",
		color: "semantic.label.normal",
		children: label
	});
});
PanelHeaderLabel.displayName = "PanelHeaderLabel";
const RangeDateItem = memo(forwardRef(({ disabled, isCurrent, isOtherMonth, isActive, ...props }, ref) => {
	return /* @__PURE__ */ jsx(WithInteraction, {
		disabled,
		variant: "light",
		children: /* @__PURE__ */ jsx(Box, {
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
			sx: [rangeDayItemStyle, props.sx]
		})
	});
}));
RangeDateItem.displayName = "RangeDateItem";
//#endregion
export { DateRangeCalendar };
