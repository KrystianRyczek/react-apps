import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

export default function Header(){
    
    return(
        <header id="header-p">
        <Link to="/">
        <button>Back To HomePage</button>
        </Link>
        <div>
            <img src={logo} alt="Stylized globe" />
            <h1>PlacePicker</h1>
            <p>
            Create your personal collection of places you would like to visit or
            you have visited.
            </p>
        </div>
        </header>
    )
}
