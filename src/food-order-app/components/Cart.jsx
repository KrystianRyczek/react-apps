import { useContext } from "react";
import { FoodOrderAppContext } from "../store/FoodOrederAppContext";
import { currencyformater } from "../helpers/formatig-price";
export default function Cart({checkoutClickHandler, closeBtnClickHandler}){

    const {cart, addToCartHandler, removeFromCartHandler} = useContext(FoodOrderAppContext)
    const totalPrice = cart.reduceRight((acc, meal)=>{
        return acc = acc + meal.price*meal.count
    },0)

    return(
        <div className="cart">
            <h2>Your Cart</h2>
            <ul>
                {cart.map(meal=>{
                    return(
                        <li key={meal.id} className="cart-item">
                            <p>{meal.name} - {meal.count} X {currencyformater(meal.price)}</p>
                            <p className="cart-item-actions">
                                <button onClick={()=>{ addToCartHandler(meal.id, meal.name, meal.price)}}>
                                    <span>+</span>
                                </button>
                                <span>{meal.count}</span>
                                <button onClick={()=>{removeFromCartHandler(meal.id)}}>
                                    -
                                </button>
                            </p> 
                        </li>
                    )
                })}
            </ul>
            <p className="cart-total">{currencyformater(totalPrice)}</p>
            <p className="modal-actions">
                <button onClick={closeBtnClickHandler} className='text-button'>Close</button>
                {cart.length>0&&<button onClick={checkoutClickHandler} className='button'>Go to Checkout</button>}
            </p>
        </div>

    )
}