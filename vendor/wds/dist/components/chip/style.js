'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_responsive_props = require("../../utils/internal/responsive-props.js");
const require_utils_typography = require("../../utils/typography.js");
const require_utils_color = require("../../utils/color.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/chip/style.ts
const chipStyle = ({ xs, sm, md, lg, xl, overrideColor, ...props }) => (theme) => _wanteddev_wds_engine.css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    box-sizing: border-box;
    line-height: initial;
    white-space: nowrap;
    height: fit-content;
    cursor: pointer;
    width: fit-content;
    flex-shrink: 0;
    transition:
      background-color 0.3s ease,
      color 0.3s ease,
      box-shadow 0.3s ease;

    &:disabled,
    &[aria-disabled='true'] {
      pointer-events: none;
      cursor: initial;
    }

    ${chipVariantStyle({
	...props,
	overrideColor
}, theme)}
    ${chipSizeStyle(props)}

  ${require_utils_internal_responsive_props.createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params) => _wanteddev_wds_engine.css`
        ${chipSizeStyle(params)}
        ${params?.sx}
      `)}
  `;
const chipSizeStyle = ({ size } = {}) => {
	switch (size) {
		case "xsmall": return _wanteddev_wds_engine.css`
        border-radius: 6px;
        padding: 4px 7px;
        gap: 2px;

        svg {
          font-size: 12px;
        }
        & > span {
          ${require_utils_typography.typographyStyle("caption1", "medium")}
          padding: 0 1px;
        }
      `;
		case "small": return _wanteddev_wds_engine.css`
        border-radius: 8px;
        padding: 6px 8px;
        gap: 2px;

        svg {
          font-size: 14px;
        }
        & > span {
          ${require_utils_typography.typographyStyle("label1", "medium")}
          padding: 0 2px;
        }
      `;
		case "medium": return _wanteddev_wds_engine.css`
        border-radius: 8px;
        padding: 7px 11px;
        gap: 3px;

        svg {
          font-size: 14px;
        }

        & > span {
          ${require_utils_typography.typographyStyle("body2", "medium")}
          padding: 0 2px;
        }
      `;
		case "large": return _wanteddev_wds_engine.css`
        border-radius: 10px;
        padding: 9px 12px;
        gap: 3px;

        svg {
          font-size: 16px;
        }
        & > span {
          ${require_utils_typography.typographyStyle("body2", "medium")}
          padding: 0 2px;
        }
      `;
	}
};
const chipVariantStyle = ({ variant, overrideColor } = {}, theme) => {
	switch (variant) {
		case "solid": return _wanteddev_wds_engine.css`
        color: ${overrideColor ? (0, _wanteddev_wds_engine.getColorByToken)(theme, overrideColor) : theme.semantic.label.normal};
        background-color: ${theme.semantic.fill.alternative};
        box-shadow: none;

        &[data-active='true'] {
          color: ${theme.semantic.inverse.label};
          background-color: ${theme.semantic.inverse.background};
        }

        &:disabled,
        &[aria-disabled='true'] {
          color: ${theme.semantic.label.disable};
          background-color: ${theme.semantic.interaction.disable};
          box-shadow: none;
        }
      `;
		case "outlined": return _wanteddev_wds_engine.css`
        color: ${overrideColor ? (0, _wanteddev_wds_engine.getColorByToken)(theme, overrideColor) : theme.semantic.label.normal};
        background-color: transparent;
        box-shadow: inset 0 0 0 1px ${theme.semantic.line.normal.neutral};

        &[data-active='true'] {
          background-color: ${require_utils_color.addOpacity(theme.semantic.primary.normal, theme.opacity[5])};
          box-shadow: inset 0 0 0 1px
            ${require_utils_color.addOpacity(theme.semantic.primary.normal, theme.opacity[43])};
          color: ${theme.semantic.primary.normal};
        }

        &:disabled,
        &[aria-disabled='true'] {
          color: ${theme.semantic.label.disable};
          background-color: transparent;
          box-shadow: inset 0 0 0 1px ${theme.semantic.line.normal.neutral};
        }
      `;
	}
};
//#endregion
exports.chipStyle = chipStyle;
