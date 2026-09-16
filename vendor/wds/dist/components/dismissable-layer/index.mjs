'use client';
import { forwardRef, useCallback } from "react";
import { composeEventHandlers } from "@radix-ui/primitive";
import { jsx } from "react/jsx-runtime";
import { DismissableLayer as DismissableLayer$1 } from "@radix-ui/react-dismissable-layer";
//#region src/components/dismissable-layer/index.tsx
const DismissableLayer = forwardRef(({ onInteractOutside, onFocusOutside, onPointerDownOutside, ...props }, ref) => {
	const handleSkipDismissableLayer = useCallback((e) => {
		if (e.target.closest("[wds-ignore-dismissable-layer=\"true\"]")) e.preventDefault();
	}, []);
	return /* @__PURE__ */ jsx(DismissableLayer$1, {
		ref,
		onPointerDownOutside: composeEventHandlers((e) => {
			handleSkipDismissableLayer(e);
		}, onPointerDownOutside),
		onFocusOutside: composeEventHandlers((e) => {
			handleSkipDismissableLayer(e);
		}, onFocusOutside),
		onInteractOutside: composeEventHandlers((e) => {
			handleSkipDismissableLayer(e);
		}, onInteractOutside),
		...props
	});
});
DismissableLayer.displayName = "DismissableLayer";
//#endregion
export { DismissableLayer };
