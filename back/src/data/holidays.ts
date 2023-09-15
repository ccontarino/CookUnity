const now = new Date();

// convert tomorrow's date to ISO string and split it at the 'T' to get the date
const tomorrow = new Date(now.setDate(now.getDate() + 1))
  .toISOString()
  .split('T')[0];

export const holidayList = {
  [tomorrow]: true,
};
