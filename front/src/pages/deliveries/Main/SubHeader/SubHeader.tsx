import { FC, useState } from 'react';
import cart from '../../../../assets/cart.svg';
import './SubHeader.scss';
import { dateSelected, deliveries } from '../../../../store/store';
import { useAtom } from 'jotai';

export const SubHeader: FC = () => {
  const [date] = useAtom(dateSelected);
  const [deliveryList] = useAtom(deliveries);
  const countProducts = () =>
    deliveryList.flatMap((delivery) => delivery.products).length;

  return (
    <>
      <div className="subheader-container">
        <div className="subheader page__horizontal-space">
          <h1 data-test-id="subheader-title">
            {date.isHoliday ? 'Reschedule your order' : 'Confirm your order'}
          </h1>
          <button
            className="btn-primary cta"
            data-test-id="subheader-cta"
            onClick={() => alert(date.isHoliday ? 'Rescheduled' : 'Confirmed')}>
            <div className="cart-counter">
              <img src={cart} />
              <span data-test-id="cart-counter">{countProducts()}</span>
            </div>
            <span className="copy">
              {date.isHoliday ? 'Reschedule' : 'Confirm'}
            </span>
          </button>
        </div>
      </div>
    </>
  );
};
