import { handleDelete, handleEdit } from "../helper";
import { Button } from "@/components/ui/button";
import { CalendarClock, Pencil, Trash2 } from "lucide-react";
import { todoContext } from "../context/TodoContext";
import { useContext } from "react";

function List() {
  const { setTodo, todos, setTodos, setCurrentId, setUpdateMode } =
    useContext(todoContext);
  return (
    <section className="mx-auto w-full max-w-2xl px-4 pb-8">
      <div className="mb-3 flex items-end justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">Your todos</h2>
          <p className="text-sm text-muted-foreground">
            Small list. Big dreams.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex flex-col gap-3 rounded-xl border bg-card p-4 sm:flex-row sm:items-start sm:justify-between"
          >
            <div className="min-w-0">
              <p className="truncate text-base font-medium">{todo.title}</p>
              {todo.description ? (
                <p className="mt-1 text-sm text-muted-foreground">
                  {todo.description}
                </p>
              ) : null}
              {todo.dateTime ? (
                <p className="mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <CalendarClock className="size-3.5" />
                  {todo.dateTime}
                </p>
              ) : null}
            </div>

            <div className="flex shrink-0 items-center gap-2 sm:justify-end">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  handleEdit(todo, setTodo, setCurrentId, setUpdateMode)
                }
              >
                <Pencil />
                Update
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => handleDelete(todo.id, todos, setTodos)}
              >
                <Trash2 />
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default List;
