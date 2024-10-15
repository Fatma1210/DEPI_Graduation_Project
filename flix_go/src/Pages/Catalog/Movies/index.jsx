import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import './movies.css';

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=d7c0a70a1adb796f3cd7b050e54736e4&language=en-US&page=1";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching the movie data", error);
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
                  <h1 className='tittle'>Movies Catalog</h1>
                  
                  {/* Breadcrumbs on the right */}
                  <ul className='d-flex list m-0 align-items-center'>
                    <li className='l-design'>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <i className="fa-solid fa-arrow-right mx-2"></i>
                    </li>
                    <li>Movies</li>
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
          style={{  
            backgroundImage: 'linear-gradient(90deg, #ff55a5 0%, #ff5860 100%)', 
            borderRadius: '25px'  }} 
        >
          Anime
        </a>
      </div>

      <hr />
      <div className="container row">
        {movies.length > 0 ? movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        )) : (
          <div className="vh-100 d-flex align-items-center justify-content-center flex-column">
            <p>Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
};

// MovieCard Component
const MovieCard = ({ movie }) => {
  return (
    <div className="col-md-2 mb-4 movie-card-container">
      <Link to={`/movies/${movie.id}`} className="text-decoration-none">
        <div className="card h-100 bg-dark text-light movie-card">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title || "Movie Poster"}
            className="card-img-top"
          />
          <div className="overlay">
            <i className="fas fa-play play-icon"></i>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              {movie.title || movie.original_title || movie.name || "Untitled Movie"}
            </h5>
            <p className="card-text">
              <span className="rating">
                <i className="fa fa-star" aria-hidden="true"></i> {` ${movie.vote_average}`}
              </span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Movies;
