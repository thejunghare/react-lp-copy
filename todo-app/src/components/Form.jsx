import { handleAddTodo } from "../helper";

function Form({ e, todo, setTodo, setTodos }) {
  return (
    <>
      <form onSubmit={(e) => handleAddTodo(e, todo, setTodo, setTodos)}>
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
        <button type="submit">Add todo</button>
      </form>
    </>
  );
}

export default Form;
