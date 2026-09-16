'use client';
import { getGradientMaskImage } from "../../utils/color.mjs";
import { css } from "@wanteddev/wds-engine";
//#region src/components/select-multiple/style.ts
const customSelectMultipleRenderWrapperStyle = ({ overflow, isScrollableLeft, isScrollableRight }) => overflow ? css`
        overflow: hidden;
      ` : css`
        overflow: hidden;

        > div {
          overflow: scroll;

          &::-webkit-scrollbar {
            display: none;
          }
          -ms-overflow-style: none;
          scrollbar-width: none;

          ${(isScrollableLeft || isScrollableRight) && css`
            mask-composite: intersect;
            mask-image: ${[isScrollableRight && getGradientMaskImage("right", "40px", "mask"), isScrollableLeft && getGradientMaskImage("left", "40px", "mask")].filter(Boolean).join(", ")};
          `}
        }
      `;
//#endregion
export { customSelectMultipleRenderWrapperStyle };
