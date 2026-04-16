import {handleDelete} from "../helper"

function List({todos, setTodos}) {
  return (
    <>
      {todos.map((todo) => (
        <ul>
          <li key={todo.id}>{todo.title}</li>
          <button>update</button>
          <button  onClick={() =>handleDelete(todo.id, todos, setTodos)}>delete</button>
        </ul>
      ))}
    </>
  );
}

export default List;
