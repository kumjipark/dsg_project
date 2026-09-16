'use client';
//#region src/stores/helpers.ts
const generateId = () => {
	let d = (/* @__PURE__ */ new Date()).getTime();
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
		let r = Math.random() * 16;
		r = (d + r) % 16 | 0;
		d = Math.floor(d / 16);
		return (c === "x" ? r : (r && 3) | 8).toString(16);
	});
};
//#endregion
export { generateId };
