import { Route, Routes } from "react-router-dom";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import Todo from "./routes/Todo";
import NoMatch from "./routes/NoMatch";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/SignUp" element={<SignUp />}></Route>
      <Route path="/Todo" element={<Todo />}></Route>
      <Route path="*" element={<NoMatch />}></Route>
    </Routes>
  );
}

export default App;
