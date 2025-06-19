import { useContext } from "react"
import { ToDoAppContext } from "../store/ToDoAppContext"
import InitialPage from "./InitialPage"
import NewProjectForm from './NewProjectForm'
import SelectedProject from './SelectedProject'
export default function MainSection(){
const {addProjectFrormIsActive, addTaskFrormIsActive}=useContext(ToDoAppContext)

    return(<section className="w-[35rem] mx-8">
                {!addProjectFrormIsActive&!addTaskFrormIsActive?<InitialPage/>:undefined}
                {addProjectFrormIsActive&!addTaskFrormIsActive?<NewProjectForm/>:undefined}
                {!addProjectFrormIsActive&addTaskFrormIsActive?<SelectedProject/>:undefined}

            </section>)
}