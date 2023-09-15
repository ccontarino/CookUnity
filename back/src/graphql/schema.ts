import { buildSchema } from 'graphql';

export const schema = buildSchema(`
type Product{
  title: String!
  details: String!
  price: Float!
  description: String
}

type Delivery {
  id: ID!
  deliveryDate: String!
  products: [Product]!
}

type HolidayListResponse {
  date: String!
  isHoliday: Boolean!
}

type Query {
  fetchDeliveries: [Delivery]
  fetchHolidayList(dateList: [String]!): [HolidayListResponse]!

}

`);
