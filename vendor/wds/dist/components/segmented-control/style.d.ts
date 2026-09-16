import { SegmentedControlProps } from "./types.js";
import { SerializedStyles as SerializedStyles$1 } from "../../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.js";
import { Theme } from "@wanteddev/wds-engine";

//#region src/components/segmented-control/style.d.ts
declare const segmentedControlStyle: ({
  variant,
  size,
  xs,
  sm,
  md,
  lg,
  xl
}: SegmentedControlProps) => (theme: Theme) => SerializedStyles$1;
declare const motionThumbStyle: (theme: Theme) => SerializedStyles$1;
type SegmentedControlItemStyleProps = {
  active?: boolean;
  disabled?: boolean;
  variant?: SegmentedControlProps['variant'];
  size?: SegmentedControlProps['size'];
} & Pick<SegmentedControlProps, 'xs' | 'sm' | 'md' | 'lg' | 'xl'>;
declare const segmentedControlItemStyle: ({
  size,
  disabled,
  variant,
  xs,
  sm,
  md,
  lg,
  xl
}: SegmentedControlItemStyleProps) => (theme: Theme) => SerializedStyles$1;
//#endregion
export { motionThumbStyle, segmentedControlItemStyle, segmentedControlStyle };