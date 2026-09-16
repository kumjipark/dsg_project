import { ReactNode } from "react";

//#region src/components/select/helpers.d.ts
type Options = {
  value: string;
  label: ReactNode;
};
declare const convertChildrenToData: (nodes: React.ReactNode) => Array<Options>;
//#endregion
export { convertChildrenToData };