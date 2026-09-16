'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_content_badge_style = require("./style.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/content-badge/index.tsx
const ContentBadge = (0, react.forwardRef)(({ variant = "solid", size = "xsmall", color = "accent", accentColor = "semantic.accent.foreground.cyan", neutralColor = "semantic.label.alternative", leadingContent, trailingContent, children, xs, sm, md, lg, xl, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_wanteddev_wds_engine.Box, {
		as: "span",
		ref,
		...props,
		sx: [require_components_content_badge_style.contentBadgeStyle({
			variant,
			size,
			color,
			accentColor,
			neutralColor,
			xs,
			sm,
			md,
			lg,
			xl
		}), props.sx],
		children: [
			Boolean(leadingContent) && leadingContent,
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children }),
			Boolean(trailingContent) && trailingContent
		]
	});
});
ContentBadge.displayName = "ContentBadge";
//#endregion
exports.ContentBadge = ContentBadge;
