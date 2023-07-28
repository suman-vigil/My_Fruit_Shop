import React from "react";
import Cards from "./Cards";

const Card = (props) => {
  return (
    <>
      <div
        className={`d-flex  bg-${props.mode}`}
        style={{
          justifyContent: "space-evenly",
          paddingTop: "3rem",
          paddingBottom: "4rem",
          paddingRight: "4rem",
        }}
      >
        <Cards
          Image={require("../../Assests/cardImg1.png")}
          title="Free Shipping"
          content="Lorem Ipsue Is Dummy Text Used In Laying Out Print."
        />
        <Cards
          Image={require("../../Assests/cardImg2.png")}
          title="Festival Offer"
          content="Lorem Ipsue Is Dummy Text Used In Laying Out Print."
        />
        <Cards
          Image={require("../../Assests/cardImg3.png")}
          title="24x7 Service"
          content="Lorem Ipsue Is Dummy Text Used In Laying Out Print."
        />
        <Cards
          Image={require("../../Assests/cardImg4.png")}
          title="Big Saving"
          content="Lorem Ipsue Is Dummy Text Used In Laying Out Print."
        />
      </div>
    </>
  );
};

export default Card;
