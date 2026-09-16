import { TimeViewType } from "../time-view/types.mjs";
import { DateFormatSection } from "../date-picker/helpers.mjs";

//#region src/components/time-picker/helpers.d.ts
declare const sectionsToViews: (sections: Array<DateFormatSection>) => TimeViewType[];
//#endregion
export { sectionsToViews };