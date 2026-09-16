'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_typography_index = require("../typography/index.js");
const require_components_text_button_index = require("../text-button/index.js");
const require_components_filter_button_index = require("../filter-button/index.js");
const require_components_icon_button_index = require("../icon-button/index.js");
const require_components_text_field_index = require("../text-field/index.js");
const require_components_label_index = require("../label/index.js");
const require_components_menu_index = require("../menu/index.js");
const require_components_pagination_helpers = require("./helpers.js");
const require_components_pagination_constants = require("./constants.js");
const require_components_pagination_contexts = require("./contexts.js");
const require_components_pagination_style = require("./style.js");
let react = require("react");
let _radix_ui_react_use_controllable_state = require("@radix-ui/react-use-controllable-state");
let _wanteddev_wds_icon = require("@wanteddev/wds-icon");
let _radix_ui_primitive = require("@radix-ui/primitive");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/pagination/index.tsx
const Pagination = (0, react.forwardRef)(({ defaultPage = 1, page: givenPage, totalPages = 1, boundaryPages = 1, siblingPages = 1, variant = "extended", hidePrevButton, hideNextButton, disabled = false, leadingContent, trailingContent, onChange, sx, ...props }, ref) => {
	const id = (0, react.useId)();
	const [page, setPage] = (0, _radix_ui_react_use_controllable_state.useControllableState)({
		prop: givenPage,
		defaultProp: defaultPage,
		onChange
	});
	const items = (0, react.useMemo)(() => {
		return require_components_pagination_helpers.getPaginationItems({
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
	const disabledPrevButton = (0, react.useMemo)(() => page <= 1, [page]);
	const disabledNextButton = (0, react.useMemo)(() => page >= totalPages, [page, totalPages]);
	const pageButtonActions = (0, react.useMemo)(() => ({
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
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_pagination_contexts.PaginationProvider, {
		id,
		totalPages,
		disabled,
		setPage,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
			ref,
			alignItems: "center",
			gap: "12px",
			...props,
			sx: [require_components_pagination_style.paginationStyle({ variant }), sx],
			children: [
				variant === "extended" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
					"data-role": "pagination-leading-content-wrapper",
					sx: require_components_pagination_style.paginationContentStyle,
					children: Boolean(leadingContent) && leadingContent
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
					ref,
					alignItems: "center",
					justifyContent: "center",
					"data-role": "pagination-wrapper",
					gap: variant === "minimize" ? "8px" : "16px",
					children: [
						!hidePrevButton && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_icon_button_index.IconButton, {
							type: "button",
							size: variant === "compact" ? 24 : 16,
							color: "semantic.label.alternative",
							disabled: disabled || disabledPrevButton,
							"data-role": "pagination-prev-button",
							"aria-label": "Previous page",
							onClick: pageButtonActions.prev,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconChevronLeftTightSmall, {})
						}),
						variant === "minimize" ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_typography_index.Typography, {
							variant: "label2",
							weight: "medium",
							"data-role": "pagination-page-num",
							color: disabled ? "semantic.label.disable" : "semantic.label.neutral",
							children: [
								page,
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									"data-role": "pagination-page-num-slash",
									children: "/"
								}),
								totalPages
							]
						}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
							as: "ul",
							gap: "16px",
							alignItems: "center",
							children: items.map(({ type, page: itemPage }, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(PaginationItem, {
								type,
								page,
								itemPage,
								disabled,
								onPageChange: pageButtonActions.set
							}, `pagination-${id}-pagination-item-${index}`))
						}),
						!hideNextButton && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_icon_button_index.IconButton, {
							type: "button",
							size: variant === "compact" ? 24 : 16,
							color: "semantic.label.alternative",
							disabled: disabled || disabledNextButton,
							"data-role": "pagination-next-button",
							"aria-label": "Next page",
							onClick: pageButtonActions.next,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconChevronRightTightSmall, {})
						})
					]
				}),
				variant === "extended" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
					"data-role": "pagination-trailing-content-wrapper",
					sx: require_components_pagination_style.paginationContentStyle,
					children: Boolean(trailingContent) && trailingContent
				})
			]
		})
	});
});
Pagination.displayName = require_components_pagination_constants.PAGINATION_NAME;
const PaginationItem = ({ type, page, itemPage, disabled, onPageChange }) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
		as: "li",
		justifyContent: "center",
		sx: require_components_pagination_style.paginationItemStyle,
		children: type === "page" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_text_button_index.TextButton, {
			size: "medium",
			color: "assistive",
			disabled,
			disableInteraction: disabled,
			"aria-label": `Page ${itemPage}`,
			"aria-current": page === itemPage ? "page" : void 0,
			"data-role": "pagination-item-page",
			onClick: () => onPageChange(itemPage),
			sx: require_components_pagination_style.pageButtonStyle,
			children: itemPage
		}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
			variant: "body2",
			weight: "regular",
			color: disabled ? "semantic.label.disable" : "semantic.label.alternative",
			"data-role": "pagination-item-ellipsis",
			children: "..."
		})
	});
};
const PaginationSelect = (0, react.forwardRef)(({ pageSizeOptions = [
	10,
	20,
	30,
	40,
	50
], defaultPageSize = pageSizeOptions[0] ?? 10, pageSize: givenPageSize, label = "씩 보기", optionRender, onChange, disabled, open: givenOpen, defaultOpen, onOpenChange, contentProps, ...props }, ref) => {
	const { id, disabled: paginationDisabled } = require_components_pagination_contexts.usePaginationContext(require_components_pagination_constants.PAGINATION_SELECT_NAME);
	const [open, setOpen] = (0, _radix_ui_react_use_controllable_state.useControllableState)({
		prop: givenOpen,
		defaultProp: defaultOpen ?? false,
		onChange: onOpenChange
	});
	const [pageSize = defaultPageSize, setPageSize] = (0, _radix_ui_react_use_controllable_state.useControllableState)({
		prop: givenPageSize,
		defaultProp: defaultPageSize,
		onChange
	});
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_menu_index.Menu, {
		open,
		onOpenChange: setOpen,
		value: pageSize.toString(),
		onValueChange: (value) => setPageSize(Number(value)),
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
			ref,
			alignItems: "center",
			gap: "8px",
			"data-role": "pagination-select-trigger-wrapper",
			...props,
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_menu_index.MenuTrigger, { children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_filter_button_index.FilterButton, {
				variant: "outlined",
				size: "small",
				disabled: paginationDisabled || disabled,
				children: pageSize
			}) }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_label_index.Label, {
				variant: "label2",
				weight: "medium",
				color: "semantic.label.alternative",
				sx: { minWidth: "max-content" },
				children: label
			})]
		}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_menu_index.MenuContent, {
			offset: 8,
			position: "bottom-start",
			"data-role": "pagination-select-content",
			...contentProps,
			sx: [{ width: "140px" }, contentProps?.sx],
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_menu_index.MenuList, {
				role: "listbox",
				children: pageSizeOptions.map((option) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_menu_index.MenuItem, {
					value: option.toString(),
					onClick: () => setOpen(false),
					children: typeof optionRender === "function" ? optionRender(option) : `${option}개`
				}, `pagination-${id}-pagination-select-menu-item-${option}`))
			})
		})]
	});
});
PaginationSelect.displayName = require_components_pagination_constants.PAGINATION_SELECT_NAME;
const PaginationField = (0, react.forwardRef)(({ label = "페이지 이동", sx, onKeyDown, disabled, ...props }, ref) => {
	const { totalPages, disabled: paginationDisabled, setPage } = require_components_pagination_contexts.usePaginationContext(require_components_pagination_constants.PAGINATION_FIELD_NAME);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
		"wds-component": "pagination-field",
		alignItems: "center",
		gap: "8px",
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_label_index.Label, {
			variant: "label2",
			weight: "medium",
			color: "semantic.label.alternative",
			sx: { minWidth: "max-content" },
			children: label
		}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_text_field_index.TextField, {
			ref,
			width: "53px",
			height: "32px",
			...props,
			disabled: paginationDisabled || disabled,
			sx: [require_components_pagination_style.paginationFieldStyle, sx],
			onKeyDown: (0, _radix_ui_primitive.composeEventHandlers)(onKeyDown, (event) => {
				if (event.key !== "Enter") return;
				const pageValue = Number(event.currentTarget.value);
				if (!Number.isNaN(pageValue) && pageValue > 0 && pageValue <= totalPages) setPage(pageValue);
				event.currentTarget.value = "";
			})
		})]
	});
});
PaginationField.displayName = require_components_pagination_constants.PAGINATION_FIELD_NAME;
//#endregion
exports.Pagination = Pagination;
exports.PaginationField = PaginationField;
exports.PaginationSelect = PaginationSelect;
