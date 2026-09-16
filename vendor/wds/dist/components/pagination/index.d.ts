import { PaginationFieldProps, PaginationProps, PaginationSelectProps } from "./types.js";
import * as _$react from "react";
import { DefaultComponentPropsInternal } from "@wanteddev/wds-engine";

//#region src/components/pagination/index.d.ts
declare const Pagination: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<PaginationProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const PaginationSelect: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<PaginationSelectProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const PaginationField: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<PaginationFieldProps, "input">, "ref"> & _$react.RefAttributes<HTMLInputElement>>;
//#endregion
export { Pagination, PaginationField, type PaginationFieldProps, type PaginationProps, PaginationSelect, type PaginationSelectProps };