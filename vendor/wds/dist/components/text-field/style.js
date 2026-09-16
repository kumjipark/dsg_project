'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_responsive_props = require("../../utils/internal/responsive-props.js");
const require_utils_internal_css = require("../../utils/internal/css.js");
const require_utils_typography = require("../../utils/typography.js");
const require_utils_color = require("../../utils/color.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/text-field/style.ts
const EXCLUDE_TYPE = [
	"date",
	"month",
	"week",
	"datetime-local",
	"time"
];
const textFieldWrapperStyle = ({ invalid, readOnly, type, disabled, width = "initial", height = "auto", xs, sm, md, lg, xl }) => (theme) => _wanteddev_wds_engine.css`
    display: flex;
    align-items: center;
    border-radius: 12px;
    border: none;
    box-shadow: ${theme.semantic.elevation.shadow.normal.xsmall};
    background-color: ${theme.semantic.background.transparent.normal};
    backdrop-filter: blur(32px);
    width: ${require_utils_internal_css.toCssValue(width)};
    height: ${require_utils_internal_css.toCssValue(height)};

    [data-role='text-field-wrapper'] {
      padding: 12px;
      width: 100%;
      height: 100%;
      align-items: center;
      cursor: text;
      position: relative;
      transition: box-shadow ease 0.2s;
      box-shadow: inset 0 0 0 1px ${theme.semantic.line.normal.neutral};
      border-radius: inherit;
    }

    &:has([data-role='text-field-button']) {
      [data-role='text-field-wrapper'] {
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
      }
    }

    [data-role='text-field-invalid'],
    [data-role='text-field-positive'] {
      display: flex;
    }

    [data-role='text-field-reset'] {
      display: none;
    }

    ${EXCLUDE_TYPE.includes(type || "") && _wanteddev_wds_engine.css`
      input {
        max-height: 24px;
      }

      [data-role='text-field-invalid'],
      [data-role='text-field-positive'] {
        display: none !important;
      }

      [data-role='text-field-reset'] {
        display: none !important;
      }
    `}

    ${invalid && _wanteddev_wds_engine.css`
      [data-role='text-field-wrapper'] {
        box-shadow: inset 0 0 0 1px
          ${require_utils_color.addOpacity(theme.semantic.status.negative, theme.opacity[28])};
      }
    `}

    ${disabled ? _wanteddev_wds_engine.css`
          background-color: ${theme.semantic.fill.alternative};
          backdrop-filter: none;
          [data-role='text-field-wrapper'] {
            box-shadow: inset 0 0 0 1px
              ${theme.semantic.line.normal.alternative};
          }
          cursor: default;
        ` : _wanteddev_wds_engine.css`
          @supports selector(:has(*)) {
            &:where(:has(input:focus)),
            &:where(
                :has(
                    input[data-role='date-picker-field'][aria-expanded='true']
                  ),
                :has(
                    input[data-role='time-picker-field'][aria-expanded='true']
                  ),
                :has(
                    input[data-role='date-range-picker-field'][aria-expanded='true']
                  )
              ) {
              ${invalid ? _wanteddev_wds_engine.css`
                    [data-role='text-field-wrapper'] {
                      box-shadow: inset 0 0 0 2px
                        ${require_utils_color.addOpacity(theme.semantic.status.negative, theme.opacity[43])};
                    }
                  ` : _wanteddev_wds_engine.css`
                    [data-role='text-field-wrapper'] {
                      box-shadow: inset 0 0 0 2px
                        ${require_utils_color.addOpacity(theme.semantic.primary.normal, theme.opacity[43])};
                    }
                  `}

              [data-role='text-field-invalid'],
              [data-role='text-field-positive'] {
                display: none;
              }

              [data-role='text-field-reset'] {
                display: ${readOnly ? "none" : "flex"};
              }

              &:where(:has(input:placeholder-shown)) {
                [data-role='text-field-reset'] {
                  display: none;
                }
                [data-role='text-field-invalid'],
                [data-role='text-field-positive'] {
                  display: flex;
                }
              }
            }
          }

          @supports not selector(:has(*)) {
            &:where(:focus-within),
            &:where(
                :has(
                    input[data-role='date-picker-field'][aria-expanded='true']
                  ),
                :has(input[data-role='time-picker-field'][aria-expanded='true'])
              ) {
              ${invalid ? _wanteddev_wds_engine.css`
                    [data-role='text-field-wrapper'] {
                      box-shadow: inset 0 0 0 2px
                        ${require_utils_color.addOpacity(theme.semantic.status.negative, theme.opacity[43])};
                    }
                  ` : _wanteddev_wds_engine.css`
                    [data-role='text-field-wrapper'] {
                      box-shadow: inset 0 0 0 2px
                        ${require_utils_color.addOpacity(theme.semantic.primary.normal, theme.opacity[43])};
                    }
                  `}

              [data-role='text-field-invalid'],
              [data-role='text-field-positive'] {
                display: none;
              }
              [data-role='text-field-reset'] {
                display: ${readOnly ? "none" : "flex"};
              }
            }
          }
        `}

        
    input:disabled {
      color: ${theme.semantic.label.alternative};
    }

    input:disabled::placeholder {
      color: ${theme.semantic.label.disable};
    }

    @supports selector(:has(*)) {
      &:where(
          :has(input[data-role='date-picker-field']),
          :has(input[data-role='time-picker-field']),
          :has(input[data-role='date-range-picker-field'])
        ) {
        [data-role='text-field-reset'],
        [data-role='text-field-invalid'],
        [data-role='text-field-positive'] {
          display: none;
        }
      }
    }

    input {
      padding: 0 4px;
      width: 100%;
      min-height: 24px;
      background-color: transparent;
      caret-color: ${theme.semantic.primary.normal};
      outline: none;
      border: none;
      box-shadow: none;
      color: ${theme.semantic.label.normal};
      ${require_utils_typography.typographyStyle("body1", "regular")}

      &::placeholder {
        ${require_utils_typography.typographyStyle("body1", "regular")}
        color: ${theme.semantic.label.assistive};
      }

      [type='number'] {
        -moz-appearance: textfield;
      }
      &::-webkit-inner-spin-button,
      &::-webkit-search-cancel-button {
        appearance: none;
      }
      &::-webkit-search-decoration,
      &::-webkit-search-cancel-button,
      &::-webkit-search-results-button,
      &::-webkit-search-results-decoration {
        display: none;
      }
    }

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
    z-index: 1;
  }
`;
const positiveIconWrapperStyle = (theme) => _wanteddev_wds_engine.css`
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
    color: ${theme.semantic.primary.normal};
    z-index: 0;
  }
`;
const textFieldContentStyle = _wanteddev_wds_engine.css`
  flex-shrink: 0;
  width: fit-content;
  height: fit-content;
  max-height: 24px;
`;
const textFieldButtonStyle = ({ variant, disabled }) => (theme) => _wanteddev_wds_engine.css`
    box-shadow: none;
    height: 100%;
    align-items: center;
    padding: 12px 16px;
    min-width: 80px;
    border-radius: inherit;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    overflow: hidden;
    background-color: transparent;
    flex-shrink: 0;
    position: relative;

    &:disabled {
      box-shadow: none;
    }

    &::before {
      content: '';
      right: 0px;
      top: 0px;
      border-radius: inherit;
      position: absolute;
      width: calc(100% + 3px);
      height: calc(100% + 0px);
      box-shadow: inset 0 0 0 1px ${theme.semantic.line.normal.neutral};

      ${disabled && _wanteddev_wds_engine.css`
        box-shadow: inset 0 0 0 1px ${theme.semantic.line.normal.alternative};
      `}
    }

    & > span {
      ${require_utils_typography.typographyStyle("body1", variant === "assistive" ? "medium" : "bold")};
    }
  `;
//#endregion
exports.invalidIconWrapperStyle = invalidIconWrapperStyle;
exports.positiveIconWrapperStyle = positiveIconWrapperStyle;
exports.textFieldButtonStyle = textFieldButtonStyle;
exports.textFieldContentStyle = textFieldContentStyle;
exports.textFieldWrapperStyle = textFieldWrapperStyle;
