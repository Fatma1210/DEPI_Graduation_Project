import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './style.css';
import { LifeLine } from 'react-loading-indicators';

const API_URL = 'https://api.jikan.moe/v4/seasons/upcoming';

const Anime = () => {
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        console.log(response.data);
        setAnime(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching the anime data", error);
      });
  }, []);

  return (
    <div className="my-5">
      {/* Inline Header with left-aligned title and right-aligned breadcrumbs */}
      <div>
        <div className="background-container"> 
          <div className='container'>
            <div className='row h-100'>
              <div className='col-12'>
                <div className="contentt h-100 w-100 d-flex align-items-center justify-content-between">
                  {/* Title on the left */}
                  <h1 className='tittle'>Anime Catalog</h1>
                  
                  {/* Breadcrumbs on the right */}
                  <ul className='d-flex list m-0 align-items-center'>
                    <li className='l-design'>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <i className="fa-solid fa-arrow-right mx-2"></i>
                    </li>
                    <li>Anime</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div className='line'></div>
      </div>

      {/* Buttons for Movies, Series, and Anime */}
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

      <hr />
      <div className="container row">
        {anime.length > 0 ? anime.map(animeItem => (
          <AnimeCard key={animeItem.mal_id} anime={animeItem} />
        )) : (
          <div className="vh-100 d-flex align-items-center justify-content-center flex-column">
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
