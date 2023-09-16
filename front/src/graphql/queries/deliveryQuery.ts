import { gql } from '@apollo/client';

export const GET_DELIVERIES = gql`
  query fetchDeliveries($dateParam: String!) {
    fetchDeliveries(date: $dateParam) {
      id
      date
      products {
        title
        details
        price
        image
        id
      }
    }
  }
`;
