import "./App.css";
import Home from "./component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import CreateAcc from "./component/CreateAcc";
import Fruits from "./component/FRUITS/Fruits";
import Cart from "./component/Cart/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/createAcc" element={<CreateAcc />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
