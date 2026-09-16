'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_css = require("../../utils/internal/css.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/with-interaction/style.ts
const interactionStyle = ({ color, width, height }) => (theme) => _wanteddev_wds_engine.css`
    overflow: hidden;
    position: absolute;
    z-index: 0;
    box-sizing: content-box;
    border-radius: inherit;
    opacity: ${theme.opacity[0]};
    background-color: ${(0, _wanteddev_wds_engine.getColorByToken)(theme, color)};
    transition:
      opacity 0.15s ease,
      transform 0.15s ease;
    transform-origin: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    ${width !== void 0 && _wanteddev_wds_engine.css`
      width: ${require_utils_internal_css.toCssValue(width)};
    `}
    ${height !== void 0 && _wanteddev_wds_engine.css`
      height: ${require_utils_internal_css.toCssValue(height)};
    `}
  `;
const getWrapperStyle = ({ disabled, variant, scale }) => (theme) => _wanteddev_wds_engine.css`
    position: relative;

    &:focus-visible {
      outline-style: solid;
      outline-width: 2px;
    }

    ${!disabled && _wanteddev_wds_engine.css`
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

      ${scale && _wanteddev_wds_engine.css`
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
		case "normal": return _wanteddev_wds_engine.css`
        opacity: ${theme.opacity[5]};
      `;
		case "light": return _wanteddev_wds_engine.css`
        opacity: ${.0375};
      `;
		case "strong": return _wanteddev_wds_engine.css`
        opacity: ${.075};
      `;
	}
};
const activeInteractionStyle = (theme, variant = "normal") => {
	switch (variant) {
		case "normal": return _wanteddev_wds_engine.css`
        opacity: ${theme.opacity[12]};
      `;
		case "light": return _wanteddev_wds_engine.css`
        opacity: ${.09};
      `;
		case "strong": return _wanteddev_wds_engine.css`
        opacity: ${.18};
      `;
	}
};
//#endregion
exports.activeInteractionStyle = activeInteractionStyle;
exports.getWrapperStyle = getWrapperStyle;
exports.hoverInteractionStyle = hoverInteractionStyle;
exports.interactionStyle = interactionStyle;
