'use client';
import { css } from "@wanteddev/wds-engine";
//#region src/components/time-picker/style.ts
const timePickerStyle = (theme) => css`
  background-color: ${theme.semantic.background.elevated.normal};
  box-shadow: ${theme.semantic.elevation.shadow.normal.small};
  border-radius: 12px;
  border: 1px solid ${theme.semantic.line.solid.neutral};
  overflow: hidden;
  height: 324px;
  max-height: 324px;
`;
//#endregion
export { timePickerStyle };
