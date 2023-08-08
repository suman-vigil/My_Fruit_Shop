import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FiSearch, FiSettings, FiSun } from "react-icons/fi";
import { Dropdown, NavDropdown } from "react-bootstrap";
import Search from "../component/Search/Search";

const Navbar = (props) => {
  const [search, setSearch] = useState(false);
  const closeSearch = () => setSearch(false);

  return (
    <>
      {search && <Search closeSearch={closeSearch} />}

      <div
        className={`menu container-fluid`}
        style={{ backgroundColor: props.mode === "dark" ? "#333333" : "" }}
      >
        <div className="col-md-3 ">
          <Link to="/">
            <img
              className="img"
              src={require("../Assests/logo.avif")}
              alt="logo"
            />
          </Link>
        </div>
        <div className="menuOption col-md-7 ">
          <ul
            className="d-flex "
            style={{ textDecoration: "none", listStyle: "none" }}
          >
            <li
              className={`li text-${props.mode === "dark" ? "light" : "dark"}`}
            >
              <HashLink
                smooth
                to="/#Home"
                style={{ textDecoration: "none" }}
                className={`navLnk text-${
                  props.mode === "dark" ? "light" : "dark"
                } `}
              >
                HOME
              </HashLink>
            </li>

            <li className="li">
              <HashLink
                smooth
                to="/#ProductCarousel"
                style={{ textDecoration: "none" }}
                className={`navLnk text-${
                  props.mode === "dark" ? "light" : "dark"
                }`}
              >
                FRUITS
              </HashLink>
            </li>
            <li className="li">
              <NavDropdown
                className={`navLnk text-${
                  props.mode === "dark" ? "light" : "dark"
                }`}
                title="CATEGORY"
                id="basic-nav-dropdown"
              >
                <Dropdown className="dropLnk d-flex">
                  <div>
                    <NavDropdown.Header
                      style={{ color: "black", fontSize: "16px" }}
                    >
                      New Layout
                    </NavDropdown.Header>
                    <NavDropdown.Item className="dropOp">
                      4 Image
                    </NavDropdown.Item>
                    <NavDropdown.Item className="dropOp">
                      Bundle
                    </NavDropdown.Item>
                    <NavDropdown.Item className="dropOp">
                      Sticky
                    </NavDropdown.Item>
                  </div>
                  <div>
                    <NavDropdown.Header
                      style={{ color: "black", fontSize: "16px" }}
                    >
                      Sidebar
                    </NavDropdown.Header>
                    <NavDropdown.Item className="dropOp" href=" ">
                      Left Sidebar
                    </NavDropdown.Item>
                    <NavDropdown.Item className="dropOp" href=" ">
                      Right Sidebar
                    </NavDropdown.Item>
                    <NavDropdown.Item className="dropOp" href=" ">
                      No Sidebar
                    </NavDropdown.Item>
                  </div>
                  <div>
                    <NavDropdown.Header
                      style={{ color: "black", fontSize: "16px" }}
                    >
                      Product Layout
                    </NavDropdown.Header>
                    <NavDropdown.Item className="dropOp" href=" ">
                      Gallery Image
                    </NavDropdown.Item>
                    <NavDropdown.Item className="dropOp" href=" ">
                      Image swatch
                    </NavDropdown.Item>
                    <NavDropdown.Item className="dropOp" href=" ">
                      Vertical Tab
                    </NavDropdown.Item>
                  </div>
                  <div>
                    <NavDropdown.Header
                      style={{ color: "black", fontSize: "16px" }}
                    >
                      Thumbnail Image
                    </NavDropdown.Header>
                    <NavDropdown.Item className="dropOp" href=" ">
                      Left Image
                    </NavDropdown.Item>
                    <NavDropdown.Item className="dropOp" href=" ">
                      Right Image
                    </NavDropdown.Item>
                    <NavDropdown.Item className="dropOp" href=" ">
                      Bottom Image
                    </NavDropdown.Item>
                  </div>
                  <div>
                    <NavDropdown.Header
                      style={{ color: "black", fontSize: "16px" }}
                    >
                      3 Column
                    </NavDropdown.Header>
                    <NavDropdown.Item className="dropOp" href=" ">
                      3 Col Right{" "}
                    </NavDropdown.Item>
                    <NavDropdown.Item className="dropOp" href=" ">
                      3 col Left
                    </NavDropdown.Item>
                    <NavDropdown.Item className="dropOp" href=" ">
                      3 Col Bottom
                    </NavDropdown.Item>
                  </div>
                </Dropdown>
                <div className="dropImg d-flex ">
                  <div>
                    <img
                      className="col-md-12"
                      src={require("../Assests/image.avif")}
                      alt="logo"
                    />
                  </div>
                  <div>
                    <img
                      className="col-md-12"
                      src={require("../Assests/image1.avif")}
                      alt="logo"
                    />
                  </div>
                </div>
              </NavDropdown>
            </li>

            <li className="li">
              <Link
                to=""
                className={`navLnk text-${
                  props.mode === "dark" ? "light" : "dark"
                }`}
              >
                COLLECTION
              </Link>
            </li>
            <li className="li">
              <NavDropdown
                className={`navLnk text-${
                  props.mode === "dark" ? "light" : "dark"
                }`}
                title="SHOP"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>Left Sidebar</NavDropdown.Item>
                <NavDropdown.Item>Right Sidebar</NavDropdown.Item>
                <NavDropdown.Item>No Sidebar</NavDropdown.Item>
                <NavDropdown.Item>Sidebar popup</NavDropdown.Item>
                <NavDropdown.Item>Full Page</NavDropdown.Item>
              </NavDropdown>
            </li>
            <li className="li">
              <NavDropdown
                className={`navLnk text-${
                  props.mode === "dark" ? "light" : "dark"
                }`}
                title="PAGES"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <HashLink
                    smooth
                    to="/#AboutUs"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    About Us
                  </HashLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <HashLink
                    smooth
                    to="/#BlogsCards"
                    style={{ textDecoration: "none" }}
                    className="navLnk "
                  >
                    Blog
                  </HashLink>
                </NavDropdown.Item>
                <NavDropdown.Item>Contact Us</NavDropdown.Item>
                <NavDropdown.Item>Faqs</NavDropdown.Item>
                <NavDropdown.Item>Look Book</NavDropdown.Item>
                <NavDropdown.Item>Portfolio</NavDropdown.Item>
                <NavDropdown.Item>Whislist</NavDropdown.Item>
                <NavDropdown.Item>Search</NavDropdown.Item>
              </NavDropdown>
            </li>

            <li className="li">
              <HashLink
                smooth
                to="/#BlogsCards"
                style={{ textDecoration: "none" }}
                className={`navLnk text-${
                  props.mode === "dark" ? "light" : "dark"
                }`}
              >
                BLOG
              </HashLink>
            </li>
          </ul>
        </div>
        <div className="menuIcon col-md-2">
          <Link
            className={`ic text-${props.mode === "dark" ? "light" : "dark"}`}
            // to="/search"
          >
            {/* <div
              className={`ic text-${props.mode === "dark" ? "light" : "dark"}`}
              onClick={() => setSearch(true)}
            > */}
            <FiSearch onClick={() => setSearch(true)} />
            {/* </div> */}
          </Link>

          <Link>
            <div
              className={`ic text-${props.mode === "dark" ? "light" : "dark"}`}
            >
              <FiSettings />
            </div>
          </Link>
          <Link
            className={`ic text-${props.mode === "dark" ? "light" : "dark"}`}
            style={{ listStyle: "none", textDecoration: "none" }}
            to="/cart"
          >
            <FaShoppingCart />
          </Link>
          <FiSun
            className={`text-${props.mode === "dark" ? "light" : "dark"}`}
            style={{
              marginTop: "7px",
              fontSize: "1.3rem",
            }}
            onClick={props.toggleMode}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
