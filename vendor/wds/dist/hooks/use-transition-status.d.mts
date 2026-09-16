//#region src/hooks/use-transition-status.d.ts
type UseTransitionStatusParams = {
  duration?: number;
  open?: boolean;
};
type TransitionStatus = 'unmounted' | 'initial' | 'open' | 'close';
declare const useTransitionStatus: ({
  duration,
  open
}: UseTransitionStatusParams) => {
  hasExited: boolean;
  status: TransitionStatus;
};
//#endregion
export { TransitionStatus, UseTransitionStatusParams, useTransitionStatus as default };