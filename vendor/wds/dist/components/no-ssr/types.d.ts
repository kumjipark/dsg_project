import { ReactNode } from "react";

//#region src/components/no-ssr/types.d.ts
type NoSsrProps = {
  children: ReactNode;
  fallback?: ReactNode;
};
//#endregion
export { NoSsrProps };