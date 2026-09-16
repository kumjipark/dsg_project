import { CSSProperties, ReactNode } from "react";
import { ThemeColorsToken, WithSxProps } from "@wanteddev/wds-engine";

//#region src/components/with-interaction/types.d.ts
type WithInteractionProps = WithSxProps<{
  color?: ThemeColorsToken;
  disabled?: boolean;
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  scale?: boolean;
  variant?: 'normal' | 'light' | 'strong';
  children?: ReactNode;
}>;
//#endregion
export { WithInteractionProps };