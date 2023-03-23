import AHome from "./pages/home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";



function Adminn() {


  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<AHome />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Adminn;