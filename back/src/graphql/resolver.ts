import { deliveries } from '../data/deliverIes';
import { holidayList } from '../data/holidays';
import { HolidayListResponse } from '../types/holiday.types';

export async function fetchDeliveries({
  date,
}: {
  date: string;
}): Promise<any[]> {
  return deliveries.filter((delivery) => {
    return delivery.date === date;
  });
}
export async function fetchHolidayList({
  dateList,
}: {
  dateList: String[];
}): Promise<HolidayListResponse[]> {
  return dateList.map((date: any) => {
    return { date, isHoliday: holidayList[date] || false };
  });
}
