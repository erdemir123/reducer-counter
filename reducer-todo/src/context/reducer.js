
export const initialState={
    todo:"",
    todos:[]
}

export const reducer=({state,action})=>{
    switch (action.type) {
        case "SET_TODO":
            return{...state,todo:action.payload}
        case "ADD_TODO":
            return{
                ...state,
                todos:[...state.todos,action.payload]
            }
        default:
            break;
    }

}