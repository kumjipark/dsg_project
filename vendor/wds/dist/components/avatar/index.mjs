'use client';
import { ImageBase } from "../image-base/index.mjs";
import { avatarWrapperStyle, fallbackWrapperStyle } from "./style.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef, useEffect, useRef, useState } from "react";
import { IconCompany, IconGraduation, IconPersonFill } from "@wanteddev/wds-icon";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/avatar/index.tsx
const Avatar = forwardRef(({ size = "small", variant = "person", className, style, sx, xs, sm, md, lg, xl, children, ...props }, ref) => {
	const getDefaultFallback = () => {
		switch (variant) {
			case "person": return /* @__PURE__ */ jsx(IconPersonFill, {});
			case "academy": return /* @__PURE__ */ jsx(IconGraduation, {});
			case "company": return /* @__PURE__ */ jsx(IconCompany, {});
		}
	};
	const [imageLoadingStatus, setImageLoadingStatus] = useState("idle");
	const prevSrc = useRef(props.src);
	useEffect(() => {
		if (prevSrc.current !== props.src) {
			prevSrc.current = props.src;
			setImageLoadingStatus("idle");
		}
	}, [props.src]);
	return /* @__PURE__ */ jsxs(Box, {
		ref,
		className,
		"wds-component": "avatar",
		sx: [avatarWrapperStyle({
			size,
			variant,
			xs,
			sm,
			md,
			lg,
			xl
		}), sx],
		"data-state": imageLoadingStatus,
		style,
		children: [imageLoadingStatus !== "error" && Boolean(props.src) ? /* @__PURE__ */ jsx(ImageBase, {
			...props,
			onLoad: () => {
				props.onLoad?.();
				setImageLoadingStatus("loaded");
			},
			onError: () => {
				props.onError?.();
				setImageLoadingStatus("error");
			}
		}) : /* @__PURE__ */ jsx(Box, {
			"data-role": "avatar-fallback",
			sx: fallbackWrapperStyle,
			children: getDefaultFallback()
		}), children]
	});
});
Avatar.displayName = "Avatar";
//#endregion
export { Avatar };
