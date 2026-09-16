import { DismissableLayerProps as DismissableLayerProps$1 } from "@radix-ui/react-dismissable-layer";

//#region src/components/dismissable-layer/types.d.ts
type PointerDownOutsideEvent = CustomEvent<{
  originalEvent: PointerEvent;
}>;
type FocusOutsideEvent = CustomEvent<{
  originalEvent: FocusEvent;
}>;
type DismissableLayerProps = DismissableLayerProps$1;
//#endregion
export { DismissableLayerProps, FocusOutsideEvent, PointerDownOutsideEvent };