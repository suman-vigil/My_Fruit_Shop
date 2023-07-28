// import React, { useContext, useState } from "react";
// import { useLocation, NavLink } from "react-router-dom";
// import Nav from "../Nav";
// import Navbar from "../Navbar";
// import Bar from "../Bar";
// import "../../component/FRUITS/Fruits.css";
// import Footer from "../footer";

// const Fruits = ({ props }) => {
//   const location = useLocation();
//   const params = new URLSearchParams(location.search);
//   const img = params.get("img");
//   const fruitName = params.get("fruitName");
//   const fruitPrice = params.get("fruitPrice");

//   const [count, setCount] = useState(1);

//   const decNum = () => {
//     if (count >= 1) {
//       setCount(count - 1);
//     }
//   };

//   let stock = 25;
//   const incNum = () => {
//     if (count < stock) setCount(count + 1);
//   };

//   return (
//     <>
//       <Nav />
//       <Navbar />
//       <Bar Title={fruitName.toUpperCase()} />
//       <div className="d-flex">
//         <div className="fruitsImage col-md-6">
//           <img
//             style={{ width: "20rem", margin: "4rem 9rem 9rem 9rem" }}
//             src={img}
//             alt="Fruit"
//           />
//         </div>
//         <div className="FruitsDescription col-md-6">
//           <p>
//             <b>Fruit Name:</b> {fruitName}
//           </p>
//           <p>
//             <b>Fruit price:</b> {fruitPrice}
//           </p>
//           <p>
//             <b>Fruit Description:</b>
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry. Lorem Ipsum has been the industry's standard dummy text
//             ever since the 1500s, when an unknown printer took a galley of type
//             and scrambled it to make a type specimen book. It has survived not
//             only five centuries, but also the leap into electronic typesetting,
//             remaining essentially unchanged.
//           </p>
//           <div className="d-flex">
//             <div>
//               <button className="buton" type="button" onClick={decNum}>
//                 -
//               </button>
//             </div>
//             <input className="quantity" value={count} />
//             <div>
//               <button className="buton" type="button" onClick={incNum}>
//                 +
//               </button>
//             </div>
//           </div>
//           <div>
//             <button className="cartBtn">BUY</button>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Fruits;

import React from "react";

const Fruits = () => {
  return <div></div>;
};

export default Fruits;
