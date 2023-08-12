import React, { useState } from "react";
import Nav from "./Nav";
import Navbar from "./Navbar";
import Bar from "./Bar";
import Footer from "./footer";
import LogPage from "./LogPage";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Login = () => {
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
      <Nav mode={mode} />
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Bar Title="ACCOUNT" mode={mode} />
      <LogPage mode={mode} toggleMode={toggleMode} />
      <Footer />
      {/* <ToastContainer /> */}
    </>
  );
};

export default Login;
