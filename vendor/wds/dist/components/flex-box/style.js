'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_responsive_props = require("../../utils/internal/responsive-props.js");
const require_utils_internal_css = require("../../utils/internal/css.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/flex-box/style.ts
const flexBoxStyle = ({ xs, sm, md, lg, xl, ...props }) => (theme) => _wanteddev_wds_engine.css`
    display: flex;
    ${flexibleStyle(props)}

    ${require_utils_internal_responsive_props.createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params) => _wanteddev_wds_engine.css`
        ${flexibleStyle(params)}
        ${params?.sx}
      `)}
  `;
const flexibleStyle = ({ flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, flexBasis, gap, rowGap, columnGap } = {}) => _wanteddev_wds_engine.css`
  ${gap !== void 0 && _wanteddev_wds_engine.css`
    gap: ${require_utils_internal_css.toCssValue(gap)};
  `}
  ${rowGap !== void 0 && _wanteddev_wds_engine.css`
    row-gap: ${require_utils_internal_css.toCssValue(rowGap)};
  `}
    ${columnGap !== void 0 && _wanteddev_wds_engine.css`
    column-gap: ${require_utils_internal_css.toCssValue(columnGap)};
  `}
  ${flexDirection !== void 0 && _wanteddev_wds_engine.css`
    flex-direction: ${flexDirection};
  `}
  ${flexWrap !== void 0 && _wanteddev_wds_engine.css`
    flex-wrap: ${flexWrap};
  `}
	${justifyContent !== void 0 && _wanteddev_wds_engine.css`
    justify-content: ${justifyContent};
  `}
	${alignItems !== void 0 && _wanteddev_wds_engine.css`
    align-items: ${alignItems};
  `}
	${alignContent !== void 0 && _wanteddev_wds_engine.css`
    align-content: ${alignContent};
  `}
	${order !== void 0 && _wanteddev_wds_engine.css`
    order: ${order};
  `}
	${flex !== void 0 && _wanteddev_wds_engine.css`
    flex: ${flex};
  `}
	${flexGrow !== void 0 && _wanteddev_wds_engine.css`
    flex-grow: ${flexGrow};
  `}
	${flexShrink !== void 0 && _wanteddev_wds_engine.css`
    flex-shrink: ${flexShrink};
  `}
	${alignSelf !== void 0 && _wanteddev_wds_engine.css`
    align-self: ${alignSelf};
  `}
  ${flexBasis !== void 0 && _wanteddev_wds_engine.css`
    flex-basis: ${require_utils_internal_css.toCssValue(flexBasis)};
  `}
`;
//#endregion
exports.flexBoxStyle = flexBoxStyle;
