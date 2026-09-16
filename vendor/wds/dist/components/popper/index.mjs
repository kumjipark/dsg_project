'use client';
import { FlexBox } from "../flex-box/index.mjs";
import { PortalOrFragment } from "../portal-or-fragment/index.mjs";
import { POPPER_ANCHOR_NAME, POPPER_ARROW_NAME, POPPER_CONTENT_NAME, POPPER_NAME } from "./constants.mjs";
import { PopperContentProvider, PopperProvider, usePopperContentContext, usePopperContext } from "./contexts.mjs";
import { getPlacementMapper, getSideAlignFromPlacement, roundByDPR, transformOrigin } from "./helpers.mjs";
import { Box, useTheme } from "@wanteddev/wds-engine";
import { forwardRef, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useComposedRefs } from "@radix-ui/react-compose-refs";
import { useSize } from "@radix-ui/react-use-size";
import { Slot } from "@radix-ui/react-slot";
import { jsx } from "react/jsx-runtime";
import { arrow, autoUpdate, flip, hide, limitShift, offset, shift, size, useFloating } from "@floating-ui/react";
//#region src/components/popper/index.tsx
const OPPOSITE_SIDE = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
};
const Popper = ({ children, __scopePopper = "Popper" }) => {
	const [anchor, setAnchor] = useState(null);
	return /* @__PURE__ */ jsx(PopperProvider, {
		scope: __scopePopper,
		anchor,
		onAnchorChange: setAnchor,
		children
	});
};
Popper.displayName = POPPER_NAME;
const PopperAnchor = forwardRef(({ __scopePopper = "Popper", ...props }, forwardedRef) => {
	const context = usePopperContext(POPPER_ANCHOR_NAME, __scopePopper);
	const ref = useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, ref);
	useEffect(() => {
		context.onAnchorChange(ref.current);
	});
	return /* @__PURE__ */ jsx(Slot, {
		ref: composedRefs,
		...props
	});
});
PopperAnchor.displayName = POPPER_ANCHOR_NAME;
const PopperArrow = forwardRef(({ children, __scopePopper = "Popper", ...props }, ref) => {
	const { onArrowChange, side, arrowX, arrowY } = usePopperContentContext(POPPER_ARROW_NAME, __scopePopper);
	return /* @__PURE__ */ jsx(FlexBox, {
		ref: useComposedRefs(ref, onArrowChange),
		"wds-component": "popper-arrow",
		"aria-hidden": true,
		...props,
		sx: [{
			width: "fit-content",
			height: "fit-content"
		}, props.sx],
		style: {
			...props.style,
			position: "absolute",
			left: arrowX,
			top: arrowY,
			right: "",
			bottom: "",
			[OPPOSITE_SIDE[side]]: "0px",
			transformOrigin: {
				top: "",
				right: "0 0",
				bottom: "center 0",
				left: "100% 0"
			}[side],
			transform: {
				top: "translateY(100%)",
				right: "translateY(50%) rotate(90deg) translateX(-50%)",
				bottom: `rotate(180deg)`,
				left: "translateY(50%) rotate(-90deg) translateX(50%)"
			}[side]
		},
		children: children ?? /* @__PURE__ */ jsx(Box, {
			as: "svg",
			viewBox: "0 0 20 8",
			width: "20",
			height: "8",
			fill: "none",
			"aria-hidden": true,
			xmlns: "http://www.w3.org/2000/svg",
			children: /* @__PURE__ */ jsx("path", {
				d: "M8.07038 4.16544L6.41566 2.23494C5.71105 1.41289 5.35874 1.00187 4.93043 0.706626C4.5509 0.445007 4.129 0.250961 3.68337 0.133056C3.18047 0 2.63912 0 1.55642 0H19.4436C18.3609 0 17.8195 0 17.3166 0.133056C16.871 0.250961 16.4491 0.445007 16.0696 0.706626C15.6413 1.00186 15.289 1.41289 14.5843 2.23493L14.5843 2.23494L12.9296 4.16544L12.9296 4.16545C12.0926 5.14193 11.6741 5.63017 11.1761 5.80906C10.7391 5.96607 10.2609 5.96607 9.82386 5.80906C9.32586 5.63017 8.90737 5.14193 8.07038 4.16545L8.07038 4.16544Z",
				fill: "currentColor"
			})
		})
	});
});
PopperArrow.displayName = POPPER_ARROW_NAME;
const PopperContent = forwardRef(({ wrapperProps = {}, position = "bottom-center", offset: givenOffset = 10, referenceHidden = false, referenceHiddenOffsets, setContext, container, disablePortal, __scopePopper = "Popper", ...props }, ref) => {
	const theme = useTheme();
	const context = usePopperContext(POPPER_CONTENT_NAME, __scopePopper);
	const [arrow$1, setArrow] = useState(null);
	const arrowSize = useSize(arrow$1);
	const [content, setContent] = useState(null);
	const composedRefs = useComposedRefs(ref, (node) => setContent(node));
	const arrowWidth = Boolean(arrow$1) ? arrowSize?.width || 20 : 0;
	const arrowHeight = Boolean(arrow$1) ? arrowSize?.height || 8 : 0;
	const { refs, floatingStyles, placement: placementResult, middlewareData, isPositioned, context: floatingContext } = useFloating({
		strategy: "fixed",
		placement: getPlacementMapper(position),
		whileElementsMounted: autoUpdate,
		elements: { reference: context.anchor },
		middleware: [
			offset({
				mainAxis: givenOffset + arrowHeight,
				alignmentAxis: 0
			}),
			shift({
				mainAxis: true,
				crossAxis: false,
				limiter: limitShift()
			}),
			flip(),
			size(),
			arrow$1 && arrow(({ placement }) => {
				return {
					element: arrow$1,
					padding: placement.includes("left") || placement.includes("right") ? 8 : 6
				};
			}),
			transformOrigin({
				arrowWidth,
				arrowHeight
			}),
			referenceHidden && hide({ padding: referenceHiddenOffsets })
		]
	});
	const arrowX = middlewareData.arrow?.x;
	const arrowY = middlewareData.arrow?.y;
	const [contentZIndex, setContentZIndex] = useState();
	useLayoutEffect(() => {
		if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
	}, [content]);
	const [side, align] = getSideAlignFromPlacement(placementResult);
	useEffect(() => {
		setContext?.(floatingContext);
	}, [setContext, floatingContext]);
	return /* @__PURE__ */ jsx(PortalOrFragment, {
		disablePortal,
		container,
		children: /* @__PURE__ */ jsx(Box, {
			"wds-ignore-dismissable-layer": "true",
			ref: refs.setFloating,
			...wrapperProps,
			"data-side": side,
			"data-align": align,
			"data-placement": placementResult,
			style: {
				...wrapperProps.style,
				...floatingStyles,
				...isPositioned ? {
					top: "0",
					left: "0",
					transform: `translate(${roundByDPR(floatingContext.x)}px,${roundByDPR(floatingContext.y)}px)`
				} : { transform: "translate(0, -200%)" },
				minWidth: "max-content",
				zIndex: contentZIndex === "auto" ? theme.zIndex.modal : contentZIndex,
				...middlewareData.hide?.referenceHidden && {
					visibility: "hidden",
					pointerEvents: "none"
				}
			},
			dir: props.dir,
			children: /* @__PURE__ */ jsx(PopperContentProvider, {
				scope: __scopePopper,
				side,
				onArrowChange: setArrow,
				arrowX,
				arrowY,
				children: /* @__PURE__ */ jsx(Slot, {
					ref: composedRefs,
					...props
				})
			})
		})
	});
});
PopperContent.displayName = POPPER_CONTENT_NAME;
//#endregion
export { Popper, PopperAnchor, PopperArrow, PopperContent };
