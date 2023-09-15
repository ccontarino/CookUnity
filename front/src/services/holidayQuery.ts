import { gql } from '@apollo/client';

export const IS_HOLIDAY = gql`
  query fetchHolidayList($dateList: [String]!) {
    fetchHolidayList(dateList: $dateList)
  }
`;
