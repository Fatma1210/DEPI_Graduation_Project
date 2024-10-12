import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import logo from "../../Images/logo.svg";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const navigate = useNavigate(); 
  let [errorAPI, setErrorAPI] = useState("");

  let [formData, setFormData] = useState({
    userName: "",
    dateOfBirth: "",
    email: "",
    password: "",
    rePassword: ""
  });

  let [errorMessage, setErrorMessage] = useState("");

  function getData(e) {
    let data = { ...formData };
    data[e.target.name] = e.target.value;
    setFormData(data);
    console.log(data);
  }

  function submitHandler(e) {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.rePassword) {
      setErrorMessage("Passwords do not match!");
      return;
    } else {
      setErrorMessage(""); // Clear error message if passwords match
    }

    axios.post("http://hawas.runasp.net/api/v1/Register", formData)
      .then(response => {
        console.log("Registration successful:", response.data);
        navigate("/SignIn");
      })
      .catch(error => {
        console.error("There was an error registering:", error);
        setErrorAPI(error.response.data)
      });
  }

  return (
    <div className="card signup-card mb-3 mt-4" style={{ background: "#2B2B31" }}>
      <div className="container">
        <div className="text-center mt-3">
          <img src={logo} alt="Logo" />
        </div>
        <div className="card-body">
          <form className="row g-3 flex-column" onSubmit={submitHandler}>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="User Name"
                id="input"
                onChange={getData}
                name="userName"
              />
            </div>
            <div className="col-auto">
              <input
                type="date"
                className="form-control"
                id="input"
                placeholder="Date Of Birth"
                onChange={getData}
                name="dateOfBirth"
              />
            </div>
            <div className="col-auto">
              <input
                type="email"
                className="form-control"
                id="input"
                placeholder="Email"
                onChange={getData}
                name="email"
              />
            </div>
            <div className="col-auto">
              <input
                type="password"
                className="form-control"
                id="input"
                placeholder="Password"
                onChange={getData}
                name="password"
              />
            </div>
            <div className="col-auto">
              <input
                type="password"
                className="form-control"
                id="input"
                placeholder="Confirm Password"
                onChange={getData}
                name="rePassword"
              />
            </div>

            {/* Display error message if passwords do not match */}
            {errorMessage && (
              <div className="col-auto text-center">
                <p style={{ color: "red" }}>{errorMessage}</p>
              </div>
            )}
            {errorAPI && (
              <div className="col-auto text-center">
                <p style={{ color: "red" }}>{errorAPI}</p>
              </div>
            )}

            <div className="col-auto">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckChecked"
                  style={{ backgroundColor: "#ff568e" }}
                  defaultChecked
                />
                <label className="form-check-label d-block" htmlFor="flexCheckChecked" style={{ color: "white" }}>
                  I agree to the <span style={{ color: "#ff568e" }}>Privacy Policy</span>
                </label>
                <div className="col-auto d-flex justify-content-center" style={{ color: "#ff568e !important" }}>
                  <button type="submit" className="btn btn-outline btn-lg">Sign Up</button>
                </div>
                <span className="text-white d-flex justify-content-center">
                  Already have an account? <span style={{ color: "#ff568e" }}>Sign In!</span>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
