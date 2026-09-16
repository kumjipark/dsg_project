import { PopperContentProps } from "./types.mjs";
import { Alignment, Middleware, Placement, Side } from "@floating-ui/react";

//#region src/components/popper/helpers.d.ts
declare const roundByDPR: (value: number) => number;
declare const getPlacementMapper: (placement: Required<PopperContentProps>["position"]) => Placement;
declare const getSideAlignFromPlacement: (placement: Placement) => readonly [Side, "center" | Alignment];
declare const transformOrigin: (options: {
  arrowWidth: number;
  arrowHeight: number;
}) => Middleware;
//#endregion
export { getPlacementMapper, getSideAlignFromPlacement, roundByDPR, transformOrigin };