Object.defineProperties(exports, {
	__esModule: { value: true },
	[Symbol.toStringTag]: { value: "Module" }
});
require("../../_virtual/_rolldown/runtime.js");
const require_stores_region_store = require("../../stores/region-store.js");
const require_components_snackbar_index = require("../../components/snackbar/index.js");
const require_components_toast_index = require("../../components/toast/index.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/theme-provider/store-provider/region.tsx
const isSnackbar = (item) => {
	return item.type === "snackbar";
};
const RegionArea = () => {
	const config = require_stores_region_store.useRegionStore((state) => state.config);
	const items = require_stores_region_store.useRegionStore((state) => state.items);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
		"wds-ignore-dismissable-layer": "true",
		style: {
			"--wds-region-viewport-max-width": `calc(${config.viewportMaxWidth})`,
			"--wds-region-viewport-bottom": `calc(env(safe-area-inset-bottom, 0px) + ${config.viewportBottom})`
		},
		role: "region",
		"aria-live": "polite",
		id: "wds-region-manager",
		"aria-label": "Notifications",
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
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
		if (isSnackbar(item)) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SnackbarRegion, { item }, item.id);
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ToastRegion, { item }, item.id);
	})] });
};
const SnackbarRegion = ({ item }) => {
	const remove = require_stores_region_store.useRegionStore((state) => state.remove);
	const hide = require_stores_region_store.useRegionStore((state) => state.hide);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_snackbar_index.Snackbar, {
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
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_snackbar_index.SnackbarContent, {
				extraContent: item.extraContent && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_snackbar_index.SnackbarExtraContent, { children: item.extraContent }),
				children: [Boolean(item.title) && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_snackbar_index.SnackbarHeading, { children: item.title }), Boolean(item.description) && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_snackbar_index.SnackbarDescription, { children: item.description })]
			}),
			Boolean(item.action) && Object.keys(item.action).length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_snackbar_index.SnackbarAction, { ...item.action }),
			Boolean(item.closeButton) && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_snackbar_index.SnackbarCloseButton, {})
		]
	}, item.id);
};
const ToastRegion = ({ item }) => {
	const remove = require_stores_region_store.useRegionStore((state) => state.remove);
	const hide = require_stores_region_store.useRegionStore((state) => state.hide);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_toast_index.Toast, {
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
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_toast_index.ToastContainer, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_toast_index.ToastIcon, { children: item.icon }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_toast_index.ToastContent, { children: item.content })] })
	});
};
//#endregion
exports.default = RegionArea;
