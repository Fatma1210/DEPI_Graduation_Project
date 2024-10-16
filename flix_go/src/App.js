import SignIn from "./Pages/SignIn";
import './App.css';
import SignUp from "./Pages/SignUp";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home/Home";
import Catalog from "./Pages/Catalog";
import { Movies, Series, Anime, DetailsMovies, DetailsSeries, DetailsAnime } from './Pages/Catalog'
import Profile from "./Pages/Profile/Profile";
import PricingPlans from "./Pages/PricingPlans/PricingPlans";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Form from "./Pages/PricingPlans/Component/Form.jsx/Index";


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='catalog' element={<Catalog />} />
          <Route path="movies" element={<Movies />} />
          <Route path="series" element={<Series />} />
          <Route path="anime" element={<Anime />} />
          <Route path="/" element={<Movies />} />
          <Route path="/movies/:id" element={<DetailsMovies />} />
          <Route path="/series/:id" element={<DetailsSeries />} />
          <Route path="/anime/:mal_id" element={<DetailsAnime />} />
          <Route path='profile' element={<Profile />} />
          <Route path='pricingplans' element={<PricingPlans/>} />
          <Route path="/formm" element={<Form />} />
          <Route path='aboutus' element={<AboutUs />} />
          <Route path='*' element={<h1>Not Found</h1>} />
          <Route path='signup' element={<SignUp />} />
          <Route path='signin' element={<SignIn />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
