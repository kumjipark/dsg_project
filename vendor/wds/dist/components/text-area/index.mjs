'use client';
import { FlexBox } from "../flex-box/index.mjs";
import { typographyStyle } from "../../utils/typography.mjs";
import { Typography } from "../typography/index.mjs";
import { IconButtonProvider } from "../icon-button/contexts.mjs";
import { ScrollArea } from "../scroll-area/index.mjs";
import useResizeObserver from "../../hooks/internal/use-resize-observer.mjs";
import { getTextAreaDefaultHeight } from "./helpers.mjs";
import { invalidIconWrapperStyle, textAreaBottomAreaStyle, textAreaCharacterCounterStyle, textAreaContentStyle, textAreaStyle, textAreaWrapperStyle } from "./style.mjs";
import { TEXT_AREA_CONTENT_NAME, TEXT_AREA_NAME } from "./constants.mjs";
import { TextAreaProvider, useTextAreaContext } from "./contexts.mjs";
import { Box, css } from "@wanteddev/wds-engine";
import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import { IconCircleExclamationFill } from "@wanteddev/wds-icon";
import { composeEventHandlers } from "@radix-ui/primitive";
import { useComposedRefs } from "@radix-ui/react-compose-refs";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/text-area/index.tsx
const TextArea = forwardRef(({ leadingContent, trailingContent, value, invalid, disabled = false, maxRows, minRows = 2, className, style, sx, xs, sm, md, lg, xl, ...props }, ref) => {
	const [length, setLength] = useState(value?.length || 0);
	const parentRef = useRef(null);
	const [node, setNode] = useState(null);
	const textAreaRef = useRef(null);
	const composedRefs = useComposedRefs(textAreaRef, ref, setNode);
	const shadowRef = useRef(null);
	const syncTextAreaHeight = useCallback(() => {
		if (!textAreaRef.current || !shadowRef.current || !parentRef.current) return;
		const textArea = textAreaRef.current;
		const shadow = shadowRef.current;
		const parent = parentRef.current;
		const computedStyle = (textArea.ownerDocument.defaultView || window).getComputedStyle(textArea);
		if (computedStyle.width === "0px") return;
		shadow.style.width = computedStyle.width;
		shadow.style.font = computedStyle.font;
		shadow.style.letterSpacing = computedStyle.letterSpacing;
		shadow.style.wordSpacing = computedStyle.wordSpacing;
		shadow.style.whiteSpace = computedStyle.whiteSpace;
		shadow.style.boxSizing = computedStyle.boxSizing;
		shadow.style.padding = computedStyle.padding;
		shadow.style.border = computedStyle.border;
		shadow.value = textArea.value || props.placeholder || "x";
		if (shadow.value.slice(-1) === "\n") shadow.value += " ";
		const innerHeight = shadow.scrollHeight;
		shadow.value = "x";
		const singleRow = shadow.scrollHeight;
		shadow.value = "x\nx";
		const singleRowHeight = shadow.scrollHeight - singleRow;
		let outerHeight = innerHeight;
		if (minRows) {
			outerHeight = Math.max(Number(minRows) * singleRowHeight + singleRow - singleRowHeight, outerHeight);
			parent.style.setProperty("--wds-text-area-height", outerHeight + "px");
		}
		outerHeight = maxRows ? Math.max(Math.min(Number(maxRows) * singleRowHeight + singleRow - singleRowHeight, outerHeight), singleRowHeight + singleRow - singleRowHeight) : outerHeight;
		parent.style.setProperty("--wds-text-area-scroll-height", `${outerHeight}px`);
	}, [
		maxRows,
		minRows,
		props.placeholder
	]);
	useResizeObserver(textAreaRef.current, syncTextAreaHeight);
	useEffect(() => {
		syncTextAreaHeight();
		setLength(textAreaRef.current?.value?.length ?? 0);
	});
	useEffect(() => {
		const form = node?.closest("form");
		if (form) {
			const reset = () => {
				requestAnimationFrame(() => {
					syncTextAreaHeight();
					setLength(textAreaRef.current?.value?.length ?? 0);
				});
			};
			form.addEventListener("reset", reset);
			return () => form.removeEventListener("reset", reset);
		}
	}, [
		node,
		syncTextAreaHeight,
		setLength
	]);
	useEffect(() => {
		const container = parentRef.current;
		if (!container || disabled) return;
		const handleClick = (event) => {
			if (event.target.closest("input, textarea, button, a, [contenteditable]")) return;
			textAreaRef.current?.click();
			textAreaRef.current?.focus();
		};
		container.addEventListener("click", handleClick);
		return () => container.removeEventListener("click", handleClick);
	}, [disabled]);
	return /* @__PURE__ */ jsx(TextAreaProvider, {
		length,
		children: /* @__PURE__ */ jsxs(FlexBox, {
			ref: parentRef,
			flexDirection: "column",
			"wds-component": "text-area",
			className,
			style: {
				...getTextAreaDefaultHeight({ minRows }),
				...style
			},
			gap: "12px",
			sx: [textAreaWrapperStyle({
				invalid,
				disabled,
				xs,
				sm,
				md,
				lg,
				xl,
				...props
			}), sx],
			children: [/* @__PURE__ */ jsxs(ScrollArea, { children: [/* @__PURE__ */ jsx(Box, {
				as: "textarea",
				ref: composedRefs,
				...props,
				disabled,
				sx: textAreaStyle({
					xs,
					sm,
					md,
					lg,
					xl,
					...props
				}),
				"aria-invalid": invalid,
				value,
				onChange: composeEventHandlers(props.onChange, (e) => {
					if (value !== void 0) syncTextAreaHeight();
					setLength(e.target.value.length || 0);
				})
			}), /* @__PURE__ */ jsx(Box, {
				as: "textarea",
				"aria-hidden": true,
				readOnly: true,
				ref: shadowRef,
				tabIndex: -1,
				sx: css`
                ${typographyStyle("body1-reading", "regular")}
              `,
				style: {
					visibility: "hidden",
					position: "absolute",
					overflow: "hidden",
					height: 0,
					top: 0,
					left: 0,
					transform: "translateZ(0)",
					paddingTop: 0
				}
			})] }), (invalid || Boolean(leadingContent) || Boolean(trailingContent)) && /* @__PURE__ */ jsxs(FlexBox, {
				"data-role": "text-area-bottom-area",
				sx: textAreaBottomAreaStyle,
				alignItems: "center",
				justifyContent: "space-between",
				children: [/* @__PURE__ */ jsx(FlexBox, {
					alignItems: "center",
					"data-role": "text-area-bottom-area-leading-content",
					children: leadingContent
				}), /* @__PURE__ */ jsx(FlexBox, {
					alignItems: "center",
					"data-role": "text-area-bottom-area-trailing-content",
					children: trailingContent || invalid && /* @__PURE__ */ jsx(TextAreaContent, {
						"data-role": "text-area-invalid",
						sx: invalidIconWrapperStyle,
						variant: "icon",
						children: /* @__PURE__ */ jsx(IconCircleExclamationFill, {})
					})
				})]
			})]
		})
	});
});
TextArea.displayName = TEXT_AREA_NAME;
const TextAreaContent = forwardRef(({ variant = "characterCounter", children, sx, ...props }, ref) => {
	const { length } = useTextAreaContext(TEXT_AREA_CONTENT_NAME);
	switch (variant) {
		case "characterCounter": return /* @__PURE__ */ jsxs(Typography, {
			as: "div",
			"wds-component": "text-area-content",
			variant: "label2",
			weight: "medium",
			ref,
			...props,
			sx: [
				textAreaContentStyle,
				textAreaCharacterCounterStyle,
				sx
			],
			color: "semantic.label.alternative",
			"data-is-overflow": !isNaN(Number(children)) && length > Number(children),
			children: [
				/* @__PURE__ */ jsx("span", {
					"data-role": "text-area-content-character-counter-length",
					children: length
				}),
				/* @__PURE__ */ jsx("span", {
					"data-role": "text-area-content-character-counter-divider",
					children: "/"
				}),
				/* @__PURE__ */ jsx("span", {
					"data-role": "text-area-content-character-counter-max-length",
					children
				})
			]
		});
		case "badge": return /* @__PURE__ */ jsx(FlexBox, {
			"wds-component": "text-area-content",
			ref,
			sx: [textAreaContentStyle, sx],
			...props,
			children
		});
		case "button": return /* @__PURE__ */ jsx(FlexBox, {
			"wds-component": "text-area-content",
			ref,
			alignItems: "center",
			sx: [
				textAreaContentStyle,
				{
					maxHeight: "24px",
					padding: "0px 4px"
				},
				sx
			],
			...props,
			children
		});
		case "icon": return /* @__PURE__ */ jsx(FlexBox, {
			"wds-component": "text-area-content",
			ref,
			sx: [
				textAreaContentStyle,
				(theme) => ({
					fontSize: "22px",
					padding: "1px",
					color: theme.semantic.label.assistive
				}),
				sx
			],
			...props,
			children
		});
		case "icon-button": return /* @__PURE__ */ jsx(FlexBox, {
			"wds-component": "text-area-content",
			ref,
			sx: [textAreaContentStyle, sx],
			...props,
			children: /* @__PURE__ */ jsx(IconButtonProvider, {
				normal: "semantic.label.alternative",
				children
			})
		});
		default: return /* @__PURE__ */ jsx(FlexBox, {
			"wds-component": "text-area-content",
			ref,
			sx: [textAreaContentStyle, sx],
			...props,
			children
		});
	}
});
TextAreaContent.displayName = TEXT_AREA_CONTENT_NAME;
//#endregion
export { TextArea, TextAreaContent };
