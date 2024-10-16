import SignIn from "./Pages/SignIn";
import "./App.css";
import SignUp from "./Pages/SignUp";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home/Home";
import Catalog from "./Pages/Catalog/Catalog";
import Profile from "./Pages/Profile/Profile";
import PricingPlans from "./Pages/PricingPlans/PricingPlans";
import { Route } from "react-router-dom";
import { Routes, Navigate } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import "./App.css";
import { jwtDecode } from "jwt-decode";
import { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import FirstPage from "./Pages/StartPages/FirstPage/First.jsx";

function App() {
  let navigate = useNavigate();

  const [userData, setUserData] = useState("");
  function saveDataUser() {
    let encoded_Jwt = localStorage.getItem("token");
  
    // Check if token exists and is a valid string
    if (encoded_Jwt && typeof encoded_Jwt === "string") {
      try {
        let decoded_Jwt = jwtDecode(encoded_Jwt);
        setUserData(decoded_Jwt);
      } catch (error) {
        console.error("Invalid token", error);
        setUserData(null); // Reset user data if token is invalid
      }
    } else {
      console.error("Token not found or invalid");
      setUserData(null); // Handle scenario when token is missing or invalid
    }
  }
  function logOut() {
    localStorage.removeItem("token");
    setUserData(null);
    navigate("/first");
  }
  function ProtectedRoutes(props) {
    if (localStorage.getItem("token") == null) {
      return (<Navigate to={"/first"}/>) ;
    } else {
      return props.children;
    }
  }  
  useEffect(() => { 
    saveDataUser() ;
  }, []);
  return (
    <>  
  <Navbar userData={userData} logOut={logOut}></Navbar> 
      <div className="container">
        <Routes>
          <Route
            path="signin"
            element={<SignIn saveDataUser={saveDataUser} />}
          />
          <Route path="signup" element={<SignUp />} />
          <Route path="" element={<FirstPage />} />
          <Route path="first" element={<FirstPage />} />
          <Route
            path="home"
            element={
              <ProtectedRoutes>
                <Home/>
              </ProtectedRoutes>
            }
          />
          <Route
            path="catalog"
            element={
              <ProtectedRoutes>
                <Catalog />
              </ProtectedRoutes>
            }
          />
          <Route
            path="profile"
            element={
              <ProtectedRoutes>
                <Profile />
              </ProtectedRoutes>
            }
          />
          <Route
            path="pricingplans"
            element={
              <ProtectedRoutes>
                <PricingPlans />
              </ProtectedRoutes>
            }
          />
          <Route
            path="aboutus"
            element={
              <ProtectedRoutes>
                <AboutUs />
              </ProtectedRoutes>
            }
          />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
