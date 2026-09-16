'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_responsive_props = require("../../utils/internal/responsive-props.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_popper_index = require("../popper/index.js");
const require_components_icon_button_index = require("../icon-button/index.js");
const require_utils_internal_date = require("../../utils/internal/date.js");
const require_components_text_field_index = require("../text-field/index.js");
const require_components_dismissable_layer_index = require("../dismissable-layer/index.js");
const require_components_focus_scope_index = require("../focus-scope/index.js");
const require_components_picker_action_area_contexts = require("../picker-action-area/contexts.js");
const require_components_date_range_calendar_constants = require("../date-range-calendar/constants.js");
const require_components_date_range_calendar_index = require("../date-range-calendar/index.js");
const require_components_date_range_picker_helpers = require("./helpers.js");
const require_components_date_range_picker_style = require("./style.js");
const require_components_date_range_picker_hooks = require("./hooks.js");
let react = require("react");
let _radix_ui_react_use_controllable_state = require("@radix-ui/react-use-controllable-state");
let _wanteddev_wds_icon = require("@wanteddev/wds-icon");
let _radix_ui_primitive = require("@radix-ui/primitive");
let _radix_ui_react_compose_refs = require("@radix-ui/react-compose-refs");
let react_jsx_runtime = require("react/jsx-runtime");
let _radix_ui_react_use_callback_ref = require("@radix-ui/react-use-callback-ref");
//#region src/components/date-range-picker/index.tsx
require_utils_internal_date.extendDayjs();
const calendarKeys = ["calendars"];
const DateRangePicker = (0, react.forwardRef)(({ disabled, readOnly, value: originValue, defaultValue, onChange, defaultOpen, open: originOpen, onOpenChange, view, contentProps, format = "YYYY.MM.DD", placeholder, min, max, locale = "ko-KR", timezone, onChangeComplete, inputRef: originInputRef, yearsOrder, input, actionArea, invalid: originInvalid, disableLastDateClickClose, calendars, xs, sm, md, lg, xl, ...props }, forwardedRef) => {
	const xsSplit = (0, react.useMemo)(() => require_utils_internal_responsive_props.splitResponsiveProps(xs, calendarKeys), [xs]);
	const smSplit = (0, react.useMemo)(() => require_utils_internal_responsive_props.splitResponsiveProps(sm, calendarKeys), [sm]);
	const mdSplit = (0, react.useMemo)(() => require_utils_internal_responsive_props.splitResponsiveProps(md, calendarKeys), [md]);
	const lgSplit = (0, react.useMemo)(() => require_utils_internal_responsive_props.splitResponsiveProps(lg, calendarKeys), [lg]);
	const xlSplit = (0, react.useMemo)(() => require_utils_internal_responsive_props.splitResponsiveProps(xl, calendarKeys), [xl]);
	const ref = (0, react.useRef)(null);
	const composedRefs = (0, _radix_ui_react_compose_refs.useComposedRefs)(forwardedRef, ref);
	const [open, setOpen] = (0, _radix_ui_react_use_controllable_state.useControllableState)({
		prop: originOpen,
		defaultProp: defaultOpen ?? false,
		onChange: onOpenChange
	});
	const [value, setValue] = (0, _radix_ui_react_use_controllable_state.useControllableState)({
		prop: originValue,
		defaultProp: defaultValue ?? require_components_date_range_calendar_constants.DEFAULT_RANGE_VALUE,
		onChange
	});
	const initialValue = (0, react.useRef)(value);
	const { loop = true, trapped, trappedContent = true, disableFocusScope, onMountAutoFocus, onUnmountAutoFocus, position = "bottom-start", offset = 8, sx: contentSx, ...otherContentProps } = contentProps || {};
	const Component = input ?? DateRangePickerField;
	const { inputRef, inputValue, focusedSection, handlePaste, handleFocus, handleClick, handleBlur, handleKeyDown, handleValueChange, handleInputValueChange } = require_components_date_range_picker_hooks.useDateRangeField({
		value,
		format,
		locale,
		timezone,
		setValue,
		readOnly,
		disabled
	});
	const invalid = originInvalid || !onChange && require_components_date_range_picker_helpers.isInvalidDateRange(value);
	const handleChangeCompleteCallback = (0, _radix_ui_react_use_callback_ref.useCallbackRef)(onChangeComplete);
	const handleChangeComplete = (0, react.useCallback)((v) => {
		handleValueChange(v);
		handleChangeCompleteCallback(v);
		if (!disableLastDateClickClose) setOpen(false);
	}, [
		handleValueChange,
		handleChangeCompleteCallback,
		disableLastDateClickClose,
		setOpen
	]);
	const handleChangeCompleteActionArea = (0, react.useCallback)((v) => {
		handleChangeComplete(v);
		setOpen(false);
	}, [handleChangeComplete, setOpen]);
	const composedInputRef = (0, _radix_ui_react_compose_refs.useComposedRefs)(originInputRef, inputRef);
	const resolvedPlaceholder = placeholder ?? `${format} - ${format}`;
	(0, react.useEffect)(() => {
		if (open) initialValue.current = value;
		else handleBlur();
	}, [open]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_popper_index.Popper, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_popper_index.PopperAnchor, {
		ref: composedRefs,
		onChange: () => {},
		"aria-haspopup": "dialog",
		"aria-expanded": open,
		"data-role": "date-range-picker-field",
		role: "combobox",
		...props,
		xs: xsSplit.rest,
		sm: smSplit.rest,
		md: mdSplit.rest,
		lg: lgSplit.rest,
		xl: xlSplit.rest,
		type: "text",
		autoComplete: "off",
		readOnly,
		disabled,
		placeholder: resolvedPlaceholder,
		invalid,
		inputMode: focusedSection?.type,
		onFocus: (0, _radix_ui_primitive.composeEventHandlers)(props.onFocus, handleFocus),
		onClick: (0, _radix_ui_primitive.composeEventHandlers)(props.onClick, handleClick),
		onKeyDown: (0, _radix_ui_primitive.composeEventHandlers)(props.onKeyDown, handleKeyDown),
		onBlur: (0, _radix_ui_primitive.composeEventHandlers)(props.onBlur, handleBlur),
		onPaste: (0, _radix_ui_primitive.composeEventHandlers)(props.onPaste, handlePaste),
		value: inputValue,
		inputRef: composedInputRef,
		trailingContent: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [props.trailingContent, /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_text_field_index.TextFieldContent, {
			"data-role": "date-range-picker-calendar-icon",
			variant: "icon-button",
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_icon_button_index.IconButton, {
				"aria-label": "Toggle date range picker",
				disabled: disabled || readOnly,
				onClick: (e) => {
					e.stopPropagation();
					handleInputValueChange();
					setOpen((prev) => !prev);
				},
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconCalendar, {})
			})
		})] }),
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Component, {})
	}), open && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_popper_index.PopperContent, {
		role: "dialog",
		...otherContentProps,
		position,
		offset,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_focus_scope_index.FocusScope, {
			loop,
			trapped,
			trappedContent,
			onMountAutoFocus,
			onUnmountAutoFocus,
			disableFocusScope,
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_dismissable_layer_index.DismissableLayer, {
				asChild: true,
				onPointerDownOutside: (e) => {
					if (ref.current?.contains(e.target) && e.target.closest("[data-role=\"date-range-picker-calendar-icon\"]")) e.preventDefault();
				},
				onDismiss: () => {
					setOpen(false);
				},
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
					flexDirection: "column",
					"data-role": "date-range-picker-wrapper",
					sx: [require_components_date_range_picker_style.dateRangePopperStyle, contentSx],
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_date_range_calendar_index.DateRangeCalendar, {
						min,
						max,
						timezone,
						locale,
						onChangeComplete: handleChangeComplete,
						view,
						value,
						onChange: handleValueChange,
						readOnly,
						disabled,
						yearsOrder,
						calendars,
						xs: xsSplit.picked,
						sm: smSplit.picked,
						md: mdSplit.picked,
						lg: lgSplit.picked,
						xl: xlSplit.picked
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_picker_action_area_contexts.PickerActionAreaProvider, {
						timezone,
						value,
						initialValue,
						onChangeComplete: handleChangeCompleteActionArea,
						mode: "range",
						children: actionArea
					})]
				})
			})
		})
	})] });
});
DateRangePicker.displayName = "DateRangePicker";
const DateRangePickerField = (0, react.forwardRef)(({ inputRef, ...props }, ref) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_text_field_index.TextField, {
	...props,
	ref: inputRef,
	wrapperRef: ref
}));
DateRangePickerField.displayName = "DateRangePickerField";
//#endregion
exports.DateRangePicker = DateRangePicker;
