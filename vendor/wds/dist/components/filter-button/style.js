'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_responsive_props = require("../../utils/internal/responsive-props.js");
const require_utils_typography = require("../../utils/typography.js");
const require_utils_color = require("../../utils/color.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/filter-button/style.ts
const filterButtonStyle = ({ xs, sm, md, lg, xl, ...props }) => (theme) => _wanteddev_wds_engine.css`
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

    &:disabled {
      pointer-events: none;
      cursor: initial;
    }

    ${filterButtonVariantStyle(props, theme)}
    ${filterButtonSizeStyle(props)}

  ${require_utils_internal_responsive_props.createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params) => _wanteddev_wds_engine.css`
        ${filterButtonSizeStyle(params)}
        ${params?.sx}
      `)}
  `;
const filterButtonSizeStyle = ({ size } = {}) => {
	switch (size) {
		case "xsmall": return _wanteddev_wds_engine.css`
        border-radius: 6px;
        padding: 4px 7px 4px 5px;
        gap: 1px;

        [data-role='chip-filter-wrapper'] {
          padding: 0 1px;
          gap: 3px;
        }

        span {
          ${require_utils_typography.typographyStyle("caption1", "medium")}
        }
        [data-role='chip-filter-active-label'] {
          ${require_utils_typography.typographyStyle("caption1", "bold")}
        }

        svg {
          font-size: 12px;
        }
      `;
		case "small": return _wanteddev_wds_engine.css`
        border-radius: 8px;
        padding: 6px 6px 6px 8px;
        gap: 1px;

        [data-role='chip-filter-wrapper'] {
          padding: 0 2px;
          gap: 4px;
        }

        span {
          ${require_utils_typography.typographyStyle("label1", "medium")}
        }
        [data-role='chip-filter-active-label'] {
          ${require_utils_typography.typographyStyle("label1", "bold")}
        }

        svg {
          font-size: 16px;
        }
      `;
		case "medium": return _wanteddev_wds_engine.css`
        border-radius: 10px;
        padding: 7px 9px 7px 11px;
        gap: 2px;

        [data-role='chip-filter-wrapper'] {
          padding: 0 2px;
          gap: 4px;
        }

        span {
          ${require_utils_typography.typographyStyle("body2", "medium")}
        }
        [data-role='chip-filter-active-label'] {
          ${require_utils_typography.typographyStyle("body2", "bold")}
        }

        svg {
          font-size: 16px;
        }
      `;
		case "large": return _wanteddev_wds_engine.css`
        border-radius: 10px;
        padding: 9px 10px 9px 12px;
        gap: 2px;

        [data-role='chip-filter-wrapper'] {
          padding: 0 2px;
          gap: 4px;
        }

        span {
          ${require_utils_typography.typographyStyle("body2", "medium")}
        }
        [data-role='chip-filter-active-label'] {
          ${require_utils_typography.typographyStyle("body2", "bold")}
        }

        svg {
          font-size: 16px;
        }
      `;
	}
};
const filterButtonVariantStyle = ({ variant } = {}, theme) => {
	switch (variant) {
		case "solid": return _wanteddev_wds_engine.css`
        color: ${theme.semantic.label.normal};
        background-color: ${theme.semantic.fill.alternative};
        box-shadow: none;

        &[aria-pressed='true'] {
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
        color: ${theme.semantic.label.normal};
        background-color: transparent;
        box-shadow: inset 0 0 0 1px ${theme.semantic.line.normal.neutral};

        &[aria-pressed='true'] {
          background-color: ${require_utils_color.addOpacity(theme.semantic.primary.normal, theme.opacity[5])};
          box-shadow: inset 0 0 0 1px
            ${require_utils_color.addOpacity(theme.semantic.primary.normal, theme.opacity[43])};
          color: ${theme.semantic.primary.normal};

          svg {
            color: ${theme.semantic.label.normal};
          }
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
exports.filterButtonStyle = filterButtonStyle;
