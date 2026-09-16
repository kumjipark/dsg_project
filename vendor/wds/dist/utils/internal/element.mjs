//#region src/utils/internal/element.ts
const isElementDisabled = (element) => {
	return element.hasAttribute("disabled") && element.getAttribute("disabled")?.toString() !== "false" || element.ariaDisabled?.toString() === "true";
};
//#endregion
export { isElementDisabled };
