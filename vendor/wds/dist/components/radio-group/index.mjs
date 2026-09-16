'use client';
import { createEmptyResponsiveStyle } from "../../utils/internal/responsive-props.mjs";
import { Radio } from "../radio/index.mjs";
import { RADIO_GROUP_NAME, RADIO_ITEM_NAME } from "./constants.mjs";
import { RadioGroupProvider, useRadioGroupContext } from "./contexts.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef, useEffect, useRef, useState } from "react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { composeEventHandlers } from "@radix-ui/primitive";
import { useComposedRefs } from "@radix-ui/react-compose-refs";
import { jsx } from "react/jsx-runtime";
import * as RovingFocusGroup$1 from "@radix-ui/react-roving-focus";
//#region src/components/radio-group/index.tsx
const ARROW_KEYS = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
];
const RadioGroup = forwardRef((props, ref) => {
	const { name, defaultValue, value: valueProp, required = false, disabled = false, orientation, dir, loop = true, onValueChange, ...groupProps } = props;
	const [value, setValue] = useControllableState({
		prop: valueProp,
		defaultProp: defaultValue ?? "",
		onChange: onValueChange
	});
	const [node, setNode] = useState(null);
	const composedRefs = useComposedRefs(ref, setNode);
	const initialValueStateRef = useRef(value);
	useEffect(() => {
		const form = node?.closest("form");
		if (form) {
			const reset = () => setValue(initialValueStateRef.current);
			form.addEventListener("reset", reset);
			return () => form.removeEventListener("reset", reset);
		}
	}, [node, setValue]);
	return /* @__PURE__ */ jsx(RadioGroupProvider, {
		name,
		required,
		disabled,
		value,
		onValueChange: setValue,
		children: /* @__PURE__ */ jsx(RovingFocusGroup$1.Root, {
			asChild: true,
			orientation,
			dir: dir || "ltr",
			loop,
			children: /* @__PURE__ */ jsx(Box, {
				role: "radiogroup",
				"aria-required": required,
				"aria-orientation": orientation,
				"data-disabled": disabled ? "" : void 0,
				dir: dir || "ltr",
				...groupProps,
				ref: composedRefs
			})
		})
	});
});
RadioGroup.displayName = RADIO_GROUP_NAME;
const RadioGroupItem = forwardRef(({ disabled, ...props }, forwardedRef) => {
	const context = useRadioGroupContext(RADIO_ITEM_NAME);
	const isDisabled = context.disabled || disabled;
	const ref = useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, ref);
	const checked = context.value === props.value;
	const isArrowKeyPressedRef = useRef(false);
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (ARROW_KEYS.includes(event.key)) isArrowKeyPressedRef.current = true;
		};
		const handleKeyUp = () => isArrowKeyPressedRef.current = false;
		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("keyup", handleKeyUp);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.removeEventListener("keyup", handleKeyUp);
		};
	}, []);
	return /* @__PURE__ */ jsx(RovingFocusGroup$1.Item, {
		asChild: true,
		focusable: !isDisabled,
		active: checked,
		children: /* @__PURE__ */ jsx(Radio, {
			disabled: isDisabled,
			required: context.required,
			checked,
			name: context.name,
			...props,
			sx: [props.sx, createEmptyResponsiveStyle(props)],
			ref: composedRefs,
			onCheck: () => context.onValueChange(props.value),
			onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
				if (event.key === "Enter") event.preventDefault();
			}),
			onFocus: composeEventHandlers(props.onFocus, () => {
				if (isArrowKeyPressedRef.current) ref.current?.click();
			})
		})
	});
});
RadioGroupItem.displayName = RADIO_ITEM_NAME;
//#endregion
export { RadioGroup, RadioGroupItem };
