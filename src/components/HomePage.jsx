import { Link } from "react-router-dom";


export default function Home (){

    return(
        <>
        <h1>Home page</h1>
        <ul>
            <li>
            <Link to="/SimpleApps"> <span>SimpleApp</span> </Link>
            </li>
            <li>
            <Link to="/TicTacToeGame"> <span>TicTacToeGame</span> </Link>
            </li>
        </ul>

        
        
        
        
        
        </>

    )
}