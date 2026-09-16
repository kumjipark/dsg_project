'use client';
import { Box } from "@wanteddev/wds-engine";
import { forwardRef, useEffect, useRef } from "react";
import { useComposedRefs } from "@radix-ui/react-compose-refs";
import { usePrevious } from "@radix-ui/react-use-previous";
import { jsx } from "react/jsx-runtime";
//#region src/components/virtual-input/index.tsx
const VirtualCheckboxInput = forwardRef(({ checked, bubbles, ...props }, forwardedRef) => {
	const ref = useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, ref);
	const prevChecked = usePrevious(checked);
	useEffect(() => {
		const input = ref.current;
		const inputProto = window.HTMLInputElement.prototype;
		const setChecked = Object.getOwnPropertyDescriptor(inputProto, "checked").set;
		if (prevChecked !== checked && setChecked) {
			const event = new Event("click", { bubbles });
			setChecked.call(input, checked);
			input.dispatchEvent(event);
		}
	}, [
		prevChecked,
		checked,
		bubbles
	]);
	return /* @__PURE__ */ jsx(Box, {
		as: "input",
		type: "radio",
		"aria-hidden": true,
		defaultChecked: checked,
		...props,
		tabIndex: -1,
		ref: composedRefs,
		sx: [{
			transform: "translateX(-100%)",
			position: "absolute",
			pointerEvents: "none",
			display: "none",
			opacity: 0,
			margin: 0
		}, props.sx]
	});
});
VirtualCheckboxInput.displayName = "VirtualCheckboxInput";
const VirtualValueInput = forwardRef(({ value, bubbles, ...props }, forwardedRef) => {
	const ref = useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, ref);
	const prevValue = useRef(value);
	useEffect(() => {
		const input = ref.current;
		const inputProto = window.HTMLInputElement.prototype;
		const setValue = Object.getOwnPropertyDescriptor(inputProto, "value").set;
		if (prevValue.current !== value && setValue) {
			const event = new Event("input", { bubbles: true });
			setValue.call(input, value);
			input.dispatchEvent(event);
		}
		prevValue.current = value;
	}, [value, bubbles]);
	return /* @__PURE__ */ jsx(Box, {
		as: "input",
		type: "text",
		"aria-hidden": true,
		...props,
		tabIndex: -1,
		ref: composedRefs,
		sx: [{
			transform: "translateX(-100%)",
			position: "absolute",
			pointerEvents: "none",
			display: "none",
			opacity: 0,
			margin: 0
		}, props.sx]
	});
});
VirtualValueInput.displayName = "VirtualValueInput";
//#endregion
export { VirtualCheckboxInput, VirtualValueInput };
