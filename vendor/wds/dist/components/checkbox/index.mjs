'use client';
import { WithInteraction } from "../with-interaction/index.mjs";
import { useCheckboxContext } from "./contexts.mjs";
import { VirtualCheckboxInput } from "../virtual-input/index.mjs";
import { checkboxStyle } from "./style.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef, useEffect, useRef, useState } from "react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { IconCheckThick, IconLineHorizontalThick } from "@wanteddev/wds-icon";
import { composeEventHandlers } from "@radix-ui/primitive";
import { useComposedRefs } from "@radix-ui/react-compose-refs";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/components/checkbox/index.tsx
const Checkbox = forwardRef(({ name, defaultChecked, icon: originIcon, disabled, required, checked: originChecked, onCheckedChange, size = "medium", invalid = false, indeterminate, indeterminateIcon: originIndeterminateIcon, tight: originTight, bold, xs, sm, md, lg, xl, ...props }, ref) => {
	const { tight: contextTight } = useCheckboxContext() || {};
	const tight = originTight ?? contextTight ?? false;
	const icon = originIcon || /* @__PURE__ */ jsx(IconCheckThick, {});
	const indeterminateIcon = originIndeterminateIcon || /* @__PURE__ */ jsx(IconLineHorizontalThick, {});
	const [button, setButton] = useState(null);
	const composedRefs = useComposedRefs(ref, (node) => setButton(node));
	const hasConsumerStoppedPropagationRef = useRef(false);
	const isFormControl = button ? Boolean(button.closest("form")) : true;
	const [checked, setChecked] = useControllableState({
		prop: originChecked,
		defaultProp: defaultChecked ?? false,
		onChange: onCheckedChange
	});
	const initialCheckedStateRef = useRef(checked);
	useEffect(() => {
		const form = button?.form;
		if (form) {
			const reset = () => setChecked(initialCheckedStateRef.current);
			form.addEventListener("reset", reset);
			return () => form.removeEventListener("reset", reset);
		}
	}, [button, setChecked]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [isFormControl && /* @__PURE__ */ jsx(VirtualCheckboxInput, {
		name,
		value: checked ? "on" : "off",
		checked,
		defaultChecked,
		bubbles: !hasConsumerStoppedPropagationRef.current
	}), /* @__PURE__ */ jsx(WithInteraction, {
		width: "calc(100% + 8px)",
		height: "calc(100% + 8px)",
		disabled,
		scale: true,
		children: /* @__PURE__ */ jsx(Box, {
			as: "button",
			type: "button",
			role: "checkbox",
			"aria-checked": indeterminate ? "mixed" : checked,
			"aria-disabled": disabled,
			"aria-invalid": invalid,
			disabled,
			"aria-required": required,
			ref: composedRefs,
			"data-tight": tight,
			"wds-component": "checkbox",
			...props,
			sx: [checkboxStyle({
				size,
				checked,
				disabled,
				indeterminate,
				bold,
				tight,
				xs,
				sm,
				md,
				lg,
				xl
			}), props.sx],
			onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
				if (event.key === "Enter") event.preventDefault();
			}),
			onClick: composeEventHandlers(props.onClick, (event) => {
				setChecked((prevChecked) => !prevChecked);
				if (isFormControl) {
					hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
					if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
				}
			}),
			children: /* @__PURE__ */ jsx("span", {
				"data-role": "checkbox-icon-wrapper",
				children: indeterminate ? indeterminateIcon : icon
			})
		})
	})] });
});
Checkbox.displayName = "Checkbox";
//#endregion
export { Checkbox };
