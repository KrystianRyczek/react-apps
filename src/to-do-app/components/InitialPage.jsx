import { Link } from 'react-router-dom'
import logo from '../assets/no-projects.png'
import { useContext } from "react"
import { ToDoAppContext } from "../store/ToDoAppContext"

export default function InitialPage(){
    
    const {openProjectFormClikcHandler} = useContext(ToDoAppContext)

    return(
        <div className='flex flex-col w-[35rem] mt-16'>
            <img className="w-110 h-100 pl-10"src={logo} alt="App Logo" />
            <h2 className="text-5xl font-bold text-stone-700 pt-10 pb-3">No Project Selected</h2>
            <p className="text-xl font-bold text-stone-700 pb-10">
                Select a project or get started with a new one
            </p>
            <button className="w-60 px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100" onClick={openProjectFormClikcHandler}>Create new project</button>
            <Link className="w-60" to="/">
                <button className="w-60 mt-10 px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">Back To HomePage</button>
            </Link>
        
        </div>
    )
}