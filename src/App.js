import "./App.css";
import Home from "./component/Home";
import { useState } from "react";
import Nav from "./component/Nav";
import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import CreateAcc from "./component/CreateAcc";
import Fruits from "./component/FRUITS/Fruits";
import Cart from "./component/Cart/Cart";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      // document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      // document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <BrowserRouter>
        {/* <Nav mode={mode} /> */}

        {/* <Navbar mode={mode} toggleMode={toggleMode} /> */}

        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/productsData/:id" Component={Fruits} />
          <Route exact path="/createAcc" element={<CreateAcc />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
