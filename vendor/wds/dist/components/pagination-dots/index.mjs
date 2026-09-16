'use client';
import { FlexBox } from "../flex-box/index.mjs";
import { getPaginationDotScale, getPaginationDotsVisibleArea } from "./helpers.mjs";
import { paginationDotsStyle, paginationDotsWrapperStyle } from "./style.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef, useEffect, useMemo, useRef } from "react";
import { jsx } from "react/jsx-runtime";
import { RovingFocusGroup, RovingFocusGroupItem } from "@radix-ui/react-roving-focus";
//#region src/components/pagination-dots/index.tsx
const ARROW_KEYS = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
];
const PaginationDots = forwardRef(({ totalPages = 3, currentPage = 1, maxDotCount = 5, color = "normal", size = "medium", onClickDot, xs, sm, md, lg, xl, ...props }, ref) => {
	const visibleArea = useMemo(() => getPaginationDotsVisibleArea({
		maxDotCount,
		currentPage,
		totalPages
	}), [
		maxDotCount,
		currentPage,
		totalPages
	]);
	const isArrowKeyPressedRef = useRef(false);
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (ARROW_KEYS.includes(event.key)) isArrowKeyPressedRef.current = true;
		};
		const handleKeyUp = () => isArrowKeyPressedRef.current = false;
		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("keyup", handleKeyUp);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.removeEventListener("keyup", handleKeyUp);
		};
	}, []);
	if (typeof totalPages !== "number" || totalPages < 0) {
		if (process.env.NODE_ENV !== "production") throw new Error("Invalid totalPages in PaginationDots");
		return null;
	}
	return /* @__PURE__ */ jsx(RovingFocusGroup, { children: /* @__PURE__ */ jsx(FlexBox, {
		alignItems: "center",
		"aria-label": "Slide dots",
		role: "tablist",
		...props,
		sx: [paginationDotsWrapperStyle({
			color,
			size,
			xs,
			sm,
			md,
			lg,
			xl
		}), props.sx],
		ref,
		children: [...Array(totalPages)].map((_, i) => {
			const scale = getPaginationDotScale({
				index: i,
				visibleArea,
				totalPages,
				maxDotCount
			});
			const isActive = i + 1 === currentPage;
			return /* @__PURE__ */ jsx(RovingFocusGroupItem, {
				active: isActive,
				focusable: true,
				asChild: true,
				children: /* @__PURE__ */ jsx(Box, {
					as: "button",
					role: "tab",
					type: "button",
					onClick: () => onClickDot?.(i + 1),
					"data-role": "pagination-dot-button",
					sx: paginationDotsStyle(scale, i === Math.max(visibleArea[0], 0)),
					"aria-selected": isActive,
					"aria-label": `Slide dot ${i + 1}`,
					onFocus: (e) => {
						if (isArrowKeyPressedRef.current) e.currentTarget.click();
					}
				})
			}, `wds-pagination-dot-${i}`);
		})
	}) });
});
PaginationDots.displayName = "PaginationDots";
//#endregion
export { PaginationDots };
