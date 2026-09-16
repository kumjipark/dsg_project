'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_focus_scope_helpers = require("./helpers.js");
let react = require("react");
let _radix_ui_primitive = require("@radix-ui/primitive");
let _radix_ui_react_compose_refs = require("@radix-ui/react-compose-refs");
let _radix_ui_react_slot = require("@radix-ui/react-slot");
let react_jsx_runtime = require("react/jsx-runtime");
let _radix_ui_react_use_callback_ref = require("@radix-ui/react-use-callback-ref");
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
const FocusScope = (0, react.forwardRef)(({ loop = false, trapped = true, trappedContent = false, disableFocusScope = false, children, onMountAutoFocus, onUnmountAutoFocus, ...props }, forwardedRef) => {
	if (disableFocusScope) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_radix_ui_react_slot.Slot, {
		ref: forwardedRef,
		...props,
		children
	});
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(FocusScopeWrapper, {
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
const FocusScopeWrapper = (0, react.forwardRef)(({ loop = false, trapped = true, trappedContent = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...props }, forwardedRef) => {
	const [container, setContainer] = (0, react.useState)(null);
	const onMountAutoFocus = (0, _radix_ui_react_use_callback_ref.useCallbackRef)(onMountAutoFocusProp);
	const onUnmountAutoFocus = (0, _radix_ui_react_use_callback_ref.useCallbackRef)(onUnmountAutoFocusProp);
	const lastFocusedElementRef = (0, react.useRef)(null);
	const composedRefs = (0, _radix_ui_react_compose_refs.useComposedRefs)(forwardedRef, (node) => setContainer(node));
	const focusScope = (0, react.useRef)({
		paused: false,
		pause() {
			this.paused = true;
		},
		resume() {
			this.paused = false;
		}
	}).current;
	(0, react.useEffect)(() => {
		if (trapped) {
			const handleFocusIn = (event) => {
				if (focusScope.paused || !container) return;
				const target = event.target;
				if (container.contains(target)) lastFocusedElementRef.current = target;
				else require_components_focus_scope_helpers.focus(lastFocusedElementRef.current, { select: true });
			};
			const handleFocusOut = (event) => {
				if (focusScope.paused || !container) return;
				const relatedTarget = event.relatedTarget;
				if (relatedTarget === null) return;
				if (!container.contains(relatedTarget)) require_components_focus_scope_helpers.focus(lastFocusedElementRef.current, { select: true });
			};
			const handleMutations = (mutations) => {
				if (document.activeElement !== document.body) return;
				for (const mutation of mutations) if (mutation.removedNodes.length > 0) require_components_focus_scope_helpers.focus(container);
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
	(0, react.useEffect)(() => {
		if (container) {
			focusScopesStack.add(focusScope);
			const previouslyFocusedElement = document.activeElement;
			if (!container.contains(previouslyFocusedElement)) {
				const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
				container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
				container.dispatchEvent(mountEvent);
				if (!mountEvent.defaultPrevented) {
					const tabbableElements = require_components_focus_scope_helpers.getTabbableForFirstFocus(require_components_focus_scope_helpers.removeLinks(require_components_focus_scope_helpers.getTabbableCandidates(container)));
					if (tabbableElements.length === 0) require_components_focus_scope_helpers.focus(container);
					else if (trappedContent) require_components_focus_scope_helpers.focusFirst(tabbableElements, { select: true });
					else require_components_focus_scope_helpers.focus(container);
				}
			}
			return () => {
				container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
				setTimeout(() => {
					const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
					container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
					container.dispatchEvent(unmountEvent);
					if (!unmountEvent.defaultPrevented) require_components_focus_scope_helpers.focus(previouslyFocusedElement ?? document.body, { select: true });
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
	const handleKeyDown = (0, react.useCallback)((event) => {
		if (!loop && !trapped) return;
		if (focusScope.paused) return;
		const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
		const focusedElement = document.activeElement;
		if (isTabKey && focusedElement) {
			const currentTarget = event.currentTarget;
			const [first, last] = require_components_focus_scope_helpers.getTabbableEdges(currentTarget);
			if (!(first && last)) {
				if (focusedElement === currentTarget) event.preventDefault();
			} else if (!event.shiftKey && focusedElement === last) {
				event.preventDefault();
				if (loop) require_components_focus_scope_helpers.focus(first, { select: true });
			} else if (event.shiftKey && focusedElement === first) {
				event.preventDefault();
				if (loop) require_components_focus_scope_helpers.focus(last, { select: true });
			}
		}
	}, [
		loop,
		trapped,
		focusScope.paused
	]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_radix_ui_react_slot.Slot, {
		tabIndex: -1,
		ref: composedRefs,
		...props,
		onKeyDown: (0, _radix_ui_primitive.composeEventHandlers)(props.onKeyDown, handleKeyDown)
	}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
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
			stack = require_components_focus_scope_helpers.arrayRemove(stack, focusScope);
			stack.unshift(focusScope);
		},
		remove(focusScope) {
			stack = require_components_focus_scope_helpers.arrayRemove(stack, focusScope);
			stack[0]?.resume();
		}
	};
};
const focusScopesStack = createFocusScopesStack();
//#endregion
exports.FocusScope = FocusScope;
