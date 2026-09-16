'use client';
import { FlexBox } from "../flex-box/index.mjs";
import { ScrollArea } from "../scroll-area/index.mjs";
import useResizeObserver from "../../hooks/internal/use-resize-observer.mjs";
import { calculateAnimationStyle } from "../../utils/internal/animation.mjs";
import { motionDividerStyle, scrollWrapperStyle, stickyButtonStyle, tabListItemInteractionStyle, tabListItemStyle, tabListStyle, tabListWrapperStyle } from "./style.mjs";
import { TAB_LIST_ITEM_NAME, TAB_LIST_NAME, TAB_PANEL_NAME } from "./constants.mjs";
import { TabListProvider, TabProvider, useTabContext, useTabListContext } from "./contexts.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef, useCallback, useDeferredValue, useEffect, useId, useRef, useState } from "react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { composeEventHandlers } from "@radix-ui/primitive";
import { useComposedRefs } from "@radix-ui/react-compose-refs";
import { usePrevious } from "@radix-ui/react-use-previous";
import { jsx, jsxs } from "react/jsx-runtime";
import * as RovingFocusGroup$1 from "@radix-ui/react-roving-focus";
//#region src/components/tab/index.tsx
const ARROW_KEYS = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
];
const Tab = ({ defaultValue, value: valueProp, onValueChange, children, disableScrollMoveOnChange = false }) => {
	const [value, setValue] = useControllableState({
		prop: valueProp,
		defaultProp: defaultValue ?? "",
		onChange: onValueChange
	});
	const [panels, setPanels] = useState([]);
	const [viewportNode, setViewportNode] = useState(null);
	return /* @__PURE__ */ jsx(TabProvider, {
		id: useId(),
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
const TabList = forwardRef(({ size = "large", horizontalPadding = false, iconButton, resize = "hug", dir, xs, sm, md, lg, xl, children, ...props }, ref) => {
	const context = useTabContext(TAB_LIST_NAME);
	const composedRef = useComposedRefs(ref, useRef(null));
	const prevValue = usePrevious(context.value);
	const motionDividerRef = useRef(null);
	const isValueChanged = prevValue !== context.value;
	const [motionStyleProperties, setMotionStyleProperties] = useState({});
	const [isScrollableLeft, setIsScrollableLeft] = useState(false);
	const [isScrollableRight, setIsScrollableRight] = useState(false);
	const handleOnScroll = useCallback((e) => {
		const { scrollLeft, scrollWidth, clientWidth } = e.target;
		setIsScrollableLeft(scrollLeft > 0);
		if (scrollWidth - scrollLeft <= clientWidth + 1) setIsScrollableRight(false);
		else if (scrollWidth !== clientWidth) setIsScrollableRight(true);
	}, [setIsScrollableLeft, setIsScrollableRight]);
	const handleResize = useCallback(() => {
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
			...calculateAnimationStyle(nextTextElement, context.viewportNode),
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
	useResizeObserver(context.viewportNode, handleResize);
	return /* @__PURE__ */ jsx(RovingFocusGroup$1.Root, {
		asChild: true,
		orientation: "horizontal",
		loop: true,
		dir: "ltr",
		children: /* @__PURE__ */ jsxs(FlexBox, {
			"wds-component": "tab-list",
			role: "tablist",
			ref: composedRef,
			dir: dir || "ltr",
			alignItems: "center",
			...props,
			sx: [tabListStyle({
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
			children: [/* @__PURE__ */ jsx(ScrollArea, {
				"data-radix-scroll-area-wrapper": "",
				sx: scrollWrapperStyle,
				onScrollCapture: handleOnScroll,
				scrollbars: "horizontal",
				size: "small",
				children: /* @__PURE__ */ jsxs(FlexBox, {
					ref: context.onViewportNodeChange,
					"data-role": "tab-list-wrapper",
					sx: tabListWrapperStyle,
					children: [/* @__PURE__ */ jsx(Box, {
						"data-role": "tab-motion",
						style: motionStyleProperties,
						ref: motionDividerRef,
						sx: motionDividerStyle
					}), /* @__PURE__ */ jsx(TabListProvider, {
						handleResize,
						children
					})]
				})
			}), Boolean(iconButton) && /* @__PURE__ */ jsx(FlexBox, {
				sx: stickyButtonStyle,
				"data-role": "tab-list-icon-button",
				as: "span",
				alignItems: "center",
				children: iconButton
			})]
		})
	});
});
TabList.displayName = TAB_LIST_NAME;
const TabListItem = forwardRef(({ children, value, disabled, as, ...props }, forwardedRef) => {
	const ref = useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, ref);
	const context = useTabContext(TAB_LIST_ITEM_NAME);
	const { handleResize } = useTabListContext(TAB_LIST_ITEM_NAME);
	const isDisabled = disabled;
	const isActive = context.value?.toString() === value?.toString();
	const isArrowKeyPressedRef = useRef(false);
	const controls = context.panels.find((v) => v?.toString() === value?.toString());
	useResizeObserver(ref.current, handleResize);
	useEffect(() => {
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
	useEffect(() => {
		const scrollMove = () => {
			if (context.value?.toString() === value.toString()) scrollIntoView();
		};
		if (!context.disableScrollMoveOnChange) scrollMove();
	}, [
		context.value,
		value,
		context.disableScrollMoveOnChange
	]);
	return /* @__PURE__ */ jsx(RovingFocusGroup$1.Item, {
		asChild: true,
		focusable: !isDisabled,
		active: isActive,
		children: /* @__PURE__ */ jsxs(Box, {
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
			sx: [tabListItemStyle({ disabled }), props.sx],
			onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
				if (disabled) return;
				if (event.key === "Enter") event.preventDefault();
			}),
			onClick: composeEventHandlers(props.onClick, () => {
				if (disabled) return;
				context.onValueChange(value);
			}),
			onFocus: composeEventHandlers(props.onFocus, (e) => {
				if (disabled) return;
				if (isArrowKeyPressedRef.current) e.currentTarget.click();
			}),
			children: [/* @__PURE__ */ jsxs("p", {
				"data-role": "tab-list-item-text-wrapper",
				children: [/* @__PURE__ */ jsx("span", {
					"data-role": "tab-list-item-text",
					id: `${context.id}-${value}`,
					children
				}), /* @__PURE__ */ jsx("span", { "data-role": "tab-list-item-divider" })]
			}), /* @__PURE__ */ jsx(FlexBox, {
				"data-role": "tab-list-item-interaction-area",
				sx: tabListItemInteractionStyle
			})]
		})
	});
});
TabListItem.displayName = TAB_LIST_ITEM_NAME;
const TabPanel = forwardRef(({ value, mountMode = "force-mount", ...props }, ref) => {
	const context = useTabContext(TAB_PANEL_NAME);
	const [firstRendered, setFirstRendered] = useState(false);
	const deferredValue = useDeferredValue(value);
	const isActive = context.value?.toString() === value?.toString();
	useEffect(() => {
		if (!firstRendered && isActive) setFirstRendered(true);
	}, [isActive]);
	useEffect(() => {
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
	return /* @__PURE__ */ jsx(Box, {
		...props,
		ref,
		"wds-component": "tab-panel",
		id: `${context.id}-${value}-panel`,
		"aria-labelledby": `${context.id}-${value}`,
		role: "tabpanel",
		hidden: !isActive
	});
});
TabPanel.displayName = TAB_PANEL_NAME;
//#endregion
export { Tab, TabList, TabListItem, TabPanel };
