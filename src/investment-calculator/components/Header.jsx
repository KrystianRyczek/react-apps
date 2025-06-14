import logoGame from '../assets/investment-calculator-logo.png'
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header id="header-ic">
            <Link id="header-link" to="/">
                <button>Back To HomePage</button>
            </Link>
            <img  src={logoGame} alt="Logo Tic-Tac-Toe Game"/>
            <h1 >React Investment Calculator</h1>
        </header>
    )
}
