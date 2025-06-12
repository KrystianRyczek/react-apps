import logoGame from '../assets/game-logo.png'
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header id="header-T-T-T-G">
            <Link to="/">
                <h2>Back To HomePage</h2>
            </Link>
            <img id="header-img" src={logoGame} alt="Logo Tic-Tac-Toe Game"/>
            <h1 id="header-h1">Tic-Tac-Toe </h1>
        </header>
    )
}
