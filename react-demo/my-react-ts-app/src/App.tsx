

import Users from "./components/Users";
import Products from "./components/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./todolist/task";

function App() {
  return (
  <BrowserRouter>

      <Routes>

        <Route path="/users" element={<Users />} />

        <Route path="/products" element={<Products />} />

        <Route path="/todo" element={<Todo />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;