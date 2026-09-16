'use client';
import { FlexBox } from "../flex-box/index.mjs";
import { playBadgeStyle } from "./style.mjs";
import { forwardRef } from "react";
import { IconPlay } from "@wanteddev/wds-icon";
import { jsx } from "react/jsx-runtime";
//#region src/components/play-badge/index.tsx
const PlayBadge = forwardRef(({ size = "medium", alternative = false, xs, sm, md, lg, xl, ...props }, ref) => {
	return /* @__PURE__ */ jsx(FlexBox, {
		ref,
		...props,
		sx: [playBadgeStyle({
			size,
			alternative,
			xs,
			sm,
			md,
			lg,
			xl
		}), props.sx],
		children: /* @__PURE__ */ jsx(IconPlay, {})
	});
});
PlayBadge.displayName = "PlayBadge";
//#endregion
export { PlayBadge };
