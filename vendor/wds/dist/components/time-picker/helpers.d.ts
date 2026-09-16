import { TimeViewType } from "../time-view/types.js";
import { DateFormatSection } from "../date-picker/helpers.js";

//#region src/components/time-picker/helpers.d.ts
declare const sectionsToViews: (sections: Array<DateFormatSection>) => TimeViewType[];
//#endregion
export { sectionsToViews };