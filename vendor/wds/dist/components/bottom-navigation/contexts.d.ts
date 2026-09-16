import * as _$react from "react";

//#region src/components/bottom-navigation/contexts.d.ts
type BottomNavigationContextType = {
  value?: string;
  onValueChange: (value: string) => void;
};
declare const BottomNavigationProvider: _$react.FC<BottomNavigationContextType & {
    children: React.ReactNode;
  }>, useBottomNavigationContext: (consumerName: string) => BottomNavigationContextType;
//#endregion
export { BottomNavigationContextType, BottomNavigationProvider, useBottomNavigationContext };