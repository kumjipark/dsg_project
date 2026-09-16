'use client';
import { createResponsiveStyle } from "../../utils/internal/responsive-props.mjs";
import { css } from "@wanteddev/wds-engine";
//#region src/components/progress-step-indicator/style.ts
const progressStepWrapperStyle = ({ size, divider, xs, sm, md, lg, xl }) => (theme) => css`
    width: 100%;
    position: relative;

    ${progressSizeStyle(size)}
    ${progressDividerStyle(divider)}

    ${createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params) => css`
        ${progressSizeStyle(params?.size)}
        ${progressDividerStyle(params?.divider)}
        ${params?.sx}
      `)}
  `;
const progressListWrapperStyle = css`
  display: flex;
  align-items: center;
  height: 100%;
  list-style: none;
  padding: 0;
  margin: 0;

  & > li:first-of-type {
    border-top-left-radius: 999px;
    border-bottom-left-radius: 999px;
  }

  & > li:last-of-type {
    border-top-right-radius: 999px;
    border-bottom-right-radius: 999px;
  }
`;
const progressListStyle = (theme) => css`
  flex: 1 1 0;
  height: 100%;
  position: relative;
  background-color: ${theme.semantic.fill.normal};
  overflow: hidden;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    background-color: ${theme.semantic.primary.normal};
    position: absolute;
    inset: 0 0 0 -100%;
  }

  &[data-is-completed='true'],
  &[aria-current='step'] {
    &::after {
      inset: 0;
    }
  }
`;
const progressSizeStyle = (size) => {
	switch (size) {
		case "medium": return css`
        height: 8px;
      `;
		case "small": return css`
        height: 4px;
      `;
	}
};
const progressDividerStyle = (divider) => {
	switch (divider) {
		case true: return css`
        ol {
          gap: 1px;
        }
      `;
		case false: return css`
        ol {
          gap: 0px;
        }
      `;
	}
};
//#endregion
export { progressListStyle, progressListWrapperStyle, progressStepWrapperStyle };
