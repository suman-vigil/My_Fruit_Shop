import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../component/login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../component/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LogPage = (props) => {
  const diffToast = () => {
    toast("Login Successfully");
  };

  const navigate = useNavigate();
  const [values, setValues] = useState({ email: "", password: "" });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setError({ ...error, [name]: "" }); // Clear the specific error message when input changes
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return; // Stop form submission if there are validation errors
    }

    setError("");
    setValues({ email: "", password: "" });

    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        console.log(res);
        navigate("/");
        diffToast();
      })

      .catch((err) => {
        setError(err.message);
        console.log("Error-", err.message);
      });

    const { email, password } = values;
    const res = await fetch(
      "https://ecommercewebsite-c7de5-default-rtdb.firebaseio.com/LoginUserData.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );
  };

  const validate = (values) => {
    const errors = {};

    if (!values.email || !values.password) {
      errors.password = "All fields are required";
    }
    return errors;
  };

  return (
    <>
      <div className={`d-flex bg-${props.mode === "dark" ? "dark" : "white"}`}>
        <div className={`topBox col-md-6`}>
          <h3 style={{ color: props.mode === "dark" ? "#fff1e6" : "" }}>
            LOGIN
          </h3>
          <div className={`loginBox}`}>
            <form action="" onSubmit={handleSubmit}>
              <label htmlfor="html">Email</label>
              <br />
              <input
                className="input"
                autoComplete="off"
                onChange={handleChange}
                placeholder="Email"
                type="text"
                id="email"
                name="email"
                value={values.email}
              ></input>
              <br />
              <label htmlfor="html">Password</label>
              <br />
              <input
                className="input"
                autoComplete="off"
                onChange={handleChange}
                placeholder="Password"
                type="password"
                id="password"
                name="password"
                value={values.password}
              ></input>
              <br />
              {error.password && (
                <p style={{ color: "red", fontSize: 15 }}>{error.password}</p>
              )}

              <button type="submit" value="submit" className="loginbtn">
                LOGIN
              </button>
              <p className="loginBoxP1">Forgot Your Password?</p>
            </form>
          </div>
        </div>
        <div className="bottomBox col-md-6">
          <h3 style={{ color: props.mode === "dark" ? "#fff1e6" : "" }}>
            NEW CUSTOMER
          </h3>
          <div className="loginBox">
            <h6 style={{ color: props.mode === "dark" ? "#fff1e6" : "" }}>
              CREATE NEW ACCOUNT
            </h6>
            <p
              className={`loginBoxP2`}
              style={{ color: props.mode === "dark" ? "#fff1e6" : "" }}
            >
              Sign Up For A Free Account At Our Store. Registration Is Quick And
              Easy. It Allows You To Be Able To Order From Our Shop. To Start
              Shopping Click Register.
            </p>

            <button className="loginbtn">
              <Link
                to="/createAcc"
                style={{ textDecoration: "none", color: "white" }}
              >
                REGISTER
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
  <ToastContainer />;
};

export default LogPage;
