import './styles/styles.css';
import Header from './components/Header';
import UserInput from './components/UserInputs';
import Result from './components/Result';
import { useState } from 'react';

export default function TicTacToeGame() {

  const [inputsData, setInputsData]=useState({initialInvestment:0,
                                              annualInvestment:0, 
                                              expectedReturn:0, 
                                              duration:0})
  

  const dataInputHandler=(event)=>{
      setInputsData((prewInputsData)=>{
        let updatedInputsData = {...prewInputsData}
        switch (event.target.id) {
          case "initial-investment":
             updatedInputsData = {...updatedInputsData, initialInvestment: +event.target.value}
            break;
          case "annual-investment":
              updatedInputsData = {...updatedInputsData, annualInvestment: +event.target.value}
            break;
          case "expected-return":
              updatedInputsData = {...updatedInputsData, expectedReturn: +event.target.value}
            break;
          case "duration":
              updatedInputsData = {...updatedInputsData, duration: +event.target.value}
            break;
        }
        return updatedInputsData
      })
      

  }

    return(
    <div id="investment-calculator">
      <Header/>
      <UserInput dataInputHandler={dataInputHandler} inputsData={inputsData}/>
      <Result inputsData={inputsData}/>
    </div>
    )

}