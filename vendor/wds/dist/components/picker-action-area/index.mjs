'use client';
import { TextButton } from "../text-button/index.mjs";
import { ActionArea } from "../action-area/index.mjs";
import { dateTypeToDateObject } from "../date-calendar/helpers.mjs";
import { usePickerActionAreaContext } from "./contexts.mjs";
import { pickerActionAreaStyle } from "./style.mjs";
import { PICKER_ACTION_AREA_BUTTON_NAME } from "./constants.mjs";
import { forwardRef, useEffect } from "react";
import { composeEventHandlers } from "@radix-ui/primitive";
import { jsx } from "react/jsx-runtime";
//#region src/components/picker-action-area/index.tsx
const PickerActionArea = forwardRef(({ sx, ...props }, ref) => {
	return /* @__PURE__ */ jsx(ActionArea, {
		ref,
		variant: "strong",
		...props,
		sx: [pickerActionAreaStyle, sx]
	});
});
PickerActionArea.displayName = "PickerActionArea";
const PickerActionAreaButton = forwardRef(({ variant, ...props }, ref) => {
	const { initialValue, value, timezone, onChangeComplete, mode } = usePickerActionAreaContext(PICKER_ACTION_AREA_BUTTON_NAME);
	const isRange = mode === "range";
	useEffect(() => {
		if (variant === "now" && isRange && process.env.NODE_ENV !== "production") console.warn("[WDS] PickerActionAreaButton: \"now\" variant is not supported in DateRangePicker. Use \"accept\", \"cancel\", or \"reset\" instead.");
	}, [variant, isRange]);
	switch (variant) {
		case "now": return /* @__PURE__ */ jsx(TextButton, {
			ref,
			color: "assistive",
			size: "small",
			disabled: isRange,
			...props,
			onClick: isRange ? void 0 : composeEventHandlers(props.onClick, () => {
				onChangeComplete(dateTypeToDateObject(/* @__PURE__ */ new Date(), timezone));
			}),
			sx: [{ margin: "0px 6px" }, props.sx]
		});
		case "cancel": return /* @__PURE__ */ jsx(TextButton, {
			ref,
			color: "assistive",
			size: "small",
			...props,
			onClick: composeEventHandlers(props.onClick, () => {
				onChangeComplete(initialValue.current);
			}),
			sx: [{ margin: "0px 6px" }, props.sx]
		});
		case "reset": return /* @__PURE__ */ jsx(TextButton, {
			ref,
			color: "assistive",
			size: "small",
			...props,
			onClick: composeEventHandlers(props.onClick, () => {
				onChangeComplete(isRange ? [void 0, void 0] : void 0);
			}),
			sx: [{ margin: "0px 6px" }, props.sx]
		});
		case "accept": return /* @__PURE__ */ jsx(TextButton, {
			ref,
			color: "primary",
			size: "small",
			...props,
			onClick: composeEventHandlers(props.onClick, () => {
				onChangeComplete(value);
			}),
			sx: [{ margin: "0px 6px" }, props.sx]
		});
		default: return /* @__PURE__ */ jsx(TextButton, {
			ref,
			color: "assistive",
			size: "small",
			...props,
			sx: [{ margin: "0px 6px" }, props.sx]
		});
	}
});
PickerActionAreaButton.displayName = PICKER_ACTION_AREA_BUTTON_NAME;
//#endregion
export { PickerActionArea, PickerActionAreaButton };
