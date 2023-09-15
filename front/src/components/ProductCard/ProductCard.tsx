import './ProductCard.scss';
interface Image {
  alt: string;
  uri: string;
}
interface ProductCard {
  title: string;
  description: string;
  price: number;
  img: Image;
}

function ProductCard({ title, description, price, img }: ProductCard) {
  return (
    <div className="product-card" data-test-id="product-card">
      <div className="card-product-information">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>${price}</p>
        <div
          style={{
            display: 'flex',
            flex: 1,
            justifyItems: 'center',
          }}></div>
        <div className="image-container">
          <img className="image" src={img.uri} alt={img.alt} />
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
