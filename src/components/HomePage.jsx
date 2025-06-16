import { Link } from "react-router-dom";


export default function Home (){

    return(
        <>
        <h1>Home page</h1>
        <ul>
            <li>
            <Link to="/SimpleApps"> <span>Simple App</span> </Link>
            </li>
            <li>
            <Link to="/TicTacToeGame"> <span>Tic Tac Toe Game</span> </Link>
            </li>
            <li>
            <Link to="/InvestmentCalculator"> <span>Investment Calculator</span> </Link>
            </li>
            <li>
            <Link to="/TheAlmostFinalCountdown"> <span>The Almost Final Countdown</span> </Link>
            </li>
            <li>
            <Link to="/ElegantContext"> <span>Elegant Context</span> </Link>
            </li>


        </ul>
        </>

    )
}