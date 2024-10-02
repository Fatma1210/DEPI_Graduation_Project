import React, { useState } from "react";
import Joi, { func } from "joi";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import logo from "../../Images/logo.svg";
export default function SignIn() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("success");
  const [check, setChecked] = useState(false);
  function getUserData(e) {
    let data = { ...loginData };
    data[e.target.name] = e.target.value;
    setLoginData(data);
  }
  function validation() {
    const schema = Joi.object({
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
    });
    return schema.validate(loginData, { abortEarly: false });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const validate = validation();
    if (validate.error) { // Check if validation error exists
      setErrorMessage(validate.error.details);
      console.log(validate.error.details);
    } else {
      axios
        .post("http://hawas.runasp.net/api/v1/Login", loginData)
        .then((res) => {
          console.log("Response:", res); 
          const jwt = res.data.jwt;
          console.log("JWT:", jwt);
          localStorage.setItem("token", jwt);
        })
        .catch((err) => {
          console.error("Error:", err);
          if (err.response) {
            console.error("Server responded with:", err.response.data);
            setErrorMessage("Login failed: " + err.response.data.message);
          } else {
            setErrorMessage("Login failed: " + err.message); 
          }
        });
    }
  }
  
  function testCheck() {
    if (check) return "checked";
    return "";
  }
  return (
    <div className="card mb-3" style={{ background: "#2B2B31" }}>
      <div className="container">
        <div className="text-center mt-3">
          <img src={logo} alt="Logo" />
        </div>
        <div className="card-body">
          <form className="row g-3 flex-column" onSubmit={handleSubmit}>
            <div className="col-auto">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                onChange={getUserData}
              />
            </div>
            <div className="col-auto">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                onChange={getUserData}
              />
            </div>
            <div className="col-auto">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  style={{ backgroundColor: "#ff568e" }}
                  onClick={() => {
                    setChecked(!check);
                    testCheck();
                  }}
                />
                <label
                  className="form-check-label d-block"
                  htmlFor="flexCheckChecked"
                  style={{ color: "white" }}
                >
                  Remember me
                </label>
                <div
                  className="col-auto d-flex justify-content-center"
                  style={{ color: "#ff568e !important" }}
                >
                  <button type="submit" className="btn btn-outline btn-lg">
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
