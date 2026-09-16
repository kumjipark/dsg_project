'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_typography_index = require("../typography/index.js");
const require_components_list_index = require("../list/index.js");
const require_components_animation_presence_index = require("../animation-presence/index.js");
const require_components_popper_index = require("../popper/index.js");
const require_components_scroll_area_index = require("../scroll-area/index.js");
const require_components_autocomplete_constants = require("./constants.js");
const require_components_autocomplete_contexts = require("./contexts.js");
const require_components_autocomplete_style = require("./style.js");
const require_components_autocomplete_helpers = require("./helpers.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let _radix_ui_react_use_controllable_state = require("@radix-ui/react-use-controllable-state");
let _wanteddev_wds_icon = require("@wanteddev/wds-icon");
let _radix_ui_primitive = require("@radix-ui/primitive");
let _radix_ui_react_compose_refs = require("@radix-ui/react-compose-refs");
let _radix_ui_react_use_size = require("@radix-ui/react-use-size");
let _radix_ui_react_slot = require("@radix-ui/react-slot");
let react_jsx_runtime = require("react/jsx-runtime");
let _radix_ui_react_use_callback_ref = require("@radix-ui/react-use-callback-ref");
let _radix_ui_react_collection = require("@radix-ui/react-collection");
let react_dom = require("react-dom");
//#region src/components/autocomplete/index.tsx
const [Collection, useCollection] = (0, _radix_ui_react_collection.createCollection)(require_components_autocomplete_constants.AUTOCOMPLETE_NAME);
const Autocomplete = (0, react.forwardRef)(({ value: valueProp, defaultValue, onValueChange, open: openProp, defaultOpen, onOpenChange, asSelect = false, inputValue: inputValueProp, defaultInputValue, onInputValueChange, onSearch, ...props }, forwardedRef) => {
	const [node, setNode] = (0, react.useState)(null);
	const composedRefs = (0, _radix_ui_react_compose_refs.useComposedRefs)(forwardedRef, setNode);
	const { width } = (0, _radix_ui_react_use_size.useSize)(node) || {};
	const [value, setValue] = (0, _radix_ui_react_use_controllable_state.useControllableState)({
		prop: valueProp,
		defaultProp: defaultValue ?? "",
		onChange: onValueChange
	});
	const [inputValue, setInputValue] = (0, _radix_ui_react_use_controllable_state.useControllableState)({
		prop: inputValueProp,
		defaultProp: defaultInputValue ?? value,
		onChange: onInputValueChange
	});
	const [selectedOption, setSelectedOption] = (0, react.useState)(null);
	const [open, setOpen] = (0, _radix_ui_react_use_controllable_state.useControllableState)({
		prop: openProp,
		defaultProp: defaultOpen ?? false,
		onChange: (state) => {
			onOpenChange?.(state);
			if (!state) setSelectedOption(null);
		}
	});
	const handleOpenChange = (0, react.useCallback)((state, force) => {
		if (force && state === open) {
			setOpen(state);
			onOpenChange?.(state);
			if (!state) setSelectedOption(null);
		} else setOpen(state);
	}, [
		open,
		setOpen,
		onOpenChange,
		setSelectedOption
	]);
	const [input, setInput] = (0, react.useState)(null);
	const contentId = (0, react.useId)();
	(0, react.useEffect)(() => {
		const optionId = selectedOption?.ref.current?.id;
		if (optionId && open) input?.setAttribute("aria-activedescendant", optionId);
		else input?.removeAttribute("aria-activedescendant");
	}, [selectedOption, open]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_autocomplete_contexts.AutocompleteProvider, {
		contentId,
		open,
		onOpenChange: handleOpenChange,
		value,
		onValueChange: setValue,
		input,
		onInputChange: setInput,
		width,
		asSelect,
		inputValue,
		onInputValueChange: setInputValue,
		selectedOption,
		onSelectedOptionChange: setSelectedOption,
		onSearch: (0, _radix_ui_react_use_callback_ref.useCallbackRef)(onSearch),
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_popper_index.Popper, { children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Collection.Provider, {
			scope: void 0,
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_popper_index.PopperAnchor, { children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(AutocompleteRoot, {
				ref: composedRefs,
				...props
			}) })
		}) })
	});
});
Autocomplete.displayName = require_components_autocomplete_constants.AUTOCOMPLETE_NAME;
const AutocompleteRoot = (0, react.forwardRef)((props, ref) => {
	const { input } = require_components_autocomplete_contexts.useAutocompleteContext(require_components_autocomplete_constants.AUTOCOMPLETE_ROOT_NAME);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
		ref,
		...props,
		sx: [{ width: "fit-content" }, props.sx],
		onClick: (0, _radix_ui_primitive.composeEventHandlers)(props.onClick, (0, react.useCallback)((event) => {
			if (!event.currentTarget.contains(event.target)) return;
			if (!input?.disabled) input?.focus();
		}, [input]))
	});
});
AutocompleteRoot.displayName = require_components_autocomplete_constants.AUTOCOMPLETE_ROOT_NAME;
const AutocompleteField = (0, react.forwardRef)(({ children, ...props }, forwardedRef) => {
	const { open, contentId, onOpenChange, value, onValueChange, onInputChange, onInputValueChange, onSelectedOptionChange, selectedOption, inputValue, asSelect, input, onSearch } = require_components_autocomplete_contexts.useAutocompleteContext(require_components_autocomplete_constants.AUTOCOMPLETE_FIELD_NAME);
	const composedRefs = (0, _radix_ui_react_compose_refs.useComposedRefs)(forwardedRef, onInputChange);
	const getItems = useCollection(void 0);
	const isFocused = (0, react.useRef)(false);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Collection.Slot, {
		scope: void 0,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_radix_ui_react_slot.Slot, {
			ref: composedRefs,
			"aria-controls": contentId,
			"aria-haspopup": "listbox",
			"aria-autocomplete": "list",
			"aria-expanded": open,
			role: "combobox",
			type: "search",
			autoComplete: "off",
			value: inputValue,
			...props,
			onFocus: (0, _radix_ui_primitive.composeEventHandlers)(props.onFocus, () => {
				isFocused.current = true;
			}),
			onKeyDown: (0, _radix_ui_primitive.composeEventHandlers)(props.onKeyDown, (e) => {
				const items = getItems().filter(({ disabled }) => !disabled);
				let option;
				const rAF = (fn) => open ? fn() : requestAnimationFrame(fn);
				switch (e.key) {
					case "Home":
						if (!open) return;
						e.preventDefault();
						option = items.at(0);
						require_components_autocomplete_helpers.focusSelectedOption(option, items, true);
						onSelectedOptionChange(option ?? null);
						return;
					case "End":
						if (!open) return;
						e.preventDefault();
						option = items.at(items.length - 1);
						require_components_autocomplete_helpers.focusSelectedOption(option, items, true);
						onSelectedOptionChange(option ?? null);
						return;
					case "PageUp":
						e.preventDefault();
						if (selectedOption) {
							const diff = items.findIndex((v) => v.ref === selectedOption.ref);
							if (diff !== -1) option = items.at(diff - 5 < 0 ? 0 : diff - 5);
							else option = items.at(0);
						} else option = items.at(0);
						if (!open) (0, react_dom.flushSync)(() => onOpenChange(true));
						rAF(() => {
							require_components_autocomplete_helpers.focusSelectedOption(option, items, true);
							onSelectedOptionChange(option ?? null);
						});
						return;
					case "PageDown":
						e.preventDefault();
						if (selectedOption) {
							const diff = items.findIndex((v) => v.ref === selectedOption.ref);
							if (diff !== -1) option = items.at(diff + 5 > items.length - 1 ? items.length - 1 : diff + 5);
							else option = items.at(0);
						} else option = items.at(5 > items.length - 1 ? items.length - 1 : 5);
						if (!open) (0, react_dom.flushSync)(() => onOpenChange(true));
						rAF(() => {
							require_components_autocomplete_helpers.focusSelectedOption(option, items, true);
							onSelectedOptionChange(option ?? null);
						});
						return;
					case "ArrowUp":
						e.preventDefault();
						if (selectedOption) {
							const index = items.findIndex((v) => v.ref === selectedOption.ref);
							if (index !== -1) option = items.at(index - 1 < 0 ? 0 : index - 1);
							else option = items.at(0);
						} else option = items.at(0);
						if (!open) (0, react_dom.flushSync)(() => onOpenChange(true));
						rAF(() => {
							require_components_autocomplete_helpers.focusSelectedOption(option, items, true);
							onSelectedOptionChange(option ?? null);
						});
						return;
					case "ArrowDown":
						e.preventDefault();
						if (selectedOption) {
							const index = items.findIndex((v) => v.ref === selectedOption.ref);
							if (index !== -1) option = items.at(index + 1 > items.length - 1 ? items.length - 1 : index + 1);
							else option = items.at(0);
						} else option = items.at(0);
						if (!open) (0, react_dom.flushSync)(() => onOpenChange(true));
						rAF(() => {
							require_components_autocomplete_helpers.focusSelectedOption(option, items, true);
							onSelectedOptionChange(option ?? null);
						});
						return;
					case "Enter": if (open && selectedOption) {
						e.preventDefault();
						if (selectedOption.disabled) return;
						onInputValueChange(selectedOption.value);
						onValueChange(selectedOption.value);
						onOpenChange(false);
						onSearch?.(selectedOption.value);
						return;
					} else if (!asSelect) onSearch?.(value);
					case "Escape":
						e.preventDefault();
						if (open && selectedOption) onOpenChange(false);
				}
			}),
			onBlur: (0, _radix_ui_primitive.composeEventHandlers)(props.onBlur, () => {
				isFocused.current = false;
				onOpenChange(false, true);
				requestAnimationFrame(() => {
					if (document.activeElement !== input && asSelect) {
						const newValue = getItems().find((v) => v.value === inputValue && !v.disabled)?.value ?? value;
						onValueChange(newValue);
						onInputValueChange(newValue);
					}
				});
			}),
			onClick: (0, _radix_ui_primitive.composeEventHandlers)(props.onClick, () => {
				if (value === "" || !open && !input?.disabled) onOpenChange(!open);
			}),
			onChange: (0, _radix_ui_primitive.composeEventHandlers)(props.onChange, (e) => {
				const newValue = e.target.value;
				if (!asSelect) onValueChange(newValue);
				onInputValueChange(newValue);
				if (newValue !== "" && isFocused.current) onOpenChange(true);
				else if (asSelect) onValueChange(newValue);
			}),
			children
		})
	});
});
AutocompleteField.displayName = require_components_autocomplete_constants.AUTOCOMPLETE_FIELD_NAME;
const AutocompleteList = (0, react.forwardRef)(({ children, as, forceMount = false, disableTrappedContent = false, ...props }, ref) => {
	const { input, open, contentId, asSelect, value, width, onSelectedOptionChange } = require_components_autocomplete_contexts.useAutocompleteContext(require_components_autocomplete_constants.AUTOCOMPLETE_LIST_NAME);
	const getItems = useCollection(void 0);
	(0, react.useLayoutEffect)(() => {
		if (!open || !asSelect || disableTrappedContent) return;
		requestAnimationFrame(() => {
			const items = getItems();
			const option = items.find((v) => v.value === value);
			require_components_autocomplete_helpers.focusSelectedOption(option, items);
			onSelectedOptionChange(option ?? null);
		});
	}, [open, disableTrappedContent]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_animation_presence_index.AnimationPresence, {
		present: open && !input?.readOnly && !input?.disabled || forceMount,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_popper_index.PopperContent, {
			role: "presentation",
			ref,
			offset: 8,
			position: "bottom-center",
			...props,
			"data-status": open ? "open" : "close",
			sx: [
				{ width },
				require_components_autocomplete_style.autocompleteListStyle,
				props.sx
			],
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
				as: as ?? _radix_ui_react_slot.Slot,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_scroll_area_index.ScrollArea, {
					scrollbars: "vertical",
					size: "small",
					zIndex: 11,
					viewportProps: { sx: require_components_autocomplete_style.autocompleteScrollAreaStyle },
					sx: { borderRadius: "inherit" },
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_list_index.List, {
						role: "listbox",
						id: contentId,
						gap: "4px",
						sx: require_components_autocomplete_style.autocompleteListContentStyle,
						onMouseDown: (e) => e.preventDefault(),
						children
					})
				})
			})
		})
	});
});
AutocompleteList.displayName = require_components_autocomplete_constants.AUTOCOMPLETE_LIST_NAME;
const AutocompleteGroup = (0, react.forwardRef)(({ title, children, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
		ref,
		role: "group",
		alignItems: "center",
		flexDirection: "column",
		gap: "4px",
		...props,
		sx: [{ width: "100%" }, props.sx],
		children: [Boolean(title) && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
			"data-role": "autocomplete-group-title",
			variant: "caption1",
			weight: "bold",
			color: "semantic.label.alternative",
			sx: require_components_autocomplete_style.autocompleteGroupTitleStyle,
			children: title
		}), children]
	});
});
AutocompleteGroup.displayName = "AutocompleteGroup";
const AutocompleteOption = (0, react.forwardRef)(({ disabled, value, children, ...props }, forwardedRef) => {
	const ref = (0, react.useRef)(null);
	const composedRefs = (0, _radix_ui_react_compose_refs.useComposedRefs)(forwardedRef, ref);
	const { input, onValueChange, value: contextValue, onInputValueChange, asSelect, selectedOption, onSelectedOptionChange, onSearch, onOpenChange } = require_components_autocomplete_contexts.useAutocompleteContext(require_components_autocomplete_constants.AUTOCOMPLETE_OPTION_NAME);
	const getItems = useCollection(void 0);
	const active = contextValue === value && asSelect;
	const id = (0, react.useId)();
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Collection.ItemSlot, {
		value,
		disabled,
		scope: void 0,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_list_index.ListCell, {
			ref: composedRefs,
			disabled,
			"aria-disabled": disabled,
			selected: active,
			role: "option",
			id,
			"aria-selected": active,
			"aria-current": void 0,
			...props,
			sx: [require_components_autocomplete_style.autocompleteOptionStyle, props.sx],
			onTouchStart: (0, _radix_ui_primitive.composeEventHandlers)(props.onTouchStart, (e) => {
				if (disabled) return;
				const items = getItems();
				onSelectedOptionChange(items.find((v) => v.ref.current === e.currentTarget) ?? null);
				require_components_autocomplete_helpers.setAttributeSelection(ref.current, items, true);
			}),
			onMouseEnter: (0, _radix_ui_primitive.composeEventHandlers)(props.onMouseEnter, (e) => {
				if (disabled) return;
				const items = getItems();
				const target = items.find((v) => v.ref.current === e.currentTarget);
				if (target?.ref !== selectedOption?.ref) {
					onSelectedOptionChange(target ?? null);
					require_components_autocomplete_helpers.setAttributeSelection(ref.current, items, true);
				}
			}),
			trailingContent: active ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_list_index.ListCellContent, {
				variant: "icon",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconCheck, { "data-role": "autocomplete-option-active-icon-check" })
			}) : null,
			onClick: (0, _radix_ui_primitive.composeEventHandlers)(props.onClick, (e) => {
				if (disabled) return e.preventDefault();
				onInputValueChange(value);
				onValueChange(value);
				onSearch?.(value);
				onOpenChange(false);
				requestAnimationFrame(() => {
					input?.focus();
				});
			}),
			children
		})
	});
});
AutocompleteOption.displayName = require_components_autocomplete_constants.AUTOCOMPLETE_OPTION_NAME;
const AutocompleteOptionContent = (0, react.forwardRef)((props, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_list_index.ListCellContent, {
		ref,
		...props
	});
});
AutocompleteOptionContent.displayName = require_components_autocomplete_constants.AUTOCOMPLETE_OPTION_CONTENT_NAME;
//#endregion
exports.Autocomplete = Autocomplete;
exports.AutocompleteField = AutocompleteField;
exports.AutocompleteGroup = AutocompleteGroup;
exports.AutocompleteList = AutocompleteList;
exports.AutocompleteOption = AutocompleteOption;
exports.AutocompleteOptionContent = AutocompleteOptionContent;
