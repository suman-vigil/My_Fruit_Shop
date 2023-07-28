import React from "react";
import Card from "react-bootstrap/Card";
import "./BlogsCards.css";
const BlogCards = (props) => {
  return (
    <>
      <div className="sliderCard ">
        <div className="overflow">
          <Card.Img className="cardImage" variant="top" src={props.image} />
        </div>
        <div className="innerCard text-dark">
          <p className="innerP1">{props.like}</p>
          <p className="innerP2">{props.comment}</p>
        </div>
        <div className="cardTitle">{props.title}</div>
        <div className="cardContent">
          <p>{props.content}</p>
        </div>
        <div>
          <button className="button">READ MORE</button>
        </div>
      </div>
    </>
  );
};

export default BlogCards;
