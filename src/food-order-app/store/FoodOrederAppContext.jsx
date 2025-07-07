import { createContext } from "react"


const initilaStateTemplate={
    isError:null,
    isFetching:null,
    meals:[],
    cart:[],
    checkout:[],
    addToCartHandler:()=>{},
    removeFromCartHandler:()=>{},
    checkoutHandler:()=>{},
}


export const FoodOrderAppContext = createContext(initilaStateTemplate)






