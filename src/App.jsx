import React from "react";
import AddTodo from "./Components/AddTodo";
import Todo from "./Components/Todo";

function App() {
  return (
    <div className="bg-violet-800 h-screen p-12">
      <h3 className="mb-4 text-6xl text-white text-center font-bold">Todo App using Redux-toolkit</h3>
      <AddTodo />
      <Todo />
    </div>
  );
}

export default App;
