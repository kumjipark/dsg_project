import { Alert, AlertActionArea, AlertContainer, AlertContent, AlertDescription, AlertHeading } from "../../components/alert/index.mjs";
import { useAlertStore } from "../../stores/alert-store.mjs";
import { useCallback } from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/theme-provider/store-provider/alert.tsx
const AlertArea = () => {
	return /* @__PURE__ */ jsx(Fragment, { children: useAlertStore((state) => state.items).map((dialog) => /* @__PURE__ */ jsx(AlertPromise, { ...dialog }, dialog.id)) });
};
const AlertPromise = ({ id, content, title, confirm, cancel, direction = "normal", disableOutsideClickClose, disableEscapeKeyDownClose, sx, resolve }) => {
	const hide = useAlertStore((state) => state.hide);
	const handleClose = useCallback(() => {
		hide(id);
	}, [hide, id]);
	const handleCancel = useCallback((e) => {
		if (e?.defaultPrevented) return;
		handleClose();
		resolve("cancel");
	}, [handleClose, resolve]);
	const handleConfirm = useCallback((e) => {
		if (e?.defaultPrevented) return;
		handleClose();
		resolve("confirm");
	}, [handleClose, resolve]);
	return /* @__PURE__ */ jsx(Alert, {
		open: true,
		onOpenChange: (open) => !open && handleCancel(),
		children: /* @__PURE__ */ jsxs(AlertContainer, {
			disableOutsideClickClose,
			disableEscapeKeyDownClose,
			sx,
			children: [/* @__PURE__ */ jsxs(AlertContent, { children: [title && /* @__PURE__ */ jsx(AlertHeading, { children: title }), content && /* @__PURE__ */ jsx(AlertDescription, { children: content })] }), /* @__PURE__ */ jsxs(AlertActionArea, {
				flexDirection: direction === "reverse" ? "row-reverse" : "row",
				justifyContent: direction === "reverse" ? "initial" : "flex-end",
				children: [/* @__PURE__ */ jsx(Slot, {
					onClick: handleConfirm,
					children: /* @__PURE__ */ jsx(Slottable, { children: confirm })
				}), Boolean(cancel) && /* @__PURE__ */ jsx(Slot, {
					onClick: handleCancel,
					children: /* @__PURE__ */ jsx(Slottable, { children: cancel })
				})]
			})]
		})
	});
};
//#endregion
export { AlertArea as default };
