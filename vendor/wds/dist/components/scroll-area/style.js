'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/scroll-area/style.ts
const scrollAreaStyle = _wanteddev_wds_engine.css`
  position: relative;
  overflow: hidden;
`;
const viewportStyle = _wanteddev_wds_engine.css`
  width: 100%;
  height: 100%;
`;
const scrollBarStyle = ({ orientation, size }) => (theme) => _wanteddev_wds_engine.css`
    display: flex;
    touch-action: none;
    user-select: none;
    background: transparent;
    transition:
      width 0.2s ease,
      height 0.2s ease,
      opacity 0.2s ease;

    --radix-scroll-area-thumb-width: 100%;
    --radix-scroll-area-thumb-height: 100%;

    [data-role='scroll-area-bar-wrapper'] {
      width: 100%;
      height: 100%;
    }

    ${orientation === "vertical" ? _wanteddev_wds_engine.css`
          height: 100%;
          border-left-width: 1px;
          border-left-color: transparent;
          padding: 3px;
        ` : _wanteddev_wds_engine.css`
          width: 100%;
          flex-direction: column;
          border-top-width: 1px;
          border-top-color: transparent;
          padding: 3px;
        `}

    &[data-state='hidden'] {
      opacity: 0;
    }
    &[data-state='visible'] {
      opacity: 1;
    }

    ${scrollbarSizeStyle({
	size,
	orientation
}, theme)}
  `;
const scrollbarSizeStyle = ({ size, orientation }, theme) => {
	switch (size) {
		case "small": return orientation === "vertical" ? _wanteddev_wds_engine.css`
            width: 9px;

            &:hover {
              width: 13px;
            }
          ` : _wanteddev_wds_engine.css`
            height: 9px;

            &:hover {
              height: 13px;
            }
          `;
		case "medium": return orientation === "vertical" ? _wanteddev_wds_engine.css`
            width: 13px;

            &:hover {
              width: 17px;
            }
          ` : _wanteddev_wds_engine.css`
            height: 13px;

            &:hover {
              height: 17px;
            }
          `;
		case "responsive": return _wanteddev_wds_engine.css`
        ${scrollbarSizeStyle({
			size: "medium",
			orientation
		}, theme)}

        @media (max-width: ${theme.breakpoint.sm}) {
          ${scrollbarSizeStyle({
			size: "small",
			orientation
		}, theme)}
        }
      `;
	}
};
const scrollBarThumbStyle = (theme) => _wanteddev_wds_engine.css`
  cursor: initial;
  position: relative;
  border-radius: 10px;
  background-color: ${theme.semantic.fill.strong};

  & > [wds-component='with-interaction'] {
    transition: opacity 0.2s ease;
  }
`;
//#endregion
exports.scrollAreaStyle = scrollAreaStyle;
exports.scrollBarStyle = scrollBarStyle;
exports.scrollBarThumbStyle = scrollBarThumbStyle;
exports.viewportStyle = viewportStyle;
