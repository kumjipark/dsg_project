'use client';
import { FlexBox } from "../flex-box/index.mjs";
import { Popper, PopperAnchor, PopperContent } from "../popper/index.mjs";
import { IconButton } from "../icon-button/index.mjs";
import { extendDayjs } from "../../utils/internal/date.mjs";
import { DateCalendar } from "../date-calendar/index.mjs";
import { TextField, TextFieldContent } from "../text-field/index.mjs";
import { DismissableLayer } from "../dismissable-layer/index.mjs";
import { FocusScope } from "../focus-scope/index.mjs";
import { PickerActionAreaProvider } from "../picker-action-area/contexts.mjs";
import { datePopperStyle } from "./style.mjs";
import { useDateField } from "./hooks.mjs";
import { forwardRef, useCallback, useEffect, useRef } from "react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { IconCalendar } from "@wanteddev/wds-icon";
import { composeEventHandlers } from "@radix-ui/primitive";
import { useComposedRefs } from "@radix-ui/react-compose-refs";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useCallbackRef } from "@radix-ui/react-use-callback-ref";
//#region src/components/date-picker/index.tsx
extendDayjs();
const DatePicker = forwardRef(({ disabled, readOnly, value: originValue, defaultValue, onChange, defaultOpen, open: originOpen, onOpenChange, defaultView, view, views, onViewChange, contentProps, format = "YYYY.MM.DD", placeholder = format, min, max, locale = "ko-KR", timezone, onChangeComplete, inputRef: originInputRef, yearsOrder, input, actionArea, invalid: originInvalid, disableLastUnitClickClose, ...props }, forwardedRef) => {
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
	const { loop = true, trapped, trappedContent = true, disableFocusScope, onMountAutoFocus, onUnmountAutoFocus, position = "bottom-start", offset = 8, sx: contentSx, ...otherContentProps } = contentProps || {};
	const Component = input ?? DatePickerField;
	const { inputRef, inputValue, focusedSection, handleBlur, handleClick, handleFocus, handleKeyDown, handlePaste, handleValueChange, handleInputValueChange } = useDateField({
		value,
		format,
		locale,
		timezone,
		setValue,
		readOnly,
		disabled
	});
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
	const composedInputRef = useComposedRefs(originInputRef, inputRef);
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
		"data-role": "date-picker-field",
		role: "combobox",
		...props,
		type: "text",
		autoComplete: "off",
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
			"data-role": "date-picker-calendar-icon",
			variant: "icon-button",
			children: /* @__PURE__ */ jsx(IconButton, {
				"aria-label": "Toggle date picker",
				disabled: disabled || readOnly,
				onClick: () => {
					handleInputValueChange();
					setOpen((prev) => !prev);
				},
				children: /* @__PURE__ */ jsx(IconCalendar, {})
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
					if (ref.current?.contains(e.target) && e.target.closest("[data-role=\"date-picker-calendar-icon\"]")) e.preventDefault();
				},
				onDismiss: () => {
					setOpen(false);
				},
				children: /* @__PURE__ */ jsxs(FlexBox, {
					flexDirection: "column",
					"data-role": "date-picker-wrapper",
					sx: [datePopperStyle, contentSx],
					children: [/* @__PURE__ */ jsx(DateCalendar, {
						min,
						max,
						timezone,
						locale,
						onChangeComplete: handleChangeComplete,
						view,
						defaultView,
						onViewChange,
						views,
						value,
						onChange: handleValueChange,
						readOnly,
						disabled,
						yearsOrder
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
DatePicker.displayName = "DatePicker";
const DatePickerField = forwardRef(({ inputRef, ...props }, ref) => /* @__PURE__ */ jsx(TextField, {
	...props,
	ref: inputRef,
	wrapperRef: ref
}));
DatePickerField.displayName = "DatePickerField";
//#endregion
export { DatePicker };
