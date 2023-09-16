import { buildSchema } from 'graphql';

export const schema = buildSchema(`
type Product{
  title: String!
  details: String!
  price: Float!
  description: String
  image: String!
  id: ID!
}

type Delivery {
  id: ID!
  date: String
  products: [Product]!
}

type HolidayListResponse {
  date: String!
  isHoliday: Boolean!
}

type Query {
  fetchDeliveries(date: String!): [Delivery]!
  fetchHolidayList(dateList: [String]!): [HolidayListResponse]!

}

`);
