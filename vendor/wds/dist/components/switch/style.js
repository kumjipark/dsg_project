'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_responsive_props = require("../../utils/internal/responsive-props.js");
const require_components_with_interaction_style = require("../with-interaction/style.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/switch/style.ts
const switchStyle = ({ size, checked, disabled, xs, sm, md, lg, xl }) => (theme) => _wanteddev_wds_engine.css`
    display: flex;
    background-color: ${theme.semantic.fill.strong};
    border: none;
    box-shadow: none;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    height: fit-content;
    flex-shrink: 0;
    padding: var(--wds-switch-padding, 4px);
    width: var(--wds-switch-width, 52px);
    transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);

    & > [wds-component='with-interaction'] {
      transition:
        opacity 200ms cubic-bezier(0.4, 0, 0.2, 1),
        background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:active > [wds-component='with-interaction'] {
      ${require_components_with_interaction_style.hoverInteractionStyle(theme, "normal")}
    }

    span {
      z-index: 1;
      border-radius: 1000px;
      flex-shrink: 0;
      position: relative;
      background-color: ${theme.semantic.static.white};
      transition:
        margin-left 200ms cubic-bezier(0.4, 0, 0.2, 1),
        width 200ms cubic-bezier(0.4, 0, 0.2, 1);
      display: block;
      transform-origin: 100%;
      width: var(--wds-switch-thumb-size, 24px);
      height: var(--wds-switch-thumb-size, 24px);
      margin-left: 0px;
    }

    ${switchSizeStyle({ size })}

    &:hover:active {
      span {
        width: calc(
          var(--wds-switch-thumb-size, 24px) + var(--wds-switch-padding, 4px)
        );
      }
    }

    ${checked && _wanteddev_wds_engine.css`
      background-color: ${theme.semantic.primary.normal};

      span {
        margin-left: calc(
          var(--wds-switch-width, 52px) - var(--wds-switch-thumb-size, 24px) -
            (var(--wds-switch-padding, 4px) * 2)
        );
      }

      &:hover:active {
        span {
          width: calc(
            var(--wds-switch-thumb-size, 24px) + var(--wds-switch-padding, 4px)
          );
          margin-left: calc(
            var(--wds-switch-width, 52px) - var(--wds-switch-thumb-size, 24px) -
              (var(--wds-switch-padding, 4px) * 3)
          );
        }
      }
    `}

    ${disabled && _wanteddev_wds_engine.css`
      opacity: ${theme.opacity[43]};
      cursor: initial;
    `}

      ${require_utils_internal_responsive_props.createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params) => _wanteddev_wds_engine.css`
        ${switchSizeStyle({ size: params?.size })}
        ${params?.sx}
      `)}
  `;
const switchSizeStyle = ({ size }) => {
	switch (size) {
		case "medium": return _wanteddev_wds_engine.css`
        border-radius: 100px;

        --wds-switch-width: 52px;
        --wds-switch-padding: 4px;
        --wds-switch-thumb-size: 24px;
      `;
		case "small": return _wanteddev_wds_engine.css`
        border-radius: 75px;

        --wds-switch-width: 39px;
        --wds-switch-padding: 3px;
        --wds-switch-thumb-size: 18px;
      `;
	}
};
//#endregion
exports.switchStyle = switchStyle;
