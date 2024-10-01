import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import logo from "../../Images/logo.svg";
export default function SignIn() {
  return (
    <div className="card mb-3" style={{ background: "#2B2B31" }}>
      <div className="container">
        <div className="text-center mt-3">
          <img src={logo} alt="Logo" />
        </div>
        <div className="card-body">
          <form className="row g-3 flex-column">
            <div className="col-auto">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                id="input"

              />
            </div>
            <div className="col-auto">
              <input
                type="password"
                className="form-control"
                id="input"
                placeholder="Password" 
              />
            </div>
            <div className="col-auto">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  style={{backgroundColor : "#ff568e"}}
                  checked
                />
                <label className="form-check-label d-block" htmlFor="flexCheckChecked" style={{color : "white"}}>
                  Remember me
                </label>  
                <div className="col-auto d-flex justify-content-center" style={{color :"#ff568e !important"}}>
                <button type="button" class="btn btn-outline btn-lg">Sign In</button> 
              
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
