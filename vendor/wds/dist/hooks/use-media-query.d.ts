import { BreakPoint } from "@wanteddev/wds-engine";

//#region src/hooks/use-media-query.d.ts
declare const useMediaQuery: () => {
  breakpoint: {
    readonly xl: "1600px";
    readonly lg: "1200px";
    readonly md: "992px";
    readonly sm: "768px";
    readonly xs: "0px";
  } | {
    readonly xl: "1600px";
    readonly lg: "1200px";
    readonly md: "992px";
    readonly sm: "768px";
    readonly xs: "0px";
  };
  respondTo: (breakpoint: BreakPoint[keyof BreakPoint]) => string;
  respondMore: (breakpoint: BreakPoint[keyof BreakPoint]) => string;
  respondUp: (breakpoint: BreakPoint[keyof BreakPoint]) => string;
  respondDown: (breakpoint: BreakPoint[keyof BreakPoint]) => string;
};
//#endregion
export { useMediaQuery as default };