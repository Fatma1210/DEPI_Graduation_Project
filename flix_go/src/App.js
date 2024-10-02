import SignIn from "./Pages/SignIn";
import './App.css'
import SignUp from "./Pages/SignUp";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home/Home";
import Catalog from "./Pages/Catalog/Catalog";
import Profile from "./Pages/Profile/Profile";
import PricingPlans from "./Pages/PricingPlans/PricingPlans";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import './App.css'

function App() {
  return (
    <>
<<<<<<< HEAD
      <SignIn></SignIn>
      {/* <SignUp></SignUp> */}
=======
     
      <Navbar></Navbar>
      <div className="container">

<Routes>
  <Route path='' element={ <Home/>}  />
  <Route path='home' element={ <Home/>}  />
  <Route path='catalog' element={  <Catalog/>} />
  <Route path='profile' element={ <Profile/>} />
  <Route path='pricingplans' element={ <PricingPlans/>} />
  <Route path='pricingplans' element={ <PricingPlans/>} />
  <Route path='aboutus' element={ <AboutUs/>} />



  <Route path='*' element={ <h1>Not Found</h1>} />
  <Route path='signup' element={<SignUp/> } />
  <Route path='signin' element={ <SignIn/> }  />





</Routes>



</div>

>>>>>>> 4232d3f8935286551f64a1c627f528669d87eca7
    </>
  );
}

export default App;
