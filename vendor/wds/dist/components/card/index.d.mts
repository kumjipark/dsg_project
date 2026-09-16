import { FlexBoxProps } from "../flex-box/types.mjs";
import { SkeletonProps } from "../skeleton/types.mjs";
import { ThumbnailSkeletonProps } from "../thumbnail/types.mjs";
import { CardCaptionProps, CardCaptionSkeletonProps, CardContentItemProps, CardContentProps, CardProps, CardThumbnailContentProps, CardThumbnailProps, CardThumbnailSkeletonProps, CardTitleProps, CardTitleSkeletonProps } from "./types.mjs";
import { DefaultComponentPropsInternal, PolymorphicComponentInternal } from "@wanteddev/wds-engine";
import * as _$react from "react";

//#region src/components/card/index.d.ts
declare const Card: PolymorphicComponentInternal<CardProps, "div">;
declare const CardThumbnail: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<CardThumbnailProps, "img">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const CardThumbnailContent: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<CardThumbnailContentProps, "span">, "ref"> & _$react.RefAttributes<HTMLSpanElement>>;
declare const CardContent: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<FlexBoxProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const CardContentItem: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<CardContentItemProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const CardTitle: PolymorphicComponentInternal<CardTitleProps, "p">;
declare const CardCaption: PolymorphicComponentInternal<CardCaptionProps, "p">;
declare const CardSkeleton: PolymorphicComponentInternal<CardProps, "div">;
declare const CardThumbnailSkeleton: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<ThumbnailSkeletonProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const CardContentItemSkeleton: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<SkeletonProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const CardTitleSkeleton: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<SkeletonProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const CardCaptionSkeleton: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<CardCaptionSkeletonProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
//#endregion
export { Card, CardCaption, type CardCaptionProps, CardCaptionSkeleton, type CardCaptionSkeletonProps, CardContent, CardContentItem, type CardContentItemProps, CardContentItemSkeleton, type CardContentProps, type CardProps, type CardProps as CardSkeletonProps, CardSkeleton, CardThumbnail, CardThumbnailContent, type CardThumbnailContentProps, type CardThumbnailProps, CardThumbnailSkeleton, type CardThumbnailSkeletonProps, CardTitle, type CardTitleProps, CardTitleSkeleton, type CardTitleSkeletonProps };