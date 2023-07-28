import React from "react";
import img from "../Assests/image1.webp";

const AboutUs = (props) => {
  return (
    <>
      <div id="AboutUs" className={`d-flex bg-${props.mode}`}>
        <div className="col-md-6">
          <img className="abtImg" src={img} alt="logo" />
        </div>
        <div
          className={`about col-md-6 
        text-${props.mode === "dark" ? "light" : "dark"}
        `}
        >
          <h2>About US</h2>
          <p style={{ color: props.mode === "dark" ? "#fff1e6" : "" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. The
            purpose of lorem ipsum is to create a natural looking block of text
            that doesn't distract from the layout.
          </p>
          <p style={{ color: props.mode === "dark" ? "#fff1e6" : "" }}>
            In publishing and graphic design Lorem ipsum is a placeholder text
            commonly used to device. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <button className="button">SHOP NOW</button>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
