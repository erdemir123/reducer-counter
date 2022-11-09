import React, { useReducer } from 'react'
import { initialState, reducer } from './reducer'

const Counter = () => {
    const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
     {state.sayı}
        <button onClick={()=>dispatch({type:"Artır"})}>Artır</button>
        <button onClick={()=>dispatch({type:"Azalt"})}>Azalt</button>
      
    </div>
  )
}

export default Counter
