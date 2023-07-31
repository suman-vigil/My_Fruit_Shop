import React, { useContext, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { productsData } from "../services/data";
import { CartContext } from "../Context/Context";
import "./CarouselCards.css";
import { FaShoppingCart } from "react-icons/fa";

export const CarouselCards = (props) => {
  const { id, fruitName, fruitPrice, img } = props.data || {};

  const { addToCart, cartItems } = useContext(CartContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className="myCard">
      <Link to={`/productsData/${[id]}`}>
        <div
          className="image"
          style={{ textAlign: "center", paddingTop: "1.2rem" }}
        >
          <img src={img} alt="Fruit" />
        </div>
      </Link>
      <hr />
      <p className="p1">{fruitName}</p>
      <div className="cart d-flex" style={{ justifyContent: "center" }}>
        <p className="p2">
          Rs.
          {fruitPrice}
          /-
        </p>

        <button className="cartbtn" onClick={() => addToCart(id)}>
          <FaShoppingCart />
          {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
        </button>
      </div>
    </div>
  );
};

export default CarouselCards;
