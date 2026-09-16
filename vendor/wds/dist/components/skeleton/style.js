'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const require_runtime = require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_responsive_props = require("../../utils/internal/responsive-props.js");
const require_utils_internal_css = require("../../utils/internal/css.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let object_path = require("object-path");
object_path = require_runtime.__toESM(object_path);
//#region src/components/skeleton/style.ts
const pulse = _wanteddev_wds_engine.keyframes`
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
	const opacity = object_path.default.get(theme, opacityProp);
	return _wanteddev_wds_engine.css`
      position: relative;
      flex-shrink: 0;
      width: 100%;

      ${animation && _wanteddev_wds_engine.css`
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

    ${require_utils_internal_responsive_props.createResponsiveStyle({
		xs,
		sm,
		md,
		lg,
		xl
	}, theme)((params) => _wanteddev_wds_engine.css`
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
		case "text": return _wanteddev_wds_engine.css`
        height: ${require_utils_internal_css.toCssValue(height) ?? "22px"};

        > span {
          ${width !== void 0 && _wanteddev_wds_engine.css`
            width: ${require_utils_internal_css.toCssValue(width)};
          `}
        }
      `;
		case "rectangle":
		case "circle": return _wanteddev_wds_engine.css`
        ${width !== void 0 && _wanteddev_wds_engine.css`
          width: ${require_utils_internal_css.toCssValue(width)};
        `}
        ${height !== void 0 && _wanteddev_wds_engine.css`
          height: ${require_utils_internal_css.toCssValue(height)};
        `}
      `;
	}
};
const skeletonVariantStyle = ({ variant, align: alignProp, color: colorProp, radius = "initial" }, theme) => {
	const color = colorProp ? (0, _wanteddev_wds_engine.getColorByToken)(theme, colorProp) : colorProp;
	switch (variant) {
		case "text": return _wanteddev_wds_engine.css`
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
		case "rectangle": return _wanteddev_wds_engine.css`
        border-radius: ${require_utils_internal_css.toCssValue(radius)};

        & > span {
          background-color: ${color ?? theme.semantic.fill.alternative};
        }
      `;
		case "circle": return _wanteddev_wds_engine.css`
        border-radius: 50%;

        & > span {
          background-color: ${color ?? theme.semantic.fill.normal};
        }
      `;
	}
};
//#endregion
exports.skeletonStyle = skeletonStyle;
