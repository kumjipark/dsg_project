'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/date-picker/style.ts
const datePopperStyle = (theme) => _wanteddev_wds_engine.css`
  background-color: ${theme.semantic.background.elevated.normal};
  box-shadow: ${theme.semantic.elevation.shadow.normal.small};
  border-radius: 12px;
  border: 1px solid ${theme.semantic.line.solid.neutral};
  overflow: hidden;
`;
//#endregion
exports.datePopperStyle = datePopperStyle;
