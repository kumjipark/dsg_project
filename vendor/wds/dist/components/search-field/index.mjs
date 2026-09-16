'use client';
import { FlexBox } from "../flex-box/index.mjs";
import { IconButton } from "../icon-button/index.mjs";
import { searchFieldContentStyle, searchFieldWrapperStyle } from "./style.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef, useEffect, useRef } from "react";
import { IconCircleCloseFill, IconSearch } from "@wanteddev/wds-icon";
import { useComposedRefs } from "@radix-ui/react-compose-refs";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/search-field/index.tsx
const SearchField = forwardRef(({ readOnly, className, disabled, style, onReset, width, size = "medium", wrapperRef, sx, xs, sm, md, lg, xl, ...props }, ref) => {
	const parentRef = useRef(null);
	const inputRef = useRef(null);
	const composedRefs = useComposedRefs(inputRef, ref);
	useEffect(() => {
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
	return /* @__PURE__ */ jsxs(Box, {
		className,
		style,
		"wds-component": "search-field",
		ref: useComposedRefs(parentRef, wrapperRef),
		sx: [searchFieldWrapperStyle({
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
			/* @__PURE__ */ jsx(FlexBox, {
				"data-role": "search-field-icon",
				sx: [searchFieldContentStyle, {
					height: "20px",
					padding: "0px 2px",
					marginRight: "4px"
				}],
				alignItems: "center",
				justifyContent: "center",
				children: /* @__PURE__ */ jsx(IconSearch, {})
			}),
			/* @__PURE__ */ jsx("input", {
				ref: composedRefs,
				type: "search",
				readOnly,
				"aria-readonly": readOnly,
				autoComplete: "off",
				disabled,
				"aria-disabled": disabled,
				...props
			}),
			/* @__PURE__ */ jsx(FlexBox, {
				"data-role": "search-field-reset",
				sx: [searchFieldContentStyle, {
					height: "22px",
					marginLeft: "8px"
				}],
				alignItems: "center",
				justifyContent: "center",
				children: /* @__PURE__ */ jsx(IconButton, {
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
					children: /* @__PURE__ */ jsx(IconCircleCloseFill, {})
				})
			})
		]
	});
});
SearchField.displayName = "SearchField";
//#endregion
export { SearchField };
