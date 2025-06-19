import { useContext } from "react"
import {ToDoAppContext} from '../store/ToDoAppContext.jsx'

export default function ProjectsSidebar(){


    const {projects, openProjectFormClikcHandler, openTaskFormClikcHandler} = useContext(ToDoAppContext)


    return(<aside className=" min-w-60 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl">
                <h2
                    className="mb-8 font-bold uppercase text-xl text-stone-200"
                >
                    Your Projects
                </h2>
                <div>
                    <button
                        className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
                        onClick={openProjectFormClikcHandler} 
                        type="button"
                    >
                        +Add Project
                    </button>
                </div>
                <ul className="mt-8">
                    {projects.map((project)=>
                    <li key={project.id}>
                        <button 
                            className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800" 
                            onClick={()=>{openTaskFormClikcHandler(project.id)}}
                        >
                            {project.title}
                        </button>
                    </li>)}
                </ul>
            </aside>)
}