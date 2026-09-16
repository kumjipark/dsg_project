'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_responsive_props = require("../../utils/internal/responsive-props.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/grid-item/style.ts
const gridItemStyle = ({ xs, sm, md, lg, xl, ...props }) => (theme) => _wanteddev_wds_engine.css`
    padding-top: calc(var(--wds-column-spacing));
    padding-left: calc(var(--wds-row-spacing));

    ${gridItemAlignStyle(props)}

    ${require_utils_internal_responsive_props.createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params) => _wanteddev_wds_engine.css`
        ${gridItemAlignStyle(params)}
        ${params?.sx}
      `)}
  `;
const gridItemAlignStyle = ({ offset, columns, alignSelf } = {}) => {
	return _wanteddev_wds_engine.css`
    ${Boolean(alignSelf) && _wanteddev_wds_engine.css`
      align-self: ${alignSelf};
    `}

    ${gridItemLayoutStyle(columns)}
    ${gridItemOffsetStyle(offset)}
  `;
};
const gridItemOffsetStyle = (value) => {
	if (!value) return;
	if (value === "auto") return _wanteddev_wds_engine.css`
      margin-left: auto;
    `;
	return _wanteddev_wds_engine.css`
    margin-left: calc(100% * ${value} / 12);
  `;
};
const gridItemLayoutStyle = (value) => {
	if (!value) return;
	if (value === true) return _wanteddev_wds_engine.css`
      flex-grow: 1;
      flex-basis: 0;
      flex-shrink: initial;
      max-width: 100%;
      width: initial;
    `;
	if (value === "auto") return _wanteddev_wds_engine.css`
      flex: 0 0 auto;
      max-width: initial;
      width: auto;
    `;
	return _wanteddev_wds_engine.css`
    max-width: ${Math.round(value / 12 * 1e8) / 1e6}%;
    width: initial;
    flex-grow: 0;
    flex-basis: ${Math.round(value / 12 * 1e8) / 1e6}%;
    flex-shrink: initial;
  `;
};
//#endregion
exports.gridItemStyle = gridItemStyle;
