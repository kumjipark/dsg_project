import { DateType, ViewType } from "../date-calendar/types.js";
import { Merge, ResponsiveProps, WithSxProps } from "@wanteddev/wds-engine";

//#region src/components/date-range-calendar/types.d.ts
type DateRangeType = [DateType, DateType];
type DateRangeCalendarDefaultProps = {
  /** The value of the date range. */value?: DateRangeType; /** The default value of the date range. */
  defaultValue?: DateRangeType; /** Callback function when the value changes. */
  onChange?: (value: DateRangeType) => void; /** Callback function when the date range selection is completed. */
  onChangeComplete?: (value: DateRangeType) => void; /** The number of calendars to display. Only effective in day view. */
  calendars?: number; /** The view of the calendar. */
  view?: ViewType; /** The maximum date. */
  max?: DateType; /** The minimum date. */
  min?: DateType; /** The locale of the date. */
  locale?: string; /** The timezone of the date. */
  timezone?: string; /** Whether the calendar is disabled. */
  disabled?: boolean; /** Whether the calendar is read only. */
  readOnly?: boolean; /** The order of the years. */
  yearsOrder?: 'desc' | 'asc';
};
type DateRangeCalendarProps = Merge<WithSxProps<DateRangeCalendarDefaultProps>, ResponsiveProps<Pick<DateRangeCalendarDefaultProps, 'calendars'>>>;
type RangeItemProps = WithSxProps<{
  isActive?: boolean;
  isCurrent?: boolean;
  isOtherMonth?: boolean;
  isRangeStart?: boolean;
  isRangeEnd?: boolean;
  isInRange?: boolean;
}>;
type RangeDateItemProps = RangeItemProps;
//#endregion
export { DateRangeCalendarProps, DateRangeType, RangeDateItemProps, RangeItemProps };