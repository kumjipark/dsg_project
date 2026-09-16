'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_color = require("../../utils/color.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/popover/style.ts
const popoverStyle = (variant) => (theme) => _wanteddev_wds_engine.css`
    background-color: ${require_utils_color.addOpacity(theme.semantic.background.elevated.normal, theme.opacity[88])};
    border-radius: 16px;
    outline-style: none;
    box-shadow: ${theme.semantic.elevation.shadow.spread.small};
    backdrop-filter: blur(32px);
    min-width: 140px;

    ${popoverVariantStyle(variant)}
  `;
const popoverVariantStyle = (variant) => {
	switch (variant) {
		case "custom": return _wanteddev_wds_engine.css`
        padding: 16px;
      `;
		default: return _wanteddev_wds_engine.css`
        border-radius: 12px;
        padding: 12px 14px;
        max-width: 360px;
        flex-direction: column;
        gap: 0px;
      `;
	}
};
//#endregion
exports.popoverStyle = popoverStyle;
