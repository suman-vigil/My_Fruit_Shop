import React, { useRef } from "react";
import BlogCards from "./BlogCards";
import "./BlogsCards.css";
import { sliderData } from "../services/sliderdata";

const Slider = (props) => {
  const carouselRef = useRef(null);

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
        className={` text-${props.mode === "dark" ? "light" : "dark"} bg-${
          props.mode
        }`}
      >
        <div id="BlogsCards" className="TheBlog">
          <p style={{ color: props.mode === "dark" ? "#fff1e6" : "" }}>
            RECENT STORY
          </p>
          <h2>FROM THE BLOG</h2>
        </div>

        <div className="slide">
          <button className={`btnPrev bg-${props.mode}`} onClick={btnpressprev}>
            <p>&lt;</p>
          </button>
          <button
            className={`btnNext  bg-${props.mode}`}
            onClick={btnpressnext}
          >
            <p>&gt;</p>
          </button>

          <div className="crd " ref={carouselRef}>
            {sliderData.map((e) => (
              <BlogCards
                title={e.title}
                content={e.content}
                image={e.image}
                like={e.like}
                comment={e.comment}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
