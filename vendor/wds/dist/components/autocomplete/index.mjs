'use client';
import { FlexBox } from "../flex-box/index.mjs";
import { Typography } from "../typography/index.mjs";
import { List, ListCell, ListCellContent } from "../list/index.mjs";
import { AnimationPresence } from "../animation-presence/index.mjs";
import { Popper, PopperAnchor, PopperContent } from "../popper/index.mjs";
import { ScrollArea } from "../scroll-area/index.mjs";
import { AUTOCOMPLETE_FIELD_NAME, AUTOCOMPLETE_LIST_NAME, AUTOCOMPLETE_NAME, AUTOCOMPLETE_OPTION_CONTENT_NAME, AUTOCOMPLETE_OPTION_NAME, AUTOCOMPLETE_ROOT_NAME } from "./constants.mjs";
import { AutocompleteProvider, useAutocompleteContext } from "./contexts.mjs";
import { autocompleteGroupTitleStyle, autocompleteListContentStyle, autocompleteListStyle, autocompleteOptionStyle, autocompleteScrollAreaStyle } from "./style.mjs";
import { focusSelectedOption, setAttributeSelection } from "./helpers.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef, useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { IconCheck } from "@wanteddev/wds-icon";
import { composeEventHandlers } from "@radix-ui/primitive";
import { useComposedRefs } from "@radix-ui/react-compose-refs";
import { useSize } from "@radix-ui/react-use-size";
import { Slot } from "@radix-ui/react-slot";
import { jsx, jsxs } from "react/jsx-runtime";
import { useCallbackRef } from "@radix-ui/react-use-callback-ref";
import { createCollection } from "@radix-ui/react-collection";
import { flushSync } from "react-dom";
//#region src/components/autocomplete/index.tsx
const [Collection, useCollection] = createCollection(AUTOCOMPLETE_NAME);
const Autocomplete = forwardRef(({ value: valueProp, defaultValue, onValueChange, open: openProp, defaultOpen, onOpenChange, asSelect = false, inputValue: inputValueProp, defaultInputValue, onInputValueChange, onSearch, ...props }, forwardedRef) => {
	const [node, setNode] = useState(null);
	const composedRefs = useComposedRefs(forwardedRef, setNode);
	const { width } = useSize(node) || {};
	const [value, setValue] = useControllableState({
		prop: valueProp,
		defaultProp: defaultValue ?? "",
		onChange: onValueChange
	});
	const [inputValue, setInputValue] = useControllableState({
		prop: inputValueProp,
		defaultProp: defaultInputValue ?? value,
		onChange: onInputValueChange
	});
	const [selectedOption, setSelectedOption] = useState(null);
	const [open, setOpen] = useControllableState({
		prop: openProp,
		defaultProp: defaultOpen ?? false,
		onChange: (state) => {
			onOpenChange?.(state);
			if (!state) setSelectedOption(null);
		}
	});
	const handleOpenChange = useCallback((state, force) => {
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
	const [input, setInput] = useState(null);
	const contentId = useId();
	useEffect(() => {
		const optionId = selectedOption?.ref.current?.id;
		if (optionId && open) input?.setAttribute("aria-activedescendant", optionId);
		else input?.removeAttribute("aria-activedescendant");
	}, [selectedOption, open]);
	return /* @__PURE__ */ jsx(AutocompleteProvider, {
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
		onSearch: useCallbackRef(onSearch),
		children: /* @__PURE__ */ jsx(Popper, { children: /* @__PURE__ */ jsx(Collection.Provider, {
			scope: void 0,
			children: /* @__PURE__ */ jsx(PopperAnchor, { children: /* @__PURE__ */ jsx(AutocompleteRoot, {
				ref: composedRefs,
				...props
			}) })
		}) })
	});
});
Autocomplete.displayName = AUTOCOMPLETE_NAME;
const AutocompleteRoot = forwardRef((props, ref) => {
	const { input } = useAutocompleteContext(AUTOCOMPLETE_ROOT_NAME);
	return /* @__PURE__ */ jsx(FlexBox, {
		ref,
		...props,
		sx: [{ width: "fit-content" }, props.sx],
		onClick: composeEventHandlers(props.onClick, useCallback((event) => {
			if (!event.currentTarget.contains(event.target)) return;
			if (!input?.disabled) input?.focus();
		}, [input]))
	});
});
AutocompleteRoot.displayName = AUTOCOMPLETE_ROOT_NAME;
const AutocompleteField = forwardRef(({ children, ...props }, forwardedRef) => {
	const { open, contentId, onOpenChange, value, onValueChange, onInputChange, onInputValueChange, onSelectedOptionChange, selectedOption, inputValue, asSelect, input, onSearch } = useAutocompleteContext(AUTOCOMPLETE_FIELD_NAME);
	const composedRefs = useComposedRefs(forwardedRef, onInputChange);
	const getItems = useCollection(void 0);
	const isFocused = useRef(false);
	return /* @__PURE__ */ jsx(Collection.Slot, {
		scope: void 0,
		children: /* @__PURE__ */ jsx(Slot, {
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
			onFocus: composeEventHandlers(props.onFocus, () => {
				isFocused.current = true;
			}),
			onKeyDown: composeEventHandlers(props.onKeyDown, (e) => {
				const items = getItems().filter(({ disabled }) => !disabled);
				let option;
				const rAF = (fn) => open ? fn() : requestAnimationFrame(fn);
				switch (e.key) {
					case "Home":
						if (!open) return;
						e.preventDefault();
						option = items.at(0);
						focusSelectedOption(option, items, true);
						onSelectedOptionChange(option ?? null);
						return;
					case "End":
						if (!open) return;
						e.preventDefault();
						option = items.at(items.length - 1);
						focusSelectedOption(option, items, true);
						onSelectedOptionChange(option ?? null);
						return;
					case "PageUp":
						e.preventDefault();
						if (selectedOption) {
							const diff = items.findIndex((v) => v.ref === selectedOption.ref);
							if (diff !== -1) option = items.at(diff - 5 < 0 ? 0 : diff - 5);
							else option = items.at(0);
						} else option = items.at(0);
						if (!open) flushSync(() => onOpenChange(true));
						rAF(() => {
							focusSelectedOption(option, items, true);
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
						if (!open) flushSync(() => onOpenChange(true));
						rAF(() => {
							focusSelectedOption(option, items, true);
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
						if (!open) flushSync(() => onOpenChange(true));
						rAF(() => {
							focusSelectedOption(option, items, true);
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
						if (!open) flushSync(() => onOpenChange(true));
						rAF(() => {
							focusSelectedOption(option, items, true);
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
			onBlur: composeEventHandlers(props.onBlur, () => {
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
			onClick: composeEventHandlers(props.onClick, () => {
				if (value === "" || !open && !input?.disabled) onOpenChange(!open);
			}),
			onChange: composeEventHandlers(props.onChange, (e) => {
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
AutocompleteField.displayName = AUTOCOMPLETE_FIELD_NAME;
const AutocompleteList = forwardRef(({ children, as, forceMount = false, disableTrappedContent = false, ...props }, ref) => {
	const { input, open, contentId, asSelect, value, width, onSelectedOptionChange } = useAutocompleteContext(AUTOCOMPLETE_LIST_NAME);
	const getItems = useCollection(void 0);
	useLayoutEffect(() => {
		if (!open || !asSelect || disableTrappedContent) return;
		requestAnimationFrame(() => {
			const items = getItems();
			const option = items.find((v) => v.value === value);
			focusSelectedOption(option, items);
			onSelectedOptionChange(option ?? null);
		});
	}, [open, disableTrappedContent]);
	return /* @__PURE__ */ jsx(AnimationPresence, {
		present: open && !input?.readOnly && !input?.disabled || forceMount,
		children: /* @__PURE__ */ jsx(PopperContent, {
			role: "presentation",
			ref,
			offset: 8,
			position: "bottom-center",
			...props,
			"data-status": open ? "open" : "close",
			sx: [
				{ width },
				autocompleteListStyle,
				props.sx
			],
			children: /* @__PURE__ */ jsx(Box, {
				as: as ?? Slot,
				children: /* @__PURE__ */ jsx(ScrollArea, {
					scrollbars: "vertical",
					size: "small",
					zIndex: 11,
					viewportProps: { sx: autocompleteScrollAreaStyle },
					sx: { borderRadius: "inherit" },
					children: /* @__PURE__ */ jsx(List, {
						role: "listbox",
						id: contentId,
						gap: "4px",
						sx: autocompleteListContentStyle,
						onMouseDown: (e) => e.preventDefault(),
						children
					})
				})
			})
		})
	});
});
AutocompleteList.displayName = AUTOCOMPLETE_LIST_NAME;
const AutocompleteGroup = forwardRef(({ title, children, ...props }, ref) => {
	return /* @__PURE__ */ jsxs(FlexBox, {
		ref,
		role: "group",
		alignItems: "center",
		flexDirection: "column",
		gap: "4px",
		...props,
		sx: [{ width: "100%" }, props.sx],
		children: [Boolean(title) && /* @__PURE__ */ jsx(Typography, {
			"data-role": "autocomplete-group-title",
			variant: "caption1",
			weight: "bold",
			color: "semantic.label.alternative",
			sx: autocompleteGroupTitleStyle,
			children: title
		}), children]
	});
});
AutocompleteGroup.displayName = "AutocompleteGroup";
const AutocompleteOption = forwardRef(({ disabled, value, children, ...props }, forwardedRef) => {
	const ref = useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, ref);
	const { input, onValueChange, value: contextValue, onInputValueChange, asSelect, selectedOption, onSelectedOptionChange, onSearch, onOpenChange } = useAutocompleteContext(AUTOCOMPLETE_OPTION_NAME);
	const getItems = useCollection(void 0);
	const active = contextValue === value && asSelect;
	const id = useId();
	return /* @__PURE__ */ jsx(Collection.ItemSlot, {
		value,
		disabled,
		scope: void 0,
		children: /* @__PURE__ */ jsx(ListCell, {
			ref: composedRefs,
			disabled,
			"aria-disabled": disabled,
			selected: active,
			role: "option",
			id,
			"aria-selected": active,
			"aria-current": void 0,
			...props,
			sx: [autocompleteOptionStyle, props.sx],
			onTouchStart: composeEventHandlers(props.onTouchStart, (e) => {
				if (disabled) return;
				const items = getItems();
				onSelectedOptionChange(items.find((v) => v.ref.current === e.currentTarget) ?? null);
				setAttributeSelection(ref.current, items, true);
			}),
			onMouseEnter: composeEventHandlers(props.onMouseEnter, (e) => {
				if (disabled) return;
				const items = getItems();
				const target = items.find((v) => v.ref.current === e.currentTarget);
				if (target?.ref !== selectedOption?.ref) {
					onSelectedOptionChange(target ?? null);
					setAttributeSelection(ref.current, items, true);
				}
			}),
			trailingContent: active ? /* @__PURE__ */ jsx(ListCellContent, {
				variant: "icon",
				children: /* @__PURE__ */ jsx(IconCheck, { "data-role": "autocomplete-option-active-icon-check" })
			}) : null,
			onClick: composeEventHandlers(props.onClick, (e) => {
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
AutocompleteOption.displayName = AUTOCOMPLETE_OPTION_NAME;
const AutocompleteOptionContent = forwardRef((props, ref) => {
	return /* @__PURE__ */ jsx(ListCellContent, {
		ref,
		...props
	});
});
AutocompleteOptionContent.displayName = AUTOCOMPLETE_OPTION_CONTENT_NAME;
//#endregion
export { Autocomplete, AutocompleteField, AutocompleteGroup, AutocompleteList, AutocompleteOption, AutocompleteOptionContent };
