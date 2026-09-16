'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/slider/style.ts
const sliderProgressWrapperStyle = ({ disabled }) => (theme) => _wanteddev_wds_engine.css`
    padding: 8px;
    border-radius: 1000px;
    position: relative;
    touch-action: ${disabled ? "auto" : "none"};
    user-select: none;
    -webkit-tap-highlight-color: transparent;

    ${disabled ? _wanteddev_wds_engine.css`
          cursor: initial;

          [data-role='slider-progress-range'] {
            background-color: ${theme.semantic.interaction.disable};
          }

          [data-role='slider-progress'] {
            background-color: ${theme.semantic.interaction.disable};
          }
        ` : _wanteddev_wds_engine.css`
          cursor: pointer;

          [data-role='slider-progress-range'] {
            background-color: ${theme.semantic.fill.strong};
          }

          [data-role='slider-progress'] {
            background-color: ${theme.semantic.primary.normal};
          }
        `}
  `;
const sliderProgressStyle = _wanteddev_wds_engine.css`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 4px;
  border-radius: inherit;
`;
const sliderProgressRangeStyle = _wanteddev_wds_engine.css`
  position: absolute;
  border-radius: inherit;
  height: 100%;
`;
const sliderThumbStyle = (theme) => _wanteddev_wds_engine.css`
  width: 20px;
  height: 20px;
  border-radius: 9999px;
  position: absolute;
  background-color: ${theme.semantic.primary.normal};
  box-shadow: 0 0 0 2px ${theme.semantic.background.normal.normal};
  top: 0px;
  display: block;
  cursor: pointer;

  &[aria-disabled='true'] {
    pointer-events: none;
    cursor: initial;
    background-color: ${theme.semantic.interaction.disable};

    & > [data-role='slider-thumb-interaction'] {
      opacity: 0;
    }
  }

  &:hover [data-role='slider-thumb-interaction'] {
    opacity: 0.075;
  }

  &:focus,
  &:focus-visible {
    outline: none;
    [data-role='slider-thumb-interaction'] {
      opacity: 0.075;
    }
  }

  &:active [data-role='slider-thumb-interaction'] {
    opacity: 0.075;
  }
`;
const sliderThumbInteractionStyle = (theme) => _wanteddev_wds_engine.css`
  background-color: ${theme.semantic.primary.normal};
  opacity: 0;
  width: calc(100% + 12px);
  height: calc(100% + 12px);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: inherit;
  display: inline-block;
  transition: opacity 0.15s ease;
`;
//#endregion
exports.sliderProgressRangeStyle = sliderProgressRangeStyle;
exports.sliderProgressStyle = sliderProgressStyle;
exports.sliderProgressWrapperStyle = sliderProgressWrapperStyle;
exports.sliderThumbInteractionStyle = sliderThumbInteractionStyle;
exports.sliderThumbStyle = sliderThumbStyle;
