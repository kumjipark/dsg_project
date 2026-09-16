'use client';
import { toCssValue } from "../../utils/internal/css.mjs";
import { css, getColorByToken } from "@wanteddev/wds-engine";
//#region src/components/with-interaction/style.ts
const interactionStyle = ({ color, width, height }) => (theme) => css`
    overflow: hidden;
    position: absolute;
    z-index: 0;
    box-sizing: content-box;
    border-radius: inherit;
    opacity: ${theme.opacity[0]};
    background-color: ${getColorByToken(theme, color)};
    transition:
      opacity 0.15s ease,
      transform 0.15s ease;
    transform-origin: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    ${width !== void 0 && css`
      width: ${toCssValue(width)};
    `}
    ${height !== void 0 && css`
      height: ${toCssValue(height)};
    `}
  `;
const getWrapperStyle = ({ disabled, variant, scale }) => (theme) => css`
    position: relative;

    &:focus-visible {
      outline-style: solid;
      outline-width: 2px;
    }

    ${!disabled && css`
      &:hover > [wds-component='with-interaction'] {
        ${hoverInteractionStyle(theme, variant)}
      }

      @media not (pointer: fine) {
        &:hover > [wds-component='with-interaction'] {
          opacity: ${theme.opacity[0]};
        }
      }

      &:focus-visible > [wds-component='with-interaction'] {
        opacity: ${theme.opacity[0]};
      }
      &:active > [wds-component='with-interaction'] {
        ${activeInteractionStyle(theme, variant)}
      }

      ${scale && css`
        & > [wds-component='with-interaction'] {
          will-change: transform;
          transform: translate(-50%, -50%) scale(0.95);
        }

        &:hover > [wds-component='with-interaction'] {
          transform: translate(-50%, -50%) scale(1);
        }

        @media not (pointer: fine) {
          & > [wds-component='with-interaction'] {
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}
    `}
  `;
const hoverInteractionStyle = (theme, variant = "normal") => {
	switch (variant) {
		case "normal": return css`
        opacity: ${theme.opacity[5]};
      `;
		case "light": return css`
        opacity: ${.0375};
      `;
		case "strong": return css`
        opacity: ${.075};
      `;
	}
};
const activeInteractionStyle = (theme, variant = "normal") => {
	switch (variant) {
		case "normal": return css`
        opacity: ${theme.opacity[12]};
      `;
		case "light": return css`
        opacity: ${.09};
      `;
		case "strong": return css`
        opacity: ${.18};
      `;
	}
};
//#endregion
export { activeInteractionStyle, getWrapperStyle, hoverInteractionStyle, interactionStyle };
