import { ShopContext } from "../store/shoping-store-context";
import { useContext } from "react";

export default function Product({
  id,
  image,
  title,
  price,
  description,
}) {
  const {addItemsToCart}=useContext(ShopContext)

  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className='product-price'>${price}</p>
          <p>{description}</p>
        </div>
        <p className='product-actions'>
          <button onClick={() => addItemsToCart(id)}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}
