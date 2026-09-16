'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
let react = require("react");
let _radix_ui_react_use_callback_ref = require("@radix-ui/react-use-callback-ref");
//#region src/components/animation-presence/hooks.ts
const useAnimationPresenceState = (initialState) => {
	return (0, react.useReducer)((state, action) => {
		switch (action) {
			case "UNMOUNT": return state === "mounted" ? "unmounted" : state;
			case "MOUNT": return "mounted";
			case "ANIMATION_START": return state === "mounted" ? "unmountTriggered" : state;
			case "ANIMATION_END": return state === "unmountTriggered" ? "unmounted" : state;
			default: return state;
		}
	}, initialState);
};
const useSafeLayoutEffect = globalThis?.document ? react.useLayoutEffect : () => {};
const useAnimationPresence = (present, options) => {
	const [node, setNode] = (0, react.useState)(null);
	const [state, dispatch] = useAnimationPresenceState(present ? "mounted" : "unmounted");
	const filterCallback = (0, _radix_ui_react_use_callback_ref.useCallbackRef)(options?.filter ?? (() => true));
	useSafeLayoutEffect(() => {
		if (present) {
			dispatch("MOUNT");
			return;
		}
		if (!node) return;
		let cleanup = [];
		const animations = node.getAnimations(options).filter(({ effect }) => {
			if (effect && "target" in effect && effect.target) return filterCallback(effect.target);
			return false;
		});
		if (animations.length === 0) {
			dispatch("UNMOUNT");
			return;
		}
		dispatch("ANIMATION_START");
		const handleAnimationEnd = () => {
			if (!animations.some((a) => a.playState === "running")) dispatch("ANIMATION_END");
		};
		animations.forEach((animation) => {
			animation.effect?.updateTiming({ fill: "forwards" });
			const onFinish = () => handleAnimationEnd();
			const onCancel = () => handleAnimationEnd();
			animation.addEventListener("finish", onFinish);
			animation.addEventListener("cancel", onCancel);
			cleanup.push(() => {
				animation.removeEventListener("finish", onFinish);
				animation.removeEventListener("cancel", onCancel);
			});
		});
		return () => {
			cleanup.forEach((off) => off());
			cleanup = [];
		};
	}, [present, node]);
	return {
		isPresent: present || state !== "unmounted",
		ref: setNode
	};
};
//#endregion
exports.useAnimationPresence = useAnimationPresence;
