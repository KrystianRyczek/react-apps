import { useReducer} from "react";
import { ToDoAppContext }  from "./ToDoAppContext";
import {toDoAppStateReducer, initialState} from "./ToDoAppStateReducers";
import {uuid4} from "uuid4";

export default function ToDoAppContextProvider({children}){

const[toDoAppState, toDoAppStateDispach]=useReducer(toDoAppStateReducer, initialState)
    
function addProjectHandler(title, description, dueDate){
        toDoAppStateDispach({
            type:"ADD_PROJECT",
            payload:{
                id:uuid4(),
                title,
                description,
                dueDate,
                tasks:[],
                },
        })
    }
    function removeProjectHandler(projectId){
        toDoAppStateDispach({
            type:"REMOVE_PROJECT",
            payload: projectId
        })
    }
    function addTaskHandler(projectId, taskTitle){
        toDoAppStateDispach({
            type:"ADD_TASK",
            payload: {id: projectId,
                      newTask: {
                        id:uuid4(),
                        title: taskTitle,
                        complit:false
                        }
                     }
        })
    }
    function removeTaskHandler(projectId, taskId){
        toDoAppStateDispach({
            type:"REMOVE_TASK",
            payload: {
                id: projectId,
                removeTask: taskId
            }
        })
    }
    function complitTaskHandler(projectId, taskId, complitState){
        toDoAppStateDispach({
            type:"COMPLIT_TASK",
            payload: {
                id: projectId,
                complitedTask: taskId,
                complitState: complitState
            }
        })
    }
    function openProjectFormClikcHandler(){
        toDoAppStateDispach({
            type:"ACTIVATE_ADD_PROJECT_FORM",
        })
    }
    function closeProjectFormClikcHandler(){
        toDoAppStateDispach({
            type:"INACTIVATE_ADD_PROJECT_FORM",
        })
    }
    function openTaskFormClikcHandler(id){
        toDoAppStateDispach({
            type:"ACTIVATE_ADD_TASK_FORM",
            payload: {
                id,
            }
        })
    }
    function closeTaskFormClikcHandler(){
        toDoAppStateDispach({
            type:"INACTIVATE_ADD_TASK_FORM",
        })
    }
    // value={all const, object, array and metods}
    const ctxValue={
        ...toDoAppState,
        openProjectFormClikcHandler,
        closeProjectFormClikcHandler,
        openTaskFormClikcHandler,
        closeTaskFormClikcHandler,
        addProjectHandler,
        removeProjectHandler,
        addTaskHandler,
        removeTaskHandler,
        complitTaskHandler,
    }
    
    return(
        <ToDoAppContext.Provider value={ctxValue}>
            {children}
        </ToDoAppContext.Provider>)  

}