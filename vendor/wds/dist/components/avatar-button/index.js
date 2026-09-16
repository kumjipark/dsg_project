'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_with_interaction_index = require("../with-interaction/index.js");
const require_components_avatar_button_style = require("./style.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/avatar-button/index.tsx
const AvatarButton = (0, react.forwardRef)(({ as, children, disableInteraction = false, disabled, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
		as: as || "button",
		ref,
		type: "button",
		disabled,
		"aria-disabled": disabled,
		...props,
		sx: [require_components_avatar_button_style.avatarButtonStyle, props.sx],
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_with_interaction_index.WithInteraction, {
			width: "calc(100% + 16px)",
			height: "calc(100% + 16px)",
			disabled: disabled || disableInteraction,
			children
		})
	});
});
AvatarButton.displayName = "AvatarButton";
//#endregion
exports.AvatarButton = AvatarButton;
