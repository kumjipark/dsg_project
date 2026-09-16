//#region src/utils/color.d.ts
declare const getGradientMaskImage: (variant: "top" | "right" | "bottom" | "left", size?: string, type?: "mask" | "solid" | "multiple") => string;
declare const gradient: (color: string, variant: "top" | "right" | "bottom" | "left", size?: string, type?: "mask" | "solid" | "multiple") => string;
declare const addOpacity: (color: string, value: number) => string;
//#endregion
export { addOpacity, getGradientMaskImage, gradient };