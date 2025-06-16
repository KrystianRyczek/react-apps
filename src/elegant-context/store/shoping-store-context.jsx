import { createContext} from "react";

export const ShopContext = createContext({
    //not required bad it is usefull to auto fill
    items:[],
    addItemsToCart: ()=>{},
    handleUpdateCartItemQuantity:()=>{}
})

