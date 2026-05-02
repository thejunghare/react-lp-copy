import { useState, useEffect, createContext } from "react";

export const todoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    dateTime: "",
  });

  // todos state variable will contain all our todos -> initial an empty array
  const [todos, setTodos] = useState([]);
  const [updateMode, setUpdateMode] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(data);
  }, []);

  return (
    <todoContext.Provider
      value={{
        todo,
        setTodo,
        todos,
        setTodos,
        updateMode,
        setUpdateMode,
        currentId,
        setCurrentId,
      }}
    >
      {children}
    </todoContext.Provider>
  );
};
