import React from "react";
import Card from "react-bootstrap/Card";

const Cards = (props) => {
  return (
    <>
      <img className="cardImg" src={props.Image} alt="logo" />
      <Card className="card">
        <Card.Body>
          <Card.Title style={{ fontSize: "18px", paddingLeft: "30px" }}>
            {props.title}
          </Card.Title>
          <Card.Text
            style={{ fontSize: "14px", color: "grey", paddingLeft: "30px" }}
          >
            {props.content}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;
