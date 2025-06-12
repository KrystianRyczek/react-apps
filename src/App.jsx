import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';




import './App.css'


const HomePage = lazy(() => import('./components/HomePage'));
const NotFoundPage = lazy(() => import('./components/NotFoundPage'));
const SimpleApps = lazy(() => import('./simple-apps/SimpleApps'));
const TicTacToeGame = lazy(() => import('./tic-tac-toe-game/TicTacToeGame'));




function App() {


  return (
    <>
    <BrowserRouter>
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="SimpleApps" element={<SimpleApps/>}/>
          <Route path="TicTacToeGame" element={<TicTacToeGame/>}/>
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
    </>

  )
}

export default App
