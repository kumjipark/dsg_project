'use client';
import { respondTo } from "../../utils/media.mjs";
import { addOpacity } from "../../utils/color.mjs";
import { css } from "@wanteddev/wds-engine";
//#region src/components/alert/style.ts
const alertWrapperStyle = (theme) => css`
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
const alertDimmerStyle = (theme) => css`
  position: fixed;
  inset: 0;
  background-color: ${addOpacity(theme.semantic.material.dimmer, theme.opacity[43])};
  z-index: -1;
`;
const alertContainerStyle = (theme) => css`
  background-color: ${theme.semantic.background.elevated.normal};
  border-radius: 12px;
  min-width: 320px;
  max-width: 400px;
  outline: none;
  display: flex;
  flex-direction: column;

  ${respondTo("360px")} {
    min-width: 100%;
  }
`;
const alertContentStyle = css`
  padding: 20px;
`;
const alertActionStyle = css`
  padding: 0px 20px 12px 20px;
`;
//#endregion
export { alertActionStyle, alertContainerStyle, alertContentStyle, alertDimmerStyle, alertWrapperStyle };
