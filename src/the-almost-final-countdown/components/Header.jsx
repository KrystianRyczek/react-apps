import { Link } from "react-router-dom"
export default function Header(){

    return(
            <header id="header-afc">
                <Link to="/">
                    <button>Back To HomePage</button>
                </Link>
                <h1 >the almost finla countdown</h1>
                <p >Stop the timer once you estimate that time is (almost) up.</p>
            </header>)
}