'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_color = require("../../utils/color.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/select-multiple/style.ts
const customSelectMultipleRenderWrapperStyle = ({ overflow, isScrollableLeft, isScrollableRight }) => overflow ? _wanteddev_wds_engine.css`
        overflow: hidden;
      ` : _wanteddev_wds_engine.css`
        overflow: hidden;

        > div {
          overflow: scroll;

          &::-webkit-scrollbar {
            display: none;
          }
          -ms-overflow-style: none;
          scrollbar-width: none;

          ${(isScrollableLeft || isScrollableRight) && _wanteddev_wds_engine.css`
            mask-composite: intersect;
            mask-image: ${[isScrollableRight && require_utils_color.getGradientMaskImage("right", "40px", "mask"), isScrollableLeft && require_utils_color.getGradientMaskImage("left", "40px", "mask")].filter(Boolean).join(", ")};
          `}
        }
      `;
//#endregion
exports.customSelectMultipleRenderWrapperStyle = customSelectMultipleRenderWrapperStyle;
