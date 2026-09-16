'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/progress-indicator/style.ts
const progressIndicatorStyle = (theme) => _wanteddev_wds_engine.css`
  width: 100%;
  height: 2px;
  background-color: ${theme.semantic.fill.normal};
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    transform: var(--wds-progress-indicator-transform);
    transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);
    background-color: ${theme.semantic.primary.normal};
  }
`;
//#endregion
exports.progressIndicatorStyle = progressIndicatorStyle;
