import { FC } from 'react';
import { SubHeader } from './SubHeader/SubHeader';
import ProductCard from '../../../components/ProductCard/ProductCard';
import './Main.scss';
export const Main: FC = () => {
  const productList = [
    {
      title: 'Product 1',
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 200,
      img: {
        uri: 'https://cookunity-media.imgix.net/media/catalog/product/cache/x1200/l/a/large-chicken_schnitzel_-_ratel.jpeg',
        alt: 'Product 1',
      },
    },
    {
      title: 'Product 2',
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      price: 100,
      img: {
        uri: 'https://cookunity-media.imgix.net/media/catalog/product/cache/x1200/l/a/large-chicken_schnitzel_-_ratel.jpeg',
        alt: 'Product 2',
      },
    },
  ];

  return (
    <main className="page__main">
      <SubHeader />
      <div className="products-grid page__horizontal-space page__vertical-space">
        {productList.map((item, index) => (
          <ProductCard
            description={item.description}
            title={item.title}
            price={item.price}
            img={item.img}
            key={index}></ProductCard>
        ))}
      </div>
    </main>
  );
};
