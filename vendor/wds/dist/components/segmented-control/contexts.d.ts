import { SegmentedControlProps } from "./types.js";
import * as _$react from "react";

//#region src/components/segmented-control/contexts.d.ts
type SegmentedControlContextType = {
  value?: string;
  onValueChange: (value: string) => void;
  variant: Exclude<SegmentedControlProps['variant'], undefined>;
  size: Exclude<SegmentedControlProps['size'], undefined>;
  responsive?: Pick<SegmentedControlProps, 'xs' | 'sm' | 'md' | 'lg' | 'xl'>;
  name?: string;
};
declare const SegmentedControlProvider: _$react.FC<SegmentedControlContextType & {
    children: React.ReactNode;
  }>, useSegmentedControlContext: (consumerName: string) => SegmentedControlContextType;
//#endregion
export { SegmentedControlContextType, SegmentedControlProvider, useSegmentedControlContext };