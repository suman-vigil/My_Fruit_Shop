import React, { createContext, useState } from "react";
import { productsData } from "../services/data";

export const CartContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i <= productsData.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const Context = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = productsData.find(
          (product) => product.id === Number(item)
        );
        totalAmount += cartItems[item] * itemInfo.fruitPrice;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  };

  // console.log(cartItems);

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};
