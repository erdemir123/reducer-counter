import React, { useContext } from "react";
import { MainContext } from "../context/TodoProvider";

const TodoList = () => {
  const [{ todo }, dispacth] = useContext(MainContext);
  return <div></div>;
};

export default TodoList;
