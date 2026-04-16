const handleAddTodo = (e, todo, setTodo, setTodos) => {
  e.preventDefault(); //  stop page to refresh
  // get all the perivous todo from local storage and append users new todo the same

  // getting all todos
  const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

  // appending to all todos
  const newTodos = [...savedTodos, { ...todo, id: savedTodos.length + 1 }];

  // updating latest todo list
  setTodos(newTodos);
  localStorage.setItem("todos", JSON.stringify(newTodos));

  setTodo({
    title: "",
    description: "",
    dateTime: "",
  });
};

const handleDelete = (id, todos, setTodos) => {
  console.log('inside function');
  
  const newList = todos.filter(todo => todo.id != id);
  setTodos(newList);
  localStorage.setItem("todos", JSON.stringify(newList));
};

export { handleAddTodo, handleDelete };
