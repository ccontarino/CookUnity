export interface HolidayListResponse {
  date: string;
  isHoliday: boolean;
}

export interface DeliveriesResponse {
  id: number;
  date: string;
  products: ProductResponse[];
}
export interface ProductResponse {
  title: string;
  details: string;
  price: number;
  description: string;
  image: string;
  id: number;
}
