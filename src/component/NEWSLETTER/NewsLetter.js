import React, { useEffect } from "react";
import { ImCross } from "react-icons/im";
import "./NewsLetter.css";

const NewsLetter = ({ closeNewsLetter }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  });

  return (
    <>
      <div className="modalWrapper"></div>
      <div className="box">
        <div className="cancel">
          <ImCross onClick={closeNewsLetter} />
        </div>
        <div>
          <img
            className="modalImg"
            src={require("../../Assests/modalImg.webp")}
          />
        </div>
        <div className="newsLetter">
          <h3>NEWSLETTER</h3>
        </div>
        <div className="inputDiv">
          <input className="modalInput" placeholder="Enter Your Email" />
        </div>
        <div className="subs">
          <button className="subscribe">SUBSCRIBE</button>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
