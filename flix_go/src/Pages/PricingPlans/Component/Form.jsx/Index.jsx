import React from "react";
import './Form.css'
import { useNavigate } from 'react-router-dom';
export default function Form() {
  const navigate = useNavigate();
  const handleHideForm = () => {
    navigate('/pricingplans'); 
  };
  const handleSubmit = (event) => {
    event.preventDefault();}
  return (
    <div>
      <div className="card-contt d-flex justify-content-center">
        <div className="cardddd  w-25" style={{ background: "#28282D" }}>
          <div className="container p-3">
            <div className="text-center mt-3 d-flex justify-content-between">
            
              <h2 className="text-white ps-3 mb-0 mt-4">Select plan</h2>
              <button onClick={handleHideForm} class="modal__close fbutton" type="button" data-bs-dismiss="modall" aria-label="Closee"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg></button>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit} className="row  g-3 flex-column">
                <div className="col-auto">
                  <label class="sign__label text-white fs-5" for="value">
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control sign-input"
                    placeholder="Full Name "
                    
                  />
                </div>

                <div className="col-auto">
                  <label class="sign__label text-white fs-5" for="value">
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="email"
                  />
                </div>

                <div class="sign__group">
                  <label class="sign__label text-white fs-5" for="value">
                    Choose plan:
                  </label>
                  <select
                    class="form-control sign__select mb-5 customm-select"
                    name="value"
                    id="value"
                  >
                    <option value="20">Premium - $19.99        </option>
                    <option value="40">Cinematic - $39.99</option>
                  </select>

                  <h6 class="sign__text  text-secondary">
                    You can spend money from your account on the renewal of the
                    connected packages, or to order cars on our website.
                  </h6>
                </div>

                <div className="col-auto ">
                  <h6 className="text-white">Payment Method: </h6>
                  <div className="form-check">
                    <div className="mb-1">
                    <input
                      className="form-check-input"
                      type="Radio"
                      name="rr"
                      value=""
                      id="type1"
                      checked
                      style={{
                        backgroundColor: "#ff568e",
                        width: "25px",
                        height: "25px",
                      }}
                    />
                    <label
                      className="form-check-label d-block fs-5"
                      htmlFor="flexCheckChecked"
                      style={{ color: "white" }}
                    >
                      Visa
                    </label>
                    </div>

                    <div className="mb-1">
                    <input
                      className="form-check-input"
                      type="Radio"
                      name="rr"
                      value=""
                      id="type2"
                      style={{
                        backgroundColor: "#ff568e",
                        width: "25px",
                        height: "25px",
                      }}
                    />
                    <label
                      className="form-check-label d-block fs-5"
                      htmlFor="flexCheckChecked"
                      style={{ color: "white" }}
                    >
                      Mastercard
                    </label>
                    </div>

                    <input
                      className="form-check-input "
                      type="Radio"
                      name="rr"
                      value=""
                      id="type3"
                      style={{
                        backgroundColor: "#ff568e",
                        width: "25px",
                        height: "25px",
                      }}
                    />
                    <label
                      className="form-check-label d-block fs-5"
                      htmlFor="flexCheckChecked"
                      style={{ color: "white" }}
                    >
                      Paypal
                    </label>
                    
                    
                  </div>
                  <div
                      className="col-auto d-flex justify-content-center mt-3"
                      style={{ color: "#ff568e !important" }}
                    >
                      <button type="submit" className="btn btn-outline btn-lg bbb">
                        Proceed
                      </button>
                    </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
