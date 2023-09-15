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
  productType: Product!
}
type Query {
  fetchDeliveries: Product
}
`);
