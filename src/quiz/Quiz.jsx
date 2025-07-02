import './styles/styles.css';
import Header from './components/Header';
import QuestionSection from './components/QuestionSection'
import QuizContextProvider from './store/QuizContextStateControlers';
export default function Quiz() {
    console.log('APP COMPONENT EXECUTING');

    return(
      <main id="quiz-app">
        <QuizContextProvider>
          <Header/>
          <QuestionSection/>
        </QuizContextProvider>
      </main>
    )

}