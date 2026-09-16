'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
//#region src/components/focus-scope/helpers.ts
const focus = (element, { select = false } = {}) => {
	if (element && element.focus) {
		const previouslyFocusedElement = document.activeElement;
		element.focus({ preventScroll: true });
		if (element !== previouslyFocusedElement && isSelectableInput(element) && select) element.select();
	}
};
const focusFirst = (candidates, { select = false } = {}) => {
	const previouslyFocusedElement = document.activeElement;
	for (const candidate of candidates) {
		focus(candidate, { select });
		if (document.activeElement !== previouslyFocusedElement) return;
	}
};
const getTabbableEdges = (container) => {
	const candidates = getTabbableCandidates(container);
	return [findVisible(candidates, container), findVisible(candidates.reverse(), container)];
};
const getTabbableCandidates = (container) => {
	const nodes = [];
	const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, { acceptNode: (node) => {
		const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
		if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
		return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	while (walker.nextNode()) nodes.push(walker.currentNode);
	return nodes;
};
const getTabbableForFirstFocus = (nodes) => {
	return nodes.sort((a, b) => {
		const aIgnoreFirstFocus = a.getAttribute("wds-ignore-first-focus") === "true";
		const bIgnoreFirstFocus = b.getAttribute("wds-ignore-first-focus") === "true";
		if (aIgnoreFirstFocus && !bIgnoreFirstFocus) return 1;
		else if (!aIgnoreFirstFocus && bIgnoreFirstFocus) return -1;
		return 0;
	});
};
const arrayRemove = (array, item) => {
	const updatedArray = [...array];
	const index = updatedArray.indexOf(item);
	if (index !== -1) updatedArray.splice(index, 1);
	return updatedArray;
};
const removeLinks = (items) => {
	return items.filter((item) => item.tagName !== "A");
};
const findVisible = (elements, container) => {
	for (const element of elements) if (!isHidden(element, { upTo: container })) return element;
};
const isHidden = (node, { upTo }) => {
	if (getComputedStyle(node).visibility === "hidden") return true;
	while (node) {
		if (upTo !== void 0 && node === upTo) return false;
		if (getComputedStyle(node).display === "none") return true;
		node = node.parentElement;
	}
	return false;
};
const isSelectableInput = (element) => {
	return element instanceof HTMLInputElement && "select" in element;
};
//#endregion
exports.arrayRemove = arrayRemove;
exports.focus = focus;
exports.focusFirst = focusFirst;
exports.getTabbableCandidates = getTabbableCandidates;
exports.getTabbableEdges = getTabbableEdges;
exports.getTabbableForFirstFocus = getTabbableForFirstFocus;
exports.removeLinks = removeLinks;
