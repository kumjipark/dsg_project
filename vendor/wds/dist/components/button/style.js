'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_responsive_props = require("../../utils/internal/responsive-props.js");
const require_utils_typography = require("../../utils/typography.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/button/style.ts
const buttonStyle = ({ loading, xs, sm, md, lg, xl, ...props }) => (theme) => _wanteddev_wds_engine.css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    box-sizing: border-box;
    line-height: initial;
    white-space: nowrap;
    height: fit-content;
    position: relative;
    cursor: pointer;

    [data-role='button-loading'] {
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
        > *:not([data-role='button-loading']):not(
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

    ${buttonColorStyle(props, theme)}
    ${buttonSizeStyle(props)}
    ${props.fullWidth ? "width: 100%;" : "width: fit-content;"}

    ${require_utils_internal_responsive_props.createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params) => _wanteddev_wds_engine.css`
        ${buttonSizeStyle({
	...params,
	color: props.color
})}
        ${params?.fullWidth && "width: 100%;"}
        ${params?.fullWidth === false && "width: fit-content;"}
        ${params?.sx}
      `)}
  `;
const buttonSizeStyle = ({ size, iconOnly, color } = {}) => {
	const fontWeight = color === "assistive" ? "medium" : "bold";
	switch (size) {
		case "large": return _wanteddev_wds_engine.css`
        border-radius: 12px;
        padding: 12px 28px;
        gap: 6px;

        [data-role='button-loading'] {
          width: 18px;
          height: 18px;
        }

        ${iconOnly ? _wanteddev_wds_engine.css`
              padding: 12px;
              font-size: 24px;

              svg {
                flex-shrink: 0;
              }
            ` : _wanteddev_wds_engine.css`
              & > svg {
                font-size: 20px;
              }
              & > span {
                ${require_utils_typography.typographyStyle("body1", fontWeight)}
              }
            `}
      `;
		case "medium": return _wanteddev_wds_engine.css`
        border-radius: 10px;
        padding: 9px 20px;
        gap: 5px;

        [data-role='button-loading'] {
          width: 16px;
          height: 16px;
        }

        ${iconOnly ? _wanteddev_wds_engine.css`
              padding: 10px;
              font-size: 20px;

              svg {
                flex-shrink: 0;
              }
            ` : _wanteddev_wds_engine.css`
              & > svg {
                font-size: 18px;
              }
              & > span {
                ${require_utils_typography.typographyStyle("body2", fontWeight)}
              }
            `}
      `;
		case "small": return _wanteddev_wds_engine.css`
        border-radius: 8px;
        padding: 7px 14px;
        gap: 4px;

        [data-role='button-loading'] {
          width: 14px;
          height: 14px;
        }

        ${iconOnly ? _wanteddev_wds_engine.css`
              padding: 7px;
              font-size: 18px;

              svg {
                flex-shrink: 0;
              }
            ` : _wanteddev_wds_engine.css`
              & > svg {
                font-size: 16px;
              }
              & > span {
                ${require_utils_typography.typographyStyle("label2", fontWeight)}
              }
            `}
      `;
	}
};
const buttonColorStyle = ({ variant, color } = {}, theme) => {
	switch (true) {
		case variant === "solid" && color === "primary": return _wanteddev_wds_engine.css`
        color: ${theme.semantic.static.white};
        background-color: ${theme.semantic.primary.normal};
        box-shadow: none;

        [data-role='button-loading'] {
          color: inherit;
        }

        &:disabled,
        &[aria-disabled='true'] {
          color: ${theme.semantic.label.assistive};
          background-color: ${theme.semantic.interaction.disable};
          box-shadow: none;
        }
      `;
		case variant === "solid" && color === "assistive": return _wanteddev_wds_engine.css`
        color: ${theme.semantic.label.neutral};
        background-color: ${theme.semantic.fill.normal};
        box-shadow: none;
        backdrop-filter: blur(32px);
        will-change: backdrop-filter;

        [data-role='button-loading'] {
          color: ${theme.semantic.label.assistive};
        }

        &:disabled,
        &[aria-disabled='true'] {
          color: ${theme.semantic.label.assistive};
          background-color: ${theme.semantic.interaction.disable};
          box-shadow: none;
          backdrop-filter: none;
        }
      `;
		case variant === "outlined" && color === "primary": return _wanteddev_wds_engine.css`
        color: ${theme.semantic.primary.normal};
        background-color: transparent;
        box-shadow: inset 0 0 0 1px ${theme.semantic.line.normal.neutral};

        [data-role='button-loading'] {
          color: inherit;
        }

        &:disabled,
        &[aria-disabled='true'] {
          color: ${theme.semantic.label.disable};
          background-color: transparent;
          box-shadow: inset 0 0 0 1px ${theme.semantic.line.normal.neutral};
        }
      `;
		case variant === "outlined" && color === "assistive": return _wanteddev_wds_engine.css`
        color: ${theme.semantic.label.normal};
        background-color: transparent;
        box-shadow: inset 0 0 0 1px ${theme.semantic.line.normal.neutral};

        [data-role='button-loading'] {
          color: ${theme.semantic.label.assistive};
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
exports.buttonStyle = buttonStyle;
