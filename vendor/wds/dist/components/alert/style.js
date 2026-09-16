'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_media = require("../../utils/media.js");
const require_utils_color = require("../../utils/color.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/alert/style.ts
const alertWrapperStyle = (theme) => _wanteddev_wds_engine.css`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: ${theme.zIndex.modal};
  width: 100vw;
  height: 100vh;
  left: 0px;
  top: 0px;

  @supports (height: 100dvh) {
    height: 100dvh;
  }
`;
const alertDimmerStyle = (theme) => _wanteddev_wds_engine.css`
  position: fixed;
  inset: 0;
  background-color: ${require_utils_color.addOpacity(theme.semantic.material.dimmer, theme.opacity[43])};
  z-index: -1;
`;
const alertContainerStyle = (theme) => _wanteddev_wds_engine.css`
  background-color: ${theme.semantic.background.elevated.normal};
  border-radius: 12px;
  min-width: 320px;
  max-width: 400px;
  outline: none;
  display: flex;
  flex-direction: column;

  ${require_utils_media.respondTo("360px")} {
    min-width: 100%;
  }
`;
const alertContentStyle = _wanteddev_wds_engine.css`
  padding: 20px;
`;
const alertActionStyle = _wanteddev_wds_engine.css`
  padding: 0px 20px 12px 20px;
`;
//#endregion
exports.alertActionStyle = alertActionStyle;
exports.alertContainerStyle = alertContainerStyle;
exports.alertContentStyle = alertContentStyle;
exports.alertDimmerStyle = alertDimmerStyle;
exports.alertWrapperStyle = alertWrapperStyle;
