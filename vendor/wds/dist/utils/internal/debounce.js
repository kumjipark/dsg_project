Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
//#region src/utils/internal/debounce.ts
const debounce = (func, wait = 166) => {
	let timeout;
	function debounced(...args) {
		const later = () => {
			func.apply(this, args);
		};
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	}
	debounced.clear = () => {
		clearTimeout(timeout);
	};
	return debounced;
};
//#endregion
exports.debounce = debounce;
