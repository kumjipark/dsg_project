'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_responsive_props = require("../../utils/internal/responsive-props.js");
const require_utils_internal_css = require("../../utils/internal/css.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/divider/style.ts
const dividerStyle = ({ vertical, color, size, thickness, xs, sm, md, lg, xl }) => (theme) => _wanteddev_wds_engine.css`
    margin: 0px;
    border-style: solid;
    border-color: ${(0, _wanteddev_wds_engine.getColorByToken)(theme, color)};

    ${dividerSizeStyle({
	size,
	vertical,
	thickness
})}

    ${require_utils_internal_responsive_props.createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params, breakpoint) => _wanteddev_wds_engine.css`
        ${dividerSizeStyle({
	size: require_utils_internal_responsive_props.getPreviousValue({
		xs,
		sm,
		md,
		lg,
		xl
	}, "size", size, breakpoint),
	thickness: require_utils_internal_responsive_props.getPreviousValue({
		xs,
		sm,
		md,
		lg,
		xl
	}, "thickness", thickness, breakpoint),
	vertical: require_utils_internal_responsive_props.getPreviousValue({
		xs,
		sm,
		md,
		lg,
		xl
	}, "vertical", vertical, breakpoint)
})}
        ${params?.sx}
      `)}
  `;
const dividerSizeStyle = ({ size, thickness, vertical }) => _wanteddev_wds_engine.css`
  ${Boolean(thickness) && (vertical ? _wanteddev_wds_engine.css`
        border-width: 0px;
        border-right-width: ${require_utils_internal_css.toCssValue(thickness)};
      ` : _wanteddev_wds_engine.css`
        border-width: 0px;
        border-bottom-width: ${require_utils_internal_css.toCssValue(thickness)};
      `)}

  ${vertical ? _wanteddev_wds_engine.css`
        width: 0px;
        height: ${require_utils_internal_css.toCssValue(size)};
      ` : _wanteddev_wds_engine.css`
        height: 0px;
        width: ${require_utils_internal_css.toCssValue(size)};
      `};
`;
//#endregion
exports.dividerStyle = dividerStyle;
