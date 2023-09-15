import { FC } from 'react';
import cart from '../../../../assets/cart.svg';
import './SubHeader.scss';
import { dateSelected } from '../../../../store/store';
import { useAtom } from 'jotai';

export const SubHeader: FC = () => {
  const [date] = useAtom(dateSelected);
  return (
    <div className="subheader-container">
      <div className="subheader page__horizontal-space">
        <h1 data-test-id="subheader-title">
          {date.isHoliday ? 'Reschedule your order' : 'Confirm your order'}
        </h1>
        <button
          className="btn-primary cta"
          data-test-id="subheader-cta"
          onClick={() => alert('Confirmed')}>
          <div className="cart-counter">
            <img src={cart} />
            <span data-test-id="cart-counter">2</span>
          </div>
          <span className="copy">
            {date.isHoliday ? 'Reschedule' : 'Confirm'}
          </span>
        </button>
      </div>
    </div>
  );
};
