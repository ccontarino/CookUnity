import { deliveries } from '../data/deliverIes';
import { holidayList } from '../data/holidays';
import {
  DeliveriesResponse,
  HolidayListResponse,
} from '../types/holiday.types';

export async function fetchDeliveries({
  date,
}: {
  date: string;
}): Promise<DeliveriesResponse[]> {
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
