'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_icon_button_index = require("../icon-button/index.js");
const require_components_search_field_style = require("./style.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let _wanteddev_wds_icon = require("@wanteddev/wds-icon");
let _radix_ui_react_compose_refs = require("@radix-ui/react-compose-refs");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/search-field/index.tsx
const SearchField = (0, react.forwardRef)(({ readOnly, className, disabled, style, onReset, width, size = "medium", wrapperRef, sx, xs, sm, md, lg, xl, ...props }, ref) => {
	const parentRef = (0, react.useRef)(null);
	const inputRef = (0, react.useRef)(null);
	const composedRefs = (0, _radix_ui_react_compose_refs.useComposedRefs)(inputRef, ref);
	(0, react.useEffect)(() => {
		const container = parentRef.current;
		if (!container || disabled) return;
		const handleClick = (event) => {
			if (event.target.closest("input, textarea, button, a, [data-role=\"search-field-reset\"], [contenteditable]")) return;
			inputRef.current?.click();
			inputRef.current?.focus();
		};
		container.addEventListener("click", handleClick);
		return () => container.removeEventListener("click", handleClick);
	}, [disabled]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_wanteddev_wds_engine.Box, {
		className,
		style,
		"wds-component": "search-field",
		ref: (0, _radix_ui_react_compose_refs.useComposedRefs)(parentRef, wrapperRef),
		sx: [require_components_search_field_style.searchFieldWrapperStyle({
			readOnly,
			disabled,
			size,
			width,
			xs,
			sm,
			md,
			lg,
			xl,
			...props
		}), sx],
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
				"data-role": "search-field-icon",
				sx: [require_components_search_field_style.searchFieldContentStyle, {
					height: "20px",
					padding: "0px 2px",
					marginRight: "4px"
				}],
				alignItems: "center",
				justifyContent: "center",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconSearch, {})
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
				ref: composedRefs,
				type: "search",
				readOnly,
				"aria-readonly": readOnly,
				autoComplete: "off",
				disabled,
				"aria-disabled": disabled,
				...props
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
				"data-role": "search-field-reset",
				sx: [require_components_search_field_style.searchFieldContentStyle, {
					height: "22px",
					marginLeft: "8px"
				}],
				alignItems: "center",
				justifyContent: "center",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_icon_button_index.IconButton, {
					type: "button",
					size: 22,
					tabIndex: -1,
					onPointerDown: (e) => e.preventDefault(),
					onClick: () => {
						const input = inputRef.current;
						if (!input) return;
						requestAnimationFrame(() => {
							const prevValue = input.value;
							const event = new Event("change", { bubbles: true });
							input.value = "";
							props.onChange?.({
								...event,
								target: input,
								currentTarget: input,
								nativeEvent: {
									...event,
									target: input,
									currentTarget: input
								},
								isDefaultPrevented: () => false,
								isPropagationStopped: () => false,
								persist: () => {}
							});
							onReset?.(prevValue);
							input.focus();
						});
					},
					sx: (theme) => ({ color: theme.semantic.label.assistive }),
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconCircleCloseFill, {})
				})
			})
		]
	});
});
SearchField.displayName = "SearchField";
//#endregion
exports.SearchField = SearchField;
