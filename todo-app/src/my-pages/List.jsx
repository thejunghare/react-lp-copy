import { handleDelete, handleEdit } from "../helper";
import { Button } from "@/components/ui/button"

function List({ setTodo, todos, setTodos, setCurrentId, setUpdateMode }) {
  return (
    <>
      {todos.map((todo) => (
        <ul>
          <li key={todo.id}>{todo.title}</li>
          <Button
          
            onClick={() =>
              handleEdit(todo, setTodo, setCurrentId, setUpdateMode)
            }
          >
            update
          </Button>
          <Button onClick={() => handleDelete(todo.id, todos, setTodos)}>
            delete
          </Button>
        </ul>
      ))}
    </>
  );
}

export default List;
