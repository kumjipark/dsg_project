import { SegmentedControlItemProps, SegmentedControlProps } from "./types.mjs";
import { DefaultComponentPropsInternal, PolymorphicComponentInternal } from "@wanteddev/wds-engine";
import * as _$react from "react";

//#region src/components/segmented-control/index.d.ts
declare const SegmentedControl: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<SegmentedControlProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const SegmentedControlItem: PolymorphicComponentInternal<SegmentedControlItemProps, "label">;
//#endregion
export { SegmentedControl, SegmentedControlItem, type SegmentedControlItemProps, type SegmentedControlProps };