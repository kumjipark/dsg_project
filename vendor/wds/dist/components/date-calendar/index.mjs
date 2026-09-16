'use client';
import { FlexBox } from "../flex-box/index.mjs";
import { Typography } from "../typography/index.mjs";
import { WithInteraction } from "../with-interaction/index.mjs";
import { TextButton } from "../text-button/index.mjs";
import { ScrollArea } from "../scroll-area/index.mjs";
import { IconButton } from "../icon-button/index.mjs";
import { Grid } from "../grid/index.mjs";
import { GridItem } from "../grid-item/index.mjs";
import { extendDayjs } from "../../utils/internal/date.mjs";
import { dateCalendarHeaderLabelButtonStyle, dateCalendarHeaderLabelStyle, dateCalendarHeaderNavigationStyle, dateCalendarHeaderStyle, dateCalendarStyle, dateCalendarWrapperStyle, dateYearMonthWrapperStyle, dayItemButtonStyle, stickyDateCalendarStyle, weekdayCellStyle } from "./style.mjs";
import { dateTypeToDateObject, dayjsTimezone, findClosestEnableDate, focusDate, getWeekdays, isDisabledDate, isValidDate, scrollIntoViewDate } from "./helpers.mjs";
import { useDefaultSelectedDate } from "./hooks.mjs";
import { ACCESSIBLE_MAX_DATE, ACCESSIBLE_MIN_DATE } from "./constants.mjs";
import { DateCalendarContextProvider, useDateCalendarContext } from "./contexts.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef, memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { IconCaretDown, IconCaretUp, IconChevronLeftSmall, IconChevronRightSmall } from "@wanteddev/wds-icon";
import { useComposedRefs } from "@radix-ui/react-compose-refs";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import dayjs from "dayjs";
//#region src/components/date-calendar/index.tsx
extendDayjs();
const DateCalendar = forwardRef(({ value: originValue, defaultValue, onChange, onChangeComplete, max = ACCESSIBLE_MAX_DATE, min = ACCESSIBLE_MIN_DATE, views = ["year", "day"], view: originView, defaultView: givenDefaultView = views.at(views.length - 1) ?? "day", onViewChange, locale = "ko-KR", yearsOrder = "asc", timezone, disabled, readOnly, ...props }, ref) => {
	const [value, setValue] = useControllableState({
		prop: originValue,
		defaultProp: defaultValue,
		onChange
	});
	const [view, setView] = useControllableState({
		prop: originView,
		defaultProp: givenDefaultView,
		onChange: onViewChange
	});
	const { defaultSelectedDate, setDefaultSelectedDate, now } = useDefaultSelectedDate(value, min, max, timezone);
	const containerRef = useRef(null);
	const composedRefs = useComposedRefs(ref, containerRef);
	const isOnlySelectYear = views.length === 1 && views.at(0) === "year";
	const isOnlySelectMonth = views.length === 1 && views.at(0) === "month";
	const isOnlySelectDay = views.length === 1 && views.at(0) === "day";
	const headerLabel = Intl.DateTimeFormat(locale, {
		month: "long",
		year: "numeric",
		timeZone: timezone
	}).format(defaultSelectedDate);
	const headerExpanded = isOnlySelectYear || isOnlySelectMonth || views.includes("day") && (view === "month" || view === "year") || views.includes("month") && view === "year";
	const handleNextView = useCallback((newView, newValue) => {
		if (disabled || readOnly) return;
		switch (newView) {
			case "year":
				if (isOnlySelectYear) {
					setValue(newValue);
					onChangeComplete?.(newValue);
				} else {
					setDefaultSelectedDate(dateTypeToDateObject(newValue, timezone));
					setView(views.includes("month") ? "month" : "day");
				}
				break;
			case "month":
				if (isOnlySelectMonth || !views.includes("day")) {
					setValue(newValue);
					onChangeComplete?.(newValue);
				} else {
					setDefaultSelectedDate(dateTypeToDateObject(newValue, timezone));
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
	const weekdays = useMemo(() => getWeekdays(locale), [locale]);
	const calendarComponent = {
		year: /* @__PURE__ */ jsx(YearCalendar, { order: yearsOrder }),
		month: /* @__PURE__ */ jsx(MonthCalendar, {}),
		day: /* @__PURE__ */ jsx(DayCalendar, {})
	};
	return /* @__PURE__ */ jsx(DateCalendarContextProvider, {
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
		children: /* @__PURE__ */ jsx(FlexBox, {
			ref: composedRefs,
			"wds-component": "date-calendar",
			flexDirection: "column",
			alignItems: "flex-start",
			...props,
			sx: [dateCalendarStyle, props.sx],
			children: /* @__PURE__ */ jsxs(ScrollArea, {
				sx: dateCalendarWrapperStyle,
				zIndex: 11,
				role: view === "day" ? "grid" : "radiogroup",
				"aria-label": `Select ${view}`,
				children: [/* @__PURE__ */ jsxs(FlexBox, {
					sx: stickyDateCalendarStyle,
					"data-role": "date-calendar-header",
					flexDirection: "column",
					children: [!isOnlySelectYear && /* @__PURE__ */ jsxs(FlexBox, {
						sx: dateCalendarHeaderStyle,
						alignItems: "center",
						children: [/* @__PURE__ */ jsx(FlexBox, {
							sx: dateCalendarHeaderLabelStyle,
							flex: "1",
							children: /* @__PURE__ */ jsx(TextButton, {
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
								sx: [dateCalendarHeaderLabelButtonStyle, (isOnlySelectDay || isOnlySelectMonth) && { pointerEvents: "none" }],
								trailingContent: isOnlySelectDay || isOnlySelectMonth ? null : headerExpanded ? /* @__PURE__ */ jsx(IconCaretUp, {}) : /* @__PURE__ */ jsx(IconCaretDown, {}),
								children: headerLabel
							})
						}), /* @__PURE__ */ jsx(FlexBox, {
							gap: "18px",
							sx: dateCalendarHeaderNavigationStyle,
							children: views.includes("day") && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(IconButton, {
								"wds-ignore-first-focus": "true",
								size: 18,
								"aria-label": "Previous month",
								disabled: isValidDate(min) && dayjsTimezone(dayjs(defaultSelectedDate), timezone).isSameOrBefore(dateTypeToDateObject(min, timezone), "month"),
								onClick: () => setDefaultSelectedDate(dateTypeToDateObject(dayjsTimezone(dayjs(defaultSelectedDate), timezone).subtract(1, "month"), timezone)),
								children: /* @__PURE__ */ jsx(IconChevronLeftSmall, {})
							}), /* @__PURE__ */ jsx(IconButton, {
								"wds-ignore-first-focus": "true",
								size: 18,
								"aria-label": "Next month",
								disabled: isValidDate(max) && dayjsTimezone(dayjs(defaultSelectedDate), timezone).isSameOrAfter(dayjs(dateTypeToDateObject(max, timezone)), "month"),
								onClick: () => setDefaultSelectedDate(dateTypeToDateObject(dayjsTimezone(dayjs(defaultSelectedDate), timezone).add(1, "month"), timezone)),
								children: /* @__PURE__ */ jsx(IconChevronRightSmall, {})
							})] })
						})]
					}), view === "day" && /* @__PURE__ */ jsx(FlexBox, {
						role: "row",
						sx: dateCalendarHeaderLabelStyle,
						children: weekdays.map((day, i) => /* @__PURE__ */ jsx(Typography, {
							role: "columnheader",
							"aria-label": day.long,
							sx: weekdayCellStyle,
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
					children: calendarComponent[view ?? "day"]
				})]
			})
		})
	});
});
DateCalendar.displayName = "DateCalendar";
const YearCalendar = forwardRef(({ order = "asc", ...props }, ref) => {
	const { min, max, defaultSelectedDate, handleNextView, now, value, containerRef, timezone } = useDateCalendarContext("YearCalendar");
	const yearRange = useMemo(() => {
		const startDate = dayjsTimezone(dayjs(min ?? "1900-01-01"), timezone);
		const endDate = dayjsTimezone(dayjs(max ?? "2099-12-31"), timezone);
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
	const [focusedIdx, setFocusedIdx] = useState(yearRange.length > 0 ? 0 : -1);
	useEffect(() => {
		const selectedDateIdx = isValidDate(value) ? yearRange.findIndex((v) => v === dayjsTimezone(dayjs(value), timezone).year()) : -1;
		if (selectedDateIdx !== -1) {
			scrollIntoViewDate("year", yearRange[selectedDateIdx], containerRef);
			focusDate("year", yearRange[selectedDateIdx], containerRef);
			setFocusedIdx(selectedDateIdx);
			return;
		}
		const todayDateIdx = isValidDate(now.toDate()) ? yearRange.findIndex((v) => v === dayjsTimezone(now, timezone).year()) : -1;
		if (todayDateIdx !== -1) {
			scrollIntoViewDate("year", yearRange[todayDateIdx], containerRef);
			focusDate("year", yearRange[todayDateIdx], containerRef);
			setFocusedIdx(todayDateIdx);
			return;
		}
		const fallbackDateIdx = yearRange.length > 0 ? 0 : -1;
		if (fallbackDateIdx !== -1) focusDate("year", yearRange[fallbackDateIdx], containerRef);
		setFocusedIdx(fallbackDateIdx);
	}, yearRange.map((v) => v));
	const handleKeyDown = useCallback((e) => {
		switch (e.key) {
			case "ArrowUp": {
				const newYear = findClosestEnableDate({
					value: dateTypeToDateObject(dayjs(defaultSelectedDate).year(Number(e.currentTarget.getAttribute("data-year") ?? 1) - 3), timezone),
					min,
					max,
					timezone
				}).getFullYear();
				focusDate("year", newYear, containerRef);
				setFocusedIdx(yearRange.findIndex((v) => v === newYear));
				e.preventDefault();
				break;
			}
			case "ArrowDown": {
				const newYear = findClosestEnableDate({
					value: dateTypeToDateObject(dayjs(defaultSelectedDate).year(Number(e.currentTarget.getAttribute("data-year") ?? 2999) + 3), timezone),
					min,
					max,
					timezone
				}).getFullYear();
				focusDate("year", newYear, containerRef);
				setFocusedIdx(yearRange.findIndex((v) => v === newYear));
				e.preventDefault();
				break;
			}
			case "ArrowLeft": {
				const newYear = findClosestEnableDate({
					value: dateTypeToDateObject(dayjs(defaultSelectedDate).year(Number(e.currentTarget.getAttribute("data-year") ?? 1) - 1), timezone),
					min,
					max,
					timezone
				}).getFullYear();
				focusDate("year", newYear, containerRef);
				setFocusedIdx(yearRange.findIndex((v) => v === newYear));
				e.preventDefault();
				break;
			}
			case "ArrowRight": {
				const newYear = findClosestEnableDate({
					value: dateTypeToDateObject(dayjs(defaultSelectedDate).year(Number(e.currentTarget.getAttribute("data-year") ?? 2999) + 1), timezone),
					min,
					max,
					timezone
				}).getFullYear();
				focusDate("year", newYear, containerRef);
				setFocusedIdx(yearRange.findIndex((v) => v === newYear));
				e.preventDefault();
				break;
			}
			case "Home": {
				const newYear = yearRange[0] ?? dayjsTimezone(dayjs("1900-01-01"), timezone).year();
				focusDate("year", newYear, containerRef);
				setFocusedIdx(yearRange.findIndex((v) => v === newYear));
				e.preventDefault();
				break;
			}
			case "End": {
				const newYear = yearRange[yearRange.length - 1] ?? dayjsTimezone(dayjs("2099-12-31"), timezone).year();
				focusDate("year", newYear, containerRef);
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
	const handleClick = useCallback((year) => () => {
		handleNextView("year", findClosestEnableDate({
			min,
			max,
			value: dateTypeToDateObject(dayjs(defaultSelectedDate).set("year", year), timezone),
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
	return /* @__PURE__ */ jsx(Grid, {
		columnSpacing: 2,
		rowSpacing: 0,
		ref,
		...props,
		sx: [dateYearMonthWrapperStyle, props.sx],
		children: yearRange.map((year, i) => {
			const isActive = Boolean(value) && isValidDate(value) && dayjsTimezone(dayjs(value), timezone).year() === year;
			return /* @__PURE__ */ jsx(GridItem, {
				columns: 4,
				children: /* @__PURE__ */ jsx(DateItem, {
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
const MonthCalendar = memo(forwardRef((props, ref) => {
	const { min, max, defaultSelectedDate, locale, handleNextView, now, value, containerRef, timezone } = useDateCalendarContext("MonthCalendar");
	const monthRange = useMemo(() => {
		return new Array(12).fill(0).map((_, i) => {
			const minDate = dayjsTimezone(dayjs(min ?? "1900-01-01"), timezone);
			const maxDate = dayjsTimezone(dayjs(max ?? "2099-12-31"), timezone);
			const minDateCurrentMonth = dayjsTimezone(dayjs(minDate), timezone).set("month", i);
			const maxDateCurrentMonth = dayjsTimezone(dayjs(maxDate), timezone).set("month", i);
			return {
				value: i,
				label: Intl.DateTimeFormat(locale, { month: "short" }).format(dateTypeToDateObject(dayjs().set("month", i), timezone)),
				disabled: minDateCurrentMonth.isBefore(minDate, "month") && minDate.year() >= dayjsTimezone(dayjs(defaultSelectedDate), timezone).year() || maxDateCurrentMonth.isAfter(maxDate, "month") && maxDate.year() <= dayjsTimezone(dayjs(defaultSelectedDate), timezone).year()
			};
		});
	}, [
		min,
		timezone,
		max,
		locale,
		defaultSelectedDate
	]);
	const [focusedIdx, setFocusedIdx] = useState(monthRange.findIndex((v) => !v.disabled));
	useEffect(() => {
		const selectedDateIdx = isValidDate(value) ? monthRange.findIndex((v) => !v.disabled && v.value === dayjsTimezone(dayjs(value), timezone).month()) : -1;
		if (selectedDateIdx !== -1) {
			scrollIntoViewDate("month", monthRange[selectedDateIdx].value, containerRef);
			focusDate("month", monthRange[selectedDateIdx].value, containerRef);
			setFocusedIdx(selectedDateIdx);
			return;
		}
		const todayDateIdx = isValidDate(now.toDate()) ? monthRange.findIndex((v) => !v.disabled && v.value === dayjsTimezone(now, timezone).month() && dayjsTimezone(now, timezone).year() === dayjsTimezone(dayjs(defaultSelectedDate), timezone).year()) : -1;
		if (todayDateIdx !== -1) {
			scrollIntoViewDate("month", monthRange[todayDateIdx].value, containerRef);
			focusDate("month", monthRange[todayDateIdx].value, containerRef);
			setFocusedIdx(todayDateIdx);
			return;
		}
		const fallbackDateIdx = monthRange.findIndex((v) => !v.disabled);
		if (fallbackDateIdx !== -1) focusDate("month", monthRange[fallbackDateIdx].value, containerRef);
		setFocusedIdx(fallbackDateIdx);
	}, monthRange.map((v) => v.value));
	const handleKeyDown = useCallback((e) => {
		const changeMonthByKeyDown = (month) => {
			const newMonth = Number(e.currentTarget.getAttribute("data-month") ?? "0") + month;
			const newValue = findClosestEnableDate({
				min,
				max,
				value: dateTypeToDateObject(dayjs(defaultSelectedDate).set("month", newMonth < 0 ? 0 : newMonth > 11 ? 11 : newMonth), timezone),
				timezone
			});
			setFocusedIdx(monthRange.findIndex((v) => v.value === newValue.getMonth()));
			requestAnimationFrame(() => {
				focusDate("month", newValue.getMonth(), containerRef);
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
	const handleClick = useCallback((newMonth) => () => {
		handleNextView("month", findClosestEnableDate({
			min,
			max,
			timezone,
			value: dateTypeToDateObject(dayjs(defaultSelectedDate).set("month", newMonth), timezone)
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
	return /* @__PURE__ */ jsx(Grid, {
		columnSpacing: 2,
		rowSpacing: 0,
		ref,
		...props,
		sx: [dateYearMonthWrapperStyle, props.sx],
		children: monthRange.map((month, i) => /* @__PURE__ */ jsx(GridItem, {
			columns: 4,
			children: /* @__PURE__ */ jsx(DateItem, {
				sx: { width: "calc(100% - 4px)" },
				onClick: handleClick(month.value),
				disabled: month.disabled,
				isCurrent: now.month() === month.value && now.year() === dayjsTimezone(dayjs(defaultSelectedDate), timezone).year(),
				"data-month": month.value,
				"aria-label": month.label,
				tabIndex: focusedIdx === i ? 0 : -1,
				isActive: Boolean(value) && dayjsTimezone(dayjs(value), timezone).month() === month.value,
				onKeyDown: handleKeyDown,
				children: month.label
			})
		}, `${dayjsTimezone(dayjs(defaultSelectedDate), timezone).year()} / ${month.label}`))
	});
}));
MonthCalendar.displayName = "MonthCalendar";
const DayCalendar = memo(forwardRef((props, ref) => {
	const { min, max, defaultSelectedDate, value, handleNextView, setDefaultSelectedDate, now, containerRef, timezone } = useDateCalendarContext("DayCalendar");
	const dayRange = useMemo(() => {
		const firstDayOfMonth = dayjsTimezone(dayjs(defaultSelectedDate), timezone).set("date", 1);
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
		const monDaysWithPrevMonthDays = [...prevMonthDays, ...monthDays];
		const nextMonthDays = new Array(monDaysWithPrevMonthDays.length / 7 > 5 ? 6 - firstDayOfMonth.date(firstDayOfMonth.daysInMonth()).weekday() : 13 - firstDayOfMonth.date(firstDayOfMonth.daysInMonth()).weekday()).fill(0).map((_, i) => {
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
		return [...monDaysWithPrevMonthDays, ...nextMonthDays];
	}, [
		defaultSelectedDate,
		max,
		min,
		timezone
	]);
	const dayRangeRow = useMemo(() => {
		return dayRange.reduce((acc, cur, idx) => {
			const chunkIndex = Math.floor(idx / 7);
			if (!acc[chunkIndex]) acc[chunkIndex] = [];
			acc[chunkIndex].push(cur);
			return acc;
		}, []);
	}, [dayRange]);
	const [focusedIdx, setFocusedIdx] = useState(dayRange.findIndex((v) => !v.isOtherMonth));
	useEffect(() => {
		const selectedDateIdx = isValidDate(value) ? dayRange.findIndex((v) => !v.isOtherMonth && !v.disabled && v.value.format("YYYY MM DD") === dayjsTimezone(dayjs(value), timezone).format("YYYY MM DD")) : -1;
		if (selectedDateIdx !== -1) {
			setFocusedIdx(selectedDateIdx);
			focusDate("day", dayRange[selectedDateIdx].value.date(), containerRef);
			return;
		}
		const todayDateIdx = isValidDate(now.toDate()) ? dayRange.findIndex((v) => !v.isOtherMonth && !v.disabled && v.value.format("YYYY MM DD") === dayjsTimezone(now, timezone).format("YYYY MM DD")) : -1;
		if (todayDateIdx !== -1) {
			setFocusedIdx(todayDateIdx);
			focusDate("day", dayRange[todayDateIdx].value.date(), containerRef);
			return;
		}
		const fallbackDateIdx = dayRange.findIndex((v) => !v.isOtherMonth && !v.disabled);
		if (fallbackDateIdx !== -1) focusDate("day", dayRange[fallbackDateIdx].value.date(), containerRef);
		setFocusedIdx(fallbackDateIdx);
	}, dayRange.map((v) => v.value.format("YYYY MM DD")));
	const handleClick = useCallback((v) => () => {
		const newValue = findClosestEnableDate({
			min,
			max,
			value: v,
			timezone
		});
		handleNextView("day", newValue);
		setFocusedIdx(dayRange.findIndex((day) => !day.isOtherMonth && !day.disabled && day.value.format("YYYY MM DD") === dayjsTimezone(dayjs(newValue), timezone).format("YYYY MM DD")));
	}, [
		dayRange,
		handleNextView,
		max,
		min,
		timezone
	]);
	const handleKeyDown = useCallback((e) => {
		const changeDateByKeyDown = (date) => {
			let newValue;
			if (typeof date === "number") {
				const newDay = Number(e.currentTarget.getAttribute("data-date") ?? "0") + date;
				newValue = findClosestEnableDate({
					min,
					max,
					value: dateTypeToDateObject(dayjs(defaultSelectedDate).set("date", newDay), timezone),
					timezone
				});
			} else newValue = findClosestEnableDate({
				min,
				max,
				value: dateTypeToDateObject(date, timezone),
				timezone
			});
			setDefaultSelectedDate(newValue);
			setFocusedIdx(dayRange.findIndex((v) => v.value.format("YYYY MM DD") === dayjsTimezone(dayjs(newValue), timezone).format("YYYY MM DD")));
			requestAnimationFrame(() => {
				focusDate("day", newValue.getDate(), containerRef);
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
				changeDateByKeyDown(dayjs(defaultSelectedDate).subtract(dayjs(defaultSelectedDate).weekday(), "day"));
				e.preventDefault();
				break;
			case "End":
				changeDateByKeyDown(dayjs(defaultSelectedDate).add(6 - dayjs(defaultSelectedDate).weekday(), "day"));
				e.preventDefault();
				break;
			case "PageDown":
				changeDateByKeyDown(dayjs(defaultSelectedDate).subtract(1, "month"));
				e.preventDefault();
				break;
			case "PageUp":
				changeDateByKeyDown(dayjs(defaultSelectedDate).add(1, "month"));
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
	return /* @__PURE__ */ jsx(FlexBox, {
		flexWrap: "wrap",
		ref,
		role: "rowgroup",
		...props,
		columnGap: "0px",
		rowGap: "2px",
		sx: [dateYearMonthWrapperStyle, props.sx],
		children: dayRangeRow.map((days, idx) => /* @__PURE__ */ jsx(FlexBox, {
			role: "row",
			"aria-rowindex": idx + 1,
			children: days.map((day, dayIdx) => {
				const isSelected = isValidDate(value) && day.value.format("YYYY MM DD") === dayjsTimezone(dayjs(value), timezone).format("YYYY MM DD");
				const isOtherMonth = day.value.month() !== dayjsTimezone(dayjs(defaultSelectedDate), timezone).month();
				return /* @__PURE__ */ jsx(DayItem, {
					sx: { width: "32px" },
					role: "gridcell",
					disabled: day.disabled,
					isActive: isSelected,
					isOtherMonth,
					isCurrent: now.format("YYYY MM DD") === dayjs(day.value).format("YYYY MM DD"),
					"data-date": day.label,
					tabIndex: focusedIdx === idx * 7 + dayIdx ? 0 : -1,
					"aria-colindex": dayIdx + 1,
					"aria-label": day.label.toString(),
					onClick: handleClick(dateTypeToDateObject(day.value, timezone)),
					onKeyDown: handleKeyDown,
					children: day.label
				}, `${day.value.year()} / ${day.value.month()} / ${day.label} / ${dayIdx}`);
			})
		}, `${dayjsTimezone(dayjs(defaultSelectedDate), timezone).year()} / ${defaultSelectedDate.getMonth() + 1} / ${idx}`))
	});
}));
DayCalendar.displayName = "DayCalendar";
const DateItem = memo(forwardRef(({ disabled, isCurrent, isOtherMonth, isActive, ...props }, ref) => {
	return /* @__PURE__ */ jsx(WithInteraction, {
		disabled,
		variant: "light",
		children: /* @__PURE__ */ jsx(Box, {
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
				dayItemButtonStyle,
				{ borderRadius: 8 },
				props.sx
			]
		})
	});
}));
DateItem.displayName = "DateItem";
const DayItem = forwardRef(({ disabled, isCurrent, isOtherMonth, isActive, ...props }, ref) => {
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
			sx: [dayItemButtonStyle, props.sx]
		})
	});
});
DayItem.displayName = "DayItem";
//#endregion
export { DateCalendar };
