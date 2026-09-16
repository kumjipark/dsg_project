import { useRegionStore } from "../../stores/region-store.mjs";
import { Snackbar, SnackbarAction, SnackbarCloseButton, SnackbarContent, SnackbarDescription, SnackbarExtraContent, SnackbarHeading } from "../../components/snackbar/index.mjs";
import { Toast, ToastContainer, ToastContent, ToastIcon } from "../../components/toast/index.mjs";
import { Box } from "@wanteddev/wds-engine";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/theme-provider/store-provider/region.tsx
const isSnackbar = (item) => {
	return item.type === "snackbar";
};
const RegionArea = () => {
	const config = useRegionStore((state) => state.config);
	const items = useRegionStore((state) => state.items);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Box, {
		"wds-ignore-dismissable-layer": "true",
		style: {
			"--wds-region-viewport-max-width": `calc(${config.viewportMaxWidth})`,
			"--wds-region-viewport-bottom": `calc(env(safe-area-inset-bottom, 0px) + ${config.viewportBottom})`
		},
		role: "region",
		"aria-live": "polite",
		id: "wds-region-manager",
		"aria-label": "Notifications",
		children: /* @__PURE__ */ jsx(Box, {
			id: "wds-region-manager-bottom",
			sx: (theme) => ({
				position: "fixed",
				zIndex: 5500,
				justifyContent: "center",
				pointerEvents: "none",
				width: "fit-content",
				minWidth: "100px",
				alignItems: "center",
				display: "flex",
				flexDirection: "column",
				maxWidth: "var(--wds-region-viewport-max-width, 100%)",
				padding: "20px",
				left: "50%",
				transform: "translateX(-50%)",
				bottom: "var(--wds-region-viewport-bottom, 0px)",
				paddingBottom: "40px",
				[`@media (max-width: ${theme.breakpoint.sm})`]: {
					minWidth: "100%",
					paddingBottom: "20px"
				}
			})
		})
	}), items.map((item) => {
		if (isSnackbar(item)) return /* @__PURE__ */ jsx(SnackbarRegion, { item }, item.id);
		return /* @__PURE__ */ jsx(ToastRegion, { item }, item.id);
	})] });
};
const SnackbarRegion = ({ item }) => {
	const remove = useRegionStore((state) => state.remove);
	const hide = useRegionStore((state) => state.hide);
	return /* @__PURE__ */ jsxs(Snackbar, {
		variant: item.variant,
		duration: item.duration,
		onAnimationEnd: (type) => {
			item.onAnimationEnd?.(type);
			if (type === "hide") remove(item.id);
		},
		onOpenChange: (open) => {
			if (!open) hide(item.id);
		},
		open: item.visibility === "visible",
		children: [
			/* @__PURE__ */ jsxs(SnackbarContent, {
				extraContent: item.extraContent && /* @__PURE__ */ jsx(SnackbarExtraContent, { children: item.extraContent }),
				children: [Boolean(item.title) && /* @__PURE__ */ jsx(SnackbarHeading, { children: item.title }), Boolean(item.description) && /* @__PURE__ */ jsx(SnackbarDescription, { children: item.description })]
			}),
			Boolean(item.action) && Object.keys(item.action).length > 0 && /* @__PURE__ */ jsx(SnackbarAction, { ...item.action }),
			Boolean(item.closeButton) && /* @__PURE__ */ jsx(SnackbarCloseButton, {})
		]
	}, item.id);
};
const ToastRegion = ({ item }) => {
	const remove = useRegionStore((state) => state.remove);
	const hide = useRegionStore((state) => state.hide);
	return /* @__PURE__ */ jsx(Toast, {
		variant: item.variant,
		duration: item.duration,
		onAnimationEnd: (type) => {
			item.onAnimationEnd?.(type);
			if (type === "hide") remove(item.id);
		},
		onOpenChange: (open) => {
			if (!open) hide(item.id);
		},
		open: item.visibility === "visible",
		children: /* @__PURE__ */ jsxs(ToastContainer, { children: [/* @__PURE__ */ jsx(ToastIcon, { children: item.icon }), /* @__PURE__ */ jsx(ToastContent, { children: item.content })] })
	});
};
//#endregion
export { RegionArea as default };
