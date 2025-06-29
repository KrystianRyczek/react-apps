import { useContext, useRef, useState} from "react"
import { ToDoAppContext } from "../store/ToDoAppContext"
import MsgModal from "./MsgModal"


export default function NewProjectForm(){
    const{addProjectHandler, 
          closeProjectFormClikcHandler}=useContext(ToDoAppContext)

    const titleInput = useRef()
    const descritionTextArea = useRef()
    const dateInput = useRef()
    const modalRef =useRef()
    const [modalMsg, setModalMsg]=useState("")
    

    const saveBtnClickHandler = ()=>{
        const title= titleInput.current.value
        const descrition= descritionTextArea.current.value
        const date= dateInput.current.value



        if(title.trim()&&descrition.trim()&&date.trim()){
            addProjectHandler(title, descrition, date)
            titleInput.current.value=""
            descritionTextArea.current.value=""
            dateInput.current.value=""
            return
        }
        let counter = 0
        let msg=""
        if(!title.trim()){
            msg =msg + (counter===0?"Title, ":"title, ")
            counter=counter+1
        }
        if(!descrition.trim()){
            msg =msg +  (counter===0?"Descrition, ":"descrition, ")
            counter=counter+1
        }
        if(!date.trim()){
            msg =msg + (counter===0?"Date, ":"date, ")
            counter=counter+1
        }
        if(counter>=2){
            msg =msg + "are required to create new project"
        }else{
            msg =msg + "is required to create new project"
        }
        setModalMsg(msg)
        modalRef.current.open()
    }

    return(
        <div className="w-[35rem] mt-16">
            <MsgModal ref={modalRef} msg={modalMsg}/>
            <h2 className="text-xl font-bold text-stone-700 my-4">New Project Form</h2>
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-500 bg-transparent" onClick={closeProjectFormClikcHandler}>Cancel</button>
                </li>
                <li>
                    <button className="text-stone-400 hover:text-stone-50  bg-stone-950" onClick={saveBtnClickHandler}>Save</button>
                </li>
            </menu>
            <div className="flex flex-col items-center gap-4">
                <div className="flex flex-col gap-1 my-4 w-full">
                    <label className="text-sm font-bold uppercase text-stone-500" htmlFor="title">Title</label>
                    <input className="px-2 py-1 rounded-sm bg-stone-200 text-stone-950 focus:outline-none" ref={titleInput} type="text" id="title" required></input>
                </div>
                <div className="flex flex-col gap-1 my-4 w-full">
                    <label className="text-sm font-bold uppercase text-stone-500" htmlFor="descrition">Descrition</label>
                    <textarea className="px-2 py-1 rounded-sm bg-stone-200 text-stone-950 focus:outline-none" ref={descritionTextArea} type="text"  id="descrition" required></textarea>
                </div>
                <div className="flex flex-col gap-1 my-4 w-full">
                    <label className="text-sm font-bold uppercase text-stone-500"  htmlFor="date">Due Date</label>
                    <input className="px-2 py-1 rounded-sm bg-stone-200 text-stone-950 focus:outline-none" ref={dateInput} type="date" id="date" required></input>
                </div>
            </div>
        </div>
    )
}