import { Merge } from "@wanteddev/wds-engine";
import { ReactNode } from "react";

//#region src/components/animation-presence/types.d.ts
type AnimationOptions = Merge<GetAnimationsOptions, {
  filter?: (node: HTMLElement) => boolean;
}>;
type AnimationPresenceProps = {
  /** Whether the animation presence is present. */present?: boolean;
  children?: ReactNode; /** The options for the animation presence. */
  options?: AnimationOptions;
};
//#endregion
export { AnimationOptions, AnimationPresenceProps };