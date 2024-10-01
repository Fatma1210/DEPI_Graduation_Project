import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"
import logo from "../../Images/logo.svg"
export default function SignIn() {
  return (
    <div className="card border-primary mb-3" style={{ maxWidth: "18rem", background: "#2B2B31"}}>
      <div className="card-header text-center">
        <img src={logo} alt="" />
      </div>
      <div className="card-body text-primary">
        <h5 className="card-title">Primary card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
}
