'use client';
import { FlexBox } from "../flex-box/index.mjs";
import { Typography } from "../typography/index.mjs";
import { WithInteraction } from "../with-interaction/index.mjs";
import { hapticFeedback } from "../../utils/internal/haptic.mjs";
import { BOTTOM_NAVIGATION_ITEM_NAME, BOTTOM_NAVIGATION_NAME } from "./constants.mjs";
import { BottomNavigationProvider, useBottomNavigationContext } from "./contexts.mjs";
import { bottomNavigationItemStyle, bottomNavigationStyle } from "./style.mjs";
import { forwardRef, useEffect, useId, useState } from "react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { composeEventHandlers } from "@radix-ui/primitive";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/bottom-navigation/index.tsx
const BottomNavigation = forwardRef(({ defaultValue, value: valueProp, onValueChange, children, ...props }, ref) => {
	const [value, setValue] = useControllableState({
		prop: valueProp,
		defaultProp: defaultValue ?? "",
		onChange: onValueChange
	});
	const [scrollEnd, setScrollEnd] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			setScrollEnd(document.body.clientHeight - window.innerHeight <= window.scrollY);
		};
		handleScroll();
		window.addEventListener("resize", handleScroll);
		window.addEventListener("scroll", handleScroll);
		window.addEventListener("gesturechange", handleScroll);
		return () => {
			window.removeEventListener("resize", handleScroll);
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("gesturechange", handleScroll);
		};
	}, []);
	return /* @__PURE__ */ jsx(BottomNavigationProvider, {
		value,
		onValueChange: setValue,
		children: /* @__PURE__ */ jsx(FlexBox, {
			ref,
			alignItems: "center",
			...props,
			"wds-component": "bottom-navigation",
			"data-scroll-end": scrollEnd,
			sx: [bottomNavigationStyle, props.sx],
			children
		})
	});
});
BottomNavigation.displayName = BOTTOM_NAVIGATION_NAME;
const BottomNavigationItem = forwardRef(({ label, value, icon, as, ...props }, ref) => {
	const id = useId();
	const context = useBottomNavigationContext(BOTTOM_NAVIGATION_ITEM_NAME);
	const isActive = context.value === value;
	return /* @__PURE__ */ jsx(WithInteraction, {
		variant: "light",
		children: /* @__PURE__ */ jsxs(FlexBox, {
			as: as || "button",
			ref,
			...props,
			flex: "1 1 0",
			gap: "2px",
			alignItems: "center",
			justifyContent: "center",
			flexDirection: "column",
			"wds-component": "bottom-navigation-item",
			"aria-current": isActive ? "page" : void 0,
			"aria-labelledby": id,
			sx: [bottomNavigationItemStyle, props.sx],
			onClick: composeEventHandlers(props.onClick, () => {
				context.onValueChange(value);
				if (value !== context.value) hapticFeedback();
			}),
			children: [icon, Boolean(label) && /* @__PURE__ */ jsx(Typography, {
				variant: "caption2",
				weight: "medium",
				id,
				children: label
			})]
		})
	});
});
BottomNavigationItem.displayName = BOTTOM_NAVIGATION_ITEM_NAME;
//#endregion
export { BottomNavigation, BottomNavigationItem };
