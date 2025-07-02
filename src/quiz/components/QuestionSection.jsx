
import QESTIONS from '../helpers/questions'
import ProgresBar from './ProgresBar'
import Result from './Results'
import { useState, useCallback} from 'react'
import Answers from './Answers'
import Question from './Question'


export default function QuestionSection(){
    
    const [userAnswer, setUserAnswer] = useState([])
   
    const questionsQuantity = QESTIONS.length
    const activeQestion = userAnswer.length
    const quizIsComplited = questionsQuantity===activeQestion

    const selectAnswerHandler =useCallback(
        (answer)=>{setUserAnswer(prevAnswer=>[...prevAnswer,answer])
    },[])

    const skipAnswerHandler=useCallback(()=>{selectAnswerHandler(null)},[selectAnswerHandler])

    if(quizIsComplited){
        return(
           <Result userAnswer={userAnswer}/>
        )
    }

    return(
        <div id="quiz">
            <Question
                key={activeQestion}
                index={activeQestion}
                onSelectAnswer={selectAnswerHandler}
                skipAnswerHandler={skipAnswerHandler}
            />
        </div>

    )
}