'use client';
//#region src/components/image-base/helpers.ts
const loadImage = (src, abortSignal) => {
	return new Promise((resolve, reject) => {
		const img = document.createElement("img");
		img.onerror = () => reject();
		img.onload = () => resolve();
		img.onabort = () => {
			reject(new DOMException("The operation was aborted.", "AbortError"));
		};
		img.src = src;
		abortSignal?.addEventListener("abort", () => {
			reject(new DOMException("The operation was aborted.", "AbortError"));
		});
	});
};
//#endregion
export { loadImage };
