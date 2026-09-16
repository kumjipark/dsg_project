'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const require_runtime = require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_scroll_area_index = require("../scroll-area/index.js");
const require_components_chip_index = require("../chip/index.js");
const require_hooks_internal_use_resize_observer = require("../../hooks/internal/use-resize-observer.js");
const require_components_category_style = require("./style.js");
const require_components_category_constants = require("./constants.js");
const require_components_category_contexts = require("./contexts.js");
const require_components_category_helpers = require("./helpers.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let _radix_ui_react_use_controllable_state = require("@radix-ui/react-use-controllable-state");
let _radix_ui_primitive = require("@radix-ui/primitive");
let _radix_ui_react_compose_refs = require("@radix-ui/react-compose-refs");
let react_jsx_runtime = require("react/jsx-runtime");
let _radix_ui_react_roving_focus = require("@radix-ui/react-roving-focus");
_radix_ui_react_roving_focus = require_runtime.__toESM(_radix_ui_react_roving_focus);
//#region src/components/category/index.tsx
const ARROW_KEYS = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
];
const Category = ({ defaultValue, value: valueProp, onValueChange, children, disableScrollMoveOnChange = false }) => {
	const [value, setValue] = (0, _radix_ui_react_use_controllable_state.useControllableState)({
		prop: valueProp,
		defaultProp: defaultValue ?? "",
		onChange: onValueChange
	});
	const [panels, setPanels] = (0, react.useState)([]);
	const [viewportNode, setViewportNode] = (0, react.useState)(null);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_category_contexts.CategoryProvider, {
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
Category.displayName = require_components_category_constants.CATEGORY_NAME;
const CategoryList = (0, react.forwardRef)(({ size = "medium", horizontalPadding = false, iconButton, dir, xs, sm, md, lg, xl, children, variant = "normal", verticalPadding = false, ...props }, ref) => {
	const context = require_components_category_contexts.useCategoryContext(require_components_category_constants.CATEGORY_LIST_NAME);
	const composedRef = (0, _radix_ui_react_compose_refs.useComposedRefs)(ref, (0, react.useRef)(null));
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
	}, [context.viewportNode]);
	require_hooks_internal_use_resize_observer.default(context.viewportNode, handleResize);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_category_contexts.CategoryListProvider, {
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
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_radix_ui_react_roving_focus.Root, {
			asChild: true,
			orientation: "horizontal",
			loop: true,
			dir: "ltr",
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
				"wds-component": "category-list",
				role: "tablist",
				ref: composedRef,
				dir: dir || "ltr",
				alignItems: "center",
				...props,
				sx: [require_components_category_style.categoryListStyle({
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
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_scroll_area_index.ScrollArea, {
					"data-radix-scroll-area-wrapper": "",
					sx: require_components_category_style.scrollWrapperStyle,
					onScrollCapture: handleOnScroll,
					scrollbars: "horizontal",
					size: "small",
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
						ref: context.onViewportNodeChange,
						"data-role": "category-list-wrapper",
						sx: { position: "relative" },
						children
					})
				}), Boolean(iconButton) && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
					sx: require_components_category_style.stickyButtonStyle,
					"data-role": "category-list-icon-button",
					as: "span",
					alignItems: "center",
					children: iconButton
				})]
			})
		})
	});
});
CategoryList.displayName = require_components_category_constants.CATEGORY_LIST_NAME;
const CategoryListItem = (0, react.forwardRef)(({ children, value, disabled, as, variant: originVariant, xs, sm, md, lg, xl, ...props }, forwardedRef) => {
	const ref = (0, react.useRef)(null);
	const composedRefs = (0, _radix_ui_react_compose_refs.useComposedRefs)(forwardedRef, ref);
	const context = require_components_category_contexts.useCategoryContext(require_components_category_constants.CATEGORY_LIST_ITEM_NAME);
	const { handleResize, variant, ...categoryListContext } = require_components_category_contexts.useCategoryListContext(require_components_category_constants.CATEGORY_LIST_ITEM_NAME);
	const isDisabled = disabled;
	const sizeProps = (0, react.useMemo)(() => require_components_category_helpers.getCategoryListItemSize(categoryListContext, {
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
	const isArrowKeyPressedRef = (0, react.useRef)(false);
	const controls = context.panels.find((v) => v === value);
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
			if (context.value === value) scrollIntoView();
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
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_chip_index.Chip, {
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
			sx: [require_components_category_style.categoryListItemStyle(sizeProps), props.sx],
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
			children
		})
	});
});
CategoryListItem.displayName = require_components_category_constants.CATEGORY_LIST_ITEM_NAME;
const CategoryPanel = (0, react.forwardRef)(({ value, mountMode = "force-mount", ...props }, ref) => {
	const context = require_components_category_contexts.useCategoryContext(require_components_category_constants.CATEGORY_PANEL_NAME);
	const [firstRendered, setFirstRendered] = (0, react.useState)(false);
	const deferredValue = (0, react.useDeferredValue)(value);
	const isActive = value === context.value;
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
		"wds-component": "category-panel",
		id: `${context.id}-${value}-panel`,
		"aria-labelledby": `${context.id}-${value}`,
		role: "tabpanel",
		hidden: !isActive
	});
});
CategoryPanel.displayName = require_components_category_constants.CATEGORY_PANEL_NAME;
//#endregion
exports.Category = Category;
exports.CategoryList = CategoryList;
exports.CategoryListItem = CategoryListItem;
exports.CategoryPanel = CategoryPanel;
