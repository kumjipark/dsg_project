'use client';
import { FlexBox } from "../flex-box/index.mjs";
import { Popper, PopperAnchor, PopperContent } from "../popper/index.mjs";
import { IconButton } from "../icon-button/index.mjs";
import { extendDayjs } from "../../utils/internal/date.mjs";
import { TextField, TextFieldContent } from "../text-field/index.mjs";
import { DismissableLayer } from "../dismissable-layer/index.mjs";
import { FocusScope } from "../focus-scope/index.mjs";
import { PickerActionAreaProvider } from "../picker-action-area/contexts.mjs";
import { useDateField } from "../date-picker/hooks.mjs";
import { TimeView } from "../time-view/index.mjs";
import { TIME_PICKER_INPUT_NAME, TIME_PICKER_NAME } from "./constants.mjs";
import { sectionsToViews } from "./helpers.mjs";
import { timePickerStyle } from "./style.mjs";
import { forwardRef, useCallback, useEffect, useMemo, useRef } from "react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { IconClock } from "@wanteddev/wds-icon";
import { composeEventHandlers } from "@radix-ui/primitive";
import { useComposedRefs } from "@radix-ui/react-compose-refs";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useCallbackRef } from "@radix-ui/react-use-callback-ref";
//#region src/components/time-picker/index.tsx
extendDayjs();
const TimePicker = forwardRef(({ disabled, readOnly, value: originValue, defaultValue, onChange, defaultOpen, open: originOpen, onOpenChange, onChangeComplete, contentProps, format = "a hh:mm", placeholder = format, locale = "ko-KR", timezone, minTime, maxTime, invalid: originInvalid, input, inputRef: originInputRef, disableLastUnitClickClose, actionArea, views: originViews, ...props }, forwardedRef) => {
	const ref = useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, ref);
	const [open, setOpen] = useControllableState({
		prop: originOpen,
		defaultProp: defaultOpen ?? false,
		onChange: onOpenChange
	});
	const [value, setValue] = useControllableState({
		prop: originValue,
		defaultProp: defaultValue,
		onChange
	});
	const initialValue = useRef(value);
	const { loop = true, trapped, trappedContent = true, onMountAutoFocus, onUnmountAutoFocus, position = "bottom-start", disableFocusScope, offset, sx: contentSx, ...otherContentProps } = contentProps || {};
	const Component = input ?? TimePickerInput;
	const { sections, inputRef, inputValue, focusedSection, handleBlur, handleClick, handleFocus, handleKeyDown, handlePaste, handleValueChange, handleInputValueChange } = useDateField({
		value,
		format,
		locale,
		timezone,
		setValue,
		readOnly,
		disabled
	});
	const composedInputRef = useComposedRefs(originInputRef, inputRef);
	const views = useMemo(() => originViews ?? sectionsToViews(sections), [sections, originViews]);
	const invalid = originInvalid || !onChange && Boolean(value) && isNaN(new Date(value).getTime());
	const handleChangeCompleteCallback = useCallbackRef(onChangeComplete);
	const handleChangeComplete = useCallback((v) => {
		handleValueChange(v);
		handleChangeCompleteCallback(v);
		if (!disableLastUnitClickClose) setOpen(false);
	}, [
		handleValueChange,
		handleChangeCompleteCallback,
		disableLastUnitClickClose,
		setOpen
	]);
	const handleChangeCompleteActionArea = useCallback((v) => {
		handleChangeComplete(v);
		setOpen(false);
	}, [handleChangeComplete, setOpen]);
	useEffect(() => {
		if (open) initialValue.current = value;
		else handleBlur();
	}, [open]);
	return /* @__PURE__ */ jsxs(Popper, { children: [/* @__PURE__ */ jsx(PopperAnchor, {
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
		onFocus: composeEventHandlers(props.onFocus, handleFocus),
		onClick: composeEventHandlers(props.onClick, handleClick),
		onKeyDown: composeEventHandlers(props.onKeyDown, handleKeyDown),
		onBlur: composeEventHandlers(props.onBlur, handleBlur),
		onPaste: composeEventHandlers(props.onPaste, handlePaste),
		value: inputValue,
		inputRef: composedInputRef,
		trailingContent: /* @__PURE__ */ jsxs(Fragment, { children: [props.trailingContent, /* @__PURE__ */ jsx(TextFieldContent, {
			"data-role": "time-picker-clock-icon",
			variant: "icon-button",
			children: /* @__PURE__ */ jsx(IconButton, {
				size: 22,
				disabled: disabled || readOnly,
				onClick: () => {
					handleInputValueChange();
					setOpen(!open);
				},
				"aria-label": "Toggle time picker",
				children: /* @__PURE__ */ jsx(IconClock, {})
			})
		})] }),
		children: /* @__PURE__ */ jsx(Component, {})
	}), open && /* @__PURE__ */ jsx(PopperContent, {
		role: "dialog",
		...otherContentProps,
		position,
		offset,
		children: /* @__PURE__ */ jsx(FocusScope, {
			loop,
			trapped,
			trappedContent,
			onMountAutoFocus,
			onUnmountAutoFocus,
			disableFocusScope,
			children: /* @__PURE__ */ jsx(DismissableLayer, {
				asChild: true,
				onPointerDownOutside: (e) => {
					if (ref.current?.contains(e.target) && e.target.closest("[data-role=\"time-picker-clock-icon\"]")) e.preventDefault();
				},
				onDismiss: () => {
					setOpen(false);
				},
				children: /* @__PURE__ */ jsxs(FlexBox, {
					flexDirection: "column",
					"data-role": "time-picker-wrapper",
					sx: [timePickerStyle, contentSx],
					children: [/* @__PURE__ */ jsx(TimeView, {
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
					}), /* @__PURE__ */ jsx(PickerActionAreaProvider, {
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
TimePicker.displayName = TIME_PICKER_NAME;
const TimePickerInput = forwardRef(({ inputRef, ...props }, ref) => /* @__PURE__ */ jsx(TextField, {
	...props,
	ref: inputRef,
	wrapperRef: ref
}));
TimePickerInput.displayName = TIME_PICKER_INPUT_NAME;
//#endregion
export { TimePicker };
