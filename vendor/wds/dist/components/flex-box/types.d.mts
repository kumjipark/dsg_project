import { Merge, ResponsiveProps, WithSxProps } from "@wanteddev/wds-engine";
import { CSSProperties, ReactNode } from "react";

//#region src/components/flex-box/types.d.ts
type FlexBoxDefaultProps = WithSxProps<{
  flexDirection?: CSSProperties['flexDirection'];
  flexWrap?: CSSProperties['flexWrap'];
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  alignContent?: CSSProperties['alignContent'];
  order?: CSSProperties['order'];
  flex?: CSSProperties['flex'];
  flexGrow?: CSSProperties['flexGrow'];
  flexShrink?: CSSProperties['flexShrink'];
  flexBasis?: CSSProperties['flexBasis'];
  alignSelf?: CSSProperties['alignSelf'];
  gap?: CSSProperties['gap'];
  rowGap?: CSSProperties['rowGap'];
  columnGap?: CSSProperties['columnGap'];
  children?: ReactNode;
}>;
type FlexBoxResponsiveProps = ResponsiveProps<Omit<FlexBoxDefaultProps, 'children' | 'sx'>>;
type FlexBoxProps = Merge<FlexBoxDefaultProps, FlexBoxResponsiveProps>;
//#endregion
export { FlexBoxDefaultProps, FlexBoxProps };