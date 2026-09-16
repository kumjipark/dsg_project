'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_typography_index = require("../typography/index.js");
const require_components_with_interaction_index = require("../with-interaction/index.js");
const require_utils_internal_haptic = require("../../utils/internal/haptic.js");
const require_components_bottom_navigation_constants = require("./constants.js");
const require_components_bottom_navigation_contexts = require("./contexts.js");
const require_components_bottom_navigation_style = require("./style.js");
let react = require("react");
let _radix_ui_react_use_controllable_state = require("@radix-ui/react-use-controllable-state");
let _radix_ui_primitive = require("@radix-ui/primitive");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/bottom-navigation/index.tsx
const BottomNavigation = (0, react.forwardRef)(({ defaultValue, value: valueProp, onValueChange, children, ...props }, ref) => {
	const [value, setValue] = (0, _radix_ui_react_use_controllable_state.useControllableState)({
		prop: valueProp,
		defaultProp: defaultValue ?? "",
		onChange: onValueChange
	});
	const [scrollEnd, setScrollEnd] = (0, react.useState)(false);
	(0, react.useEffect)(() => {
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
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_bottom_navigation_contexts.BottomNavigationProvider, {
		value,
		onValueChange: setValue,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
			ref,
			alignItems: "center",
			...props,
			"wds-component": "bottom-navigation",
			"data-scroll-end": scrollEnd,
			sx: [require_components_bottom_navigation_style.bottomNavigationStyle, props.sx],
			children
		})
	});
});
BottomNavigation.displayName = require_components_bottom_navigation_constants.BOTTOM_NAVIGATION_NAME;
const BottomNavigationItem = (0, react.forwardRef)(({ label, value, icon, as, ...props }, ref) => {
	const id = (0, react.useId)();
	const context = require_components_bottom_navigation_contexts.useBottomNavigationContext(require_components_bottom_navigation_constants.BOTTOM_NAVIGATION_ITEM_NAME);
	const isActive = context.value === value;
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_with_interaction_index.WithInteraction, {
		variant: "light",
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
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
			sx: [require_components_bottom_navigation_style.bottomNavigationItemStyle, props.sx],
			onClick: (0, _radix_ui_primitive.composeEventHandlers)(props.onClick, () => {
				context.onValueChange(value);
				if (value !== context.value) require_utils_internal_haptic.hapticFeedback();
			}),
			children: [icon, Boolean(label) && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
				variant: "caption2",
				weight: "medium",
				id,
				children: label
			})]
		})
	});
});
BottomNavigationItem.displayName = require_components_bottom_navigation_constants.BOTTOM_NAVIGATION_ITEM_NAME;
//#endregion
exports.BottomNavigation = BottomNavigation;
exports.BottomNavigationItem = BottomNavigationItem;
