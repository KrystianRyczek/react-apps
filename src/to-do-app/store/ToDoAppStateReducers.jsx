export const initialState =  {
    projects:[
        // {
        // id:'id1',
        // title:"Project1",
        // description:"new project 1",
        // dueDate:"01.10.2025",
        // tasks:[
        //   {id:'taskid11', title:"task11", complit:true}, 
        //   {id:'taskid12', title:"task12", complit:true}, 
        //   {id:'taskid13', title:"task13", complit:true}, 
        //   {id:'taskid14', title:"task14", complit:true}],
        // },
        // {
        // id:'id2',
        // title:"Project2",
        // description:"new project 2",
        // dueDate:"02.10.2025",
        // tasks:[
        //   {id:'taskid21', title:"task21", complit:true}, 
        //   {id:'taskid22', title:"task22", complit:true}, 
        //   {id:'taskid23', title:"task23", complit:true}, 
        //   {id:'taskid24', title:"task24", complit:true}],
        // },
        // {
        // id:'id3',
        // title:"Project3",
        // description:"new project 3",
        // dueDate:"03.10.2025",
        // tasks:[
        //   {id:'taskid31', title:"task31", complit:true}, 
        //   {id:'taskid32', title:"task32", complit:true}, 
        //   {id:'taskid33', title:"task33", complit:true}, 
        //   {id:'taskid34', title:"task34", complit:true}],
        // },
    ],
    addProjectFrormIsActive:false,
    addTaskFrormIsActive:false,
    activeProjectID:''
  }
  export function toDoAppStateReducer(state, action){

    if(action.type=='ADD_PROJECT'){

      return{...state, projects:[...state.projects,action.payload]}
    }

    if(action.type=='REMOVE_PROJECT'){

      const newProjectArray = state.projects.filter(
        project=>project.id!==action.payload&&project)

      return{...state, 
             projects:[...newProjectArray],
            //  addProjectFrormIsActive:false,
            //  addTaskFrormIsActive:false,23
            }
    }

    if(action.type=='ADD_TASK'){

      const projectIndex = state.projects.findIndex(
        (project)=>project.id===action.payload.id)
        
      const updatedProject={...state.projects[projectIndex], 
                            tasks:[...state.projects[projectIndex].tasks, 
                                   action.payload.newTask
                            ]}

      const projectsArray = [...state.projects]

      projectsArray[projectIndex]=updatedProject

      return{...state,projects:[...projectsArray]}
    }

    if(action.type=='REMOVE_TASK'){

      const projectToUpdate = state.projects.find(
        (project)=>project.id===action.payload.id)
      const uptadedTaskArray =  projectToUpdate.tasks.filter(
        task=>task.id!==action.payload.removeTask&&task)     
      const updatedProject= {...projectToUpdate, tasks:uptadedTaskArray}
      const projectsArray = [...state.projects.filter(project=>project.id!==action.payload.id&&project),
                             updatedProject]

      return{...state,projects:[...projectsArray]}
    }
    if(action.type=='COMPLIT_TASK'){

      const projectIndex = state.projects.findIndex(
        (project)=>project.id===action.payload.id)
        
      const taskIndex =  state.projects[projectIndex].tasks.findIndex(
        (task)=>task.id===action.payload.complitedTask)
      state.projects[projectIndex].tasks[taskIndex].complit=action.payload.complitState
         
      


      return{...state}
    }


    if(action.type=='ACTIVATE_ADD_PROJECT_FORM'){

      return{...state, 
        addProjectFrormIsActive:true,
        addTaskFrormIsActive:false,
      }
    }
    if(action.type=='INACTIVATE_ADD_PROJECT_FORM'){

      return{...state, 
        addProjectFrormIsActive:false,
        addTaskFrormIsActive:false,
      }
    }
    if(action.type=='ACTIVATE_ADD_TASK_FORM'){

      return{...state, 
        addProjectFrormIsActive:false,
        addTaskFrormIsActive:true,
        activeProjectID:action.payload.id
      }
    }
    if(action.type=='INACTIVATE_ADD_TASK_FORM'){

      return{...state, 
        addProjectFrormIsActive:false,
        addTaskFrormIsActive:false,
        activeProjectID:''
      }
    }

  }