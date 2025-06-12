import './styles/styles.css';
import Header from './components/Header';
import GameSection from './components/GameSection'

export default function TicTacToeGame() {

    return(
    <div id="tic-tac-toe-game">
      <Header/>
      <GameSection/>
    </div>
    )

}