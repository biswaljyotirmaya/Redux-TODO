import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTask, editTask } from "../Features/TodoSlice";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [updatedTask, setUpdatedTask] = useState("");
  const [id, setId] = useState("");

  const handleEdit = () => {
    updatedTask && dispatch(editTask({ id: id, updated: updatedTask }));
    setIsEdit(false);
    setUpdatedTask("");
    setId("");
  };

  return (
    <div>
      {isEdit ? (
        <div className="w-full text-lg flex pr-6 items-center my-4">
          <input
            className="px-3 text-lg outline-none rounded-xl h-10 w-1/2"
            type="text"
            id={id}
            placeholder="Enter the updated Task"
            value={updatedTask}
            onChange={(e) => setUpdatedTask(e.target.value)}
          />
          <div>
            <button
              className="rounded-xl hover:shadow-md px-4 text-lg text-white font-bold py-1 mx-2 hover:shadow-black"
              onClick={() => {
                setIsEdit(!isEdit);
              }}
            >
              {isEdit ? "Cancel" : "Edit"}
            </button>
            <button
              className="rounded-xl hover:shadow-md px-4 py-1 hover:shadow-black text-lg text-white font-bold  mx-2"
              onClick={handleEdit}
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full text-center text-4xl font-bold flex justify-around items-center my-4 text-white">
          Tasks to do...
        </div>
      )}
      {todos.map((todo, index) => (
        <div
          key={todo.id}
          className="flex items-center my-2 py-2 px-10 rounded-xl bg-white"
        >
          <div className="w-2/12 h-full flex justify-center items-center text-xl font-semibold overflow-hidden ">
            #{index + 1}
          </div>
          <div className="w-6/12 h-full flex justify-center items-center text-xl font-semibold overflow-hidden whitespace-nowrap  px-10">
            {todo.task}
          </div>

          <div className="w-2/12  h-full text-xl font-semibold flex justify-center items-center">
            <button
              className="rounded-xl hover:shadow-md px-4 py-1 hover:shadow-black"
              onClick={() => {
                setUpdatedTask(todo.task);
                setIsEdit(!isEdit);
                setId(todo.id);
              }}
              disabled={isEdit}
            >
              Edit
            </button>
          </div>

          <div className="w-2/12  h-full text-xl flex items-center justify-center font-semibold">
            <button
              className="rounded-xl hover:shadow-md px-4 py-1 hover:shadow-black"
              onClick={() => dispatch(removeTask(todo.id))}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todo;
