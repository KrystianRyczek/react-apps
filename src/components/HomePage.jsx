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
            <li>
                <Link to="/Placepicker"> <span>Placepicker</span> </Link>
            </li>
            <li>
                <Link to="/ToDoApp"> <span>To Do App</span> </Link>
            </li>
            <li>
                <Link to="/Quiz"> <span>Quiz</span> </Link>
            </li>
            <li>
                <Link to="/FoodOrderApp"> <span>Food Order App</span> </Link>
            </li>
            <li>
                <Link to="/FormAction"> <span>Form Action</span> </Link>
            </li>
            <li>
                <Link to="/OpinionOptimisticUpdate"> <span>Opinion Optimistic Update</span> </Link>
            </li>


            
        </ul>
        </>

    )
}