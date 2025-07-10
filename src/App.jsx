import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';


const HomePage = lazy(() => import('./components/HomePage.jsx'));
const NotFoundPage = lazy(() => import('./components/NotFoundPage.jsx'));
const SimpleApps = lazy(() => import('./simple-apps/SimpleApps.jsx'));
const TicTacToeGame = lazy(() => import('./tic-tac-toe-game/TicTacToeGame.jsx'));
const InvestmentCalculator = lazy(()=> import('./investment-calculator/InvestmentCalculator.jsx'));
const TheAlmostFinalCountdown = lazy(()=> import('./the-almost-final-countdown/TheAlmostFinalCountdown.jsx'));
const ElegantContext =lazy(()=>import('./elegant-context/ElegantContext.jsx'));
const Placepicker = lazy(()=>import('./palcepicker/Placepicker.jsx'));
const ToDoApp = lazy(()=>import('./to-do-app/ToDoApp.jsx'));
const Quiz = lazy(()=>import('./quiz/Quiz.jsx'));
const FoodOrderApp = lazy(()=>import('./food-order-app/FoodOrderApp.jsx'))
const FormAction = lazy(()=>(import('./form-action/FormAction.jsx')))


function App() {
  return (
    <>
    <BrowserRouter>
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="SimpleApps" element={<SimpleApps/>}/>
          <Route path="TicTacToeGame" element={<TicTacToeGame/>}/>
          <Route path="InvestmentCalculator" element={<InvestmentCalculator/>}/>
          <Route path="TheAlmostFinalCountdown" element={<TheAlmostFinalCountdown/>}/>
          <Route path="ElegantContext" element={<ElegantContext/>}/>
          <Route path="Placepicker" element={<Placepicker/>}/>
          <Route path="ToDoApp" element={<ToDoApp/>}/>
          <Route path='Quiz' element={<Quiz/>}/>
          <Route path='FoodOrderApp' element = {<FoodOrderApp/>}/>
          <Route path='FormAction' element={<FormAction/>}/>
          <Route path="*" element={<NotFoundPage/>} />
          
        </Routes>
      </Suspense>
    </BrowserRouter>
    </>

  )
}

export default App
