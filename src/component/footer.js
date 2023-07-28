import React from "react";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaGooglePlusG,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import { IoMdCall } from "react-icons/io";

import "./footer.css";

const footer = () => {
  return (
    <>
      <div style={{ backgroundColor: "#ede3d5" }}>
        <div className="top" style={{ display: "flex", AlignItem: "center" }}>
          <div
            className="col-md-4"
            style={{ padding: "4rem", paddingBottom: "2rem" }}
          >
            <img
              className="img"
              src={require("../Assests/logo.avif")}
              alt="logo"
            />
            <p
              style={{
                color: "grey",
                fontSize: ".9rem",
                letterSpacing: ".9px",
                wordSpacing: ".4px",
              }}
            >
              It is a long established fact that a reader will be distracted by
              the readable content.
            </p>
          </div>
          <div
            className="col-md-4"
            style={{ padding: "6rem", paddingBottom: "2rem" }}
          >
            <p style={{ fontSize: "1.4rem", fontWeight: "2px" }}>
              Social Follow Us
            </p>
            <div>
              <Link>
                <FaFacebookF
                  style={{
                    padding: "10px",
                    color: "#4267B2",
                    fontSize: "2.3rem",
                  }}
                />
              </Link>
              <Link>
                <FaGooglePlusG
                  style={{
                    padding: "10px",
                    color: " #EA4335",
                    fontSize: "2.3rem",
                  }}
                />
              </Link>
              <Link
                to={
                  "https://twitter.com/i/flow/login?redirect_after_login=%2FDaburIndia"
                }
              >
                <FaTwitter
                  style={{
                    padding: "10px",
                    color: "#00acee",
                    fontSize: "2.3rem",
                  }}
                />
              </Link>
              <Link to={"https://www.instagram.com/daburindialtd/?hl=en"}>
                <FaInstagram
                  style={{
                    padding: "10px",
                    color: " #d62976",
                    fontSize: "2.3rem",
                  }}
                />
              </Link>
              <Link to={"https://www.youtube.com/user/DaburIndiaLtd"}>
                <FaYoutube
                  style={{ padding: "10px", color: "red", fontSize: "2.3rem" }}
                />
              </Link>
            </div>
          </div>
          <div
            className="col-md-4"
            style={{ padding: "6rem", paddingBottom: "2rem" }}
          >
            <p style={{ fontSize: "1.4rem", fontWeight: "2px" }}>
              Join our Newsletter
            </p>
            <input type="text" placeholder="Enter You Email" />
            <FiMail style={{ color: "#fe9a00", fontSize: "1.3rem" }} />
          </div>
        </div>
        <hr />
        <div
          className="middle"
          style={{ display: "flex", margin: "5rem 3rem" }}
        >
          <div className=" cont col-md-2 d-flex">
            <div className="icon">
              <IoMdCall />
            </div>
            <div>
              <h6>Call Us:</h6>
              <p>+123-456-7898</p>
            </div>
          </div>
          <div className=" cont  col-md-3 d-flex">
            <div className="icon">
              <MdLocationPin />
            </div>
            <div>
              <h6>Address:</h6>
              <p>Demo Store Demo Store USA</p>
            </div>
          </div>
          <div className=" cont col-md-3 d-flex">
            <div className="icon">
              <FiMail />
            </div>
            <div>
              <h6>Email ID:</h6>
              <p>Support@Fiot.com</p>
            </div>
          </div>
          <div className="option col-md-4">
            <ul>
              <li>
                <Link className="li">Home</Link>
              </li>
              <li>
                <Link className="li">About Us</Link>
              </li>
              <li>
                <Link className="li">Contact Us</Link>
              </li>
              <li>
                <Link className="li">Wishlist</Link>
              </li>
              <li>
                <Link className="li">Collection</Link>
              </li>
              <li>
                <Link className="li">Blog</Link>
              </li>
              <li>
                <Link className="li">Look</Link>
              </li>
              <li>
                <Link className="li">Book</Link>
              </li>
              <li>
                <Link className="li">Portfolio</Link>
              </li>
              <li>
                <Link className="li">Faqs</Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="bottom"
          style={{ display: "flex", backgroundColor: "black", height: "50px" }}
        >
          <div
            style={{ fontWeight: "400", color: "white", margin: "auto 30px" }}
          >
            2018 - 19 Copy Right by Themeforest Powered by Pixelstrap
          </div>
          <div
            style={{
              position: "absolute",
              right: "8rem",
              marginTop: "8px",
            }}
          >
            <Link>
              {" "}
              <img
                className="footerImages"
                src={require("../Assests/visa.png")}
              />
            </Link>
            <Link>
              <img
                className="footerImages"
                src={require("../Assests/masterCard.png")}
              />
            </Link>
            <Link>
              <img
                className="footerImages"
                src={require("../Assests/paypal.png")}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default footer;
