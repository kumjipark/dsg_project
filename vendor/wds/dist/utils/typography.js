'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../_virtual/_rolldown/runtime.js");
const require_components_typography_style = require("../components/typography/style.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/utils/typography.ts
const typographyStyle = (variant, weight) => _wanteddev_wds_engine.css`
  ${require_components_typography_style.variantMap[variant]};
  ${weight && require_components_typography_style.getWeightMap(variant)[weight]};
`;
const ellipsisTypographyStyle = (line = 1) => line === 1 ? _wanteddev_wds_engine.css`
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      ` : _wanteddev_wds_engine.css`
        overflow: hidden;
        position: relative;
        /* stylelint-disable */
        display: -webkit-box;
        -webkit-line-clamp: ${line};
        -webkit-box-orient: vertical;
        /* stylelint-enable */
      `;
const listStyle = _wanteddev_wds_engine.css`
  list-style-type: disc;
  padding-left: 1.5em;

  ul {
    list-style-type: circle;
    padding-left: 1.5em;
  }

  li::marker {
    font-size: 0.8em;
  }
`;
//#endregion
exports.ellipsisTypographyStyle = ellipsisTypographyStyle;
exports.listStyle = listStyle;
exports.typographyStyle = typographyStyle;
