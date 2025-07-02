import { useState } from "react"
import Answers from "./Answers"
import ProgresBar from "./ProgresBar"
import QESTIONS from '../helpers/questions'

export default function Question({index, onSelectAnswer, skipAnswerHandler}){

    const [answer, setAnswer] = useState({
        selectedAnswer:'',
        isCorrect: null
    })

    const selectAnswerHandler = (answer)=>{
        setAnswer(
            {
                selectedAnswer: answer,
                isCorrect: null
            }
        )

        setTimeout(()=>{
            setAnswer(
            {
                selectedAnswer: answer,
                isCorrect: QESTIONS[index].answers[0] === answer
            })
            setTimeout(()=>{
                onSelectAnswer(answer)
            },2000)
        },1000)
        

    }

    let answerState= ''
        if(answer.selectedAnswer && answer.isCorrect!==null){
            answerState=answer.isCorrect?'correct':'wrong'
        } else if(answer.selectedAnswer){
            answerState='answered'
        }

    let timer=10000

    if(answer.selectedAnswer){
        timer=1000
    }
    if(answer.isCorrect!==null ){
        timer=2000
    }

    return(
        <div id="question">
        <ProgresBar  
            key={timer}
            timeout={timer} 
            onTimeout={answer.selectedAnswer===''? skipAnswerHandler: null} 
            mode={answerState}
        />
        <h2>{QESTIONS[index].text}</h2>
        <Answers 
            answer={QESTIONS[index].answers}
            answerState={answerState}
            selectedAnswer={answer.selectedAnswer}
            onSelect={selectAnswerHandler}
        />
    </div>
    )
}