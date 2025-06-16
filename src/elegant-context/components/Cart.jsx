import { useContext } from "react";
import { ShopContext } from "../store/shoping-store-context";


export default function Cart() {
    // const caerCtx = use(ShopContext) //can be use inside another function like if()
    //const caerCtx = useContext(ShopContext) //for older version react
    const {items, handleUpdateCartItemQuantity} = useContext(ShopContext) //for older version react


  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div id="cart">
      {items.length === 0 && <p>No items in cart!</p>}
      {items.length > 0 && (
        <ul id="cart-items">
          {items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => handleUpdateCartItemQuantity(item.id, -1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleUpdateCartItemQuantity(item.id, 1)}>
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}


// another option to use context value (older aproach)
// return(
//   <ShopContext.Consumer>
//     {(caerCtx)=>{
//       JSXcode
//     }}
//   </ShopContext>
// )
