'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const require_runtime = require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_with_interaction_index = require("../with-interaction/index.js");
const require_components_scroll_area_style = require("./style.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let react_jsx_runtime = require("react/jsx-runtime");
let _radix_ui_react_scroll_area = require("@radix-ui/react-scroll-area");
_radix_ui_react_scroll_area = require_runtime.__toESM(_radix_ui_react_scroll_area);
//#region src/components/scroll-area/index.tsx
const ScrollArea = (0, react.forwardRef)(({ size = "responsive", children, asChild, viewportRef, scrollbars = "both", type = "hover", viewportProps = {}, scrollHideDelay = 400, zIndex, ...props }, ref) => {
	const scrollbarComponent = {
		both: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
			as: ScrollBar,
			orientation: "horizontal",
			size,
			sx: { zIndex }
		}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
			as: ScrollBar,
			orientation: "vertical",
			size,
			sx: { zIndex }
		})] }),
		vertical: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
			as: ScrollBar,
			orientation: "vertical",
			size,
			sx: { zIndex }
		}),
		horizontal: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
			as: ScrollBar,
			orientation: "horizontal",
			size,
			sx: { zIndex }
		})
	};
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_wanteddev_wds_engine.Box, {
		as: _radix_ui_react_scroll_area.Root,
		ref,
		type,
		scrollHideDelay,
		...props,
		sx: [require_components_scroll_area_style.scrollAreaStyle, props.sx],
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
				as: _radix_ui_react_scroll_area.Viewport,
				asChild,
				ref: viewportRef,
				...viewportProps,
				sx: [require_components_scroll_area_style.viewportStyle, viewportProps.sx],
				children
			}),
			scrollbarComponent[scrollbars],
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_radix_ui_react_scroll_area.Corner, {})
		]
	});
});
ScrollArea.displayName = "ScrollArea";
const ScrollBar = (0, react.forwardRef)(({ orientation = "vertical", size = "responsive", ...props }, ref) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
	as: _radix_ui_react_scroll_area.ScrollAreaScrollbar,
	forceMount: true,
	ref,
	orientation,
	"data-role": `scroll-area-${orientation}-bar`,
	...props,
	sx: [require_components_scroll_area_style.scrollBarStyle({
		orientation,
		size
	}), props.sx],
	children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
		"data-role": "scroll-area-bar-wrapper",
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_with_interaction_index.WithInteraction, {
			color: "semantic.label.normal",
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
				as: _radix_ui_react_scroll_area.ScrollAreaThumb,
				sx: require_components_scroll_area_style.scrollBarThumbStyle
			})
		})
	})
}));
ScrollBar.displayName = "ScrollBar";
//#endregion
exports.ScrollArea = ScrollArea;
