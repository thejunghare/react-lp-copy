function List({todos}) {
  return (
    <>
      {todos.map((todo) => (
        <ul>
          <li key={todo.id}>{todo.title}</li>
          <button>update</button>
          <button>delete</button>
        </ul>
      ))}
    </>
  );
}

export default List;
