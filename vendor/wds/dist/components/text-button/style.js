'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_responsive_props = require("../../utils/internal/responsive-props.js");
const require_utils_typography = require("../../utils/typography.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/text-button/style.ts
const textButtonStyle = ({ loading, xs, sm, md, lg, xl, ...props }) => (theme) => _wanteddev_wds_engine.css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    box-sizing: border-box;
    line-height: initial;
    white-space: nowrap;
    height: fit-content;
    width: fit-content;
    cursor: pointer;

    [data-role='text-button-loading'] {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      circle {
        stroke: currentColor;
      }
    }

    ${loading && _wanteddev_wds_engine.css`
      cursor: wait;
      &
        > *:not([data-role='text-button-loading']):not(
          [wds-component='with-interaction']
        ) {
        visibility: hidden;
      }
    `}

    &:disabled,
    &[aria-disabled='true'] {
      pointer-events: none;
      cursor: initial;
    }

    ${getColorTheme(props, theme)}
    ${textButtonSizeStyle(props)}

  ${require_utils_internal_responsive_props.createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params = {}) => _wanteddev_wds_engine.css`
        ${textButtonSizeStyle(params)}
        ${params.sx}
      `)}
  `;
const getColorTheme = ({ color, overrideColor }, theme) => {
	switch (color) {
		case "primary": return _wanteddev_wds_engine.css`
        color: ${overrideColor ? (0, _wanteddev_wds_engine.getColorByToken)(theme, overrideColor) : theme.semantic.primary.normal};
        background-color: transparent;
        border: none;
        box-shadow: none;

        [data-role='text-button-loading'] {
          color: inherit;
        }

        &:disabled,
        &[aria-disabled='true'] {
          color: ${theme.semantic.label.disable};
        }
      `;
		case "assistive": return _wanteddev_wds_engine.css`
        background-color: transparent;
        border: none;
        box-shadow: none;
        color: ${overrideColor ? (0, _wanteddev_wds_engine.getColorByToken)(theme, overrideColor) : theme.semantic.label.alternative};

        [data-role='text-button-loading'] {
          color: ${theme.semantic.label.assistive};
        }

        &:disabled,
        &[aria-disabled='true'] {
          color: ${theme.semantic.label.disable};
        }
      `;
	}
};
const textButtonSizeStyle = ({ size }) => {
	switch (size) {
		case "medium": return _wanteddev_wds_engine.css`
        gap: 4px;
        border-radius: 6px;
        padding: 4px 0px;

        [data-role='text-button-loading'] {
          width: 16px;
          height: 16px;
        }

        & > [wds-component='with-interaction'] {
          width: calc(100% + 14px);
          height: 100%;
        }

        & > svg {
          font-size: 20px;
        }
        & > span {
          ${require_utils_typography.typographyStyle("body1", "bold")}
        }
      `;
		case "small": return _wanteddev_wds_engine.css`
        gap: 4px;
        border-radius: 6px;
        padding: 4px 0px;

        [data-role='text-button-loading'] {
          width: 14px;
          height: 14px;
        }

        & > [wds-component='with-interaction'] {
          width: calc(100% + 12px);
          height: 100%;
        }

        & > svg {
          font-size: 16px;
        }
        & > span {
          ${require_utils_typography.typographyStyle("label1", "bold")}
        }
      `;
	}
};
//#endregion
exports.textButtonStyle = textButtonStyle;
