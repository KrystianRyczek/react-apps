import { createContext } from "react";

export const ToDoAppContext = createContext({
    projects:[],
    addProjectFrormIsActive:false,
    addTaskFrormIsActive:false,
    activeProjectID:'',
    openProjectFormClikcHandler:()=>{},
    closeProjectFormClikcHandler:()=>{},
    openTaskFormClikcHandler:()=>{},
    closeTaskFormClikcHandler:()=>{},
    addProjectHandler:()=>{},
    removeProjectHandler:()=>{},
    addTaskHandler:()=>{},
    removeTaskHandler:()=>{},
    complitTaskHandler:()=>{},
})