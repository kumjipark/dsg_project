'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_responsive_props = require("../../utils/internal/responsive-props.js");
const require_utils_typography = require("../../utils/typography.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/typography/index.tsx
const Typography = (0, react.forwardRef)(({ as, variant = "body1", weight = "regular", noWrap = false, display, align, color, sx, xs, sm, md, lg, xl, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
		as: as || "span",
		ref,
		sx: [(theme) => _wanteddev_wds_engine.css`
            ${require_utils_typography.typographyStyle(variant, weight)}
            ${noWrap && require_utils_typography.ellipsisTypographyStyle(1)}
            ${Boolean(align) && _wanteddev_wds_engine.css`
              text-align: ${align};
            `}
            ${Boolean(display) && _wanteddev_wds_engine.css`
              display: ${display};
            `}
            ${Boolean(color) ? _wanteddev_wds_engine.css`
                  color: ${(0, _wanteddev_wds_engine.getColorByToken)(theme, color)};
                ` : _wanteddev_wds_engine.css`
                  color: inherit;
                `}

            ${require_utils_internal_responsive_props.createResponsiveStyle({
			xs,
			sm,
			md,
			lg,
			xl
		}, theme)((params, breakpoint) => _wanteddev_wds_engine.css`
                ${(Boolean(params?.variant) || Boolean(params?.weight)) && require_utils_typography.typographyStyle(require_utils_internal_responsive_props.getPreviousValue({
			xs,
			sm,
			md,
			lg,
			xl
		}, "variant", variant, breakpoint), require_utils_internal_responsive_props.getPreviousValue({
			xs,
			sm,
			md,
			lg,
			xl
		}, "weight", weight, breakpoint))}

                ${Boolean(params?.align) && _wanteddev_wds_engine.css`
                  text-align: ${params?.align};
                `}
                
                ${params?.sx}
              `)};
          `, sx],
		...props
	});
});
Typography.displayName = "Typography";
//#endregion
exports.Typography = Typography;
