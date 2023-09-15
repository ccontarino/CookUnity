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

type Query {
  fetchDeliveries: [Delivery]
  fetchHolidayList(dateList: [String]!): [String]

}

`);
