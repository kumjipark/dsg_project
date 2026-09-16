'use client';
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
import { Portal as Portal$1 } from "@radix-ui/react-portal";
//#region src/components/portal/index.tsx
const Portal = forwardRef(({ container = globalThis?.document?.body, children, ...props }, ref) => {
	return /* @__PURE__ */ jsx(Portal$1, {
		container,
		ref,
		asChild: true,
		...props,
		children
	});
});
Portal.displayName = "Portal";
//#endregion
export { Portal };
