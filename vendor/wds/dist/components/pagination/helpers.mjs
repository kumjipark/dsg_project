'use client';
//#region src/components/pagination/helpers.ts
const range = (start, end) => {
	const length = end - start + 1;
	return Array.from({ length }, (_, i) => start + i);
};
const getPaginationItems = ({ defaultPage = 1, page = defaultPage, totalPages = 1, boundaryPages = 1, siblingPages = 1 }) => {
	const startPages = range(1, Math.min(boundaryPages, totalPages));
	const endPages = range(Math.max(totalPages - boundaryPages + 1, boundaryPages + 1), totalPages);
	const siblingsStart = Math.max(Math.min(page - siblingPages, totalPages - boundaryPages - siblingPages * 2 - 1), boundaryPages + 2);
	const siblingsEnd = Math.min(Math.max(page + siblingPages, boundaryPages + siblingPages * 2 + 2), totalPages - boundaryPages - 1);
	return [
		...startPages,
		...siblingsStart > boundaryPages + 2 ? ["ellipsis"] : boundaryPages + 1 < totalPages - boundaryPages ? [boundaryPages + 1] : [],
		...range(siblingsStart, siblingsEnd),
		...siblingsEnd < totalPages - boundaryPages - 1 ? ["ellipsis"] : totalPages - boundaryPages > boundaryPages ? [totalPages - boundaryPages] : [],
		...endPages
	].map((item) => typeof item === "number" ? {
		type: "page",
		page: item
	} : { type: "ellipsis" });
};
//#endregion
export { getPaginationItems };
