// Anime.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import bgImage from '../../../assets/gridview-bg.jpg'; // Import background image
import { Link } from 'react-router-dom';
import './style.css';
import { LifeLine } from 'react-loading-indicators';

const API_URL = 'https://api.jikan.moe/v4/seasons/upcoming';

const TitleSection = () => {
  return (
    <section
      style={{
        backgroundColor: "black",
        height: "200px",
        backgroundImage: `url(${
          bgImage || "https://example.com/your-bg-image.jpg"
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw", // Ensure the section takes up the full viewport width
        margin: 0,
        padding: 0,
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)", // Center align the section horizontally
      }}
    >
      <div className="container h-100 d-flex flex-column justify-content-center">
        <div className="row w-100 align-items-center justify-content-between">
          {/* Title aligned to the left */}
          <div className="col-6 d-flex align-items-center">
            <h2 className="text-light display-6 mb-0">Movies Catalog</h2>
          </div>
          <div className="col-6 d-flex justify-content-end align-items-center">
            <ul
              className="catalog d-inline-flex"
              style={{ marginTop: "10px", listStyle: "none" }}
            >
              <li className="catalog__item">
                <a href="/" className="text-light">
                  Home
                </a>
              </li>
              <li className="catalog__item mx-2">
                <i className="fas fa-chevron-right text-light"></i>
              </li>
              <li className="catalog__item header__item--active text-light">
                Anime
              </li>
            </ul>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-3">
          <a 
            href="/movies" 
            className="btn me-3" 
            style={{ backgroundColor: '#FF5599', borderRadius: '25px' }}
          >
            Movies
          </a>
          <a 
            href="/series" 
            className="btn me-3" 
            style={{ backgroundColor: '#FF5599', borderRadius: '25px' }} 
          >
            Series
          </a>
          <a 
            href="/anime" 
            className="btn" 
            style={{ backgroundColor: '#FF5599', borderRadius: '25px' }} 
          >
            Anime
          </a>
        </div>
      </div>
    </section>
  );
};

const Anime = () => {
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        console.log(response.data); // Log the response for debugging
        setAnime(response.data.data); // Adjust based on the actual structure
      })
      .catch(error => {
        console.error("Error fetching the anime data", error);
      });
  }, []);

  return (
    <div className="container my-5">
      <TitleSection />
      <hr />
      <div className="row">
        {anime.length > 0 ? anime.map(animeItem => (
          <AnimeCard key={animeItem.mal_id} anime={animeItem} />
        )) : (
            <div className="vh-100 d-flex align-items-center justify-content-center flex-column">
            {/* Replaced Loading text with LifeLine loading indicator */}
            <LifeLine color="#FF5599" size="medium" text="Loading" textColor="#FF5599" />
          </div>
        )}
      </div>
    </div>
  );
};

// AnimeCard Component
const AnimeCard = ({ anime }) => {
  return (
    <div className="col-md-2 mb-4 movie-card-container">
      <Link to={`/anime/${anime.mal_id}`} className="text-decoration-none">
        <div className="card h-100 bg-dark text-light movie-card">
          <img
            src={anime.images?.jpg?.image_url} // Use optional chaining to avoid errors
            alt={anime.title}
            className="card-img-top"
          />
          <div className="overlay">
            <i className="fas fa-play play-icon"></i>
          </div>
          <div className="card-body">
            <h5 className="card-title">{anime.title}</h5>
            <p className="card-text">{anime.status}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Anime;
