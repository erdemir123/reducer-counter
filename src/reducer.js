export const initialState={
    sayı:0
}
export const reducer=(precState,action)=>{
   
    switch (action.type){
        case "Artır":
        return {sayı:precState.sayı+1}
        case "Azalt":
        return {sayı:precState.sayı-1}
        default:
            break;
    }
}
