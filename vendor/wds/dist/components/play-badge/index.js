'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_play_badge_style = require("./style.js");
let react = require("react");
let _wanteddev_wds_icon = require("@wanteddev/wds-icon");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/play-badge/index.tsx
const PlayBadge = (0, react.forwardRef)(({ size = "medium", alternative = false, xs, sm, md, lg, xl, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
		ref,
		...props,
		sx: [require_components_play_badge_style.playBadgeStyle({
			size,
			alternative,
			xs,
			sm,
			md,
			lg,
			xl
		}), props.sx],
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconPlay, {})
	});
});
PlayBadge.displayName = "PlayBadge";
//#endregion
exports.PlayBadge = PlayBadge;
