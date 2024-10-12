import React from "react";
import "./Cards.css";
import { useNavigate } from 'react-router-dom';
export default function Cards() {
  
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/form'); 
  };
  
  return (
    <div className="section">
      <div className="container">
        <div className="row ">
          <div className="col-lg-4 col-md-6">
            <div className="crad">
              <div className="C-tittle">
                <p className="namme">Starter</p>
                <p className="price">Free</p>
              </div>
              <ul className="desc">
                <li className="l-design"> 7 days</li>
                <li className="l-design">720p Resolution</li>
                <li className="l-design">Limited Availability</li>
                <li className="l-design">Desktop Only</li>
                <li className="l-design">Limited Support</li>
              </ul>
              <button className=" buttonn btn ">REGISTER</button>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className="crad special">
              <div className="C-tittle">
                <p className="namme">Premium</p>
                <p className="price">$19.99</p>
              </div>
              <ul className="desc">
                <li className="l-design">1 Month</li>
                <li className="l-design">Full HD</li>
                <li className="l-design">Lifetime Availability</li>
                <li className="l-design">TV & Desktop</li>
                <li className="l-design">24/7 Support</li>
              </ul>
              <button onClick={handleNavigate} className=" buttonn btn ">CHOOSE PLAN</button>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="crad">
              <div className="C-tittle">
                <p className="namme">Cinematic</p>
                <p className="price">$39.99</p>
              </div>
              <ul className="desc">
                <li className="l-design">2 Months</li>
                <li className="l-design">Ultra HD</li>
                <li className="l-design">Lifetime Availability</li>
                <li className="l-design">Any Device</li>
                <li className="l-design">24/7 Support</li>
              </ul>
              <button onClick={handleNavigate} className=" buttonn btn ">CHOOSE PLAN</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
