import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { LifeLine } from 'react-loading-indicators'; // Import LifeLine component
import './style.css'; // External CSS file for styling

const API_KEY = "c9fac173689f5f01ba1b0420f66d7093"; // Movie API key
const imgPath = (path) => `https://image.tmdb.org/t/p/w500${path}`; // Image base URL

export default function DetailsMovies() {
  const { id } = useParams(); // Capture the movie id from URL
  const [details, setDetails] = useState(null);

  // Fetch movie details from the API
  function getDetails() {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        console.error("Error fetching movie details:", err);
      });
  }

  useEffect(() => {
    getDetails();
  }, [id]);

  return (
    <div className="movie-details-container">
      {details ? (
        <div className="row my-5">
          <div className="col-md-4">
            <img className="w-100 movie-poster" src={imgPath(details.poster_path)} alt={details.title} />
          </div>
          <div className="col-md-7 offset-md-1 movie-details-content">
            <h1 className="movie-title">{details.title}</h1>
            <div className="movie-rating">
              <span className="stars">
                {Array(Math.round(details.vote_average / 2)).fill('⭐').join('')}
              </span>
              <span className="rating-text">{details.vote_average} / 10</span>
            </div>
            <p className="movie-overview">{details.overview}</p>
            <p><strong>Release Date:</strong> {details.release_date}</p>
            <p><strong>Genres:</strong> {details.genres.map((genre) => genre.name).join(", ")}</p>
            <Link to="/movies" className="btn" style={{ backgroundColor: '#FF5599', borderRadius: '25px' }}>
              Back to movies List
            </Link>
          </div>
        </div>
      ) : (
        <div className="vh-100 d-flex align-items-center justify-content-center flex-column">
          {/* Replaced Loading text with LifeLine loading indicator */}
          <LifeLine color="#FF5599" size="medium" text="Loading" textColor="#FF5599" />
        </div>
      )}
    </div>
  );
}
