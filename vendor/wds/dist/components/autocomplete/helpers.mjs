'use client';
//#region src/components/autocomplete/helpers.ts
const focusSelectedOption = (option, items, focusVisible) => {
	if (!option) return;
	const element = option.ref.current;
	const viewport = element?.closest("[data-radix-scroll-area-viewport]");
	if (!viewport || !element) return;
	setAttributeSelection(element, items, focusVisible);
	if (viewport.scrollHeight > viewport.clientHeight) {
		const scrollBottom = viewport.clientHeight + viewport.scrollTop;
		const elementBottom = element.offsetTop + element.offsetHeight;
		if (elementBottom > scrollBottom) viewport.scrollTop = elementBottom - viewport.clientHeight;
		else if (element.offsetTop - element.offsetHeight * 0 < viewport.scrollTop) viewport.scrollTop = element.offsetTop - element.offsetHeight * 0;
	}
};
const setAttributeSelection = (element, items, focusVisible) => {
	resetAttributeSelection(items);
	if (focusVisible) element?.setAttribute("data-focus-visible", "true");
	element?.setAttribute("data-focus", "true");
};
const resetAttributeSelection = (items) => {
	items.forEach((item) => {
		item.ref.current?.removeAttribute("data-focus");
		item.ref.current?.removeAttribute("data-focus-visible");
	});
};
//#endregion
export { focusSelectedOption, resetAttributeSelection, setAttributeSelection };
