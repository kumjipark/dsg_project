'use client';
import { createResponsiveStyle, getPreviousValue } from "../../utils/internal/responsive-props.mjs";
import { toCssValue } from "../../utils/internal/css.mjs";
import { css } from "@wanteddev/wds-engine";
//#region src/components/thumbnail/style.ts
const thumbnailStyle = ({ ratio, portrait, radius, border, width, xs, sm, md, lg, xl }) => (theme) => css`
    position: relative;

    ${width !== void 0 && css`
      width: ${toCssValue(width)};
    `}

    ${thumbnailRatioStyle({
	ratio,
	portrait
})}
    ${thumbnailBorderRadiusStyle({
	radius,
	border
}, theme)}

    img {
      border-radius: inherit;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    [data-role='thumbnail-overlay'] {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    ${createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params, breakpoint) => css`
        ${(params?.ratio !== void 0 || params?.portrait !== void 0) && thumbnailRatioStyle({
	ratio: getPreviousValue({
		xs,
		sm,
		md,
		lg,
		xl
	}, "ratio", ratio, breakpoint),
	portrait: getPreviousValue({
		xs,
		sm,
		md,
		lg,
		xl
	}, "portrait", portrait, breakpoint)
})}
        ${thumbnailBorderRadiusStyle(params || {}, theme)}
        
        ${params?.width !== void 0 && css`
          width: ${toCssValue(params.width)};
        `}

        ${params?.sx}
      `)}
  `;
const thumbnailBorderRadiusStyle = ({ radius, border }, theme) => css`
  ${radius === true && css`
    border-radius: 12px;
  `}
  ${radius === false && css`
    border-radius: 0px;
  `}

  ${border === true && css`
    position: relative;

    &::after {
      content: '';
      border-radius: inherit;
      inset: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      border: 1px solid ${theme.semantic.line.normal.neutral};
    }
  `}

  ${border === false && css`
    border: none;
  `}
`;
const thumbnailRatioStyle = ({ ratio, portrait }) => {
	if (!ratio) return;
	const [width, height] = ratio.split(":");
	return css`
    aspect-ratio: ${portrait ? `${height} / ${width}` : `${width} / ${height}`};
  `;
};
//#endregion
export { thumbnailStyle };
