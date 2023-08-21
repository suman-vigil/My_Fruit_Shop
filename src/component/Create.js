import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./createAcc.css";
import { db } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { auth } from "../component/firebase";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Create = (props) => {
  const diffToast = () => {
    toast("Sign In Successfully");
  };

  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    confirmPass: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setError({ ...error, [name]: "" });
  };

  const userCollection = collection(db, "UsersData");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return; // Stop form submission if there are validation errors
    }

    console.log("hello");
    setError("");
    setValues({ name: "", email: "", confirmPass: "", password: "" });

    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        console.log(res);
        addDoc(userCollection, {
          Name: values.name,
          Email: values.email,
          Password: values.password,
          ConfirmPass: values.confirmPass,
        });
        setTimeout(() => {
          navigate("/");
        }, 2500);
        diffToast();
        // navigate("/");
      })
      .catch((err) => {
        console.log("Error-", err);
        setError(err);
      });

    const { email, password, confirmPass, name } = values;
    const res = await fetch(
      "https://ecommercewebsite-c7de5-default-rtdb.firebaseio.com/NewUserData.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, confirmPass, name }),
      }
    );
  };

  const validate = (values) => {
    const errors = {};

    if (
      !values.email ||
      !values.password ||
      !values.confirmPass ||
      !values.name
    ) {
      errors.err = "All fields are required";
    }

    if (values.password !== values.confirmPass) {
      errors.err = "Confirm Password doesn't match";
    }

    return errors;
  };

  return (
    <>
      <div
        className={`outterBox bg-${props.mode === "dark" ? "dark" : "white"}`}
      >
        <h3 style={{ color: props.mode === "dark" ? "#fff1e6" : "" }}>
          CREATE ACCOUNT
        </h3>
        <form action="" method="POST" onSubmit={handleSubmit}>
          <div className="createAcc d-flex">
            <div className="formIn col-md-6">
              <label
                htmlfor="html"
                style={{
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                Name
              </label>

              <input
                onChange={handleChange}
                autoComplete="off"
                className="createInput"
                placeholder="Name"
                type="text"
                id="name"
                name="name"
                value={values.name}
              ></input>

              <label
                htmlfor="html"
                style={{
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                Password
              </label>

              <input
                autoComplete="off"
                onChange={handleChange}
                className="createInput"
                placeholder="confirmPass"
                type="password"
                id="confirmPass"
                name="confirmPass"
                value={values.confirmPass}
              ></input>

              {error.err && (
                <p style={{ color: "red", fontSize: 15 }}>{error.err}</p>
              )}
              {error.message && (
                <p style={{ color: "red", fontSize: 15 }}>
                  Email already in use
                </p>
              )}
              <button className="loginbtn" type="submit" value="Submit">
                SUBMIT
              </button>
            </div>
            <div className="formIn col-md-6">
              <label
                htmlfor="html"
                style={{
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                Email
              </label>

              <input
                onChange={handleChange}
                autoComplete="off"
                className="createInput"
                placeholder="Email"
                type="email"
                id="email"
                name="email"
                value={values.email}
              ></input>

              <label
                htmlfor="html"
                style={{
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                Confirm Password
              </label>

              <input
                autoComplete="off"
                onChange={handleChange}
                className="createInput"
                placeholder="Password"
                type="password"
                id="password"
                name="password"
                value={values.password}
              ></input>
              <ToastContainer
                position="top-center"
                autoClose={500}
                hideProgressBar={true}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Create;
