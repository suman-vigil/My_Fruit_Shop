import React from "react";
import Icons from "./Icons";

const AllIcons = (props) => {
  return (
    <>
      <div
        className={`d-flex bg-${props.mode}  text-${
          props.mode === "dark" ? "light" : "dark"
        }`}
        style={{ justifyContent: "center" }}
      >
        <Icons
          fruitName="Apple"
          collection="Top Collection"
          img={require("../Assests/apple.png")}
        />
        <Icons
          fruitName="Mango"
          collection="Top Collection"
          img={require("../Assests/image.png")}
        />
        <Icons
          fruitName="Grapes"
          collection="Top Collection"
          img={require("../Assests/grapes.png")}
        />
        <Icons
          fruitName="Lemon"
          collection="Top Collection"
          img={require("../Assests/lemon.png")}
        />
        <Icons
          fruitName="Banana"
          collection="Top Collection"
          img={require("../Assests/banana.png")}
        />
      </div>
    </>
  );
};

export default AllIcons;
