import'./styles/styles.css'
import MealsSection from './components/MealsSection'
import Header from './components/Header'
import FoodOrderAppContextProvider from './store/FoodOrderAppContextStateControlers'
export default function FoodOrderApp(){

    return(
        <div id="food-order-app">
            <FoodOrderAppContextProvider>
                <Header/>
                <MealsSection/>
            </FoodOrderAppContextProvider>


        </div>
    )
}