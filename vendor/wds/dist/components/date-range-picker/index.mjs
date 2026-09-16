'use client';
import { splitResponsiveProps } from "../../utils/internal/responsive-props.mjs";
import { FlexBox } from "../flex-box/index.mjs";
import { Popper, PopperAnchor, PopperContent } from "../popper/index.mjs";
import { IconButton } from "../icon-button/index.mjs";
import { extendDayjs } from "../../utils/internal/date.mjs";
import { TextField, TextFieldContent } from "../text-field/index.mjs";
import { DismissableLayer } from "../dismissable-layer/index.mjs";
import { FocusScope } from "../focus-scope/index.mjs";
import { PickerActionAreaProvider } from "../picker-action-area/contexts.mjs";
import { DEFAULT_RANGE_VALUE } from "../date-range-calendar/constants.mjs";
import { DateRangeCalendar } from "../date-range-calendar/index.mjs";
import { isInvalidDateRange } from "./helpers.mjs";
import { dateRangePopperStyle } from "./style.mjs";
import { useDateRangeField } from "./hooks.mjs";
import { forwardRef, useCallback, useEffect, useMemo, useRef } from "react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { IconCalendar } from "@wanteddev/wds-icon";
import { composeEventHandlers } from "@radix-ui/primitive";
import { useComposedRefs } from "@radix-ui/react-compose-refs";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useCallbackRef } from "@radix-ui/react-use-callback-ref";
//#region src/components/date-range-picker/index.tsx
extendDayjs();
const calendarKeys = ["calendars"];
const DateRangePicker = forwardRef(({ disabled, readOnly, value: originValue, defaultValue, onChange, defaultOpen, open: originOpen, onOpenChange, view, contentProps, format = "YYYY.MM.DD", placeholder, min, max, locale = "ko-KR", timezone, onChangeComplete, inputRef: originInputRef, yearsOrder, input, actionArea, invalid: originInvalid, disableLastDateClickClose, calendars, xs, sm, md, lg, xl, ...props }, forwardedRef) => {
	const xsSplit = useMemo(() => splitResponsiveProps(xs, calendarKeys), [xs]);
	const smSplit = useMemo(() => splitResponsiveProps(sm, calendarKeys), [sm]);
	const mdSplit = useMemo(() => splitResponsiveProps(md, calendarKeys), [md]);
	const lgSplit = useMemo(() => splitResponsiveProps(lg, calendarKeys), [lg]);
	const xlSplit = useMemo(() => splitResponsiveProps(xl, calendarKeys), [xl]);
	const ref = useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, ref);
	const [open, setOpen] = useControllableState({
		prop: originOpen,
		defaultProp: defaultOpen ?? false,
		onChange: onOpenChange
	});
	const [value, setValue] = useControllableState({
		prop: originValue,
		defaultProp: defaultValue ?? DEFAULT_RANGE_VALUE,
		onChange
	});
	const initialValue = useRef(value);
	const { loop = true, trapped, trappedContent = true, disableFocusScope, onMountAutoFocus, onUnmountAutoFocus, position = "bottom-start", offset = 8, sx: contentSx, ...otherContentProps } = contentProps || {};
	const Component = input ?? DateRangePickerField;
	const { inputRef, inputValue, focusedSection, handlePaste, handleFocus, handleClick, handleBlur, handleKeyDown, handleValueChange, handleInputValueChange } = useDateRangeField({
		value,
		format,
		locale,
		timezone,
		setValue,
		readOnly,
		disabled
	});
	const invalid = originInvalid || !onChange && isInvalidDateRange(value);
	const handleChangeCompleteCallback = useCallbackRef(onChangeComplete);
	const handleChangeComplete = useCallback((v) => {
		handleValueChange(v);
		handleChangeCompleteCallback(v);
		if (!disableLastDateClickClose) setOpen(false);
	}, [
		handleValueChange,
		handleChangeCompleteCallback,
		disableLastDateClickClose,
		setOpen
	]);
	const handleChangeCompleteActionArea = useCallback((v) => {
		handleChangeComplete(v);
		setOpen(false);
	}, [handleChangeComplete, setOpen]);
	const composedInputRef = useComposedRefs(originInputRef, inputRef);
	const resolvedPlaceholder = placeholder ?? `${format} - ${format}`;
	useEffect(() => {
		if (open) initialValue.current = value;
		else handleBlur();
	}, [open]);
	return /* @__PURE__ */ jsxs(Popper, { children: [/* @__PURE__ */ jsx(PopperAnchor, {
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
		onFocus: composeEventHandlers(props.onFocus, handleFocus),
		onClick: composeEventHandlers(props.onClick, handleClick),
		onKeyDown: composeEventHandlers(props.onKeyDown, handleKeyDown),
		onBlur: composeEventHandlers(props.onBlur, handleBlur),
		onPaste: composeEventHandlers(props.onPaste, handlePaste),
		value: inputValue,
		inputRef: composedInputRef,
		trailingContent: /* @__PURE__ */ jsxs(Fragment, { children: [props.trailingContent, /* @__PURE__ */ jsx(TextFieldContent, {
			"data-role": "date-range-picker-calendar-icon",
			variant: "icon-button",
			children: /* @__PURE__ */ jsx(IconButton, {
				"aria-label": "Toggle date range picker",
				disabled: disabled || readOnly,
				onClick: (e) => {
					e.stopPropagation();
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
					if (ref.current?.contains(e.target) && e.target.closest("[data-role=\"date-range-picker-calendar-icon\"]")) e.preventDefault();
				},
				onDismiss: () => {
					setOpen(false);
				},
				children: /* @__PURE__ */ jsxs(FlexBox, {
					flexDirection: "column",
					"data-role": "date-range-picker-wrapper",
					sx: [dateRangePopperStyle, contentSx],
					children: [/* @__PURE__ */ jsx(DateRangeCalendar, {
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
					}), /* @__PURE__ */ jsx(PickerActionAreaProvider, {
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
const DateRangePickerField = forwardRef(({ inputRef, ...props }, ref) => /* @__PURE__ */ jsx(TextField, {
	...props,
	ref: inputRef,
	wrapperRef: ref
}));
DateRangePickerField.displayName = "DateRangePickerField";
//#endregion
export { DateRangePicker };
