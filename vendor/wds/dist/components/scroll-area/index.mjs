'use client';
import { FlexBox } from "../flex-box/index.mjs";
import { WithInteraction } from "../with-interaction/index.mjs";
import { scrollAreaStyle, scrollBarStyle, scrollBarThumbStyle, viewportStyle } from "./style.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
//#region src/components/scroll-area/index.tsx
const ScrollArea = forwardRef(({ size = "responsive", children, asChild, viewportRef, scrollbars = "both", type = "hover", viewportProps = {}, scrollHideDelay = 400, zIndex, ...props }, ref) => {
	const scrollbarComponent = {
		both: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Box, {
			as: ScrollBar,
			orientation: "horizontal",
			size,
			sx: { zIndex }
		}), /* @__PURE__ */ jsx(Box, {
			as: ScrollBar,
			orientation: "vertical",
			size,
			sx: { zIndex }
		})] }),
		vertical: /* @__PURE__ */ jsx(Box, {
			as: ScrollBar,
			orientation: "vertical",
			size,
			sx: { zIndex }
		}),
		horizontal: /* @__PURE__ */ jsx(Box, {
			as: ScrollBar,
			orientation: "horizontal",
			size,
			sx: { zIndex }
		})
	};
	return /* @__PURE__ */ jsxs(Box, {
		as: ScrollAreaPrimitive.Root,
		ref,
		type,
		scrollHideDelay,
		...props,
		sx: [scrollAreaStyle, props.sx],
		children: [
			/* @__PURE__ */ jsx(Box, {
				as: ScrollAreaPrimitive.Viewport,
				asChild,
				ref: viewportRef,
				...viewportProps,
				sx: [viewportStyle, viewportProps.sx],
				children
			}),
			scrollbarComponent[scrollbars],
			/* @__PURE__ */ jsx(ScrollAreaPrimitive.Corner, {})
		]
	});
});
ScrollArea.displayName = "ScrollArea";
const ScrollBar = forwardRef(({ orientation = "vertical", size = "responsive", ...props }, ref) => /* @__PURE__ */ jsx(Box, {
	as: ScrollAreaPrimitive.ScrollAreaScrollbar,
	forceMount: true,
	ref,
	orientation,
	"data-role": `scroll-area-${orientation}-bar`,
	...props,
	sx: [scrollBarStyle({
		orientation,
		size
	}), props.sx],
	children: /* @__PURE__ */ jsx(FlexBox, {
		"data-role": "scroll-area-bar-wrapper",
		children: /* @__PURE__ */ jsx(WithInteraction, {
			color: "semantic.label.normal",
			children: /* @__PURE__ */ jsx(Box, {
				as: ScrollAreaPrimitive.ScrollAreaThumb,
				sx: scrollBarThumbStyle
			})
		})
	})
}));
ScrollBar.displayName = "ScrollBar";
//#endregion
export { ScrollArea };
