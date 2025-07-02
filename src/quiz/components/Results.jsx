import quizComplitImg from '../assets/quiz-complete.png'
import QESTIONS from '../helpers/questions'

export default function Result({userAnswer}){
    const questionCount = QESTIONS.length
    const skipperdAnswers = userAnswer.filter(answer=>answer===null).length
    const correctAnswers =userAnswer.filter((answer, index)=>answer===QESTIONS[index].answers[0]).length

    const passRate = ((correctAnswers/questionCount)*100).toFixed(0)
    const failureRate =(((questionCount - correctAnswers - skipperdAnswers)/questionCount)*100).toFixed(0)
    const skipRate =((skipperdAnswers/questionCount)*100).toFixed(0)

    return (
        <div id='summary'>
            <img src={quizComplitImg}/>
            <h2>Quiz Complited!</h2>
            <div id="summary-stats">
                <p>
                    <span className='number'>{passRate}%</span>
                    <span className='text'>Correct answers</span>
                </p>
                <p>
                    <span className='number'>{failureRate}%</span>
                    <span className='text'>Wrong  answers</span>
                </p>
                <p>
                    <span className='number'>{skipRate}%</span>
                    <span className='text'>Skipped  answers</span>
                </p>

            </div>
            <ol>
                {userAnswer.map((answer, index)=>{
                    let cssClasse='user-answer'
                    if(answer===null){
                        cssClasse=cssClasse +' skipped'
                    }else if(answer===QESTIONS[index].answers[0]){
                        cssClasse=cssClasse +' correct'
                    }else{
                        cssClasse=cssClasse +' wrong'
                    }
                    
                    return (
                        <li key={index}>
                            <h3>{index+1}</h3>
                            <p className='question'>{QESTIONS[index].text}</p>
                            <p className={cssClasse}>{answer??'Skipped'}</p>
                        </li>
                    )               
                })}
            </ol>

        </div>
    )
}