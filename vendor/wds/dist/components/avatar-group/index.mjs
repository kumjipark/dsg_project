'use client';
import { FlexBox } from "../flex-box/index.mjs";
import { avatarGroupStyle } from "./style.mjs";
import { Children, forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/avatar-group/index.tsx
const AvatarGroup = forwardRef(({ size = "small", xs, sm, md, lg, xl, children, trailingContent, ...props }, ref) => {
	const reverseChildren = Children.toArray(children).reverse();
	return /* @__PURE__ */ jsxs(FlexBox, {
		ref,
		alignItems: "center",
		...props,
		sx: [avatarGroupStyle({
			size,
			xs,
			sm,
			md,
			lg,
			xl
		}), props.sx],
		children: [/* @__PURE__ */ jsx(FlexBox, {
			flexDirection: "row-reverse",
			"data-role": "avatar-group-content",
			alignItems: "center",
			children: reverseChildren
		}), trailingContent]
	});
});
AvatarGroup.displayName = "AvatarGroup";
//#endregion
export { AvatarGroup };
