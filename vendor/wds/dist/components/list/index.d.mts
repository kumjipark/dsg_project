import { FlexBoxProps } from "../flex-box/types.mjs";
import { ListCellContentProps, ListCellProps, ListProps } from "./types.mjs";
import { DefaultComponentPropsInternal, PolymorphicComponentInternal } from "@wanteddev/wds-engine";
import * as _$react from "react";

//#region src/components/list/index.d.ts
declare const List: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<FlexBoxProps, "ul">, "ref"> & _$react.RefAttributes<HTMLUListElement>>;
declare const ListCell: PolymorphicComponentInternal<ListCellProps, "li">;
declare const ListCellContent: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<ListCellContentProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
//#endregion
export { List, ListCell, ListCellContent, type ListCellContentProps, type ListCellProps, type ListProps };