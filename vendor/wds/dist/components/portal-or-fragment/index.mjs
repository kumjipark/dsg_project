'use client';
import { Portal } from "../portal/index.mjs";
import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { jsx } from "react/jsx-runtime";
//#region src/components/portal-or-fragment/index.tsx
const PortalOrFragment = forwardRef(({ disablePortal, container, children, ...props }, ref) => {
	return disablePortal ? /* @__PURE__ */ jsx(Slot, {
		...props,
		ref,
		children
	}) : /* @__PURE__ */ jsx(Portal, {
		...props,
		container,
		ref,
		children
	});
});
//#endregion
export { PortalOrFragment };
