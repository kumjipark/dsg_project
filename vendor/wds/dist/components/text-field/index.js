'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_typography_index = require("../typography/index.js");
const require_components_icon_button_contexts = require("../icon-button/contexts.js");
const require_components_button_index = require("../button/index.js");
const require_components_icon_button_index = require("../icon-button/index.js");
const require_components_text_field_style = require("./style.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let _wanteddev_wds_icon = require("@wanteddev/wds-icon");
let _radix_ui_react_compose_refs = require("@radix-ui/react-compose-refs");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/text-field/index.tsx
const TextField = (0, react.forwardRef)(({ invalid, leadingContent, trailingContent, trailingButton, positive, readOnly, disabled, className, style, onReset, type = "text", wrapperRef, width, height, sx, xs, sm, md, lg, xl, ...props }, ref) => {
	const parentRef = (0, react.useRef)(null);
	const inputRef = (0, react.useRef)(null);
	const composedRefs = (0, _radix_ui_react_compose_refs.useComposedRefs)(inputRef, ref);
	(0, react.useEffect)(() => {
		const container = parentRef.current;
		if (!container || disabled) return;
		const handleClick = (event) => {
			if (event.target.closest("input, textarea, button, a, [data-role=\"text-field-reset\"], [contenteditable]")) return;
			inputRef.current?.click();
			inputRef.current?.focus();
		};
		container.addEventListener("click", handleClick);
		return () => container.removeEventListener("click", handleClick);
	}, [disabled]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_wanteddev_wds_engine.Box, {
		className,
		style,
		"wds-component": "text-field",
		ref: (0, _radix_ui_react_compose_refs.useComposedRefs)(parentRef, wrapperRef),
		sx: [require_components_text_field_style.textFieldWrapperStyle({
			invalid,
			width,
			height,
			readOnly,
			disabled,
			type,
			positive,
			xs,
			sm,
			md,
			lg,
			xl,
			...props
		}), sx],
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
			gap: "8px",
			"data-role": "text-field-wrapper",
			children: [
				leadingContent,
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
					ref: composedRefs,
					type,
					readOnly,
					disabled,
					"aria-readonly": readOnly,
					"aria-invalid": invalid,
					"aria-disabled": disabled,
					...props
				}),
				invalid ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TextFieldContent, {
					"data-role": "text-field-invalid",
					sx: require_components_text_field_style.invalidIconWrapperStyle,
					variant: "icon",
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconCircleExclamationFill, {})
				}) : positive && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TextFieldContent, {
					"data-role": "text-field-positive",
					sx: require_components_text_field_style.positiveIconWrapperStyle,
					variant: "icon",
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconCircleCheckFill, {})
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(TextFieldContent, {
					"data-role": "text-field-reset",
					variant: "icon-button",
					onPointerDown: (e) => e.preventDefault(),
					onClick: () => {
						const input = inputRef.current;
						if (!input) return;
						requestAnimationFrame(() => {
							const prevValue = input.value;
							const event = new Event("change", { bubbles: true });
							input.value = "";
							props.onChange?.({
								...event,
								target: input,
								currentTarget: input,
								nativeEvent: {
									...event,
									target: input,
									currentTarget: input
								},
								isDefaultPrevented: () => false,
								isPropagationStopped: () => false,
								persist: () => {}
							});
							onReset?.(prevValue);
							input.focus();
						});
					},
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_icon_button_index.IconButton, {
						type: "button",
						size: 22,
						tabIndex: -1,
						sx: (theme) => ({ color: theme.semantic.label.assistive }),
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconCircleCloseFill, {})
					})
				}),
				trailingContent
			]
		}), trailingButton]
	});
});
TextField.displayName = "TextField";
const TextFieldContent = (0, react.forwardRef)(({ variant = "text", children, sx, color, ...props }, ref) => {
	switch (variant) {
		case "text": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
			as: "div",
			"wds-component": "text-field-content",
			variant: "body1",
			weight: "medium",
			ref,
			sx: [
				require_components_text_field_style.textFieldContentStyle,
				{ padding: "0px 4px" },
				sx
			],
			color: color ?? "semantic.label.assistive",
			...props,
			children
		});
		case "badge": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
			"wds-component": "text-field-content",
			ref,
			sx: [require_components_text_field_style.textFieldContentStyle, sx],
			...props,
			children
		});
		case "timer": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
			as: "div",
			variant: "label1",
			weight: "bold",
			"wds-component": "text-field-content",
			ref,
			sx: [
				require_components_text_field_style.textFieldContentStyle,
				{ padding: "2px 4px" },
				sx
			],
			color: color ?? "semantic.primary.normal",
			...props,
			children
		});
		case "icon": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
			"wds-component": "text-field-content",
			ref,
			sx: [
				require_components_text_field_style.textFieldContentStyle,
				(theme) => ({
					padding: "1px",
					fontSize: "22px",
					color: theme.semantic.label.alternative
				}),
				sx
			],
			...props,
			children
		});
		case "icon-button": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
			"wds-component": "text-field-content",
			ref,
			sx: [
				require_components_text_field_style.textFieldContentStyle,
				{ padding: "1px" },
				sx
			],
			...props,
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_icon_button_contexts.IconButtonProvider, {
				normal: "semantic.label.alternative",
				children
			})
		});
		case "text-button": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
			"wds-component": "text-field-content",
			ref,
			sx: [require_components_text_field_style.textFieldContentStyle, sx],
			alignItems: "center",
			...props,
			children
		});
		default: return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
			"wds-component": "text-field-content",
			ref,
			sx: [require_components_text_field_style.textFieldContentStyle, sx],
			...props,
			children
		});
	}
});
TextFieldContent.displayName = "TextFieldContent";
const TextFieldButton = (0, react.forwardRef)(({ type = "button", as, variant = "normal", disabled, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_button_index.Button, {
		as: as || "button",
		variant: "outlined",
		type,
		color: variant === "normal" ? "primary" : "assistive",
		ref,
		disabled,
		size: "large",
		"data-role": "text-field-button",
		...props,
		sx: [require_components_text_field_style.textFieldButtonStyle({
			variant,
			disabled
		}), props.sx]
	});
});
TextFieldButton.displayName = "TextFieldButton";
//#endregion
exports.TextField = TextField;
exports.TextFieldButton = TextFieldButton;
exports.TextFieldContent = TextFieldContent;
