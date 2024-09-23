import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Redux/Store/Store';
import { addTodo, deleteTodo, completeTodo } from '../Redux/Reducer/Reducer';

const Todo: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const todos = useSelector((state: RootState) => state.todos.todos);
  const completedTodos = useSelector((state: RootState) => state.todos.completedTodos);
  const totalTodos = useSelector((state: RootState) => state.todos.totalTodos);
  const dispatch = useDispatch();

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (todo.trim()) {
      dispatch(addTodo(todo));
      setTodo('');
    }
  };

  const handleDeleteTodo = (index: number) => {
    dispatch(deleteTodo(index));
  };

  const handleCompleteTodo = (index: number) => {
    dispatch(completeTodo(index));
  };

  return (
    <div className="flex min-h-screen bg-orange-100 p-4">
      <div className="absolute top-0 left-0 right-0 bg-gray-200 p-4 bg-opacity-50">
        <div className="flex justify-end">
          <p className="text-black font-bold">
            {completedTodos} / {totalTodos} todos completed
          </p>
        </div>
      </div>

      <div className="w-2/3 bg-white p-4 rounded-lg shadow-md mr-1 mt-10">
        <ul>
          {todos.map((todo, index) => (
            <li key={index} className="p-3 w-full border border-gray-100 flex justify-between items-center">
              <span>{todo.text}</span>
              <div>
                <button onClick={() => handleCompleteTodo(index)} className="text-green-500 font-bold">
                  ✓
                </button>
                <button className="text-red-500 font-bold" onClick={() => handleDeleteTodo(index)}>
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-1/3 bg-white p-4 rounded-lg shadow-md mt-10">
        <h2 className="text-lg font-semibold mb-4">Add a todo</h2>
        <input
          type="text"
          value={todo}
          onChange={inputChange}
          placeholder="Add a todo"
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        />
        <button onClick={handleAddTodo} className="w-full p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-600">
          Add to list
        </button>

        <div className="mt-10">
          <NavLink to="/Login">
            <button className="w-full p-2 bg-gray-600 text-white rounded-lg">Log in</button>
          </NavLink>
          <button className="mt-5 w-full p-2 bg-gray-600 text-white rounded-lg">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
