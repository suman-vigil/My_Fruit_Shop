import React from "react";

const Cards1 = (props) => {
  return (
    <>
      <div className={`d-flex bg-${props.mode}`}>
        <div className="col-md-6">
          <div className="frhFruit">
            <p>Save 30% off</p>
            <h1>Fresh Market</h1>
            <button className="butn">ORDER NOW</button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="frhVegetable">
            <p>Save 20% off</p>
            <h1>Vegetable</h1>
            <button className="butn">ORDER NOW</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards1;
