import { RegionToastItem } from "../../stores/region-store.mjs";
import { CSSProperties } from "react";

//#region src/components/toast/hooks.d.ts
type UseToastAnimationParams = Pick<RegionToastItem, 'duration' | 'onAnimationEnd'> & {
  open: boolean;
  setOpen: (open: boolean) => void;
  disablePortal?: boolean;
  component?: 'toast' | 'snackbar';
};
declare const useToastAnimation: ({
  open,
  duration,
  onAnimationEnd,
  setOpen,
  disablePortal,
  component
}: UseToastAnimationParams) => {
  ref: (el: HTMLDivElement | null) => void;
  handleAnimationEnd: () => void;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  style: CSSProperties;
};
//#endregion
export { useToastAnimation };