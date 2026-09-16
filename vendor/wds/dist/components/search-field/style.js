'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_responsive_props = require("../../utils/internal/responsive-props.js");
const require_utils_internal_css = require("../../utils/internal/css.js");
const require_utils_typography = require("../../utils/typography.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/search-field/style.ts
const searchFieldWrapperStyle = ({ readOnly, disabled, width = "initial", size, xs, sm, md, lg, xl }) => (theme) => _wanteddev_wds_engine.css`
      display: flex;
      align-items: center;
      border-radius: 12px;
      border: none;
      background-color: ${theme.semantic.fill.normal};
      backdrop-filter: blur(32px);
      will-change: backdrop-filter;
      width: ${require_utils_internal_css.toCssValue(width)};
      cursor: text;

      ${searchFieldWrapperSizeStyle({ size })}

      [data-role='search-field-icon'] {
        transition: color ease 0.2s;
        color: ${theme.semantic.label.alternative};
      }

      [data-role='search-field-reset'] {
        display: none;
      }

      ${disabled ? _wanteddev_wds_engine.css`
            cursor: default;

            [data-role='search-field-icon'] {
              color: ${theme.semantic.label.disable};
            }

            [data-role='search-field-reset'] {
              display: none;
            }
          ` : _wanteddev_wds_engine.css`
            @supports selector(:has(*)) {
              &:where(:has(input:placeholder-shown)) {
                [data-role='search-field-icon'] {
                  color: ${theme.semantic.label.assistive};
                }
              }

              &:where(:has(input:focus)) {
                [data-role='search-field-reset'] {
                  display: ${readOnly ? "none" : "flex"};
                }

                &:where(:has(input:placeholder-shown)) {
                  [data-role='search-field-reset'] {
                    display: none;
                  }

                  [data-role='search-field-icon'] {
                    color: ${theme.semantic.label.alternative};
                  }
                }
              }
            }

            @supports not selector(:has(*)) {
              &:where(:focus-within) {
                [data-role='search-field-reset'] {
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

      input {
        caret-color: ${theme.semantic.primary.normal};
        transition: color ease 0.2s;
        width: 100%;
        padding: 0;
        margin: 0;
        min-height: 24px;
        background-color: transparent;
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
        &::-webkit-search-cancel-button,
        &::-webkit-search-cancel-button,
        &::-webkit-search-results-button,
        &::-webkit-search-results-decoration {
          appearance: none;
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

          ${searchFieldWrapperSizeStyle({ size: params?.size })}

        ${params?.sx}
        `)}
    `;
const searchFieldWrapperSizeStyle = ({ size }) => {
	switch (size) {
		case "small": return _wanteddev_wds_engine.css`
        padding: 8px;
      `;
		case "medium": return _wanteddev_wds_engine.css`
        padding: 12px;
      `;
	}
};
const searchFieldContentStyle = _wanteddev_wds_engine.css`
  flex-shrink: 0;
  width: fit-content;
  height: fit-content;
  font-size: 20px;
  padding: 0px 2px;
`;
//#endregion
exports.searchFieldContentStyle = searchFieldContentStyle;
exports.searchFieldWrapperStyle = searchFieldWrapperStyle;
