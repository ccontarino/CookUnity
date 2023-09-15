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
        <p className="description-text">{description}</p>
        <p>${price}</p>
        <div className="image-container">
          <img className="image" src={img.uri} alt={img.alt} />
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
