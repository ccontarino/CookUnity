export const setDateForward = (date: Date, day: number) => {
  return date.setDate(date.getDate() + day);
};
export const getDateISOString = (date: Date) =>
  date.toISOString().split('T')[0];
