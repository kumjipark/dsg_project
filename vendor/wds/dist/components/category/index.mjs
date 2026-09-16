'use client';
import { FlexBox } from "../flex-box/index.mjs";
import { ScrollArea } from "../scroll-area/index.mjs";
import { Chip } from "../chip/index.mjs";
import useResizeObserver from "../../hooks/internal/use-resize-observer.mjs";
import { categoryListItemStyle, categoryListStyle, scrollWrapperStyle, stickyButtonStyle } from "./style.mjs";
import { CATEGORY_LIST_ITEM_NAME, CATEGORY_LIST_NAME, CATEGORY_NAME, CATEGORY_PANEL_NAME } from "./constants.mjs";
import { CategoryListProvider, CategoryProvider, useCategoryContext, useCategoryListContext } from "./contexts.mjs";
import { getCategoryListItemSize } from "./helpers.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef, useCallback, useDeferredValue, useEffect, useId, useMemo, useRef, useState } from "react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { composeEventHandlers } from "@radix-ui/primitive";
import { useComposedRefs } from "@radix-ui/react-compose-refs";
import { jsx, jsxs } from "react/jsx-runtime";
import * as RovingFocusGroup$1 from "@radix-ui/react-roving-focus";
//#region src/components/category/index.tsx
const ARROW_KEYS = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
];
const Category = ({ defaultValue, value: valueProp, onValueChange, children, disableScrollMoveOnChange = false }) => {
	const [value, setValue] = useControllableState({
		prop: valueProp,
		defaultProp: defaultValue ?? "",
		onChange: onValueChange
	});
	const [panels, setPanels] = useState([]);
	const [viewportNode, setViewportNode] = useState(null);
	return /* @__PURE__ */ jsx(CategoryProvider, {
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
Category.displayName = CATEGORY_NAME;
const CategoryList = forwardRef(({ size = "medium", horizontalPadding = false, iconButton, dir, xs, sm, md, lg, xl, children, variant = "normal", verticalPadding = false, ...props }, ref) => {
	const context = useCategoryContext(CATEGORY_LIST_NAME);
	const composedRef = useComposedRefs(ref, useRef(null));
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
	}, [context.viewportNode]);
	useResizeObserver(context.viewportNode, handleResize);
	return /* @__PURE__ */ jsx(CategoryListProvider, {
		handleResize,
		variant,
		size,
		responsive: {
			xs,
			sm,
			md,
			lg,
			xl
		},
		children: /* @__PURE__ */ jsx(RovingFocusGroup$1.Root, {
			asChild: true,
			orientation: "horizontal",
			loop: true,
			dir: "ltr",
			children: /* @__PURE__ */ jsxs(FlexBox, {
				"wds-component": "category-list",
				role: "tablist",
				ref: composedRef,
				dir: dir || "ltr",
				alignItems: "center",
				...props,
				sx: [categoryListStyle({
					horizontalPadding,
					verticalPadding,
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
					children: /* @__PURE__ */ jsx(FlexBox, {
						ref: context.onViewportNodeChange,
						"data-role": "category-list-wrapper",
						sx: { position: "relative" },
						children
					})
				}), Boolean(iconButton) && /* @__PURE__ */ jsx(FlexBox, {
					sx: stickyButtonStyle,
					"data-role": "category-list-icon-button",
					as: "span",
					alignItems: "center",
					children: iconButton
				})]
			})
		})
	});
});
CategoryList.displayName = CATEGORY_LIST_NAME;
const CategoryListItem = forwardRef(({ children, value, disabled, as, variant: originVariant, xs, sm, md, lg, xl, ...props }, forwardedRef) => {
	const ref = useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, ref);
	const context = useCategoryContext(CATEGORY_LIST_ITEM_NAME);
	const { handleResize, variant, ...categoryListContext } = useCategoryListContext(CATEGORY_LIST_ITEM_NAME);
	const isDisabled = disabled;
	const sizeProps = useMemo(() => getCategoryListItemSize(categoryListContext, {
		xs,
		sm,
		md,
		lg,
		xl
	}), [
		xs,
		sm,
		md,
		lg,
		xl,
		categoryListContext
	]);
	const isActive = context.value === value;
	const isArrowKeyPressedRef = useRef(false);
	const controls = context.panels.find((v) => v === value);
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
			if (context.value === value) scrollIntoView();
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
		children: /* @__PURE__ */ jsx(Chip, {
			as: as || "button",
			type: "button",
			role: "tab",
			ref: composedRefs,
			"aria-pressed": void 0,
			"wds-component": "category-list-item",
			"aria-selected": isActive,
			"aria-disabled": disabled,
			"data-value": value,
			"aria-controls": controls !== void 0 ? `${context.id}-${controls}-panel` : void 0,
			...props,
			disabled,
			active: isActive,
			variant: originVariant ?? (isActive && variant !== "alternative" ? "solid" : "outlined"),
			sx: [categoryListItemStyle(sizeProps), props.sx],
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
			children
		})
	});
});
CategoryListItem.displayName = CATEGORY_LIST_ITEM_NAME;
const CategoryPanel = forwardRef(({ value, mountMode = "force-mount", ...props }, ref) => {
	const context = useCategoryContext(CATEGORY_PANEL_NAME);
	const [firstRendered, setFirstRendered] = useState(false);
	const deferredValue = useDeferredValue(value);
	const isActive = value === context.value;
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
		"wds-component": "category-panel",
		id: `${context.id}-${value}-panel`,
		"aria-labelledby": `${context.id}-${value}`,
		role: "tabpanel",
		hidden: !isActive
	});
});
CategoryPanel.displayName = CATEGORY_PANEL_NAME;
//#endregion
export { Category, CategoryList, CategoryListItem, CategoryPanel };
