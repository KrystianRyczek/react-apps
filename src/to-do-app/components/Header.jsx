import { Link } from "react-router-dom";
import logo from '../assets/no-projects.png';

export default function Header(){
    
    return(
        <header id="header-p">
        <Link to="/">
        <button>Back To HomePage</button>
        </Link>
        <div>
            {/* <img src={logo} alt="App Logo" /> */}
            <h1>To Do App</h1>
            <p>
            Create your personal organizer!
            </p>
        </div>
        </header>
    )
}
