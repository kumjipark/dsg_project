'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let _radix_ui_react_compose_refs = require("@radix-ui/react-compose-refs");
let _radix_ui_react_use_previous = require("@radix-ui/react-use-previous");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/virtual-input/index.tsx
const VirtualCheckboxInput = (0, react.forwardRef)(({ checked, bubbles, ...props }, forwardedRef) => {
	const ref = (0, react.useRef)(null);
	const composedRefs = (0, _radix_ui_react_compose_refs.useComposedRefs)(forwardedRef, ref);
	const prevChecked = (0, _radix_ui_react_use_previous.usePrevious)(checked);
	(0, react.useEffect)(() => {
		const input = ref.current;
		const inputProto = window.HTMLInputElement.prototype;
		const setChecked = Object.getOwnPropertyDescriptor(inputProto, "checked").set;
		if (prevChecked !== checked && setChecked) {
			const event = new Event("click", { bubbles });
			setChecked.call(input, checked);
			input.dispatchEvent(event);
		}
	}, [
		prevChecked,
		checked,
		bubbles
	]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
		as: "input",
		type: "radio",
		"aria-hidden": true,
		defaultChecked: checked,
		...props,
		tabIndex: -1,
		ref: composedRefs,
		sx: [{
			transform: "translateX(-100%)",
			position: "absolute",
			pointerEvents: "none",
			display: "none",
			opacity: 0,
			margin: 0
		}, props.sx]
	});
});
VirtualCheckboxInput.displayName = "VirtualCheckboxInput";
const VirtualValueInput = (0, react.forwardRef)(({ value, bubbles, ...props }, forwardedRef) => {
	const ref = (0, react.useRef)(null);
	const composedRefs = (0, _radix_ui_react_compose_refs.useComposedRefs)(forwardedRef, ref);
	const prevValue = (0, react.useRef)(value);
	(0, react.useEffect)(() => {
		const input = ref.current;
		const inputProto = window.HTMLInputElement.prototype;
		const setValue = Object.getOwnPropertyDescriptor(inputProto, "value").set;
		if (prevValue.current !== value && setValue) {
			const event = new Event("input", { bubbles: true });
			setValue.call(input, value);
			input.dispatchEvent(event);
		}
		prevValue.current = value;
	}, [value, bubbles]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
		as: "input",
		type: "text",
		"aria-hidden": true,
		...props,
		tabIndex: -1,
		ref: composedRefs,
		sx: [{
			transform: "translateX(-100%)",
			position: "absolute",
			pointerEvents: "none",
			display: "none",
			opacity: 0,
			margin: 0
		}, props.sx]
	});
});
VirtualValueInput.displayName = "VirtualValueInput";
//#endregion
exports.VirtualCheckboxInput = VirtualCheckboxInput;
exports.VirtualValueInput = VirtualValueInput;
