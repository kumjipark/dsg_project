'use client';
import { FlexBox } from "../flex-box/index.mjs";
import { toastCircleIconWrapperStyle } from "./style.mjs";
import { IconCircleCheckFill, IconCircleCloseFill, IconTriangleExclamationFill } from "@wanteddev/wds-icon";
import { jsx } from "react/jsx-runtime";
//#region src/components/toast/constants.tsx
const toastIconComponent = {
	normal: null,
	positive: /* @__PURE__ */ jsx(FlexBox, {
		alignItems: "center",
		justifyContent: "center",
		sx: toastCircleIconWrapperStyle,
		children: /* @__PURE__ */ jsx(IconCircleCheckFill, {
			"aria-label": "positive",
			sx: (theme) => ({ color: theme.atomic.green[60] })
		})
	}),
	cautionary: /* @__PURE__ */ jsx(FlexBox, {
		alignItems: "center",
		justifyContent: "center",
		sx: toastCircleIconWrapperStyle,
		children: /* @__PURE__ */ jsx(IconTriangleExclamationFill, {
			"aria-label": "cautionary",
			sx: (theme) => ({ color: theme.atomic.orange[60] })
		})
	}),
	negative: /* @__PURE__ */ jsx(FlexBox, {
		alignItems: "center",
		justifyContent: "center",
		sx: toastCircleIconWrapperStyle,
		children: /* @__PURE__ */ jsx(IconCircleCloseFill, {
			"aria-label": "negative",
			sx: (theme) => ({ color: theme.atomic.red[60] })
		})
	})
};
const TOAST_NAME = "Toast";
const TOAST_CONTAINER_NAME = "ToastContainer";
const TOAST_CONTENT_NAME = "ToastContent";
const TOAST_ICON_NAME = "ToastIcon";
//#endregion
export { TOAST_CONTAINER_NAME, TOAST_CONTENT_NAME, TOAST_ICON_NAME, TOAST_NAME, toastIconComponent };
