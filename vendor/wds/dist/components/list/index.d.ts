import { FlexBoxProps } from "../flex-box/types.js";
import { ListCellContentProps, ListCellProps, ListProps } from "./types.js";
import * as _$react from "react";
import { DefaultComponentPropsInternal, PolymorphicComponentInternal } from "@wanteddev/wds-engine";

//#region src/components/list/index.d.ts
declare const List: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<FlexBoxProps, "ul">, "ref"> & _$react.RefAttributes<HTMLUListElement>>;
declare const ListCell: PolymorphicComponentInternal<ListCellProps, "li">;
declare const ListCellContent: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<ListCellContentProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
//#endregion
export { List, ListCell, ListCellContent, type ListCellContentProps, type ListCellProps, type ListProps };