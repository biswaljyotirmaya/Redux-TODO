import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Features/TodoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    input && dispatch(addTask(input));
    setInput("");
  };

  return (
    <form className="bg-white w-full md:w-1/2 mx-auto rounded-xl h-14 px-4 md:px-10 flex flex-col md:flex-row items-center justify-around">
      <input
        type="text"
        required
        value={input}
        className="bg-transparent outline-none text-base md:text-2xl font-semibold 
        bg-gray-300 px-2 py-2 placeholder:text-white overflow-hidden rounded-xl mb-2 md:mb-0 md:mr-2 w-full md:w-auto"
        placeholder="Enter task"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={handleClick}
        className="bg-blue-600 lg:py-2 shadow-md text-white rounded-xl hover:shadow-black  lg:text-md lg:text-2xl lg:font-bold lg:px-4"
      >
        Add Task
      </button>
    </form>
  );
}

export default AddTodo;
