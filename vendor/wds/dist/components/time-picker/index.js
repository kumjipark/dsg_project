'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_popper_index = require("../popper/index.js");
const require_components_icon_button_index = require("../icon-button/index.js");
const require_utils_internal_date = require("../../utils/internal/date.js");
const require_components_text_field_index = require("../text-field/index.js");
const require_components_dismissable_layer_index = require("../dismissable-layer/index.js");
const require_components_focus_scope_index = require("../focus-scope/index.js");
const require_components_picker_action_area_contexts = require("../picker-action-area/contexts.js");
const require_components_date_picker_hooks = require("../date-picker/hooks.js");
const require_components_time_view_index = require("../time-view/index.js");
const require_components_time_picker_constants = require("./constants.js");
const require_components_time_picker_helpers = require("./helpers.js");
const require_components_time_picker_style = require("./style.js");
let react = require("react");
let _radix_ui_react_use_controllable_state = require("@radix-ui/react-use-controllable-state");
let _wanteddev_wds_icon = require("@wanteddev/wds-icon");
let _radix_ui_primitive = require("@radix-ui/primitive");
let _radix_ui_react_compose_refs = require("@radix-ui/react-compose-refs");
let react_jsx_runtime = require("react/jsx-runtime");
let _radix_ui_react_use_callback_ref = require("@radix-ui/react-use-callback-ref");
//#region src/components/time-picker/index.tsx
require_utils_internal_date.extendDayjs();
const TimePicker = (0, react.forwardRef)(({ disabled, readOnly, value: originValue, defaultValue, onChange, defaultOpen, open: originOpen, onOpenChange, onChangeComplete, contentProps, format = "a hh:mm", placeholder = format, locale = "ko-KR", timezone, minTime, maxTime, invalid: originInvalid, input, inputRef: originInputRef, disableLastUnitClickClose, actionArea, views: originViews, ...props }, forwardedRef) => {
	const ref = (0, react.useRef)(null);
	const composedRefs = (0, _radix_ui_react_compose_refs.useComposedRefs)(forwardedRef, ref);
	const [open, setOpen] = (0, _radix_ui_react_use_controllable_state.useControllableState)({
		prop: originOpen,
		defaultProp: defaultOpen ?? false,
		onChange: onOpenChange
	});
	const [value, setValue] = (0, _radix_ui_react_use_controllable_state.useControllableState)({
		prop: originValue,
		defaultProp: defaultValue,
		onChange
	});
	const initialValue = (0, react.useRef)(value);
	const { loop = true, trapped, trappedContent = true, onMountAutoFocus, onUnmountAutoFocus, position = "bottom-start", disableFocusScope, offset, sx: contentSx, ...otherContentProps } = contentProps || {};
	const Component = input ?? TimePickerInput;
	const { sections, inputRef, inputValue, focusedSection, handleBlur, handleClick, handleFocus, handleKeyDown, handlePaste, handleValueChange, handleInputValueChange } = require_components_date_picker_hooks.useDateField({
		value,
		format,
		locale,
		timezone,
		setValue,
		readOnly,
		disabled
	});
	const composedInputRef = (0, _radix_ui_react_compose_refs.useComposedRefs)(originInputRef, inputRef);
	const views = (0, react.useMemo)(() => originViews ?? require_components_time_picker_helpers.sectionsToViews(sections), [sections, originViews]);
	const invalid = originInvalid || !onChange && Boolean(value) && isNaN(new Date(value).getTime());
	const handleChangeCompleteCallback = (0, _radix_ui_react_use_callback_ref.useCallbackRef)(onChangeComplete);
	const handleChangeComplete = (0, react.useCallback)((v) => {
		handleValueChange(v);
		handleChangeCompleteCallback(v);
		if (!disableLastUnitClickClose) setOpen(false);
	}, [
		handleValueChange,
		handleChangeCompleteCallback,
		disableLastUnitClickClose,
		setOpen
	]);
	const handleChangeCompleteActionArea = (0, react.useCallback)((v) => {
		handleChangeComplete(v);
		setOpen(false);
	}, [handleChangeComplete, setOpen]);
	(0, react.useEffect)(() => {
		if (open) initialValue.current = value;
		else handleBlur();
	}, [open]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_popper_index.Popper, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_popper_index.PopperAnchor, {
		ref: composedRefs,
		onChange: () => {},
		inputMode: focusedSection?.type,
		"aria-haspopup": "dialog",
		"aria-expanded": open,
		"data-role": "time-picker-field",
		role: "combobox",
		...props,
		autoComplete: "off",
		type: "text",
		readOnly,
		disabled,
		placeholder,
		invalid,
		onFocus: (0, _radix_ui_primitive.composeEventHandlers)(props.onFocus, handleFocus),
		onClick: (0, _radix_ui_primitive.composeEventHandlers)(props.onClick, handleClick),
		onKeyDown: (0, _radix_ui_primitive.composeEventHandlers)(props.onKeyDown, handleKeyDown),
		onBlur: (0, _radix_ui_primitive.composeEventHandlers)(props.onBlur, handleBlur),
		onPaste: (0, _radix_ui_primitive.composeEventHandlers)(props.onPaste, handlePaste),
		value: inputValue,
		inputRef: composedInputRef,
		trailingContent: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [props.trailingContent, /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_text_field_index.TextFieldContent, {
			"data-role": "time-picker-clock-icon",
			variant: "icon-button",
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_icon_button_index.IconButton, {
				size: 22,
				disabled: disabled || readOnly,
				onClick: () => {
					handleInputValueChange();
					setOpen(!open);
				},
				"aria-label": "Toggle time picker",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconClock, {})
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
					if (ref.current?.contains(e.target) && e.target.closest("[data-role=\"time-picker-clock-icon\"]")) e.preventDefault();
				},
				onDismiss: () => {
					setOpen(false);
				},
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
					flexDirection: "column",
					"data-role": "time-picker-wrapper",
					sx: [require_components_time_picker_style.timePickerStyle, contentSx],
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_time_view_index.TimeView, {
						value,
						defaultValue,
						views,
						minTime,
						maxTime,
						locale,
						timezone,
						readOnly,
						disabled,
						onChange: handleValueChange,
						onChangeComplete: handleChangeComplete
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_picker_action_area_contexts.PickerActionAreaProvider, {
						timezone,
						value,
						initialValue,
						onChangeComplete: handleChangeCompleteActionArea,
						children: actionArea
					})]
				})
			})
		})
	})] });
});
TimePicker.displayName = require_components_time_picker_constants.TIME_PICKER_NAME;
const TimePickerInput = (0, react.forwardRef)(({ inputRef, ...props }, ref) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_text_field_index.TextField, {
	...props,
	ref: inputRef,
	wrapperRef: ref
}));
TimePickerInput.displayName = require_components_time_picker_constants.TIME_PICKER_INPUT_NAME;
//#endregion
exports.TimePicker = TimePicker;
