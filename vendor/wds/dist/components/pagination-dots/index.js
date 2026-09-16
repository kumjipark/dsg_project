'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_pagination_dots_helpers = require("./helpers.js");
const require_components_pagination_dots_style = require("./style.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let react_jsx_runtime = require("react/jsx-runtime");
let _radix_ui_react_roving_focus = require("@radix-ui/react-roving-focus");
//#region src/components/pagination-dots/index.tsx
const ARROW_KEYS = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
];
const PaginationDots = (0, react.forwardRef)(({ totalPages = 3, currentPage = 1, maxDotCount = 5, color = "normal", size = "medium", onClickDot, xs, sm, md, lg, xl, ...props }, ref) => {
	const visibleArea = (0, react.useMemo)(() => require_components_pagination_dots_helpers.getPaginationDotsVisibleArea({
		maxDotCount,
		currentPage,
		totalPages
	}), [
		maxDotCount,
		currentPage,
		totalPages
	]);
	const isArrowKeyPressedRef = (0, react.useRef)(false);
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
	if (typeof totalPages !== "number" || totalPages < 0) {
		if (process.env.NODE_ENV !== "production") throw new Error("Invalid totalPages in PaginationDots");
		return null;
	}
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_radix_ui_react_roving_focus.RovingFocusGroup, { children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
		alignItems: "center",
		"aria-label": "Slide dots",
		role: "tablist",
		...props,
		sx: [require_components_pagination_dots_style.paginationDotsWrapperStyle({
			color,
			size,
			xs,
			sm,
			md,
			lg,
			xl
		}), props.sx],
		ref,
		children: [...Array(totalPages)].map((_, i) => {
			const scale = require_components_pagination_dots_helpers.getPaginationDotScale({
				index: i,
				visibleArea,
				totalPages,
				maxDotCount
			});
			const isActive = i + 1 === currentPage;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_radix_ui_react_roving_focus.RovingFocusGroupItem, {
				active: isActive,
				focusable: true,
				asChild: true,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
					as: "button",
					role: "tab",
					type: "button",
					onClick: () => onClickDot?.(i + 1),
					"data-role": "pagination-dot-button",
					sx: require_components_pagination_dots_style.paginationDotsStyle(scale, i === Math.max(visibleArea[0], 0)),
					"aria-selected": isActive,
					"aria-label": `Slide dot ${i + 1}`,
					onFocus: (e) => {
						if (isArrowKeyPressedRef.current) e.currentTarget.click();
					}
				})
			}, `wds-pagination-dot-${i}`);
		})
	}) });
});
PaginationDots.displayName = "PaginationDots";
//#endregion
exports.PaginationDots = PaginationDots;
