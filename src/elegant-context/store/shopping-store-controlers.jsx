
import { useReducer} from "react";
import { ShopContext } from "./shoping-store-context";
import {shopStateReducer, initialState} from "./shopping-store-reducers";

export default function ShopContextProvider({children}){

  const[shopState, shopStateDispach]=useReducer(shopStateReducer, initialState)
  
  function handleAddItemToCart(id) {
    shopStateDispach({
      type:'ADD_ITEM',
      payload: {id,}
    })
  }
  function handleUpdateCartItemQuantity(id, amount) {
    shopStateDispach({
      type:'UPDATE_ITEM',
      payload: {id, amount}

    })
  }
  const ctxValue={
    items: shopState.items,
    addItemsToCart: handleAddItemToCart,
    handleUpdateCartItemQuantity:handleUpdateCartItemQuantity
  }

  return(
    <ShopContext.Provider value={ctxValue}>
        {children}
    </ShopContext.Provider>
  )
}