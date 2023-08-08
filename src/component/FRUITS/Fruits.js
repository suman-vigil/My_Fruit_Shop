import React, { useState } from "react";
import { productsData } from "../../services/data";
import { useParams } from "react-router-dom";
import "../../component/FRUITS/Fruits.css";
import Nav from "../Nav";
import Footer from "../footer";
import Navbar from "../Navbar";
import Bar from "../Bar";

const Fruits = () => {
  const [count, setCount] = useState(1);

  const decNum = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };

  let stock = 25;
  const incNum = () => {
    if (count < stock) setCount(count + 1);
  };
  const { id } = useParams();
  const product = productsData.find((p) => p.id === Number(id));
  // console.log(product);

  return (
    <>
      <Nav />
      <Navbar />
      <Bar Title={product.fruitName.toUpperCase()} />
      <div className="d-flex">
        <div className="fruitsImage col-md-6">
          <img
            style={{ width: "20rem", margin: "4rem 9rem 9rem 9rem" }}
            src={product.img}
            alt="Fruit"
          />
        </div>
        <div className="FruitsDescription col-md-6">
          <p>
            <b>Fruit Name:</b> {product.fruitName}
          </p>
          <p>
            <b>Fruit price:</b> {product.fruitPrice}
          </p>
          <p>
            <b>Fruit Description:</b>
            {product.description}
          </p>
          <div className="d-flex">
            <div>
              <button className="buton" type="button" onClick={decNum}>
                -
              </button>
            </div>
            <input className="quantity" value={count} />
            <div>
              <button className="buton" type="button" onClick={incNum}>
                +
              </button>
            </div>
          </div>
          <div>
            <button className="cartBtn">BUY</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Fruits;
