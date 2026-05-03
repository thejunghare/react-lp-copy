import { handleAddTodo } from "../helper";
import { todoContext } from "../context/TodoContext";
import { useContext } from "react";
import { Button } from "@/components/ui/button";

function Form() {
  const { todo, setTodo, todos, setTodos, updateMode } =
    useContext(todoContext);
  return (
    <>
      <section className="mx-auto w-full max-w-2xl px-4 pt-8">
        <div className="mb-3">
          <h1 className="text-xl font-semibold tracking-tight">Todo app</h1>
          <p className="text-sm text-muted-foreground">
            Add tasks now. Panic later.
          </p>
        </div>

        <form
          className="space-y-3 rounded-xl border bg-card p-4"
          onSubmit={(e) => handleAddTodo(e, todo, setTodo, todos, setTodos)}
        >
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Title</label>
            <input
              type="text"
              placeholder="Learn React"
              className="h-9 w-full rounded-lg border bg-background px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50"
              value={todo.title}
              onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium">Description</label>
            <input
              type="text"
              placeholder="Some description here"
              className="h-9 w-full rounded-lg border bg-background px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50"
              value={todo.description}
              onChange={(e) =>
                setTodo({ ...todo, description: e.target.value })
              }
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium">Due</label>
            <input
              type="datetime-local"
              className="h-9 w-full rounded-lg border bg-background px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50"
              value={todo.dateTime}
              onChange={(e) => setTodo({ ...todo, dateTime: e.target.value })}
            />
          </div>

          <div className="flex items-center justify-end">
            <Button type="submit">{updateMode ? "Update" : "Add todo"}</Button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Form;
