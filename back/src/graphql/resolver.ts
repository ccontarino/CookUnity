export async function fetchDeliveries(): Promise<any[]> {
  const products = [
    {
      id: '1',
      title: 'Product 1',
      details: 'Details of Product 1',
      price: 19.99,
      description: 'Description of Product 1',
    },
    {
      id: '2',
      title: 'Product 2',
      details: 'Details of Product 2',
      price: 29.99,
      description: 'Description of Product 2',
    },
  ];
  return products;
}
