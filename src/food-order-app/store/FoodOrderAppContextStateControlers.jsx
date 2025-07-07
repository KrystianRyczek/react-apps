import { useReducer } from "react"
import { FoodOrderAppContext } from "./FoodOrederAppContext"
import {foodOrderAppContextStateReducer} from "./FoodOrderAppContextStateReducers"

const initilaState={
    isError:null,
    isFetching:null,
    meals:[],
    cart:[],
    checkout:[]
}

export default function FoodOrderAppContextProvider({children}){

    const [FoodOrderAppState, foodOrderAppStateDispatch] =useReducer(foodOrderAppContextStateReducer, initilaState)

    function addToCartHandler(id, name, price){
        foodOrderAppStateDispatch({
            type:'ADD_MEAL',
            payload:{ id, name, price}
        })
    }
    function removeFromCartHandler(meal){
        foodOrderAppStateDispatch({
            type:'REMOVE_MEAL',
            payload:meal
        })
    }
    function checkoutHandler(){
        foodOrderAppStateDispatch({
            type:'CHECKOUT',
        })
    }
    const ctxValue={
        ...FoodOrderAppState,
        addToCartHandler,
        removeFromCartHandler,
        checkoutHandler
    }

    return(
        <FoodOrderAppContext.Provider value={ctxValue}>
            {children}
        </FoodOrderAppContext.Provider>
    )
}