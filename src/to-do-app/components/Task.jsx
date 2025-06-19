import { useContext, useRef} from "react"
import { ToDoAppContext } from "../store/ToDoAppContext"

export default function Task({projectId, task}){
    const{
        removeTaskHandler, 
        complitTaskHandler}=useContext(ToDoAppContext)

    const checkbox = useRef()    

    const complitedBtnClickHandler =(taskId)=>{
        complitTaskHandler(projectId, taskId, checkbox.current.checked)
    }
return(    
    <li className="flex items-center justify-between">
        <div className="flex gap-11 items-center pl-2">
            <input className="peer relative appearance-none w-5 h-5 border rounded-full border-stone-400 cursor-pointer checked:bg-stone-800" ref={checkbox} id={task.id} type="checkbox" checked={task.complit} onChange={()=>{complitedBtnClickHandler(task.id)}}/>
            <p className="text-stone-900 inline-block align-top mb-1">{task.title}</p>
        </div>
        <button className="px-4 py-2 text-xs md:text-base rounded-md text-stone-400 hover:text-red-500" onClick={()=>{removeTaskHandler(projectId , task.id)}}>Clear</button>
    </li>)
}