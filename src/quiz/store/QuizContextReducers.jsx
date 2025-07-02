export function quizContextReducers(state, action){
    console.log(state)
    if(action.type==="TIMEOUT"){
        const newResult=[
            ...state.playerResult,
            {
                result: false,
                score: 0
                }
        ]



    return([...state, newResult])
}   


return state
}