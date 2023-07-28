import React, { useState } from "react";
import Nav from "./Nav";
import Navbar from "./Navbar";
import Bar from "./Bar";
import Create from "./Create";
import Footer from "./footer";
import "./createAcc.css";

const CreateAcc = () => {
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
      <Create mode={mode} />
      <Footer />
    </>
  );
};

export default CreateAcc;
