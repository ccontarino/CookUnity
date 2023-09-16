export const dayList = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const monthList = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August ',
  'September',
  'October',
  'November',
  'December',
];

export const setDateForward = (day: number) => {
  return new Date(new Date().setDate(new Date().getDate() + day));
};

export const getDateISOString = (date: Date) =>
  date.toISOString().split('T')[0];
