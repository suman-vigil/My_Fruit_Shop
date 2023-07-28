import React, { useContext } from "react";
import { CartContext } from "../../Context/Context";
import "./Cart.css";

const CartItems = (props) => {
  const { id, fruitName, fruitPrice, img } = props.data || {};
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(CartContext);

  return (
    <div className="cartItem">
      <div>
        <img src={img} />
      </div>
      <div className="description">
        <p>
          <b>{fruitName}</b>
        </p>
        <p>Rs.{fruitPrice}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)} className="cartbton">
            -
          </button>
          <input
            className="quan"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)} className="cartbton">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
