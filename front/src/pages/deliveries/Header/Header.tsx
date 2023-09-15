import { useState } from 'react';
import {
  dayList,
  getDateISOString,
  monthList,
  setDateForward,
} from '../../../utils/date';
import './Header.scss';
import { useQuery } from '@apollo/client';
import { IS_HOLIDAY } from '../../../services/holidayQuery';

interface TabProps {
  index: number;
  date: Date;
}
export const Header = () => {
  const [activeTab, setActiveTab] = useState(0);
  const onTabClick = (index: number) => {
    setActiveTab(index);
  };
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

  const { data: holidayList }: any = useQuery(IS_HOLIDAY, {
    variables: { dateList: datesQuery },
  });
  console.log('', holidayList);
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
          Confirm
        </button>
      </div>
    </header>
  );
};
