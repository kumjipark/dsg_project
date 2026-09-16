'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_color = require("../../utils/color.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/action-area/style.ts
const actionAreaStyle = ({ divider, background, extra }) => (theme) => _wanteddev_wds_engine.css`
    width: 100%;
    padding: var(--wds-action-area-margin-y, 20px)
      var(--wds-action-area-margin-x, 20px);
    position: relative;

    ${actionAreaBackgroundStyle({
	divider,
	background,
	extra
}, theme)}
  `;
const actionAreaBackgroundStyle = ({ divider, background, extra }, theme) => {
	switch (extra) {
		case true: return _wanteddev_wds_engine.css`
        ${divider && _wanteddev_wds_engine.css`
          border-top: 1px solid ${theme.semantic.line.normal.neutral};
        `}
        background-color: ${theme.semantic.background.elevated.normal};
      `;
		default: return _wanteddev_wds_engine.css`
        ${background ? _wanteddev_wds_engine.css`
              &::before {
                pointer-events: none;
                ${require_utils_color.gradient(theme.semantic.background.elevated.normal, "top", "calc(var(--wds-action-area-margin-y, 20px) * 2)", "mask")}
                height: calc(100% + var(--wds-action-area-margin-y, 20px));
                content: '';
                z-index: 0;
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
              }

              & > * {
                position: relative;
              }
            ` : _wanteddev_wds_engine.css`
              &::before {
                pointer-events: none;
                content: '';
                z-index: 0;
                position: absolute;
                left: 0;
                bottom: 0;
                height: 100%;
                width: 100%;
              }

              & > * {
                position: relative;
              }
            `}
      `;
	}
};
const actionButtonCancel = ({ variant, parentVariant }) => {
	if (parentVariant === "neutral" && variant !== "sub") return _wanteddev_wds_engine.css`
      flex: 1 1 0;
      padding: 12px 15px;
    `;
};
//#endregion
exports.actionAreaStyle = actionAreaStyle;
exports.actionButtonCancel = actionButtonCancel;
