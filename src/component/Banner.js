import React from "react";

const Banner = (props) => {
  return (
    <>
      <div className={`ban container-fluid d-flex  bg-${props.mode}`}>
        <div className="col-md-7.5">
          <h4 className="bPara">Healthy Fruits 20% off </h4>
          <h1 className="bHead">
            Fresh organic <b>Foods</b>
          </h1>
          <p className="bPar">
            The Best Fruits And Vegetables Available For OrganicCart Online Shop
          </p>
          <button className="button">SHOP NOW</button>
        </div>
        <div>
          <img
            src={require("../Assests/img1.png")}
            data-animation-in="ZoomiInImage"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
