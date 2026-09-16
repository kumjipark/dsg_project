'use client';
import { FlexBox } from "../flex-box/index.mjs";
import { Typography } from "../typography/index.mjs";
import { TextButton } from "../text-button/index.mjs";
import { FilterButton } from "../filter-button/index.mjs";
import { IconButton } from "../icon-button/index.mjs";
import { TextField } from "../text-field/index.mjs";
import { Label } from "../label/index.mjs";
import { Menu, MenuContent, MenuItem, MenuList, MenuTrigger } from "../menu/index.mjs";
import { getPaginationItems } from "./helpers.mjs";
import { PAGINATION_FIELD_NAME, PAGINATION_NAME, PAGINATION_SELECT_NAME } from "./constants.mjs";
import { PaginationProvider, usePaginationContext } from "./contexts.mjs";
import { pageButtonStyle, paginationContentStyle, paginationFieldStyle, paginationItemStyle, paginationStyle } from "./style.mjs";
import { forwardRef, useId, useMemo } from "react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { IconChevronLeftTightSmall, IconChevronRightTightSmall } from "@wanteddev/wds-icon";
import { composeEventHandlers } from "@radix-ui/primitive";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/pagination/index.tsx
const Pagination = forwardRef(({ defaultPage = 1, page: givenPage, totalPages = 1, boundaryPages = 1, siblingPages = 1, variant = "extended", hidePrevButton, hideNextButton, disabled = false, leadingContent, trailingContent, onChange, sx, ...props }, ref) => {
	const id = useId();
	const [page, setPage] = useControllableState({
		prop: givenPage,
		defaultProp: defaultPage,
		onChange
	});
	const items = useMemo(() => {
		return getPaginationItems({
			defaultPage,
			page,
			totalPages,
			boundaryPages,
			siblingPages
		});
	}, [
		defaultPage,
		page,
		totalPages,
		boundaryPages,
		siblingPages
	]);
	const disabledPrevButton = useMemo(() => page <= 1, [page]);
	const disabledNextButton = useMemo(() => page >= totalPages, [page, totalPages]);
	const pageButtonActions = useMemo(() => ({
		prev: () => {
			if (page > 1) setPage(page - 1);
		},
		next: () => {
			if (page < totalPages) setPage(page + 1);
		},
		set: setPage
	}), [page, totalPages]);
	if (typeof totalPages !== "number" || totalPages < 0) {
		if (process.env.NODE_ENV !== "production") throw new Error("Invalid totalPages in Pagination");
		return null;
	}
	if (typeof page !== "number" || page < 0) {
		if (process.env.NODE_ENV !== "production") throw new Error("Invalid page in Pagination");
		return null;
	}
	return /* @__PURE__ */ jsx(PaginationProvider, {
		id,
		totalPages,
		disabled,
		setPage,
		children: /* @__PURE__ */ jsxs(FlexBox, {
			ref,
			alignItems: "center",
			gap: "12px",
			...props,
			sx: [paginationStyle({ variant }), sx],
			children: [
				variant === "extended" && /* @__PURE__ */ jsx(FlexBox, {
					"data-role": "pagination-leading-content-wrapper",
					sx: paginationContentStyle,
					children: Boolean(leadingContent) && leadingContent
				}),
				/* @__PURE__ */ jsxs(FlexBox, {
					ref,
					alignItems: "center",
					justifyContent: "center",
					"data-role": "pagination-wrapper",
					gap: variant === "minimize" ? "8px" : "16px",
					children: [
						!hidePrevButton && /* @__PURE__ */ jsx(IconButton, {
							type: "button",
							size: variant === "compact" ? 24 : 16,
							color: "semantic.label.alternative",
							disabled: disabled || disabledPrevButton,
							"data-role": "pagination-prev-button",
							"aria-label": "Previous page",
							onClick: pageButtonActions.prev,
							children: /* @__PURE__ */ jsx(IconChevronLeftTightSmall, {})
						}),
						variant === "minimize" ? /* @__PURE__ */ jsxs(Typography, {
							variant: "label2",
							weight: "medium",
							"data-role": "pagination-page-num",
							color: disabled ? "semantic.label.disable" : "semantic.label.neutral",
							children: [
								page,
								/* @__PURE__ */ jsx("span", {
									"data-role": "pagination-page-num-slash",
									children: "/"
								}),
								totalPages
							]
						}) : /* @__PURE__ */ jsx(FlexBox, {
							as: "ul",
							gap: "16px",
							alignItems: "center",
							children: items.map(({ type, page: itemPage }, index) => /* @__PURE__ */ jsx(PaginationItem, {
								type,
								page,
								itemPage,
								disabled,
								onPageChange: pageButtonActions.set
							}, `pagination-${id}-pagination-item-${index}`))
						}),
						!hideNextButton && /* @__PURE__ */ jsx(IconButton, {
							type: "button",
							size: variant === "compact" ? 24 : 16,
							color: "semantic.label.alternative",
							disabled: disabled || disabledNextButton,
							"data-role": "pagination-next-button",
							"aria-label": "Next page",
							onClick: pageButtonActions.next,
							children: /* @__PURE__ */ jsx(IconChevronRightTightSmall, {})
						})
					]
				}),
				variant === "extended" && /* @__PURE__ */ jsx(FlexBox, {
					"data-role": "pagination-trailing-content-wrapper",
					sx: paginationContentStyle,
					children: Boolean(trailingContent) && trailingContent
				})
			]
		})
	});
});
Pagination.displayName = PAGINATION_NAME;
const PaginationItem = ({ type, page, itemPage, disabled, onPageChange }) => {
	return /* @__PURE__ */ jsx(FlexBox, {
		as: "li",
		justifyContent: "center",
		sx: paginationItemStyle,
		children: type === "page" ? /* @__PURE__ */ jsx(TextButton, {
			size: "medium",
			color: "assistive",
			disabled,
			disableInteraction: disabled,
			"aria-label": `Page ${itemPage}`,
			"aria-current": page === itemPage ? "page" : void 0,
			"data-role": "pagination-item-page",
			onClick: () => onPageChange(itemPage),
			sx: pageButtonStyle,
			children: itemPage
		}) : /* @__PURE__ */ jsx(Typography, {
			variant: "body2",
			weight: "regular",
			color: disabled ? "semantic.label.disable" : "semantic.label.alternative",
			"data-role": "pagination-item-ellipsis",
			children: "..."
		})
	});
};
const PaginationSelect = forwardRef(({ pageSizeOptions = [
	10,
	20,
	30,
	40,
	50
], defaultPageSize = pageSizeOptions[0] ?? 10, pageSize: givenPageSize, label = "씩 보기", optionRender, onChange, disabled, open: givenOpen, defaultOpen, onOpenChange, contentProps, ...props }, ref) => {
	const { id, disabled: paginationDisabled } = usePaginationContext(PAGINATION_SELECT_NAME);
	const [open, setOpen] = useControllableState({
		prop: givenOpen,
		defaultProp: defaultOpen ?? false,
		onChange: onOpenChange
	});
	const [pageSize = defaultPageSize, setPageSize] = useControllableState({
		prop: givenPageSize,
		defaultProp: defaultPageSize,
		onChange
	});
	return /* @__PURE__ */ jsxs(Menu, {
		open,
		onOpenChange: setOpen,
		value: pageSize.toString(),
		onValueChange: (value) => setPageSize(Number(value)),
		children: [/* @__PURE__ */ jsxs(FlexBox, {
			ref,
			alignItems: "center",
			gap: "8px",
			"data-role": "pagination-select-trigger-wrapper",
			...props,
			children: [/* @__PURE__ */ jsx(MenuTrigger, { children: /* @__PURE__ */ jsx(FilterButton, {
				variant: "outlined",
				size: "small",
				disabled: paginationDisabled || disabled,
				children: pageSize
			}) }), /* @__PURE__ */ jsx(Label, {
				variant: "label2",
				weight: "medium",
				color: "semantic.label.alternative",
				sx: { minWidth: "max-content" },
				children: label
			})]
		}), /* @__PURE__ */ jsx(MenuContent, {
			offset: 8,
			position: "bottom-start",
			"data-role": "pagination-select-content",
			...contentProps,
			sx: [{ width: "140px" }, contentProps?.sx],
			children: /* @__PURE__ */ jsx(MenuList, {
				role: "listbox",
				children: pageSizeOptions.map((option) => /* @__PURE__ */ jsx(MenuItem, {
					value: option.toString(),
					onClick: () => setOpen(false),
					children: typeof optionRender === "function" ? optionRender(option) : `${option}개`
				}, `pagination-${id}-pagination-select-menu-item-${option}`))
			})
		})]
	});
});
PaginationSelect.displayName = PAGINATION_SELECT_NAME;
const PaginationField = forwardRef(({ label = "페이지 이동", sx, onKeyDown, disabled, ...props }, ref) => {
	const { totalPages, disabled: paginationDisabled, setPage } = usePaginationContext(PAGINATION_FIELD_NAME);
	return /* @__PURE__ */ jsxs(FlexBox, {
		"wds-component": "pagination-field",
		alignItems: "center",
		gap: "8px",
		children: [/* @__PURE__ */ jsx(Label, {
			variant: "label2",
			weight: "medium",
			color: "semantic.label.alternative",
			sx: { minWidth: "max-content" },
			children: label
		}), /* @__PURE__ */ jsx(TextField, {
			ref,
			width: "53px",
			height: "32px",
			...props,
			disabled: paginationDisabled || disabled,
			sx: [paginationFieldStyle, sx],
			onKeyDown: composeEventHandlers(onKeyDown, (event) => {
				if (event.key !== "Enter") return;
				const pageValue = Number(event.currentTarget.value);
				if (!Number.isNaN(pageValue) && pageValue > 0 && pageValue <= totalPages) setPage(pageValue);
				event.currentTarget.value = "";
			})
		})]
	});
});
PaginationField.displayName = PAGINATION_FIELD_NAME;
//#endregion
export { Pagination, PaginationField, PaginationSelect };
