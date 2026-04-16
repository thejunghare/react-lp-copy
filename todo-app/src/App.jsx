import { useState, useEffect } from "react";
import List from "./components/List";
import Form from "./components/Form";

const App = () => {
  // todo state variable we help us with inserating todos inside the state variable todos -> initial an empty object
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    dateTime: "",
  });

  // todos state variable will contain all our todos -> initial an empty array
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(data);
  }, []);

  return (
    <>
      <Form todo={todo} setTodo={setTodo} setTodos={setTodos} />
      {/* Mapping through each array i.e. each todo */}
      <List todos={todos} setTodos={setTodos}/>
    </>
  );
};

export default App;
