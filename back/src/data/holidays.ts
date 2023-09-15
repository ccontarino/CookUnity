const now = new Date();

// this is a simulation holiday service
export const holidayList = {
  [now.setDate(now.getDate() + 1)]: true,
  [now.setDate(now.getDate() + 4)]: true,
};
