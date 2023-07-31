import React, { useRef } from "react";
import CarouselCards from "./CarouselCards";
import "../component/ProductCarousel.css";
import { productsData } from "../services/data";
import { Link } from "react-router-dom";

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
      <div
        className={` bg-${props.mode} text-${
          props.mode === "dark" ? "light" : "dark"
        } `}
      >
        <div id="ProductCarousel" className="heading">
          <h6 style={{ color: props.mode === "dark" ? "#fff1e6" : "" }}>
            Exclusive Products
          </h6>
          <h4>TREADING PRODUCTS</h4>
        </div>
        <div className={`product`}>
          <button
            className={`btnPrev  bg-${props.mode}`}
            onClick={btnpressprev}
          >
            <p>&lt;</p>
          </button>
          <button className={`btnNext bg-${props.mode}`} onClick={btnpressnext}>
            <p>&gt;</p>
          </button>
          <div
            className={`CarouselCards text-dark bg-${props.mode}`}
            ref={carouselRef}
          >
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
