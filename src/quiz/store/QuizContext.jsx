import { createContext } from "react";

export const QuizContext = createContext(
    {
        currentQuestionIndex: 0,
        playerResult:[
            {questionIndex: 0,
             result: 'pass',
             score: 0
            }
        ],
        clickBtnHandler:()=>{},
        
    }

)