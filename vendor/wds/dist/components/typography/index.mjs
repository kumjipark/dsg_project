'use client';
import { createResponsiveStyle, getPreviousValue } from "../../utils/internal/responsive-props.mjs";
import { ellipsisTypographyStyle, typographyStyle } from "../../utils/typography.mjs";
import { Box, css, getColorByToken } from "@wanteddev/wds-engine";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/typography/index.tsx
const Typography = forwardRef(({ as, variant = "body1", weight = "regular", noWrap = false, display, align, color, sx, xs, sm, md, lg, xl, ...props }, ref) => {
	return /* @__PURE__ */ jsx(Box, {
		as: as || "span",
		ref,
		sx: [(theme) => css`
            ${typographyStyle(variant, weight)}
            ${noWrap && ellipsisTypographyStyle(1)}
            ${Boolean(align) && css`
              text-align: ${align};
            `}
            ${Boolean(display) && css`
              display: ${display};
            `}
            ${Boolean(color) ? css`
                  color: ${getColorByToken(theme, color)};
                ` : css`
                  color: inherit;
                `}

            ${createResponsiveStyle({
			xs,
			sm,
			md,
			lg,
			xl
		}, theme)((params, breakpoint) => css`
                ${(Boolean(params?.variant) || Boolean(params?.weight)) && typographyStyle(getPreviousValue({
			xs,
			sm,
			md,
			lg,
			xl
		}, "variant", variant, breakpoint), getPreviousValue({
			xs,
			sm,
			md,
			lg,
			xl
		}, "weight", weight, breakpoint))}

                ${Boolean(params?.align) && css`
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
export { Typography };
