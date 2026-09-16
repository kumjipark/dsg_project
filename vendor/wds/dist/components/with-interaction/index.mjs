'use client';
import { getWrapperStyle, interactionStyle } from "./style.mjs";
import { Box } from "@wanteddev/wds-engine";
import { Children, cloneElement, forwardRef, isValidElement } from "react";
import { composeRefs } from "@radix-ui/react-compose-refs";
import { Slot } from "@radix-ui/react-slot";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/components/with-interaction/index.tsx
const WithInteraction = forwardRef(({ variant = "normal", children, scale, disabled, color, width, height, sx, ...props }, forwardedRef) => {
	if (isValidElement(children)) {
		const childrenProps = { ...children.props };
		const ref = forwardedRef ? composeRefs(forwardedRef, children.ref ?? childrenProps.ref) : void 0;
		childrenProps.children = /* @__PURE__ */ jsxs(Fragment, { children: [childrenProps.children, /* @__PURE__ */ jsx(Interaction, {
			color,
			height,
			width
		})] });
		return /* @__PURE__ */ jsx(Box, {
			as: Slot,
			...props,
			sx: [
				getWrapperStyle({
					disabled,
					variant,
					scale
				}),
				sx,
				childrenProps.sx
			],
			children: cloneElement(children, {
				...childrenProps,
				sx: void 0,
				ref,
				children: childrenProps.children
			})
		});
	}
	return Children.count(children) > 1 ? Children.only(null) : null;
});
WithInteraction.displayName = "WithInteraction";
const Interaction = ({ color = "semantic.label.normal", width = "100%", height = "100%" }) => {
	return /* @__PURE__ */ jsx(Box, {
		"wds-component": "with-interaction",
		role: "presentation",
		sx: interactionStyle({
			color,
			width,
			height
		})
	});
};
//#endregion
export { WithInteraction };
