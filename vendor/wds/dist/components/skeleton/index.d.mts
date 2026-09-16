import { SkeletonProps } from "./types.mjs";
import { PolymorphicComponentInternal } from "@wanteddev/wds-engine";

//#region src/components/skeleton/index.d.ts
declare const Skeleton: PolymorphicComponentInternal<SkeletonProps, "div">;
//#endregion
export { Skeleton, type SkeletonProps };