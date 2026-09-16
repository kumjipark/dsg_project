'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_responsive_props = require("../../utils/internal/responsive-props.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/round-checkbox/style.ts
const roundCheckboxStyle = ({ size, xs, sm, md, lg, xl }) => (theme) => _wanteddev_wds_engine.css`
    border-radius: 9999px;

    [data-role='checkbox-icon-wrapper'] {
      border-radius: 9999px;
    }

    & svg {
      pointer-events: none;
    }

    &[aria-checked='true'] {
      [data-role='checkbox-icon-wrapper'] {
        border: none;
        box-shadow: none;
        background-color: ${theme.semantic.primary.normal};
      }
    }

    ${roundCheckboxSizeStyle({ size })}

    ${require_utils_internal_responsive_props.createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params) => _wanteddev_wds_engine.css`
        ${roundCheckboxSizeStyle({ size: params?.size })}
      `)}
  `;
const roundCheckboxSizeStyle = ({ size }) => {
	switch (size) {
		case "medium": return _wanteddev_wds_engine.css`
        padding: 2px;
      `;
	}
};
//#endregion
exports.roundCheckboxSizeStyle = roundCheckboxSizeStyle;
exports.roundCheckboxStyle = roundCheckboxStyle;
