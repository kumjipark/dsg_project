'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_responsive_props = require("../../utils/internal/responsive-props.js");
const require_utils_internal_css = require("../../utils/internal/css.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/thumbnail/style.ts
const thumbnailStyle = ({ ratio, portrait, radius, border, width, xs, sm, md, lg, xl }) => (theme) => _wanteddev_wds_engine.css`
    position: relative;

    ${width !== void 0 && _wanteddev_wds_engine.css`
      width: ${require_utils_internal_css.toCssValue(width)};
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

    ${require_utils_internal_responsive_props.createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params, breakpoint) => _wanteddev_wds_engine.css`
        ${(params?.ratio !== void 0 || params?.portrait !== void 0) && thumbnailRatioStyle({
	ratio: require_utils_internal_responsive_props.getPreviousValue({
		xs,
		sm,
		md,
		lg,
		xl
	}, "ratio", ratio, breakpoint),
	portrait: require_utils_internal_responsive_props.getPreviousValue({
		xs,
		sm,
		md,
		lg,
		xl
	}, "portrait", portrait, breakpoint)
})}
        ${thumbnailBorderRadiusStyle(params || {}, theme)}
        
        ${params?.width !== void 0 && _wanteddev_wds_engine.css`
          width: ${require_utils_internal_css.toCssValue(params.width)};
        `}

        ${params?.sx}
      `)}
  `;
const thumbnailBorderRadiusStyle = ({ radius, border }, theme) => _wanteddev_wds_engine.css`
  ${radius === true && _wanteddev_wds_engine.css`
    border-radius: 12px;
  `}
  ${radius === false && _wanteddev_wds_engine.css`
    border-radius: 0px;
  `}

  ${border === true && _wanteddev_wds_engine.css`
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

  ${border === false && _wanteddev_wds_engine.css`
    border: none;
  `}
`;
const thumbnailRatioStyle = ({ ratio, portrait }) => {
	if (!ratio) return;
	const [width, height] = ratio.split(":");
	return _wanteddev_wds_engine.css`
    aspect-ratio: ${portrait ? `${height} / ${width}` : `${width} / ${height}`};
  `;
};
//#endregion
exports.thumbnailStyle = thumbnailStyle;
