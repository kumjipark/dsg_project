'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_responsive_props = require("../../utils/internal/responsive-props.js");
const require_utils_internal_css = require("../../utils/internal/css.js");
const require_utils_typography = require("../../utils/typography.js");
const require_utils_color = require("../../utils/color.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/select/style.ts
const selectStyle = ({ invalid, width = "initial", height = "fit-content", disabled, xs, sm, md, lg, xl }) => (theme) => _wanteddev_wds_engine.css`
    display: flex;
    border-radius: 12px;
    border: none;
    box-shadow:
      inset 0 0 0 1px ${theme.semantic.line.normal.neutral},
      ${theme.semantic.elevation.shadow.normal.xsmall};
    background-color: ${theme.semantic.background.transparent.normal};
    backdrop-filter: blur(32px);
    width: ${require_utils_internal_css.toCssValue(width)};
    height: ${require_utils_internal_css.toCssValue(height)};
    padding: 12px;
    gap: 8px;
    transition: box-shadow ease 0.2s;
    cursor: pointer;

    [data-role='select-render-wrapper'],
    [data-role='select-multiple-render-wrapper'] {
      min-height: 24px;
    }

    &:focus,
    &:focus-visible {
      outline: none;
    }

    [data-role='select-invalid'],
    [data-role='select-multiple-invalid'] {
      display: flex;
    }

    [data-role='select-placeholder'],
    [data-role='select-multiple-placeholder'] {
      color: ${theme.semantic.label.assistive};
    }
    [data-role='select-values'],
    [data-role='select-multiple-values'] {
      color: ${theme.semantic.label.normal};
    }

    ${invalid && _wanteddev_wds_engine.css`
      box-shadow:
        inset 0 0 0 1px
          ${require_utils_color.addOpacity(theme.semantic.status.negative, theme.opacity[28])},
        ${theme.semantic.elevation.shadow.normal.xsmall};
    `}

    ${disabled ? _wanteddev_wds_engine.css`
          background-color: ${theme.semantic.fill.alternative};
          backdrop-filter: none;
          box-shadow:
            inset 0 0 0 1px ${theme.semantic.line.normal.alternative},
            ${theme.semantic.elevation.shadow.normal.xsmall};
          cursor: default;

          [data-role='select-placeholder']
            [data-role='select-multiple-placeholder'] {
            color: ${theme.semantic.label.disable};
          }

          [data-role='select-values'],
          [data-role='select-multiple-values'] {
            color: ${theme.semantic.label.alternative};
          }
        ` : _wanteddev_wds_engine.css`
          &:focus,
          &[aria-expanded='true'] {
            ${invalid ? _wanteddev_wds_engine.css`
                  box-shadow:
                    inset 0 0 0 2px
                      ${require_utils_color.addOpacity(theme.semantic.status.negative, theme.opacity[43])},
                    ${theme.semantic.elevation.shadow.normal.xsmall};
                ` : _wanteddev_wds_engine.css`
                  box-shadow:
                    inset 0 0 0 2px
                      ${require_utils_color.addOpacity(theme.semantic.primary.normal, theme.opacity[43])},
                    ${theme.semantic.elevation.shadow.normal.xsmall};
                `}
          }

          &[aria-expanded='true'] {
            ${invalid && _wanteddev_wds_engine.css`
              [data-role='select-invalid'],
              [data-role='select-multiple-invalid'] {
                display: none;
              }
            `}
          }
        `}


    ${require_utils_internal_responsive_props.createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params) => _wanteddev_wds_engine.css`
        ${params?.width !== void 0 && _wanteddev_wds_engine.css`
          width: ${require_utils_internal_css.toCssValue(params.width)};
        `}

        ${params?.height !== void 0 && _wanteddev_wds_engine.css`
          height: ${require_utils_internal_css.toCssValue(params.height)};
        `}
        ${params?.sx}
      `)}
  `;
const invalidIconWrapperStyle = (theme) => _wanteddev_wds_engine.css`
  position: relative;

  &::before {
    position: absolute;
    content: '';
    width: 50%;
    height: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: ${theme.semantic.static.white};
  }

  svg {
    color: ${theme.semantic.status.negative};
    z-index: 0;
  }
`;
const selectIconStyle = ({ disabled }) => (theme) => _wanteddev_wds_engine.css`
    font-size: 16px;
    margin: 4px;
    display: block;
    flex-shrink: 0;

    ${disabled ? _wanteddev_wds_engine.css`
          color: ${theme.semantic.label.disable};
        ` : _wanteddev_wds_engine.css`
          color: ${theme.semantic.label.alternative};
        `}
  `;
const selectTextStyle = _wanteddev_wds_engine.css`
  ${require_utils_typography.ellipsisTypographyStyle(1)}
  user-select: none;
`;
//#endregion
exports.invalidIconWrapperStyle = invalidIconWrapperStyle;
exports.selectIconStyle = selectIconStyle;
exports.selectStyle = selectStyle;
exports.selectTextStyle = selectTextStyle;
