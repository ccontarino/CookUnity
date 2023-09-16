import { useState } from 'react';
import {
  dayList,
  getDateISOString,
  monthList,
  setDateForward,
} from '../../../utils/date';
import './Header.scss';
import { useQuery } from '@apollo/client';
import {
  GET_HOLIDAY_LIST,
  IS_HOLIDAY,
} from '../../../graphql/queries/holidayQuery';
import { useAtom } from 'jotai';
import { dateSelected } from '../../../store/store';
import { GET_DELIVERIES } from '../../../graphql/queries/deliveryQuery';

interface TabProps {
  index: number;
  date: Date;
}
export const Header = () => {
  const [activeTab, setActiveTab] = useState(0);
  const onTabClick = (index: number) => {
    setActiveTab(index);
    setDateSelected(holidayList.fetchHolidayList[index]);
  };
  const [dateSelectedState, setDateSelected] = useAtom(dateSelected);
  const TabComponent = ({ date, index }: TabProps) => (
    <button
      onClick={() => onTabClick(index)}
      className={`tab ${index === activeTab ? 'active' : ''}`}>
      <span className="date">
        {dayList[date.getDay()] +
          ', ' +
          monthList[date.getMonth()] +
          ' ' +
          date.getDate()}
      </span>
    </button>
  );
  const dateNow = new Date();
  const dateTomorrow = setDateForward(1);
  const dateAfterTomorrow = setDateForward(2);
  const dates = [dateNow, dateTomorrow, dateAfterTomorrow];

  const datesQuery = [
    getDateISOString(dateNow),
    getDateISOString(dateTomorrow),
    getDateISOString(dateAfterTomorrow),
  ];

  const { data: holidayList }: any = useQuery(GET_HOLIDAY_LIST, {
    variables: { dateList: datesQuery },
  });
  const { data: deliveryList }: any = useQuery(GET_DELIVERIES, {
    variables: { dateParam: getDateISOString(dateNow) },
  });

  return (
    <header className="header-container">
      <div className="page__horizontal-space header">
        <div className="tabs-container">
          <div className="tabs">
            {dates.map((date: Date, index: number) => (
              <TabComponent date={date} index={index} key={index} />
            ))}
          </div>
        </div>
        <button
          className="btn-primary btn-buy"
          data-test-id="header-cta"
          onClick={() => alert('Confirmed')}>
          {dateSelectedState.isHoliday ? 'Reschedule' : 'Confirm'}
        </button>
      </div>
    </header>
  );
};
