'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const require_runtime = require("../../_virtual/_rolldown/runtime.js");
const require_components_date_calendar_helpers = require("../date-calendar/helpers.js");
const require_components_date_range_calendar_constants = require("./constants.js");
let react = require("react");
let _radix_ui_react_use_controllable_state = require("@radix-ui/react-use-controllable-state");
let dayjs = require("dayjs");
dayjs = require_runtime.__toESM(dayjs);
//#region src/components/date-range-calendar/hooks.ts
const useRangeSelection = ({ value, defaultValue, onChange, onChangeComplete, timezone, disabled, readOnly }) => {
	const [rangeValue, setRangeValue] = (0, _radix_ui_react_use_controllable_state.useControllableState)({
		prop: value,
		defaultProp: defaultValue ?? require_components_date_range_calendar_constants.DEFAULT_RANGE_VALUE,
		onChange
	});
	const [activePosition, setActivePosition] = (0, react.useState)("start");
	const [hoveredDate, setHoveredDate] = (0, react.useState)(null);
	return {
		rangeValue,
		setRangeValue,
		activePosition,
		setActivePosition,
		hoveredDate,
		setHoveredDate,
		handleDateSelect: (0, react.useCallback)((date) => {
			if (disabled || readOnly) return;
			if (activePosition === "start") {
				setRangeValue([date, void 0]);
				setActivePosition("end");
			} else {
				const start = rangeValue[0];
				if (require_components_date_calendar_helpers.isValidDate(start)) {
					const startDate = require_components_date_calendar_helpers.dateTypeToDateObject(start, timezone);
					let newRange;
					if (require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(date), timezone).isBefore(require_components_date_calendar_helpers.dayjsTimezone((0, dayjs.default)(startDate), timezone), "day")) newRange = [date, startDate];
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
exports.useRangeSelection = useRangeSelection;
