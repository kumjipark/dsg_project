'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_text_button_index = require("../text-button/index.js");
const require_components_action_area_index = require("../action-area/index.js");
const require_components_date_calendar_helpers = require("../date-calendar/helpers.js");
const require_components_picker_action_area_contexts = require("./contexts.js");
const require_components_picker_action_area_style = require("./style.js");
const require_components_picker_action_area_constants = require("./constants.js");
let react = require("react");
let _radix_ui_primitive = require("@radix-ui/primitive");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/picker-action-area/index.tsx
const PickerActionArea = (0, react.forwardRef)(({ sx, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_action_area_index.ActionArea, {
		ref,
		variant: "strong",
		...props,
		sx: [require_components_picker_action_area_style.pickerActionAreaStyle, sx]
	});
});
PickerActionArea.displayName = "PickerActionArea";
const PickerActionAreaButton = (0, react.forwardRef)(({ variant, ...props }, ref) => {
	const { initialValue, value, timezone, onChangeComplete, mode } = require_components_picker_action_area_contexts.usePickerActionAreaContext(require_components_picker_action_area_constants.PICKER_ACTION_AREA_BUTTON_NAME);
	const isRange = mode === "range";
	(0, react.useEffect)(() => {
		if (variant === "now" && isRange && process.env.NODE_ENV !== "production") console.warn("[WDS] PickerActionAreaButton: \"now\" variant is not supported in DateRangePicker. Use \"accept\", \"cancel\", or \"reset\" instead.");
	}, [variant, isRange]);
	switch (variant) {
		case "now": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_text_button_index.TextButton, {
			ref,
			color: "assistive",
			size: "small",
			disabled: isRange,
			...props,
			onClick: isRange ? void 0 : (0, _radix_ui_primitive.composeEventHandlers)(props.onClick, () => {
				onChangeComplete(require_components_date_calendar_helpers.dateTypeToDateObject(/* @__PURE__ */ new Date(), timezone));
			}),
			sx: [{ margin: "0px 6px" }, props.sx]
		});
		case "cancel": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_text_button_index.TextButton, {
			ref,
			color: "assistive",
			size: "small",
			...props,
			onClick: (0, _radix_ui_primitive.composeEventHandlers)(props.onClick, () => {
				onChangeComplete(initialValue.current);
			}),
			sx: [{ margin: "0px 6px" }, props.sx]
		});
		case "reset": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_text_button_index.TextButton, {
			ref,
			color: "assistive",
			size: "small",
			...props,
			onClick: (0, _radix_ui_primitive.composeEventHandlers)(props.onClick, () => {
				onChangeComplete(isRange ? [void 0, void 0] : void 0);
			}),
			sx: [{ margin: "0px 6px" }, props.sx]
		});
		case "accept": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_text_button_index.TextButton, {
			ref,
			color: "primary",
			size: "small",
			...props,
			onClick: (0, _radix_ui_primitive.composeEventHandlers)(props.onClick, () => {
				onChangeComplete(value);
			}),
			sx: [{ margin: "0px 6px" }, props.sx]
		});
		default: return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_text_button_index.TextButton, {
			ref,
			color: "assistive",
			size: "small",
			...props,
			sx: [{ margin: "0px 6px" }, props.sx]
		});
	}
});
PickerActionAreaButton.displayName = require_components_picker_action_area_constants.PICKER_ACTION_AREA_BUTTON_NAME;
//#endregion
exports.PickerActionArea = PickerActionArea;
exports.PickerActionAreaButton = PickerActionAreaButton;
