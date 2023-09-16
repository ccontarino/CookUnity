import { useQuery } from '@apollo/client';
import { dateSelected, deliveries } from '../store/store';
import { useAtom } from 'jotai';
import { GET_DELIVERIES } from '../graphql/queries/deliveryQuery';
import { useEffect } from 'react';

function useDeliveriesHook() {
  const [dateSelectedState, _] = useAtom(dateSelected);
  const {
    data: deliveryList,
    loading,
    error,
  }: any = useQuery(GET_DELIVERIES, {
    variables: { dateParam: dateSelectedState.date },
  });
  const [, setDeliveries] = useAtom(deliveries);
  useEffect(() => {
    if (deliveryList && deliveryList.fetchDeliveries) {
      setDeliveries(deliveryList.fetchDeliveries);
    }
  }, [deliveryList]);

  return {
    data: deliveryList?.fetchDeliveries || [],
    loading,
    error,
  };
}

export default useDeliveriesHook;
