'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_avatar_group_style = require("./style.js");
let react = require("react");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/avatar-group/index.tsx
const AvatarGroup = (0, react.forwardRef)(({ size = "small", xs, sm, md, lg, xl, children, trailingContent, ...props }, ref) => {
	const reverseChildren = react.Children.toArray(children).reverse();
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
		ref,
		alignItems: "center",
		...props,
		sx: [require_components_avatar_group_style.avatarGroupStyle({
			size,
			xs,
			sm,
			md,
			lg,
			xl
		}), props.sx],
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
			flexDirection: "row-reverse",
			"data-role": "avatar-group-content",
			alignItems: "center",
			children: reverseChildren
		}), trailingContent]
	});
});
AvatarGroup.displayName = "AvatarGroup";
//#endregion
exports.AvatarGroup = AvatarGroup;
