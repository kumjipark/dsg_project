import { AnimationOptions } from "./types.mjs";
import * as _$react from "react";

//#region src/components/animation-presence/hooks.d.ts
declare const useAnimationPresence: (present: boolean, options?: AnimationOptions) => {
  isPresent: boolean;
  ref: _$react.Dispatch<_$react.SetStateAction<HTMLElement | null>>;
};
//#endregion
export { useAnimationPresence };