import { useContext } from "react"
import { FoodOrderAppContext } from "../store/FoodOrederAppContext"
import {currencyformater} from '../helpers/formatig-price'
export default function MealCart({meal}){
    const {addToCartHandler} = useContext(FoodOrderAppContext)

    return(
        <li className='meal-item'>
            <article>
                <img src={meal.image} alt={meal.name}/>
                <div>
                    <h3>{meal.name}</h3>
                    <p className='meal-item-price'>{currencyformater(meal.price)}</p>
                    <p className='meal-item-description'>{meal.description}</p>
                </div>
                <p className="meal-item-actions">
                <button className='button' onClick={()=>{addToCartHandler(meal.id, meal.name, meal.price)}}>Add to Cart</button>
                </p>
            </article>
        </li>
    )
}