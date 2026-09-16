'use client';
import { WithInteraction } from "../with-interaction/index.mjs";
import { avatarButtonStyle } from "./style.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/avatar-button/index.tsx
const AvatarButton = forwardRef(({ as, children, disableInteraction = false, disabled, ...props }, ref) => {
	return /* @__PURE__ */ jsx(Box, {
		as: as || "button",
		ref,
		type: "button",
		disabled,
		"aria-disabled": disabled,
		...props,
		sx: [avatarButtonStyle, props.sx],
		children: /* @__PURE__ */ jsx(WithInteraction, {
			width: "calc(100% + 16px)",
			height: "calc(100% + 16px)",
			disabled: disabled || disableInteraction,
			children
		})
	});
});
AvatarButton.displayName = "AvatarButton";
//#endregion
export { AvatarButton };
