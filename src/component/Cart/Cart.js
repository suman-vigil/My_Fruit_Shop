import React, { useContext } from "react";
import { productsData } from "../../services/data";
import { CartContext } from "../../Context/Context";
import CartItem from "./CartItems";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(CartContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="crt">
        <div
          style={{
            backgroundColor: "black",
            color: "#fe9a00",
            textAlign: "center",
            padding: ".5rem ",
          }}
        >
          <h1>Your Cart Items</h1>
        </div>
        <div className="cartItems">
          {productsData.map((product) => {
            if (cartItems[product.id] !== 0) {
              {
                return <CartItem data={product} />;
              }
            }
          })}
        </div>
        {totalAmount > 0 ? (
          <div className="checkout">
            <p> Subtotal: Rs.{totalAmount}</p>
            <button onClick={() => navigate("/")} className="cbtn">
              CONTINUE SHOPPING
            </button>
            <button className="cbtn">CHECKOUT</button>
          </div>
        ) : (
          <h1 className="emptyCart">Your Cart is Empty</h1>
        )}
      </div>
    </>
  );
};

export default Cart;
