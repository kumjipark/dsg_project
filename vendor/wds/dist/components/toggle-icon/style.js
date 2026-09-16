'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_responsive_props = require("../../utils/internal/responsive-props.js");
const require_utils_internal_css = require("../../utils/internal/css.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/toggle-icon/style.ts
const toggleIconStyle = ({ xs, sm, md, lg, xl, activeColor, active, size }) => (theme) => _wanteddev_wds_engine.css`
    ${toggleIconSizeStyle(size)}

    background-color: transparent;
    border-radius: 9999px;
    border: none;
    box-shadow: none;
    color: ${active ? (0, _wanteddev_wds_engine.getColorByToken)(theme, activeColor) : theme.semantic.label.assistive};

    &:disabled,
    &[aria-disabled='true'] {
      color: ${theme.semantic.label.disable};
    }

    ${require_utils_internal_responsive_props.createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params) => _wanteddev_wds_engine.css`
        ${toggleIconSizeStyle(params?.size)}
        ${params?.sx}
      `)}
  `;
const toggleIconSizeStyle = (size) => size !== void 0 ? _wanteddev_wds_engine.css`
        width: ${require_utils_internal_css.toCssValue(size)};
        height: ${require_utils_internal_css.toCssValue(size)};
        font-size: ${require_utils_internal_css.toCssValue(size)};
      ` : void 0;
//#endregion
exports.toggleIconStyle = toggleIconStyle;
