'use client';
import { WithInteraction } from "../with-interaction/index.mjs";
import { useRadioContext } from "./contexts.mjs";
import { VirtualCheckboxInput } from "../virtual-input/index.mjs";
import { radioStyle } from "./style.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef, useRef, useState } from "react";
import { IconDot } from "@wanteddev/wds-icon";
import { composeEventHandlers } from "@radix-ui/primitive";
import { useComposedRefs } from "@radix-ui/react-compose-refs";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/components/radio/index.tsx
const Radio = forwardRef(({ name, checked = false, disabled, required, value, invalid = false, onCheck, size = "medium", tight: originTight, xs, sm, md, lg, xl, ...props }, ref) => {
	const { tight: contextTight } = useRadioContext() || {};
	const tight = originTight ?? contextTight ?? false;
	const [button, setButton] = useState(null);
	const composedRefs = useComposedRefs(ref, (node) => setButton(node));
	const hasConsumerStoppedPropagationRef = useRef(false);
	const isFormControl = button ? Boolean(button.closest("form")) : true;
	return /* @__PURE__ */ jsxs(Fragment, { children: [isFormControl && /* @__PURE__ */ jsx(VirtualCheckboxInput, {
		value,
		checked,
		type: "radio",
		bubbles: !hasConsumerStoppedPropagationRef.current,
		name,
		required,
		disabled
	}), /* @__PURE__ */ jsx(WithInteraction, {
		width: "calc(100% + 8px)",
		height: "calc(100% + 8px)",
		disabled,
		children: /* @__PURE__ */ jsx(Box, {
			as: "button",
			type: "button",
			role: "radio",
			"aria-checked": checked,
			"aria-disabled": disabled,
			"aria-required": required,
			"aria-invalid": invalid,
			disabled,
			value,
			ref: composedRefs,
			"data-tight": tight,
			"wds-component": "radio",
			...props,
			sx: [radioStyle({
				size,
				tight,
				checked,
				disabled,
				xs,
				sm,
				md,
				lg,
				xl
			}), props.sx],
			onClick: composeEventHandlers(props.onClick, (event) => {
				if (!checked) onCheck?.();
				if (isFormControl) {
					hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
					if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
				}
			}),
			children: /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(IconDot, {}) })
		})
	})] });
});
Radio.displayName = "Radio";
//#endregion
export { Radio };
