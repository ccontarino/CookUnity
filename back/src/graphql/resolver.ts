import { deliveries } from '../data/deliverIes';
import { holidayList } from '../data/holidays';

export async function fetchDeliveries(dateParam: string): Promise<any[]> {
  const date = new Date(dateParam);
  return deliveries.filter((delivery) => delivery.date === date);
}
export async function fetchHolidayList({ dateList }: any): Promise<boolean[]> {
  // const date = new Date(dateParam);

  console.log('date list', dateList);
  return dateList.map((date: any) => {
    return holidayList[date] || false;
  });

  // return holidayList[date.getTime()] || false;
}
