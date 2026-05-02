import { handleAddTodo } from "../helper";
import { todoContext } from "../context/TodoContext";
import { useContext } from "react";

function Form() {
  const { todo, setTodo, todos, setTodos, updateMode } =
    useContext(todoContext);
  return (
    <>
      <form onSubmit={(e) => handleAddTodo(e, todo, setTodo, todos, setTodos)}>
        <input
          type="text"
          placeholder="Learn React"
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Some description here"
          value={todo.description}
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        />
        <input
          type="datetime-local"
          value={todo.dateTime}
          onChange={(e) => setTodo({ ...todo, dateTime: e.target.value })}
        />
        <button type="submit">{updateMode ? "update" : "Add todo"}</button>
      </form>
    </>
  );
}

export default Form;
