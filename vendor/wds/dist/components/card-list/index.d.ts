import { CardListContentProps, CardListProps, CardListSkeletonProps } from "./types.js";
import * as _$react from "react";
import { DefaultComponentPropsInternal, PolymorphicComponentInternal } from "@wanteddev/wds-engine";

//#region src/components/card-list/index.d.ts
declare const CardList: PolymorphicComponentInternal<CardListProps, "div">;
declare const CardListContent: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<CardListContentProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const CardListSkeleton: PolymorphicComponentInternal<CardListSkeletonProps, "div">;
//#endregion
export { CardList, CardListContent, type CardListContentProps, type CardListProps, CardListSkeleton, type CardListSkeletonProps };