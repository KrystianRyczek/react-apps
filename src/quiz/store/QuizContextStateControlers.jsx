import { useReducer } from "react"
import { QuizContext } from "./QuizContext"
import { quizContextReducers } from "./QuizContextReducers"



const initialState= []



export default function QuizContextProvider({children}){
    const[quizState, quizStateDispach]=useReducer(quizContextReducers, initialState)

    const timeOutHandler=()=>{
        quizStateDispach({    
            type:"TIMEOUT",
        })

    }

        const ctxValue={
            ...quizState,
            timeOutHandler
        }
        
        return(
            <QuizContext.Provider value={ctxValue}>
                {children}
            </QuizContext.Provider>)  
}