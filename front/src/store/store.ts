import { atom } from 'jotai';

export const deliveries = atom([]);
export const dateSelected = atom({
  date: new Date().toISOString().split('T')[0],
  isHoliday: false,
});
export const modalOpen = atom({ isOpen: false, bodyText: '', headerText: '' });
