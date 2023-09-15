import { deliveries } from '../data/deliverIes';
import { holidayList } from '../data/holidays';
import { HolidayListResponse } from '../types/holiday.types';

export async function fetchDeliveries(dateParam: string): Promise<any[]> {
  const date = new Date(dateParam);
  return deliveries.filter((delivery) => delivery.date === date);
}
export async function fetchHolidayList({
  dateList,
}: any): Promise<HolidayListResponse[]> {
  return dateList.map((date: any) => {
    return { date, isHoliday: holidayList[date] || false };
  });
}
