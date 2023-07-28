import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import NewsLetter from "./NEWSLETTER/NewsLetter";

const Nav = (props) => {
  const [newsL, setNewsL] = useState(true);
  const closeNewsLetter = () => setNewsL(false);

  return (
    <>
      <div style={{ backgroundColor: props.mode === "dark" ? "#333333" : "" }}>
        {newsL && <NewsLetter closeNewsLetter={closeNewsLetter} />}

        <nav id="Home" className=" container-fluid">
          <div className="d-flex">
            <div className="headnav col-md-6">
              <div className="contact col-md-3 d-flex">
                <FaPhoneAlt className="navicon" />
                123-456-7890
              </div>
              <div className="mail col-md-3 d-flex">
                <FiMail className="navicon" />
                Support@Fiot.com
              </div>
            </div>
            <div className="headnav col-md-6">
              <div className="navcnt d-flex">
                <Link to="/" className="wishlist">
                  Wishlist
                </Link>
                <div className="dropdown">
                  <div className="log">My Account</div>
                  <div className="dropdown-content">
                    <ul>
                      <Link to="/login" className="link">
                        Login
                      </Link>
                    </ul>
                    <ul>
                      <Link to="/createAcc" className="link">
                        Register
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
