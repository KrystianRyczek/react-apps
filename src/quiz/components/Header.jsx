import quizLogo from '../assets/quiz-logo.png'
export default function Header (){

    return(
        <div id='header-q'>
            <img src={quizLogo} alt="app logo"/>
            <h1>React Quiz</h1>
        </div>

    )
}