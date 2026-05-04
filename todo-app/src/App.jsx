import List from "./my-pages/List";
import Form from "./my-pages/Form";
import { TodoProvider } from "./context/TodoContext";
import {Profile} from './my-pages/Profile'

const App = () => {
  return (
    <TodoProvider>
      <Form />
      <List />
        <Profile />
    </TodoProvider>
  );
};

export default App;
