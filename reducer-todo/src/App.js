import "./App.css";
import Todoinput from "./conponent/Todoinput";
import TodoList from "./conponent/TodoList";
import TodoProvider from "./context/TodoProvider";

function App() {
  return (
    <>
      <TodoProvider>
        <Todoinput />
        <TodoList />
      </TodoProvider>
    </>
  );
}

export default App;
