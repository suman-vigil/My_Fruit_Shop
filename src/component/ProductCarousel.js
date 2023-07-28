import React, { useRef } from "react";
import CarouselCards from "./CarouselCards";
import "../component/ProductCarousel.css";
import { productsData } from "../services/data";

const ProductCarousel = (props) => {
  const carouselRef = useRef({});

  const btnpressprev = () => {
    const box = carouselRef.current;
    if (box) {
      const width = box.clientWidth;
      box.scrollLeft -= width;
    }
  };

  const btnpressnext = () => {
    const box = carouselRef.current;
    if (box) {
      const width = box.clientWidth;
      box.scrollLeft += width;
    }
  };

  return (
    <>
      <div className={` navbar-${props.mode} bg-${props.mode}`}>
        <div
          id="ProductCarousel"
          className={`heading  text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
        >
          <h6 style={{ color: props.mode === "dark" ? "#fff1e6" : "" }}>
            Top Collection
          </h6>
          <h4>SPECIAL PRODUCTS</h4>
        </div>
        <div className="product">
          <button
            className={`btnPrev  bg-${props.mode}`}
            onClick={btnpressprev}
          >
            <p>&lt;</p>
          </button>
          <button className={`btnNext bg-${props.mode}`} onClick={btnpressnext}>
            <p>&gt;</p>
          </button>
          <div className="CarouselCards" ref={carouselRef}>
            {productsData.map((products) => (
              <CarouselCards data={products} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCarousel;
