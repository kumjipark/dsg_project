'use client';
import { WithInteraction } from "../with-interaction/index.mjs";
import { toggleIconStyle } from "./style.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef } from "react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { composeEventHandlers } from "@radix-ui/primitive";
import { jsx } from "react/jsx-runtime";
//#region src/components/toggle-icon/index.tsx
const ToggleIcon = forwardRef(({ as, active, defaultActive, onActiveChange, activeColor = "semantic.primary.normal", size = "24px", disabled, disableInteraction, xs, sm, md, lg, xl, ...props }, ref) => {
	const [pressed, setPressed] = useControllableState({
		prop: active,
		onChange: onActiveChange,
		defaultProp: defaultActive ?? false
	});
	return /* @__PURE__ */ jsx(WithInteraction, {
		width: "calc(100% + 8px)",
		height: "calc(100% + 8px)",
		disabled: disableInteraction || disabled,
		scale: true,
		children: /* @__PURE__ */ jsx(Box, {
			as: as || "button",
			type: "button",
			role: "button",
			"aria-pressed": pressed,
			"aria-disabled": disabled,
			disabled,
			...props,
			sx: [toggleIconStyle({
				size,
				active: pressed,
				activeColor,
				xs,
				sm,
				md,
				lg,
				xl
			}), props.sx],
			ref,
			onClick: composeEventHandlers(props.onClick, () => {
				if (!disabled) setPressed(!pressed);
			})
		})
	});
});
ToggleIcon.displayName = "ToggleIcon";
//#endregion
export { ToggleIcon };
