'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_responsive_props = require("../../utils/internal/responsive-props.js");
const require_utils_typography = require("../../utils/typography.js");
const require_utils_color = require("../../utils/color.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/segmented-control/style.ts
const segmentedControlStyle = ({ variant, size, xs, sm, md, lg, xl }) => (theme) => _wanteddev_wds_engine.css`
    position: relative;
    width: 100%;

    ${segmentedControlSizeStyle({
	size,
	variant
})}
    ${segmentedControlVariantStyle({ variant }, theme)}

    ${require_utils_internal_responsive_props.createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params) => _wanteddev_wds_engine.css`
        ${segmentedControlSizeStyle({
	variant,
	size: params?.size
})}
        ${params?.sx}
      `)}
  `;
const segmentedControlVariantStyle = ({ variant }, theme) => {
	switch (variant) {
		case "outlined": return _wanteddev_wds_engine.css`
        background-color: transparent;
        box-shadow: inset 0 0 0 1px ${theme.semantic.line.normal.normal};
      `;
		default: return _wanteddev_wds_engine.css`
        background-color: ${theme.semantic.fill.normal};
      `;
	}
};
const segmentedControlSizeStyle = ({ size, variant }) => {
	switch (size) {
		case "large": return _wanteddev_wds_engine.css`
        border-radius: 12px;
        height: 48px;

        ${variant === "solid" && _wanteddev_wds_engine.css`
          padding: 3px;

          [data-role='segmented-control-motion'] {
            border-radius: 10px;
          }
        `}
      `;
		case "medium": return _wanteddev_wds_engine.css`
        border-radius: 10px;
        height: 40px;

        ${variant === "solid" && _wanteddev_wds_engine.css`
          padding: 2px;

          [data-role='segmented-control-motion'] {
            border-radius: 8px;
          }
        `}
      `;
		case "small": return _wanteddev_wds_engine.css`
        border-radius: 8px;
        height: 32px;

        ${variant === "solid" && _wanteddev_wds_engine.css`
          padding: 2px;

          [data-role='segmented-control-motion'] {
            border-radius: 6px;
          }
        `}
      `;
	}
};
const motionThumbStyle = (theme) => _wanteddev_wds_engine.css`
  position: absolute;
  background-color: ${theme.semantic.background.elevated.normal};
  box-shadow: 0px 0px 4px 0px
    ${require_utils_color.addOpacity(theme.semantic.static.black, theme.opacity[8])};

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    position: absolute;
    border-radius: inherit;
    background-color: ${require_utils_color.addOpacity(theme.semantic.static.white, theme.opacity[28])};
  }
`;
const segmentedControlItemStyle = ({ size, disabled, variant, xs, sm, md, lg, xl }) => (theme) => _wanteddev_wds_engine.css`
    position: relative;
    padding: 0px 16px;
    height: 100%;
    cursor: pointer;
    box-shadow: none;
    border-radius: 0px;
    min-width: 0;

    [data-role='segmented-control-item-text'] {
      font: inherit;
      display: block;
      ${require_utils_typography.ellipsisTypographyStyle(1)}
    }

    & > :not([data-role='segmented-control-item-text']) {
      flex-shrink: 0;
    }

    ${disabled && _wanteddev_wds_engine.css`
      cursor: initial;
    `}

    ${segmentedControlItemActiveStyle({ variant }, theme)}
    ${segmentedControlItemSizeStyle({
	size,
	variant
})}

    ${require_utils_internal_responsive_props.createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params) => _wanteddev_wds_engine.css`
        ${segmentedControlItemSizeStyle({
	size: params?.size,
	variant
})}
      `)}
  `;
const segmentedControlItemSizeStyle = ({ size, variant }) => {
	switch (size) {
		case "large": return _wanteddev_wds_engine.css`
        ${require_utils_typography.typographyStyle("headline2", "medium")}
        padding: 12px 8px;

        svg {
          font-size: 20px;
        }

        ${variant === "solid" ? _wanteddev_wds_engine.css`
              border-radius: 10px;
              padding: 9px 8px;
            ` : _wanteddev_wds_engine.css`
              &:first-of-type {
                border-radius: 12px 0px 0px 12px;
              }

              &:last-of-type {
                border-radius: 0px 12px 12px 0px;
              }
            `}
      `;
		case "medium": return _wanteddev_wds_engine.css`
        ${require_utils_typography.typographyStyle("body2", "medium")}
        padding: 9px 8px;

        svg {
          font-size: 18px;
        }

        ${variant === "solid" ? _wanteddev_wds_engine.css`
              border-radius: 8px;
              padding: 7px 8px;
            ` : _wanteddev_wds_engine.css`
              &:first-of-type {
                border-radius: 10px 0px 0px 10px;
              }

              &:last-of-type {
                border-radius: 0px 10px 10px 0px;
              }
            `}
      `;
		case "small": return _wanteddev_wds_engine.css`
        ${require_utils_typography.typographyStyle("label2", "medium")}
        padding: 7px 6px;

        svg {
          font-size: 14px;
        }

        ${variant === "solid" ? _wanteddev_wds_engine.css`
              border-radius: 6px;
              padding: 5px 6px;
            ` : _wanteddev_wds_engine.css`
              &:first-of-type {
                border-radius: 8px 0px 0px 8px;
              }
              &:last-of-type {
                border-radius: 0px 8px 8px 0px;
              }
            `}
      `;
	}
};
const segmentedControlItemActiveStyle = ({ variant }, theme) => {
	switch (variant) {
		case "solid": return _wanteddev_wds_engine.css`
        color: ${theme.semantic.label.alternative};
        background-color: transparent;
        box-shadow: none;
        transition: color 0.2s;

        &[data-active='true'] {
          color: ${theme.semantic.label.normal};

          &[data-ssr-motion='true'] {
            & > * {
              z-index: 1;
            }

            box-shadow: 0px 0px 4px 0px
              ${require_utils_color.addOpacity(theme.semantic.static.black, theme.opacity[8])};
            position: relative;
            background-color: ${theme.semantic.background.elevated.normal};

            &::before {
              content: '';
              width: 100%;
              height: 100%;
              left: 0px;
              top: 0px;
              position: absolute;
              border-radius: inherit;
              background-color: ${require_utils_color.addOpacity(theme.semantic.static.white, theme.opacity[28])};
            }
          }
        }
      `;
		case "outlined": return _wanteddev_wds_engine.css`
        color: ${theme.semantic.label.alternative};
        background-color: transparent;
        box-shadow: none;
        border: 1px solid transparent;
        transition: none;

        &::after {
          content: '';
          width: calc(100% + 1px);
          height: 100%;
          left: 0px;
          top: 0px;
          position: absolute;
          border-radius: inherit;
          border-right: 1px solid ${theme.semantic.line.normal.normal};
          box-sizing: content-box;
        }

        &:last-of-type {
          &::after {
            border-color: transparent;
          }
        }

        &:has(+ [data-active='true']) {
          &::after {
            border-color: transparent;
          }
        }

        &[data-active='true'] {
          background-color: ${require_utils_color.addOpacity(theme.semantic.primary.normal, theme.opacity[5])};
          color: ${theme.semantic.primary.normal};
          border: 1px solid
            ${require_utils_color.addOpacity(theme.semantic.primary.normal, theme.opacity[43])};

          &::after {
            border: none;
          }
        }
      `;
	}
};
//#endregion
exports.motionThumbStyle = motionThumbStyle;
exports.segmentedControlItemStyle = segmentedControlItemStyle;
exports.segmentedControlStyle = segmentedControlStyle;
