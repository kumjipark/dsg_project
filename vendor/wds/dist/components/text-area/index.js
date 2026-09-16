'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_utils_typography = require("../../utils/typography.js");
const require_components_typography_index = require("../typography/index.js");
const require_components_icon_button_contexts = require("../icon-button/contexts.js");
const require_components_scroll_area_index = require("../scroll-area/index.js");
const require_hooks_internal_use_resize_observer = require("../../hooks/internal/use-resize-observer.js");
const require_components_text_area_helpers = require("./helpers.js");
const require_components_text_area_style = require("./style.js");
const require_components_text_area_constants = require("./constants.js");
const require_components_text_area_contexts = require("./contexts.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let _wanteddev_wds_icon = require("@wanteddev/wds-icon");
let _radix_ui_primitive = require("@radix-ui/primitive");
let _radix_ui_react_compose_refs = require("@radix-ui/react-compose-refs");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/text-area/index.tsx
const TextArea = (0, react.forwardRef)(({ leadingContent, trailingContent, value, invalid, disabled = false, maxRows, minRows = 2, className, style, sx, xs, sm, md, lg, xl, ...props }, ref) => {
	const [length, setLength] = (0, react.useState)(value?.length || 0);
	const parentRef = (0, react.useRef)(null);
	const [node, setNode] = (0, react.useState)(null);
	const textAreaRef = (0, react.useRef)(null);
	const composedRefs = (0, _radix_ui_react_compose_refs.useComposedRefs)(textAreaRef, ref, setNode);
	const shadowRef = (0, react.useRef)(null);
	const syncTextAreaHeight = (0, react.useCallback)(() => {
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
	require_hooks_internal_use_resize_observer.default(textAreaRef.current, syncTextAreaHeight);
	(0, react.useEffect)(() => {
		syncTextAreaHeight();
		setLength(textAreaRef.current?.value?.length ?? 0);
	});
	(0, react.useEffect)(() => {
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
	(0, react.useEffect)(() => {
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
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_text_area_contexts.TextAreaProvider, {
		length,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
			ref: parentRef,
			flexDirection: "column",
			"wds-component": "text-area",
			className,
			style: {
				...require_components_text_area_helpers.getTextAreaDefaultHeight({ minRows }),
				...style
			},
			gap: "12px",
			sx: [require_components_text_area_style.textAreaWrapperStyle({
				invalid,
				disabled,
				xs,
				sm,
				md,
				lg,
				xl,
				...props
			}), sx],
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_scroll_area_index.ScrollArea, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
				as: "textarea",
				ref: composedRefs,
				...props,
				disabled,
				sx: require_components_text_area_style.textAreaStyle({
					xs,
					sm,
					md,
					lg,
					xl,
					...props
				}),
				"aria-invalid": invalid,
				value,
				onChange: (0, _radix_ui_primitive.composeEventHandlers)(props.onChange, (e) => {
					if (value !== void 0) syncTextAreaHeight();
					setLength(e.target.value.length || 0);
				})
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
				as: "textarea",
				"aria-hidden": true,
				readOnly: true,
				ref: shadowRef,
				tabIndex: -1,
				sx: _wanteddev_wds_engine.css`
                ${require_utils_typography.typographyStyle("body1-reading", "regular")}
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
			})] }), (invalid || Boolean(leadingContent) || Boolean(trailingContent)) && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
				"data-role": "text-area-bottom-area",
				sx: require_components_text_area_style.textAreaBottomAreaStyle,
				alignItems: "center",
				justifyContent: "space-between",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
					alignItems: "center",
					"data-role": "text-area-bottom-area-leading-content",
					children: leadingContent
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
					alignItems: "center",
					"data-role": "text-area-bottom-area-trailing-content",
					children: trailingContent || invalid && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TextAreaContent, {
						"data-role": "text-area-invalid",
						sx: require_components_text_area_style.invalidIconWrapperStyle,
						variant: "icon",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconCircleExclamationFill, {})
					})
				})]
			})]
		})
	});
});
TextArea.displayName = require_components_text_area_constants.TEXT_AREA_NAME;
const TextAreaContent = (0, react.forwardRef)(({ variant = "characterCounter", children, sx, ...props }, ref) => {
	const { length } = require_components_text_area_contexts.useTextAreaContext(require_components_text_area_constants.TEXT_AREA_CONTENT_NAME);
	switch (variant) {
		case "characterCounter": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_typography_index.Typography, {
			as: "div",
			"wds-component": "text-area-content",
			variant: "label2",
			weight: "medium",
			ref,
			...props,
			sx: [
				require_components_text_area_style.textAreaContentStyle,
				require_components_text_area_style.textAreaCharacterCounterStyle,
				sx
			],
			color: "semantic.label.alternative",
			"data-is-overflow": !isNaN(Number(children)) && length > Number(children),
			children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					"data-role": "text-area-content-character-counter-length",
					children: length
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					"data-role": "text-area-content-character-counter-divider",
					children: "/"
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					"data-role": "text-area-content-character-counter-max-length",
					children
				})
			]
		});
		case "badge": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
			"wds-component": "text-area-content",
			ref,
			sx: [require_components_text_area_style.textAreaContentStyle, sx],
			...props,
			children
		});
		case "button": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
			"wds-component": "text-area-content",
			ref,
			alignItems: "center",
			sx: [
				require_components_text_area_style.textAreaContentStyle,
				{
					maxHeight: "24px",
					padding: "0px 4px"
				},
				sx
			],
			...props,
			children
		});
		case "icon": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
			"wds-component": "text-area-content",
			ref,
			sx: [
				require_components_text_area_style.textAreaContentStyle,
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
		case "icon-button": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
			"wds-component": "text-area-content",
			ref,
			sx: [require_components_text_area_style.textAreaContentStyle, sx],
			...props,
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_icon_button_contexts.IconButtonProvider, {
				normal: "semantic.label.alternative",
				children
			})
		});
		default: return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
			"wds-component": "text-area-content",
			ref,
			sx: [require_components_text_area_style.textAreaContentStyle, sx],
			...props,
			children
		});
	}
});
TextAreaContent.displayName = require_components_text_area_constants.TEXT_AREA_CONTENT_NAME;
//#endregion
exports.TextArea = TextArea;
exports.TextAreaContent = TextAreaContent;
