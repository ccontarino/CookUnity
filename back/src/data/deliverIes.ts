import { getDateISOString, setDateForward } from '../utils/date';
import { products } from './products';

export const deliveries = [
  {
    id: 1,
    date: getDateISOString(new Date()),
    products: [products[0], products[1]],
  },
  {
    id: 2,
    date: getDateISOString(new Date(setDateForward(new Date(), 1))),
    products: [products[2]],
  },
  {
    id: 3,
    date: getDateISOString(new Date(setDateForward(new Date(), 2))),
    products: [products[3]],
  },
  {
    id: 4,
    date: getDateISOString(new Date(setDateForward(new Date(), 2))),
    products: [products[4]],
  },
  {
    id: 5,
    date: getDateISOString(new Date(setDateForward(new Date(), 2))),
    products: [products[4]],
  },
];
