import List from "./my-pages/List";
import Form from "./my-pages/Form";
import { TodoProvider } from "./context/TodoContext";

const App = () => {
  return (
    <TodoProvider>
      <Form />
      <List />
    </TodoProvider>
  );
};

export default App;
