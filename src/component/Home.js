import React from "react";
import Nav from "./Nav";
import Navbar from "./Navbar";
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import Card from "./Cards/Card";
import Cards1 from "./Cards/Cards1";
import Testimonial from "./Testimonial";
import ProductCarousel from "./ProductCarousel";
import Banner2 from "./Banner2";
import Slider from "./Slider";
import Footer from "./footer";
import Products from "./Products";
import AllIcons from "./AllIcons";
import { useState } from "react";

const Home = () => {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <div>
      <Nav mode={mode} />
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Banner mode={mode} />
      <AboutUs mode={mode} />
      <Card mode={mode} />
      <Testimonial mode={mode} />
      <Products mode={mode} />
      <Cards1 mode={mode} />
      <AllIcons mode={mode} />
      <ProductCarousel mode={mode} />
      <Banner2 mode={mode} />
      <Slider mode={mode} />
      <Footer mode={mode} />
    </div>
  );
};

export default Home;
