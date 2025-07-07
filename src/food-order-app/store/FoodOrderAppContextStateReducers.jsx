
export function foodOrderAppContextStateReducer(state, action){
    if(action.type==='MEALS'){
        return {...state, meals:action.payload}
    }
    
    if(action.type==='FETCHING'){
        return {...state, isFetching:action.payload}
    }
    if(action.type==='ERROR'){
        return {...state, isError:action.payload}
    }
    if(action.type==='ADD_MEAL'){
        const mealIndex = state.cart.findIndex((cartMeal)=>{
            return cartMeal?.id === action.payload.id
        })

        if(mealIndex===-1){
            return {...state, cart:[...state.cart, {id:action.payload.id, name:action.payload.name, count:1, price:action.payload.price}]}
        }
        const updatedMeal = {...state.cart[mealIndex], count:state.cart[mealIndex].count+1}
        const updatedCart = [...state.cart]
        updatedCart[mealIndex]=updatedMeal
        return {...state, cart:updatedCart}    
    }
    if(action.type==='REMOVE_MEAL'){
        const mealIndex = state.cart.findIndex((cartMeal)=>{
            return cartMeal?.id === action.payload
        })

        if(mealIndex===-1){
            return {...state}
        }

        let updatedCart = [...state.cart]

        if(state.cart[mealIndex].count===1){
            updatedCart = updatedCart.filter(meal=>meal.id!==action.payload)
        }else{
            const updatedMeal = {...state.cart[mealIndex], count:state.cart[mealIndex].count-1}
            updatedCart[mealIndex]=updatedMeal
        }
        return {...state, cart:updatedCart}   
    }
    if(action.type==='CHECKOUT'){
        return {...state, cart:[]} 
    }
    return (state)
}