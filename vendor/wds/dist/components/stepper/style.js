'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_color = require("../../utils/color.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/stepper/style.ts
const stepperWrapperStyle = _wanteddev_wds_engine.css`
  width: 100%;
  height: fit-content;
  position: relative;
  list-style: none;
  padding: 0;
  margin: 0;
`;
const stepperChevronStyle = (theme) => _wanteddev_wds_engine.css`
  font-size: 16px;
  color: ${theme.semantic.label.assistive};
`;
const stepperCircleStyle = (isActive, completed) => (theme) => _wanteddev_wds_engine.css`
    background-color: ${theme.semantic.fill.strong};
    color: ${theme.semantic.static.white};
    width: 20px;
    height: 20px;
    position: relative;
    border-radius: 9999px;
    font-size: 14px;

    [data-role='stepper-item-step'] {
      text-shadow: 0px 0px 12px
        ${require_utils_color.addOpacity(theme.semantic.static.black, theme.opacity[12])};
    }

    ${(isActive || completed) && _wanteddev_wds_engine.css`
      background-color: ${theme.semantic.primary.normal};

      [data-role='stepper-item-step'] {
        text-shadow: none;
      }
    `}
  `;
const stepperLabelStyle = _wanteddev_wds_engine.css`
  padding: 1px 0px;
  height: fit-content;
`;
//#endregion
exports.stepperChevronStyle = stepperChevronStyle;
exports.stepperCircleStyle = stepperCircleStyle;
exports.stepperLabelStyle = stepperLabelStyle;
exports.stepperWrapperStyle = stepperWrapperStyle;
