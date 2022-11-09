import React, { useContext } from "react";
import { MainContext } from "../context/TodoProvider";

const Todoinput = () => {
  const [{ todo }, dispacth] = useContext(MainContext);
  const set_todo = (e) => {
    dispacth({
      type: "SET_TODO",
      payload: e.target.value,
    });
  };
  // const add_todo=(e)=>{
  //     return
  // }
  return (
    <div>
      <input type="text" onChange={set_todo} />
      <button>Add TODO</button>
    </div>
  );
};

export default Todoinput;
