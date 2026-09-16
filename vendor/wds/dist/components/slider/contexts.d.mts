import * as _$react from "react";

//#region src/components/slider/contexts.d.ts
type SliderContextValue = {
  thumb: Set<HTMLSpanElement>;
};
declare const SliderProvider: _$react.FC<SliderContextValue & {
    children: React.ReactNode;
  }>, useSliderContext: (consumerName: string) => SliderContextValue;
//#endregion
export { SliderProvider, useSliderContext };