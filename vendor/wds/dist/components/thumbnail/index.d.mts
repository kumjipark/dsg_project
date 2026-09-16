import { ThumbnailProps, ThumbnailSkeletonProps } from "./types.mjs";
import { DefaultComponentPropsInternal } from "@wanteddev/wds-engine";
import * as _$react from "react";

//#region src/components/thumbnail/index.d.ts
declare const Thumbnail: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<ThumbnailProps, "img">, "ref"> & _$react.RefAttributes<HTMLImageElement>>;
declare const ThumbnailSkeleton: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<ThumbnailSkeletonProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
//#endregion
export { Thumbnail, type ThumbnailProps, ThumbnailSkeleton, type ThumbnailSkeletonProps };