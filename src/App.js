import { BrowserRouter,Route,Routes } from "react-router-dom";
import Admin from "./Component/Admin";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Home from "./pages/Home";
import Hotel from "./pages/Hotel";
import List from "./pages/List";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/hotels" element={<List/>} />
      <Route path="/hotels/:id" element={<Hotel/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/register" element={<Register />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
