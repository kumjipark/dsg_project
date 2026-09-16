import { FlexBoxProps } from "../flex-box/types.js";
import { Merge, ResponsiveProps, WithSxProps } from "@wanteddev/wds-engine";

//#region src/components/loading/types.d.ts
type LoadingDefaultProps = WithSxProps<{
  variant?: 'wanted' | 'circular';
  size?: number | string;
}>;
type LoadingResponsiveProps = ResponsiveProps<Pick<LoadingDefaultProps, 'size'>>;
type LoadingProps = Merge<Merge<LoadingDefaultProps, LoadingResponsiveProps>, FlexBoxProps>;
//#endregion
export { LoadingDefaultProps, LoadingProps };