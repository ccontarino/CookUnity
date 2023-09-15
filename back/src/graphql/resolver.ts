import { deliveries } from '../data/deliverIes';

export async function fetchDeliveries(dateParam: string): Promise<any[]> {
  const date = new Date(dateParam);
  return deliveries.filter((delivery) => delivery.date === date);
}
