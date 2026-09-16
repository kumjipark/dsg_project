'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../_virtual/_rolldown/runtime.js");
const require_utils_media = require("./media.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/utils/layout.ts
const containerStyle = (xl) => (theme) => _wanteddev_wds_engine.css`
  width: 100%;
  margin: 0 auto;

  ${require_utils_media.respondTo(theme.breakpoint.sm)} {
    width: 100%;
    padding: 0 20px;
  }

  ${require_utils_media.respondMore(theme.breakpoint.sm)} {
    width: 90%;

    ${xl ? _wanteddev_wds_engine.css`
          max-width: 1400px;
        ` : _wanteddev_wds_engine.css`
          max-width: 1060px;
        `}
  }
`;
//#endregion
exports.containerStyle = containerStyle;
