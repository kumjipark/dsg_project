'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_typography_index = require("../typography/index.js");
const require_components_icon_button_index = require("../icon-button/index.js");
const require_components_section_message_style = require("./style.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let _radix_ui_react_use_controllable_state = require("@radix-ui/react-use-controllable-state");
let _wanteddev_wds_icon = require("@wanteddev/wds-icon");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/section-message/index.tsx
const SectionMessage = (0, react.forwardRef)(({ open: originOpen, defaultOpen, onOpenChange, variant = "info", children, leadingContent, trailingButton, description, bottomButton, closeButton = false, ...props }, ref) => {
	const [open, setOpen] = (0, _radix_ui_react_use_controllable_state.useControllableState)({
		prop: originOpen,
		defaultProp: defaultOpen ?? true,
		onChange: onOpenChange
	});
	const handleClose = (0, react.useCallback)(() => setOpen(false), [setOpen]);
	const titleId = (0, react.useId)();
	const descriptionId = (0, react.useId)();
	const renderLeadingContent = leadingContent ?? {
		custom: null,
		positive: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconCircleCheckFill, {
			"aria-label": "positive",
			role: "img"
		}),
		negative: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconCircleCloseFill, {
			"aria-label": "negative",
			role: "img"
		}),
		cautionary: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconTriangleExclamationFill, {
			"aria-label": "cautionary",
			role: "img"
		}),
		info: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconCircleInfoFill, {
			"aria-label": "info",
			role: "img"
		})
	}[variant];
	if (!open) return null;
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
		ref,
		gap: "8px",
		role: "alert",
		"aria-labelledby": titleId,
		"aria-describedby": descriptionId,
		...props,
		sx: [require_components_section_message_style.sectionMessageWrapperStyle, props.sx],
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
				role: "presentation",
				sx: require_components_section_message_style.firstOverlayStyle
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
				role: "presentation",
				sx: require_components_section_message_style.secondOverlayStyle(variant)
			}),
			renderLeadingContent && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
				flexShrink: 0,
				sx: require_components_section_message_style.sectionMessageIconStyle(variant),
				children: renderLeadingContent
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
				"data-role": "section-message-content",
				flexDirection: "column",
				gap: "4px",
				flex: "1",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
						color: "semantic.label.normal",
						variant: "body2",
						weight: "medium",
						"data-role": "section-message-content-title",
						id: titleId,
						as: "h2",
						children
					}),
					description && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
						variant: "label1-reading",
						weight: "regular",
						"data-role": "section-message-content-description",
						id: descriptionId,
						color: "semantic.label.neutral",
						as: "p",
						children: description
					}),
					bottomButton && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
						"data-role": "section-message-bottom-button",
						sx: { marginTop: 8 },
						gap: "16px",
						children: bottomButton
					})
				]
			}),
			trailingButton && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
				gap: "16px",
				alignItems: "center",
				sx: require_components_section_message_style.sectionMessageTrailingButtonStyle,
				"data-role": "section-message-trailing-button",
				children: trailingButton
			}),
			closeButton && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_icon_button_index.IconButton, {
				"data-role": "section-message-close-icon",
				color: "semantic.label.alternative",
				interactionColor: "semantic.label.alternative",
				onClick: handleClose,
				size: 20,
				"aria-label": "Close message",
				sx: require_components_section_message_style.sectionMessageCloseButtonStyle,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconClose, {})
			})
		]
	});
});
SectionMessage.displayName = "SectionMessage";
//#endregion
exports.SectionMessage = SectionMessage;
