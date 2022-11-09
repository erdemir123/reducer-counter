import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

export const MainContext = createContext();

const TodoProvider = ({ children }) => {
  const data = useReducer(reducer, initialState);
  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
};

export default TodoProvider;
