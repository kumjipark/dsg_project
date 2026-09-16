'use client';
import { useAnimationPresence } from "./hooks.mjs";
import { forwardRef } from "react";
import { useComposedRefs } from "@radix-ui/react-compose-refs";
import { Slot } from "@radix-ui/react-slot";
import { jsx } from "react/jsx-runtime";
//#region src/components/animation-presence/index.tsx
const AnimationPresence = forwardRef(({ present = false, children, options }, forwardedRef) => {
	const { isPresent, ref } = useAnimationPresence(present, options);
	const composedRef = useComposedRefs(forwardedRef, ref);
	return isPresent ? /* @__PURE__ */ jsx(Slot, {
		ref: composedRef,
		children
	}) : null;
});
AnimationPresence.displayName = "AnimationPresence";
//#endregion
export { AnimationPresence, useAnimationPresence };
