import {
  React,
  createContext,
  useState,
} from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, msg: "hello world" },
    { id: 1, msg: "its christmas" },
  ]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
