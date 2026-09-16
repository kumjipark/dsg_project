import { ProgressTrackerItemProps, ProgressTrackerLabelContentProps, ProgressTrackerProps } from "./types.js";
import * as _$react from "react";
import { DefaultComponentPropsInternal } from "@wanteddev/wds-engine";

//#region src/components/progress-tracker/index.d.ts
declare const ProgressTracker: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<ProgressTrackerProps, "ol">, "ref"> & _$react.RefAttributes<HTMLOListElement>>;
declare const ProgressTrackerItem: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<ProgressTrackerItemProps, "li">, "ref"> & _$react.RefAttributes<HTMLLIElement>>;
declare const ProgressTrackerLabelContent: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<ProgressTrackerLabelContentProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
//#endregion
export { ProgressTracker, ProgressTrackerItem, type ProgressTrackerItemProps, ProgressTrackerLabelContent, type ProgressTrackerLabelContentProps, type ProgressTrackerProps };