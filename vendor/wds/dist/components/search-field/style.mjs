'use client';
import { createResponsiveStyle } from "../../utils/internal/responsive-props.mjs";
import { toCssValue } from "../../utils/internal/css.mjs";
import { typographyStyle } from "../../utils/typography.mjs";
import { css } from "@wanteddev/wds-engine";
//#region src/components/search-field/style.ts
const searchFieldWrapperStyle = ({ readOnly, disabled, width = "initial", size, xs, sm, md, lg, xl }) => (theme) => css`
      display: flex;
      align-items: center;
      border-radius: 12px;
      border: none;
      background-color: ${theme.semantic.fill.normal};
      backdrop-filter: blur(32px);
      will-change: backdrop-filter;
      width: ${toCssValue(width)};
      cursor: text;

      ${searchFieldWrapperSizeStyle({ size })}

      [data-role='search-field-icon'] {
        transition: color ease 0.2s;
        color: ${theme.semantic.label.alternative};
      }

      [data-role='search-field-reset'] {
        display: none;
      }

      ${disabled ? css`
            cursor: default;

            [data-role='search-field-icon'] {
              color: ${theme.semantic.label.disable};
            }

            [data-role='search-field-reset'] {
              display: none;
            }
          ` : css`
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
        ${typographyStyle("body1", "regular")}

        &::placeholder {
          ${typographyStyle("body1", "regular")}
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

      ${createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params) => css`
          ${params?.width !== void 0 && css`
            width: ${toCssValue(params.width)};
          `}

          ${searchFieldWrapperSizeStyle({ size: params?.size })}

        ${params?.sx}
        `)}
    `;
const searchFieldWrapperSizeStyle = ({ size }) => {
	switch (size) {
		case "small": return css`
        padding: 8px;
      `;
		case "medium": return css`
        padding: 12px;
      `;
	}
};
const searchFieldContentStyle = css`
  flex-shrink: 0;
  width: fit-content;
  height: fit-content;
  font-size: 20px;
  padding: 0px 2px;
`;
//#endregion
export { searchFieldContentStyle, searchFieldWrapperStyle };
