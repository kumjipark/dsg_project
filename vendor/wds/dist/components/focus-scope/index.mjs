'use client';
import { arrayRemove, focus, focusFirst, getTabbableCandidates, getTabbableEdges, getTabbableForFirstFocus, removeLinks } from "./helpers.mjs";
import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import { composeEventHandlers } from "@radix-ui/primitive";
import { useComposedRefs } from "@radix-ui/react-compose-refs";
import { Slot } from "@radix-ui/react-slot";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useCallbackRef } from "@radix-ui/react-use-callback-ref";
//#region src/components/focus-scope/index.tsx
/**
* Most of this file is based on code from @radix-ui/react-focus-scope.
* MIT Licensed, Copyright (c) 2022 WorkOS

* https://github.com/radix-ui/primitives/blob/main/packages/react/focus-scope/src/FocusScope.tsx
*/
const AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
const AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
const EVENT_OPTIONS = {
	bubbles: false,
	cancelable: true
};
const FocusScope = forwardRef(({ loop = false, trapped = true, trappedContent = false, disableFocusScope = false, children, onMountAutoFocus, onUnmountAutoFocus, ...props }, forwardedRef) => {
	if (disableFocusScope) return /* @__PURE__ */ jsx(Slot, {
		ref: forwardedRef,
		...props,
		children
	});
	return /* @__PURE__ */ jsx(FocusScopeWrapper, {
		...props,
		ref: forwardedRef,
		loop,
		trapped,
		trappedContent,
		onMountAutoFocus,
		onUnmountAutoFocus,
		children
	});
});
FocusScope.displayName = "FocusScope";
const FocusScopeWrapper = forwardRef(({ loop = false, trapped = true, trappedContent = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...props }, forwardedRef) => {
	const [container, setContainer] = useState(null);
	const onMountAutoFocus = useCallbackRef(onMountAutoFocusProp);
	const onUnmountAutoFocus = useCallbackRef(onUnmountAutoFocusProp);
	const lastFocusedElementRef = useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, (node) => setContainer(node));
	const focusScope = useRef({
		paused: false,
		pause() {
			this.paused = true;
		},
		resume() {
			this.paused = false;
		}
	}).current;
	useEffect(() => {
		if (trapped) {
			const handleFocusIn = (event) => {
				if (focusScope.paused || !container) return;
				const target = event.target;
				if (container.contains(target)) lastFocusedElementRef.current = target;
				else focus(lastFocusedElementRef.current, { select: true });
			};
			const handleFocusOut = (event) => {
				if (focusScope.paused || !container) return;
				const relatedTarget = event.relatedTarget;
				if (relatedTarget === null) return;
				if (!container.contains(relatedTarget)) focus(lastFocusedElementRef.current, { select: true });
			};
			const handleMutations = (mutations) => {
				if (document.activeElement !== document.body) return;
				for (const mutation of mutations) if (mutation.removedNodes.length > 0) focus(container);
			};
			document.addEventListener("focusin", handleFocusIn);
			document.addEventListener("focusout", handleFocusOut);
			const mutationObserver = new MutationObserver(handleMutations);
			if (container) mutationObserver.observe(container, {
				childList: true,
				subtree: true
			});
			return () => {
				document.removeEventListener("focusin", handleFocusIn);
				document.removeEventListener("focusout", handleFocusOut);
				mutationObserver.disconnect();
			};
		}
	}, [
		trapped,
		container,
		focusScope.paused
	]);
	useEffect(() => {
		if (container) {
			focusScopesStack.add(focusScope);
			const previouslyFocusedElement = document.activeElement;
			if (!container.contains(previouslyFocusedElement)) {
				const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
				container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
				container.dispatchEvent(mountEvent);
				if (!mountEvent.defaultPrevented) {
					const tabbableElements = getTabbableForFirstFocus(removeLinks(getTabbableCandidates(container)));
					if (tabbableElements.length === 0) focus(container);
					else if (trappedContent) focusFirst(tabbableElements, { select: true });
					else focus(container);
				}
			}
			return () => {
				container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
				setTimeout(() => {
					const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
					container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
					container.dispatchEvent(unmountEvent);
					if (!unmountEvent.defaultPrevented) focus(previouslyFocusedElement ?? document.body, { select: true });
					container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
					focusScopesStack.remove(focusScope);
				}, 0);
			};
		}
	}, [
		container,
		onMountAutoFocus,
		onUnmountAutoFocus,
		focusScope,
		trappedContent
	]);
	const handleKeyDown = useCallback((event) => {
		if (!loop && !trapped) return;
		if (focusScope.paused) return;
		const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
		const focusedElement = document.activeElement;
		if (isTabKey && focusedElement) {
			const currentTarget = event.currentTarget;
			const [first, last] = getTabbableEdges(currentTarget);
			if (!(first && last)) {
				if (focusedElement === currentTarget) event.preventDefault();
			} else if (!event.shiftKey && focusedElement === last) {
				event.preventDefault();
				if (loop) focus(first, { select: true });
			} else if (event.shiftKey && focusedElement === first) {
				event.preventDefault();
				if (loop) focus(last, { select: true });
			}
		}
	}, [
		loop,
		trapped,
		focusScope.paused
	]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Slot, {
		tabIndex: -1,
		ref: composedRefs,
		...props,
		onKeyDown: composeEventHandlers(props.onKeyDown, handleKeyDown)
	}), /* @__PURE__ */ jsx("span", {
		"wds-component": "focus-guard",
		tabIndex: trapped ? 0 : -1,
		style: {
			outline: "none",
			opacity: "0",
			position: "fixed",
			pointerEvents: "none"
		}
	})] });
});
const createFocusScopesStack = () => {
	let stack = [];
	return {
		add(focusScope) {
			const activeFocusScope = stack[0];
			if (focusScope !== activeFocusScope) activeFocusScope?.pause();
			stack = arrayRemove(stack, focusScope);
			stack.unshift(focusScope);
		},
		remove(focusScope) {
			stack = arrayRemove(stack, focusScope);
			stack[0]?.resume();
		}
	};
};
const focusScopesStack = createFocusScopesStack();
//#endregion
export { FocusScope };
