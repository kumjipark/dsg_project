'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_animation_presence_hooks = require("./hooks.js");
let react = require("react");
let _radix_ui_react_compose_refs = require("@radix-ui/react-compose-refs");
let _radix_ui_react_slot = require("@radix-ui/react-slot");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/animation-presence/index.tsx
const AnimationPresence = (0, react.forwardRef)(({ present = false, children, options }, forwardedRef) => {
	const { isPresent, ref } = require_components_animation_presence_hooks.useAnimationPresence(present, options);
	const composedRef = (0, _radix_ui_react_compose_refs.useComposedRefs)(forwardedRef, ref);
	return isPresent ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_radix_ui_react_slot.Slot, {
		ref: composedRef,
		children
	}) : null;
});
AnimationPresence.displayName = "AnimationPresence";
//#endregion
exports.AnimationPresence = AnimationPresence;
exports.useAnimationPresence = require_components_animation_presence_hooks.useAnimationPresence;
