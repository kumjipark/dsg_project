'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const require_runtime = require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_scroll_area_index = require("../scroll-area/index.js");
const require_hooks_internal_use_resize_observer = require("../../hooks/internal/use-resize-observer.js");
const require_utils_internal_animation = require("../../utils/internal/animation.js");
const require_components_tab_style = require("./style.js");
const require_components_tab_constants = require("./constants.js");
const require_components_tab_contexts = require("./contexts.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let _radix_ui_react_use_controllable_state = require("@radix-ui/react-use-controllable-state");
let _radix_ui_primitive = require("@radix-ui/primitive");
let _radix_ui_react_compose_refs = require("@radix-ui/react-compose-refs");
let _radix_ui_react_use_previous = require("@radix-ui/react-use-previous");
let react_jsx_runtime = require("react/jsx-runtime");
let _radix_ui_react_roving_focus = require("@radix-ui/react-roving-focus");
_radix_ui_react_roving_focus = require_runtime.__toESM(_radix_ui_react_roving_focus);
//#region src/components/tab/index.tsx
const ARROW_KEYS = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
];
const Tab = ({ defaultValue, value: valueProp, onValueChange, children, disableScrollMoveOnChange = false }) => {
	const [value, setValue] = (0, _radix_ui_react_use_controllable_state.useControllableState)({
		prop: valueProp,
		defaultProp: defaultValue ?? "",
		onChange: onValueChange
	});
	const [panels, setPanels] = (0, react.useState)([]);
	const [viewportNode, setViewportNode] = (0, react.useState)(null);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_tab_contexts.TabProvider, {
		id: (0, react.useId)(),
		value,
		onValueChange: setValue,
		panels,
		onPanelsChange: setPanels,
		disableScrollMoveOnChange,
		viewportNode,
		onViewportNodeChange: setViewportNode,
		children
	});
};
Tab.displayName = "Tab";
const TabList = (0, react.forwardRef)(({ size = "large", horizontalPadding = false, iconButton, resize = "hug", dir, xs, sm, md, lg, xl, children, ...props }, ref) => {
	const context = require_components_tab_contexts.useTabContext(require_components_tab_constants.TAB_LIST_NAME);
	const composedRef = (0, _radix_ui_react_compose_refs.useComposedRefs)(ref, (0, react.useRef)(null));
	const prevValue = (0, _radix_ui_react_use_previous.usePrevious)(context.value);
	const motionDividerRef = (0, react.useRef)(null);
	const isValueChanged = prevValue !== context.value;
	const [motionStyleProperties, setMotionStyleProperties] = (0, react.useState)({});
	const [isScrollableLeft, setIsScrollableLeft] = (0, react.useState)(false);
	const [isScrollableRight, setIsScrollableRight] = (0, react.useState)(false);
	const handleOnScroll = (0, react.useCallback)((e) => {
		const { scrollLeft, scrollWidth, clientWidth } = e.target;
		setIsScrollableLeft(scrollLeft > 0);
		if (scrollWidth - scrollLeft <= clientWidth + 1) setIsScrollableRight(false);
		else if (scrollWidth !== clientWidth) setIsScrollableRight(true);
	}, [setIsScrollableLeft, setIsScrollableRight]);
	const handleResize = (0, react.useCallback)(() => {
		const target = context.viewportNode?.parentElement?.parentElement;
		if (!target || !context.viewportNode) return;
		const { scrollLeft, scrollWidth, clientWidth } = target;
		setIsScrollableLeft(scrollLeft > 0);
		if (scrollWidth - scrollLeft <= clientWidth + 1) setIsScrollableRight(false);
		else if (scrollWidth !== clientWidth) setIsScrollableRight(true);
		const motionElement = motionDividerRef.current;
		const currentElement = target.querySelector(`[wds-component="tab-list-item"][data-value="${prevValue}"]`);
		const nextElement = target.querySelector(`[wds-component="tab-list-item"][data-value="${context.value}"]`);
		const nextTextElement = nextElement?.querySelector("[data-role=\"tab-list-item-text\"]");
		if (!motionElement || !nextElement || !nextTextElement) {
			setMotionStyleProperties((prev) => ({
				...prev,
				display: "none"
			}));
			return;
		}
		setMotionStyleProperties({
			...require_utils_internal_animation.calculateAnimationStyle(nextTextElement, context.viewportNode),
			display: "block",
			height: "2px",
			bottom: "0px",
			top: "initial",
			...isValueChanged ? { transition: "inset 300ms ease, width 300ms ease" } : {}
		});
		nextElement.removeAttribute("data-ssr-motion");
		requestAnimationFrame(() => {
			currentElement?.removeAttribute("data-ssr-motion");
		});
	}, [
		context.value,
		context.viewportNode,
		isValueChanged,
		prevValue
	]);
	require_hooks_internal_use_resize_observer.default(context.viewportNode, handleResize);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_radix_ui_react_roving_focus.Root, {
		asChild: true,
		orientation: "horizontal",
		loop: true,
		dir: "ltr",
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
			"wds-component": "tab-list",
			role: "tablist",
			ref: composedRef,
			dir: dir || "ltr",
			alignItems: "center",
			...props,
			sx: [require_components_tab_style.tabListStyle({
				resize,
				horizontalPadding,
				size,
				xs,
				sm,
				md,
				lg,
				xl,
				isScrollableLeft,
				isScrollableRight
			}), props.sx],
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_scroll_area_index.ScrollArea, {
				"data-radix-scroll-area-wrapper": "",
				sx: require_components_tab_style.scrollWrapperStyle,
				onScrollCapture: handleOnScroll,
				scrollbars: "horizontal",
				size: "small",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
					ref: context.onViewportNodeChange,
					"data-role": "tab-list-wrapper",
					sx: require_components_tab_style.tabListWrapperStyle,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
						"data-role": "tab-motion",
						style: motionStyleProperties,
						ref: motionDividerRef,
						sx: require_components_tab_style.motionDividerStyle
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_tab_contexts.TabListProvider, {
						handleResize,
						children
					})]
				})
			}), Boolean(iconButton) && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
				sx: require_components_tab_style.stickyButtonStyle,
				"data-role": "tab-list-icon-button",
				as: "span",
				alignItems: "center",
				children: iconButton
			})]
		})
	});
});
TabList.displayName = require_components_tab_constants.TAB_LIST_NAME;
const TabListItem = (0, react.forwardRef)(({ children, value, disabled, as, ...props }, forwardedRef) => {
	const ref = (0, react.useRef)(null);
	const composedRefs = (0, _radix_ui_react_compose_refs.useComposedRefs)(forwardedRef, ref);
	const context = require_components_tab_contexts.useTabContext(require_components_tab_constants.TAB_LIST_ITEM_NAME);
	const { handleResize } = require_components_tab_contexts.useTabListContext(require_components_tab_constants.TAB_LIST_ITEM_NAME);
	const isDisabled = disabled;
	const isActive = context.value?.toString() === value?.toString();
	const isArrowKeyPressedRef = (0, react.useRef)(false);
	const controls = context.panels.find((v) => v?.toString() === value?.toString());
	require_hooks_internal_use_resize_observer.default(ref.current, handleResize);
	(0, react.useEffect)(() => {
		const handleKeyDown = (event) => {
			if (ARROW_KEYS.includes(event.key)) isArrowKeyPressedRef.current = true;
		};
		const handleKeyUp = () => isArrowKeyPressedRef.current = false;
		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("keyup", handleKeyUp);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.removeEventListener("keyup", handleKeyUp);
		};
	}, []);
	const scrollIntoView = () => {
		const parent = context.viewportNode?.parentElement?.parentElement;
		const child = ref.current;
		if (!parent || !child) return;
		const 기준점 = parent.clientWidth / 2;
		const childOffsetLeft = child.offsetLeft + child.clientWidth;
		if (childOffsetLeft < 기준점) parent.scrollLeft = 0;
		else parent.scrollLeft = childOffsetLeft - 기준점;
	};
	(0, react.useEffect)(() => {
		const scrollMove = () => {
			if (context.value?.toString() === value.toString()) scrollIntoView();
		};
		if (!context.disableScrollMoveOnChange) scrollMove();
	}, [
		context.value,
		value,
		context.disableScrollMoveOnChange
	]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_radix_ui_react_roving_focus.Item, {
		asChild: true,
		focusable: !isDisabled,
		active: isActive,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_wanteddev_wds_engine.Box, {
			as: as || "div",
			role: "tab",
			ref: composedRefs,
			...props,
			"wds-component": "tab-list-item",
			disabled,
			"aria-selected": isActive,
			"aria-labelledby": `${context.id}-${value}`,
			"aria-disabled": disabled,
			"data-value": value,
			"data-ssr-motion": isActive,
			"aria-controls": controls !== void 0 ? `${context.id}-${controls}-panel` : void 0,
			sx: [require_components_tab_style.tabListItemStyle({ disabled }), props.sx],
			onKeyDown: (0, _radix_ui_primitive.composeEventHandlers)(props.onKeyDown, (event) => {
				if (disabled) return;
				if (event.key === "Enter") event.preventDefault();
			}),
			onClick: (0, _radix_ui_primitive.composeEventHandlers)(props.onClick, () => {
				if (disabled) return;
				context.onValueChange(value);
			}),
			onFocus: (0, _radix_ui_primitive.composeEventHandlers)(props.onFocus, (e) => {
				if (disabled) return;
				if (isArrowKeyPressedRef.current) e.currentTarget.click();
			}),
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
				"data-role": "tab-list-item-text-wrapper",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					"data-role": "tab-list-item-text",
					id: `${context.id}-${value}`,
					children
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { "data-role": "tab-list-item-divider" })]
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
				"data-role": "tab-list-item-interaction-area",
				sx: require_components_tab_style.tabListItemInteractionStyle
			})]
		})
	});
});
TabListItem.displayName = require_components_tab_constants.TAB_LIST_ITEM_NAME;
const TabPanel = (0, react.forwardRef)(({ value, mountMode = "force-mount", ...props }, ref) => {
	const context = require_components_tab_contexts.useTabContext(require_components_tab_constants.TAB_PANEL_NAME);
	const [firstRendered, setFirstRendered] = (0, react.useState)(false);
	const deferredValue = (0, react.useDeferredValue)(value);
	const isActive = context.value?.toString() === value?.toString();
	(0, react.useEffect)(() => {
		if (!firstRendered && isActive) setFirstRendered(true);
	}, [isActive]);
	(0, react.useEffect)(() => {
		context.onPanelsChange((prev) => [...prev.filter((v) => v !== deferredValue), value]);
		return () => {
			context.onPanelsChange((prev) => [...prev.filter((v) => v !== value)]);
		};
	}, [value]);
	if (!isActive) switch (mountMode) {
		case "always": break;
		case "only-active": return null;
		case "force-mount":
			if (firstRendered) break;
			return null;
	}
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
		...props,
		ref,
		"wds-component": "tab-panel",
		id: `${context.id}-${value}-panel`,
		"aria-labelledby": `${context.id}-${value}`,
		role: "tabpanel",
		hidden: !isActive
	});
});
TabPanel.displayName = require_components_tab_constants.TAB_PANEL_NAME;
//#endregion
exports.Tab = Tab;
exports.TabList = TabList;
exports.TabListItem = TabListItem;
exports.TabPanel = TabPanel;
