'use client';
//#region src/components/date-range-picker/helpers.ts
const toDateOnly = (date) => {
	return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
};
const isInvalidDateRange = (value) => {
	const [start, end] = value;
	if (Boolean(start) && isNaN(new Date(start).getTime())) return true;
	if (Boolean(end) && isNaN(new Date(end).getTime())) return true;
	if (Boolean(start) && Boolean(end)) {
		if (toDateOnly(new Date(start)) > toDateOnly(new Date(end))) return true;
	}
	return false;
};
//#endregion
export { isInvalidDateRange };
