import { useContext, useRef, useState } from "react"
import { ToDoAppContext } from "../store/ToDoAppContext"
import MsgModal from "./MsgModal"
import Task from './Task'

export default function SelectedProject(){
    const{projects, 
          activeProjectID, 
          removeProjectHandler,
          addTaskHandler, 
          closeTaskFormClikcHandler }=useContext(ToDoAppContext)

    const [index, setIndex] = useState(0)
    const taskInput = useRef()
    const modalRef =useRef()

    const currentIndex = projects.findIndex((project)=>project.id===activeProjectID)
    const [modalMsg, setModalMsg]=useState("")
    if(currentIndex!==index&&currentIndex>=0){  
        setIndex(currentIndex)
    }

    const addTaskBtnClickHandler = ()=>{
        if(taskInput.current.value.trim()){
            addTaskHandler(activeProject.id, taskInput.current.value)
            taskInput.current.value=""
            return 
        }
        setModalMsg("Task title is required")
        modalRef.current.open()
    }

    const deleteBtnClickHandler = ()=>{
        if(index>0){
            setIndex((prevIndex)=>prevIndex-1)
        }
        if(index===0&&projects.length===1){
            closeTaskFormClikcHandler()
        }
        removeProjectHandler(activeProject.id)
    }

    let activeProject= projects[index]
 
    return(
        <div className="w-[35rem] mt-16">
            <MsgModal ref={modalRef} msg={modalMsg}/>
            <div className="flex items-center justify-between">
                <h2 className="text-5xl font-bold text-stone-700 my-4">{activeProject.title}</h2>
                <button className="px-4 py-2 text-xs md:text-base rounded-md text-stone-400 hover:text-stone-900" onClick={deleteBtnClickHandler}>
                    Delete
                </button>
            </div>
            <p className="text-stone-400 mb-4">{activeProject.dueDate}</p>
            <p className="text-stone-900 mb-4">{activeProject.description}</p>
            <div className="bg-stone-200 h-0.5"></div>
            <h2 className="text-xl font-bold text-stone-700 my-4">Tasks</h2>
            <div className="flex items-center gap-8">
                <input className="w-64 px-2 py-1 rounded-sm bg-stone-200 text-stone-950 focus:outline-none" ref={taskInput}></input>
                <button className="px-4 py-2 text-xs md:text-base rounded-md text-stone-400 hover:text-stone-900" onClick={addTaskBtnClickHandler}>Add Task</button>
            </div>
            <ul className="flex flex-col">
            <li className="flex items-center justify-between mt-10">
                <div className="flex gap-3 items-center">
                    <p className="w-15 text-stone-900 mb-1 ">Done</p>
                    <p className="text-stone-900 mb-1">Title</p>
                </div>
            </li>
            {activeProject.tasks.map((task)=><Task key={task.id} projectId={activeProject.id} task={task} activeProject={activeProject}/>)}
            </ul>
        </div>
    )
}