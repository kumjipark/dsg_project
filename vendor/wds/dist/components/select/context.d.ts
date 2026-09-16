import * as _$react from "react";

//#region src/components/select/context.d.ts
type SelectContextType = {
  onOpenChange: (open: boolean) => void;
  enableMenuActionArea?: boolean;
  value?: string | Array<string>;
  isMultiple?: boolean;
};
declare const SelectProvider: _$react.FC<SelectContextType & {
    children: React.ReactNode;
  }>, useSelectContext: (consumerName: string) => SelectContextType;
//#endregion
export { SelectProvider, useSelectContext };