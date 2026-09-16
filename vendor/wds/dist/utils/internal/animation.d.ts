//#region src/utils/internal/animation.d.ts
declare const calculateAnimationStyle: (targetElement: HTMLDivElement | HTMLElement, parentElement: HTMLDivElement | HTMLElement) => {
  left: string;
  right: string;
  width: string;
  top: string;
  bottom: string;
  height: string;
  borderRadius: string;
};
//#endregion
export { calculateAnimationStyle };