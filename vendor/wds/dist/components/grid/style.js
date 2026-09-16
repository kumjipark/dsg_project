'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_responsive_props = require("../../utils/internal/responsive-props.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/grid/style.ts
const gridStyle = ({ xs, sm, md, lg, xl, ...props }) => (theme) => _wanteddev_wds_engine.css`
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    ${gridContainerStyle(props, theme)}

    ${require_utils_internal_responsive_props.createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params) => _wanteddev_wds_engine.css`
        ${gridContainerStyle(params, theme)}
        ${params?.sx}
      `)}
  `;
const gridContainerStyle = ({ alignItems, justifyContent, spacing, rowSpacing, columnSpacing } = {}, theme) => _wanteddev_wds_engine.css`
  ${Boolean(alignItems) && _wanteddev_wds_engine.css`
    align-items: ${alignItems};
  `}
  ${Boolean(justifyContent) && _wanteddev_wds_engine.css`
    justify-content: ${justifyContent};
  `}

  ${gridSpacingStyle(rowSpacing || spacing, "row", theme)}
  ${gridSpacingStyle(columnSpacing || spacing, "column", theme)}
`;
const gridSpacingStyle = (spacing, type, theme) => {
	if (!spacing) return;
	if (typeof spacing === "number") return _wanteddev_wds_engine.css`
      --wds-${type}-spacing: ${theme.spacing[spacing]};

      ${type === "column" ? _wanteddev_wds_engine.css`
              margin-top: calc(var(--wds-${type}-spacing) * -1);
            ` : _wanteddev_wds_engine.css`
              width: calc(100% + var(--wds-${type}-spacing));
              margin-left: calc(var(--wds-${type}-spacing) * -1);
            `}
    `;
};
//#endregion
exports.gridStyle = gridStyle;
