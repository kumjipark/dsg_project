Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
//#region src/utils/internal/haptic.ts
const hapticFeedback = () => {
	if (Boolean(window.navigator.vibrate)) window.navigator.vibrate(40);
};
//#endregion
exports.hapticFeedback = hapticFeedback;
