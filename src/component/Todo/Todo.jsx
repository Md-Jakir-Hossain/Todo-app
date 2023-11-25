import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [update, setUpdate] = useState(0);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const addTodos = () => {
    setTodos([...todos, input]);
    setInput("");
  };
  const deleteTodo = (i) => {
    const filteredTodo = todos.filter((item, index) => index !== i);
    setTodos(filteredTodo);
  };
  const getTodo = (id) => {
    const findTodo = todos.find((todo, index) => index === id);
    setInput(findTodo);
    setUpdate(id);
    setIsEdit(true);
  };
  const updateTodo = () => {
    todos[update] = input;
    setInput("");
    setIsEdit(false);
  };

  return (
    <div className="flex justify-center items-center bg-gray-300 min-h-screen">
      <div className="h-auto md:w-1/2 px-2 w-96 bg-white rounded-lg">
        <div className="input_text relative">
          <input
            className="text-sm h-12 w-full my-4 pr-20 md:pr-28 outline-none pl-8"
            type="text"
            value={input}
            onChange={inputHandler}
            placeholder="Write a new task"
          />
          <button
            onClick={isEdit ? updateTodo : addTodos}
            className="add_task text-sm transition-all hover:bg-blue-700 cursor-pointer text-white bg-blue-400 rounded-lg h-10 w-16 md:w-24 absolute right-1 top-[20px]"
          >
            {isEdit ? "Update Todo" : "Add Todo"}
          </button>
          <i className="absolute top-[27px] text-gray-600 text-xl left-2 fa fa-pencil-square"></i>
        </div>

        <ul className="all_tasks">
          {todos.map((value, id) => (
            <li key={id}>
              <hr className="mt-2" />
              <div className="my-4 flex justify-between px-1">
                <div className="flex items-center gap-2">
                  <span
                    onClick="tick(1)"
                    className="h-8 cursor-pointer w-8 flex justify-center items-center border border-gray-600 rounded-full "
                  >
                    <i
                      id="checked1"
                      className="transition-all hover:text-lg text-blue-500 hover:text-blue-900 fa fa-check"
                    ></i>
                  </span>
                  <p className="md:max-w-[375px] truncate max-w-[280px] ">
                    <strike
                      id="strike1"
                      className="text-gray-600 text-sm no-underline "
                    >
                      {value}
                    </strike>
                  </p>
                </div>
                <span
                  onClick={() => getTodo(id)}
                  className="h-8 cursor-pointer w-8 flex justify-center items-center border border-gray-600 rounded-full "
                >
                  <i className="transition-all hover:text-lg text-red-600 hover:text-red-900 fa fa-edit"></i>
                </span>
                <span
                  onClick={() => deleteTodo(id)}
                  className="h-8 cursor-pointer w-8 flex justify-center items-center border border-gray-600 rounded-full "
                >
                  <i className="transition-all hover:text-lg text-red-600 hover:text-red-900 fa fa-trash"></i>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
