'use client';
import { FlexBox } from "../flex-box/index.mjs";
import { Typography } from "../typography/index.mjs";
import { IconButtonProvider } from "../icon-button/contexts.mjs";
import { Button } from "../button/index.mjs";
import { IconButton } from "../icon-button/index.mjs";
import { invalidIconWrapperStyle, positiveIconWrapperStyle, textFieldButtonStyle, textFieldContentStyle, textFieldWrapperStyle } from "./style.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef, useEffect, useRef } from "react";
import { IconCircleCheckFill, IconCircleCloseFill, IconCircleExclamationFill } from "@wanteddev/wds-icon";
import { useComposedRefs } from "@radix-ui/react-compose-refs";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/text-field/index.tsx
const TextField = forwardRef(({ invalid, leadingContent, trailingContent, trailingButton, positive, readOnly, disabled, className, style, onReset, type = "text", wrapperRef, width, height, sx, xs, sm, md, lg, xl, ...props }, ref) => {
	const parentRef = useRef(null);
	const inputRef = useRef(null);
	const composedRefs = useComposedRefs(inputRef, ref);
	useEffect(() => {
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
	return /* @__PURE__ */ jsxs(Box, {
		className,
		style,
		"wds-component": "text-field",
		ref: useComposedRefs(parentRef, wrapperRef),
		sx: [textFieldWrapperStyle({
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
		children: [/* @__PURE__ */ jsxs(FlexBox, {
			gap: "8px",
			"data-role": "text-field-wrapper",
			children: [
				leadingContent,
				/* @__PURE__ */ jsx("input", {
					ref: composedRefs,
					type,
					readOnly,
					disabled,
					"aria-readonly": readOnly,
					"aria-invalid": invalid,
					"aria-disabled": disabled,
					...props
				}),
				invalid ? /* @__PURE__ */ jsx(TextFieldContent, {
					"data-role": "text-field-invalid",
					sx: invalidIconWrapperStyle,
					variant: "icon",
					children: /* @__PURE__ */ jsx(IconCircleExclamationFill, {})
				}) : positive && /* @__PURE__ */ jsx(TextFieldContent, {
					"data-role": "text-field-positive",
					sx: positiveIconWrapperStyle,
					variant: "icon",
					children: /* @__PURE__ */ jsx(IconCircleCheckFill, {})
				}),
				/* @__PURE__ */ jsx(TextFieldContent, {
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
					children: /* @__PURE__ */ jsx(IconButton, {
						type: "button",
						size: 22,
						tabIndex: -1,
						sx: (theme) => ({ color: theme.semantic.label.assistive }),
						children: /* @__PURE__ */ jsx(IconCircleCloseFill, {})
					})
				}),
				trailingContent
			]
		}), trailingButton]
	});
});
TextField.displayName = "TextField";
const TextFieldContent = forwardRef(({ variant = "text", children, sx, color, ...props }, ref) => {
	switch (variant) {
		case "text": return /* @__PURE__ */ jsx(Typography, {
			as: "div",
			"wds-component": "text-field-content",
			variant: "body1",
			weight: "medium",
			ref,
			sx: [
				textFieldContentStyle,
				{ padding: "0px 4px" },
				sx
			],
			color: color ?? "semantic.label.assistive",
			...props,
			children
		});
		case "badge": return /* @__PURE__ */ jsx(FlexBox, {
			"wds-component": "text-field-content",
			ref,
			sx: [textFieldContentStyle, sx],
			...props,
			children
		});
		case "timer": return /* @__PURE__ */ jsx(Typography, {
			as: "div",
			variant: "label1",
			weight: "bold",
			"wds-component": "text-field-content",
			ref,
			sx: [
				textFieldContentStyle,
				{ padding: "2px 4px" },
				sx
			],
			color: color ?? "semantic.primary.normal",
			...props,
			children
		});
		case "icon": return /* @__PURE__ */ jsx(FlexBox, {
			"wds-component": "text-field-content",
			ref,
			sx: [
				textFieldContentStyle,
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
		case "icon-button": return /* @__PURE__ */ jsx(FlexBox, {
			"wds-component": "text-field-content",
			ref,
			sx: [
				textFieldContentStyle,
				{ padding: "1px" },
				sx
			],
			...props,
			children: /* @__PURE__ */ jsx(IconButtonProvider, {
				normal: "semantic.label.alternative",
				children
			})
		});
		case "text-button": return /* @__PURE__ */ jsx(FlexBox, {
			"wds-component": "text-field-content",
			ref,
			sx: [textFieldContentStyle, sx],
			alignItems: "center",
			...props,
			children
		});
		default: return /* @__PURE__ */ jsx(FlexBox, {
			"wds-component": "text-field-content",
			ref,
			sx: [textFieldContentStyle, sx],
			...props,
			children
		});
	}
});
TextFieldContent.displayName = "TextFieldContent";
const TextFieldButton = forwardRef(({ type = "button", as, variant = "normal", disabled, ...props }, ref) => {
	return /* @__PURE__ */ jsx(Button, {
		as: as || "button",
		variant: "outlined",
		type,
		color: variant === "normal" ? "primary" : "assistive",
		ref,
		disabled,
		size: "large",
		"data-role": "text-field-button",
		...props,
		sx: [textFieldButtonStyle({
			variant,
			disabled
		}), props.sx]
	});
});
TextFieldButton.displayName = "TextFieldButton";
//#endregion
export { TextField, TextFieldButton, TextFieldContent };
