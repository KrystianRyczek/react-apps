import MEALS from '../backend/data/available-meals.json'
import MealCart from "./MealCart";
import { useEffect, useState} from "react";
import { FoodOrderAppContext } from "../store/FoodOrederAppContext";

export default function MealsSection(){

    const [state, setState] =useState(
        {
            isloading:null,
            isError:null,
            meals:[]
        }
    )
     
    useEffect(()=>{
        (async()=>{
            try{
                setState((prevState)=>{
                    return {...prevState, isloading:true}
                })
                const response= await fetch('https://foodorderapp-50719-default-rtdb.europe-west1.firebasedatabase.app/meals.json')
                const data = await response.json()

                if(!response.ok){
                   throw new Error("Something went wrong!");
                }
                setState((prevState)=>{
                    return {...prevState, isloading:false, meals:[...data]} 
                })

            }catch(error){
                setState((prevState)=>{
                    return {...prevState, isloading:false, isError:error}
                })
            }
        })()

    },[])
    return(
        <>
            {state.isLoading? <p className='center'> Menu is loading...</p>:undefined}
            {!state.isLoading&&state.isError? <p className='error'>Menu loading failed...</p>:undefined}
            <ul id="meals">
                {state.meals.map(meal=><MealCart key={meal.id} meal={meal}/>)}
            </ul>
        </>
    )

}

