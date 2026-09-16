'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_responsive_props = require("../../utils/internal/responsive-props.js");
const require_utils_typography = require("../../utils/typography.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/section-header/style.ts
const sectionHeaderStyle = ({ size, platform, color, xs, sm, md, lg, xl }) => (theme) => _wanteddev_wds_engine.css`
    width: 100%;

    [data-role='section-header-content'],
    [data-role='section-header-content-heading'] {
      font: inherit;
      color: inherit;
    }

    [data-role='section-header-trailing-content']
      [wds-component='icon-button'][data-variant='normal'],
    [data-role='section-header-heading-content']
      [wds-component='icon-button'][data-variant='normal'] {
      color: ${theme.semantic.label.assistive};
    }

    ${sectionHeaderSizeStyle({
	size,
	color,
	platform
}, theme)}

    ${require_utils_internal_responsive_props.createResponsiveStyle({
	xs,
	sm,
	md,
	lg,
	xl
}, theme)((params, breakpoint) => _wanteddev_wds_engine.css`
        ${(Boolean(params?.size) || Boolean(params?.platform)) && sectionHeaderSizeStyle({
	size: require_utils_internal_responsive_props.getPreviousValue({
		xs,
		sm,
		md,
		lg,
		xl
	}, "size", size, breakpoint),
	color,
	platform: require_utils_internal_responsive_props.getPreviousValue({
		xs,
		sm,
		md,
		lg,
		xl
	}, "platform", platform, breakpoint)
}, theme)}
        ${params?.sx}
      `)}
  `;
const sectionHeaderSizeStyle = ({ size, color, platform }, theme) => {
	switch (size) {
		case "xsmall": return _wanteddev_wds_engine.css`
        color: ${(0, _wanteddev_wds_engine.getColorByToken)(theme, color ?? "semantic.label.alternative")};
        ${require_utils_typography.typographyStyle("label1", "bold")};

        [data-role='section-header-heading-content'],
        [data-role='section-header-trailing-content'] {
          max-height: 20px;
        }
      `;
		case "small": return _wanteddev_wds_engine.css`
        color: ${(0, _wanteddev_wds_engine.getColorByToken)(theme, color ?? "semantic.label.strong")};
        ${require_utils_typography.typographyStyle(platform === "desktop" ? "headline1" : "headline2", "bold")};

        [data-role='section-header-heading-content'],
        [data-role='section-header-trailing-content'] {
          max-height: ${platform === "desktop" ? "26px" : "24px"};
        }
      `;
		case "medium": return _wanteddev_wds_engine.css`
        color: ${(0, _wanteddev_wds_engine.getColorByToken)(theme, color ?? "semantic.label.strong")};
        ${require_utils_typography.typographyStyle(platform === "desktop" ? "heading1" : "heading2", "bold")};

        [data-role='section-header-heading-content'],
        [data-role='section-header-trailing-content'] {
          max-height: ${platform === "desktop" ? "30px" : "28px"};
        }
      `;
		case "large": return _wanteddev_wds_engine.css`
        color: ${(0, _wanteddev_wds_engine.getColorByToken)(theme, color ?? "semantic.label.strong")};
        ${require_utils_typography.typographyStyle(platform === "desktop" ? "title2" : "title3", "bold")};

        [data-role='section-header-heading-content'],
        [data-role='section-header-trailing-content'] {
          max-height: ${platform === "desktop" ? "38px" : "32px"};
        }
      `;
	}
};
const sectionHeaderNavigationStyle = (theme) => _wanteddev_wds_engine.css`
  padding: 0px;
  margin: 0px;
  overflow: hidden;
  border-radius: 10px;
  height: 32px;
  border: 1px solid ${theme.semantic.line.normal.neutral};
`;
const sectionHeaderNavigationButtonStyle = (theme) => _wanteddev_wds_engine.css`
  color: ${theme.semantic.label.alternative};
  cursor: pointer;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin: 0px;
  padding: 0px;
  display: flex;
  width: 32px;
  height: 32px;
  outline-offset: -2px;
  background-color: transparent;
  border: none;

  &[aria-disabled='true'],
  &:disabled {
    color: ${theme.semantic.label.disable};
    cursor: initial;
  }
`;
//#endregion
exports.sectionHeaderNavigationButtonStyle = sectionHeaderNavigationButtonStyle;
exports.sectionHeaderNavigationStyle = sectionHeaderNavigationStyle;
exports.sectionHeaderStyle = sectionHeaderStyle;
