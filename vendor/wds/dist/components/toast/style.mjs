'use client';
import { respondMore, respondTo } from "../../utils/media.mjs";
import { addOpacity } from "../../utils/color.mjs";
import { css, keyframes } from "@wanteddev/wds-engine";
//#region src/components/toast/style.ts
const mountKeyframes = keyframes`
  from {
    opacity: 0;
    height: 0;
    margin-top: 0;
  }
  to {
    opacity: 1;
    height: var(--wds-toast-animation-height);
    margin-top: var(--wds-toast-animation-margin-top);
  }
`;
const unmountKeyframes = keyframes`
  from {
    opacity: 1;
    height: var(--wds-toast-animation-height);
    margin-top: var(--wds-toast-animation-margin-top);
  }
  to {
    opacity: 0;
    height: 0;
    margin-top: 0;
  }
`;
const wrapperStyle = ({ disableAnimation }) => (theme) => css`
    backdrop-filter: blur(32px);
    will-change: backdrop-filter;
    border-radius: 12px;
    margin-top: var(--wds-toast-animation-margin-top);
    max-width: 100%;

    ${respondMore(theme.breakpoint.sm)} {
      min-width: 356px;
      max-width: 420px;
    }
    ${respondTo(theme.breakpoint.sm)} {
      width: 100%;
    }

    ${!disableAnimation && css`
      &[data-status='open'] {
        animation: ${mountKeyframes} 0.2s ease;
      }
      &[data-status='close'] {
        animation: ${unmountKeyframes} 0.2s ease;
      }
    `}
  `;
const toastStyle = css`
  border-radius: inherit;
  padding: 11px 16px;
  display: flex;
  gap: 16px;
  font-size: 20px;
  pointer-events: auto;
  align-items: center;
  position: relative;
  overflow: hidden;

  & > :not([role='presentation']) {
    z-index: 1;
  }
`;
const toastCircleIconWrapperStyle = (theme) => css`
  width: fit-content;
  height: fit-content;
  position: relative;
  flex-shrink: 0;

  &::before {
    z-index: -1;
    position: absolute;
    content: '';
    width: 8px;
    height: 10px;
    left: 50%;
    top: 50%;
    border-radius: 999px;
    transform: translate(-50%, -50%);
    background-color: ${theme.semantic.static.white};
  }
`;
const firstOverlayStyle = (theme) => css`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${addOpacity(theme.semantic.inverse.background, theme.opacity[52])};
  inset: 0;
`;
const secondOverlayStyle = (theme) => css`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${addOpacity(theme.semantic.primary.normal, theme.opacity[5])};
  inset: 0;
`;
const messageStyle = css`
  padding: 5px 2px;
`;
const textStyle = (theme) => css`
  opacity: ${theme.opacity[88]};
  word-break: keep-all;
  overflow-wrap: anywhere;
`;
//#endregion
export { firstOverlayStyle, messageStyle, secondOverlayStyle, textStyle, toastCircleIconWrapperStyle, toastStyle, wrapperStyle };
