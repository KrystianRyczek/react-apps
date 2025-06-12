import { Link } from "react-router-dom";
import reactImg from '../assets/react-core-concepts.png';
import {content} from '../helpers/helpers.js'

export default function Header(){
    
    const description = content;

    return(
        <header>
        <Link to="/">
        <h2>Back To HomePage</h2>
        </Link>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
            {description} React concepts you will need for almost any app you are
            going to build!
        </p>
        </header>
    )
}
