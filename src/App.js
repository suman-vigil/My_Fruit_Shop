import "./App.css";
import Home from "./component/Home";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import CreateAcc from "./component/CreateAcc";
import Fruits from "./component/FRUITS/Fruits";
import Cart from "./component/Cart/Cart";
import Search from "./component/Search/Search";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/productsData/:id" Component={Fruits} />
          <Route exact path="/createAcc" element={<CreateAcc />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
