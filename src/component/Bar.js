import React from "react";
import "../component/login.css";
import { Link } from "react-router-dom";

const Bar = (props) => {
  return (
    <>
      <div
        className={`loginBar text-${props.mode === "dark" ? "light" : "dark"}`}
        style={{
          backgroundColor: props.mode === "dark" ? "#111111" : "#f8f8f8",
        }}
      >
        <p
          className="loginP1"
          style={{ color: props.mode === "dark" ? "#f5f5dc" : "" }}
        >
          {props.Title}
        </p>
        <p
          className="loginP2"
          style={{ color: props.mode === "dark" ? "#f5f5dc" : "" }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: props.mode === "dark" ? "#fff1e6" : "black",
              padding: "10px",
            }}
          >
            HOME
          </Link>
          / {props.Title}
        </p>
      </div>
    </>
  );
};

export default Bar;
