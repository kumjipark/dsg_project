'use client';
//#region src/components/time-picker/helpers.ts
const sectionsToViews = (sections) => {
	const views = [];
	sections.map((section) => {
		switch (section.format) {
			case "A":
			case "a":
				views.push("meridiem");
				break;
			case "H":
			case "HH":
			case "h":
			case "hh":
				views.push("hour");
				break;
			case "m":
			case "mm":
				views.push("minute");
				break;
			case "s":
			case "ss": views.push("second");
		}
	});
	return views;
};
//#endregion
export { sectionsToViews };
