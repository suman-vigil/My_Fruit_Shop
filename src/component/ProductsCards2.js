import React from "react";
import CarouselCards from "./CarouselCards";

const ProductsCards2 = () => {
  return (
    <>
      <div className="d-flex container-fluid">
        <CarouselCards
          img={require("../Assests/papaya.png")}
          fruitName="Papaya"
          fruitPrice="5.00"
        />
        <CarouselCards
          img={require("../Assests/cauliflower.png")}
          fruitName="Cauliflower"
          fruitPrice="5.00"
        />
        <CarouselCards
          img={require("../Assests/pineapple.png")}
          fruitName="Pineapple"
          fruitPrice="10.00"
        />
        <CarouselCards
          img={require("../Assests/peach.png")}
          fruitName="Peach"
          fruitPrice="5.00"
        />
        <CarouselCards
          img={require("../Assests/kiwi.png")}
          fruitName="Kiwi"
          fruitPrice="8.00"
        />
        <CarouselCards
          img={require("../Assests/lichi.png")}
          fruitName="Lichi"
          fruitPrice="4.00"
        />
        <CarouselCards
          img={require("../Assests/watermelon.png")}
          fruitName="Watermelon"
          fruitPrice="5.00"
        />
        <CarouselCards
          img={require("../Assests/banana1.png")}
          fruitName="Banana"
          fruitPrice="7.00"
        />
        <CarouselCards
          img={require("../Assests/pomegrante.png")}
          fruitName="Pomegranate"
          fruitPrice="8.00"
        />
      </div>
    </>
  );
};

export default ProductsCards2;
