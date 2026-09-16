'use client';
import { respondMore, respondTo } from "./media.mjs";
import { css } from "@wanteddev/wds-engine";
//#region src/utils/layout.ts
const containerStyle = (xl) => (theme) => css`
  width: 100%;
  margin: 0 auto;

  ${respondTo(theme.breakpoint.sm)} {
    width: 100%;
    padding: 0 20px;
  }

  ${respondMore(theme.breakpoint.sm)} {
    width: 90%;

    ${xl ? css`
          max-width: 1400px;
        ` : css`
          max-width: 1060px;
        `}
  }
`;
//#endregion
export { containerStyle };
