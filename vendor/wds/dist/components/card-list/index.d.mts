import { CardListContentProps, CardListProps, CardListSkeletonProps } from "./types.mjs";
import { DefaultComponentPropsInternal, PolymorphicComponentInternal } from "@wanteddev/wds-engine";
import * as _$react from "react";

//#region src/components/card-list/index.d.ts
declare const CardList: PolymorphicComponentInternal<CardListProps, "div">;
declare const CardListContent: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<CardListContentProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const CardListSkeleton: PolymorphicComponentInternal<CardListSkeletonProps, "div">;
//#endregion
export { CardList, CardListContent, type CardListContentProps, type CardListProps, CardListSkeleton, type CardListSkeletonProps };