import { FC } from 'react';
import { SubHeader } from './SubHeader/SubHeader';
import ProductCard from '../../../components/ProductCard/ProductCard';
import './Main.scss';
import Loader from '../../../components/Loader/Loader';

import useDeliveriesHook from '../../../hooks/useDeliveriesHook';
export const Main: FC = () => {
  const { data: deliveriesList, loading } = useDeliveriesHook();
  return (
    <main className="page__main">
      <SubHeader />
      <div className="products-grid page__horizontal-space page__vertical-space">
        {loading ? (
          <Loader />
        ) : (
          <>
            {deliveriesList.map((delivery) =>
              delivery?.products?.map((item, index) => (
                <ProductCard
                  description={item.details}
                  title={item.title}
                  price={item.price}
                  img={item.image}
                  key={item.id}
                />
              ))
            )}
          </>
        )}
      </div>
    </main>
  );
};
