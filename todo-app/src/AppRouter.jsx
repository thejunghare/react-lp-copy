import { Home } from "./my-pages/Home";
import { Profile } from "./my-pages/Profile";
import { Pricing } from "./my-pages/Pricing";
import  Form  from "./my-pages/Form";
import  List  from "./my-pages/List";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { TodoProvider } from "./context/TodoContext";
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <TodoProvider>
        <nav className="flex border-b m-3 p-3 gap-3">
            <Link className="underline text-blue-500" to="/pricing"> See Pricing</Link>
            <Link className="underline text-blue-500" to="/profile"> See Profile</Link>
            <Link className="underline text-blue-500" to="/form"> Add Todo</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/form" element={<Form />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </TodoProvider>
    </BrowserRouter>
  );
};
