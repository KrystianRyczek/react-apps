import { useRef } from "react"


export default function Answers({answer, answerState, selectedAnswer, onSelect}){

    const randomizedAnswers = useRef()

    if(!randomizedAnswers.current){
        randomizedAnswers.current=[...answer]
        randomizedAnswers.current.sort(()=>Math.random()-0.5)
    }

    return(
        <ul id="answers">
        {randomizedAnswers.current.map(answer=> {
            const isSelected = selectedAnswer === answer
            let cssClasse=''
            if(answerState==='answered'&&isSelected){
                cssClasse='selected'
            }
            if((answerState==='correct'||answerState==='wrong')&&isSelected){
                cssClasse=answerState
            }
            return <li className='answer' key={answer}> 
                    <button className={cssClasse} onClick={()=>{onSelect(answer)}} disabled={selectedAnswer!==''?true:false}>
                        {answer}
                    </button></li>
        })}
    </ul>

    )
}