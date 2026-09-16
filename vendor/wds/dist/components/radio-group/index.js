'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const require_runtime = require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_responsive_props = require("../../utils/internal/responsive-props.js");
const require_components_radio_index = require("../radio/index.js");
const require_components_radio_group_constants = require("./constants.js");
const require_components_radio_group_contexts = require("./contexts.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let _radix_ui_react_use_controllable_state = require("@radix-ui/react-use-controllable-state");
let _radix_ui_primitive = require("@radix-ui/primitive");
let _radix_ui_react_compose_refs = require("@radix-ui/react-compose-refs");
let react_jsx_runtime = require("react/jsx-runtime");
let _radix_ui_react_roving_focus = require("@radix-ui/react-roving-focus");
_radix_ui_react_roving_focus = require_runtime.__toESM(_radix_ui_react_roving_focus);
//#region src/components/radio-group/index.tsx
const ARROW_KEYS = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
];
const RadioGroup = (0, react.forwardRef)((props, ref) => {
	const { name, defaultValue, value: valueProp, required = false, disabled = false, orientation, dir, loop = true, onValueChange, ...groupProps } = props;
	const [value, setValue] = (0, _radix_ui_react_use_controllable_state.useControllableState)({
		prop: valueProp,
		defaultProp: defaultValue ?? "",
		onChange: onValueChange
	});
	const [node, setNode] = (0, react.useState)(null);
	const composedRefs = (0, _radix_ui_react_compose_refs.useComposedRefs)(ref, setNode);
	const initialValueStateRef = (0, react.useRef)(value);
	(0, react.useEffect)(() => {
		const form = node?.closest("form");
		if (form) {
			const reset = () => setValue(initialValueStateRef.current);
			form.addEventListener("reset", reset);
			return () => form.removeEventListener("reset", reset);
		}
	}, [node, setValue]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_radio_group_contexts.RadioGroupProvider, {
		name,
		required,
		disabled,
		value,
		onValueChange: setValue,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_radix_ui_react_roving_focus.Root, {
			asChild: true,
			orientation,
			dir: dir || "ltr",
			loop,
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
				role: "radiogroup",
				"aria-required": required,
				"aria-orientation": orientation,
				"data-disabled": disabled ? "" : void 0,
				dir: dir || "ltr",
				...groupProps,
				ref: composedRefs
			})
		})
	});
});
RadioGroup.displayName = require_components_radio_group_constants.RADIO_GROUP_NAME;
const RadioGroupItem = (0, react.forwardRef)(({ disabled, ...props }, forwardedRef) => {
	const context = require_components_radio_group_contexts.useRadioGroupContext(require_components_radio_group_constants.RADIO_ITEM_NAME);
	const isDisabled = context.disabled || disabled;
	const ref = (0, react.useRef)(null);
	const composedRefs = (0, _radix_ui_react_compose_refs.useComposedRefs)(forwardedRef, ref);
	const checked = context.value === props.value;
	const isArrowKeyPressedRef = (0, react.useRef)(false);
	(0, react.useEffect)(() => {
		const handleKeyDown = (event) => {
			if (ARROW_KEYS.includes(event.key)) isArrowKeyPressedRef.current = true;
		};
		const handleKeyUp = () => isArrowKeyPressedRef.current = false;
		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("keyup", handleKeyUp);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.removeEventListener("keyup", handleKeyUp);
		};
	}, []);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_radix_ui_react_roving_focus.Item, {
		asChild: true,
		focusable: !isDisabled,
		active: checked,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_radio_index.Radio, {
			disabled: isDisabled,
			required: context.required,
			checked,
			name: context.name,
			...props,
			sx: [props.sx, require_utils_internal_responsive_props.createEmptyResponsiveStyle(props)],
			ref: composedRefs,
			onCheck: () => context.onValueChange(props.value),
			onKeyDown: (0, _radix_ui_primitive.composeEventHandlers)(props.onKeyDown, (event) => {
				if (event.key === "Enter") event.preventDefault();
			}),
			onFocus: (0, _radix_ui_primitive.composeEventHandlers)(props.onFocus, () => {
				if (isArrowKeyPressedRef.current) ref.current?.click();
			})
		})
	});
});
RadioGroupItem.displayName = require_components_radio_group_constants.RADIO_ITEM_NAME;
//#endregion
exports.RadioGroup = RadioGroup;
exports.RadioGroupItem = RadioGroupItem;
