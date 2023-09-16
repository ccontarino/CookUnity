import { gql } from '@apollo/client';

export const GET_HOLIDAY_LIST = gql`
  query fetchHolidayList($dateList: [String]!) {
    fetchHolidayList(dateList: $dateList){
      date
      isHoliday
    }
  }
`;
