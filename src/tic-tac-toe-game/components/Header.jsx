import logoGame from '../assets/game-logo.png'
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header id="header-tt">
            <Link to="/">
                <button>Back To HomePage</button>
            </Link>
            <img  src={logoGame} alt="Logo Tic-Tac-Toe Game"/>
            <h1 >Tic-Tac-Toe </h1>
        </header>
    )
}
