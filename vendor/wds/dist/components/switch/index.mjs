'use client';
import { WithInteraction } from "../with-interaction/index.mjs";
import { hapticFeedback } from "../../utils/internal/haptic.mjs";
import { VirtualCheckboxInput } from "../virtual-input/index.mjs";
import { switchStyle } from "./style.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef, useEffect, useRef, useState } from "react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { composeEventHandlers } from "@radix-ui/primitive";
import { useComposedRefs } from "@radix-ui/react-compose-refs";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/components/switch/index.tsx
const Switch = forwardRef(({ name, defaultChecked, disabled, checked: originChecked, onCheckedChange, size = "medium", required, xs, sm, md, lg, xl, ...props }, ref) => {
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
		bubbles: !hasConsumerStoppedPropagationRef.current
	}), /* @__PURE__ */ jsx(WithInteraction, {
		disabled,
		color: checked ? "semantic.static.white" : "semantic.label.normal",
		children: /* @__PURE__ */ jsx(Box, {
			as: "button",
			type: "button",
			role: "switch",
			"aria-checked": checked,
			"aria-disabled": disabled,
			"aria-required": required,
			disabled,
			ref: composedRefs,
			...props,
			sx: [switchStyle({
				size,
				checked,
				disabled,
				xs,
				sm,
				md,
				lg,
				xl
			}), props.sx],
			onClick: composeEventHandlers(props.onClick, (event) => {
				setChecked((prevChecked) => !prevChecked);
				hapticFeedback();
				if (isFormControl) {
					hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
					if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
				}
			}),
			children: /* @__PURE__ */ jsx("span", {
				"data-role": "switch-knob",
				"data-checked": checked,
				"data-disabled": disabled
			})
		})
	})] });
});
Switch.displayName = "Switch";
//#endregion
export { Switch };
