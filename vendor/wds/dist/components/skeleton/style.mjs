'use client';
import { createResponsiveStyle } from "../../utils/internal/responsive-props.mjs";
import { toCssValue } from "../../utils/internal/css.mjs";
import { css, getColorByToken, keyframes } from "@wanteddev/wds-engine";
import objectPath from "object-path";
//#region src/components/skeleton/style.ts
const pulse = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
`;
const skeletonStyle = ({ xs, sm, md, lg, xl, animation, opacity: opacityProp = "opacity.100", ...props }) => (theme) => {
	const opacity = objectPath.get(theme, opacityProp);
	return css`
      position: relative;
      flex-shrink: 0;
      width: 100%;

      ${animation && css`
        animation: ${pulse} 2s ease-in-out infinite;
      `}

      & > span {
        border-radius: inherit;
        display: block;
        width: 100%;
        height: 100%;
        opacity: ${opacity};
      }

      ${skeletonVariantStyle(props, theme)}
      ${skeletonSizeStyle(props)}

    ${createResponsiveStyle({
		xs,
		sm,
		md,
		lg,
		xl
	}, theme)((params) => css`
          ${skeletonSizeStyle({
		...params,
		variant: props.variant
	})}
          ${params?.sx}
        `)}
    `;
};
const skeletonSizeStyle = ({ variant, width, height }) => {
	switch (variant) {
		case "text": return css`
        height: ${toCssValue(height) ?? "22px"};

        > span {
          ${width !== void 0 && css`
            width: ${toCssValue(width)};
          `}
        }
      `;
		case "rectangle":
		case "circle": return css`
        ${width !== void 0 && css`
          width: ${toCssValue(width)};
        `}
        ${height !== void 0 && css`
          height: ${toCssValue(height)};
        `}
      `;
	}
};
const skeletonVariantStyle = ({ variant, align: alignProp, color: colorProp, radius = "initial" }, theme) => {
	const color = colorProp ? getColorByToken(theme, colorProp) : colorProp;
	switch (variant) {
		case "text": return css`
        display: inline-flex;
        padding: 2px 0px;
        border-radius: 3px;
        justify-content: ${{
			left: "flex-start",
			center: "center",
			right: "flex-end"
		}[alignProp ?? "left"]};

        & > span {
          display: inline-block;
          background-color: ${color ?? theme.semantic.fill.normal};
        }
      `;
		case "rectangle": return css`
        border-radius: ${toCssValue(radius)};

        & > span {
          background-color: ${color ?? theme.semantic.fill.alternative};
        }
      `;
		case "circle": return css`
        border-radius: 50%;

        & > span {
          background-color: ${color ?? theme.semantic.fill.normal};
        }
      `;
	}
};
//#endregion
export { skeletonStyle };
