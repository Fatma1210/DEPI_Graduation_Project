import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import './style.css'; // External CSS file for styling
import { LifeLine } from 'react-loading-indicators';

const API_URL = "https://api.jikan.moe/v4/anime"; // Anime API base URL

export default function DetailsAnime() {
  const { mal_id } = useParams(); // Capture the anime id from URL
  const [details, setDetails] = useState(null);

  // Fetch anime details from the API
  function getDetails() {
    axios
      .get(`${API_URL}/${mal_id}`)
      .then((res) => {
        setDetails(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching anime details:", err);
      });
  }

  useEffect(() => {
    getDetails();
  }, [mal_id]);

  return (
    <div className="movie-details-container">
      {details ? (
        <div className="row my-5">
          <div className="col-md-4">
            <img 
              className="w-100 movie-poster" 
              src={details.images?.jpg?.large_image_url || details.images?.jpg?.image_url} 
              alt={details.titles[0].title} 
            />
          </div>
          <div className="col-md-7 offset-md-1 movie-details-content">
            <h1 className="anime-title">{details.titles[0].title}</h1>
            <div className="anime-rating">
              <span className="stars">
                {Array(Math.round(details.score)).fill('⭐').join('')}
              </span>
              <span className="rating-text">{details.score} / 10</span>
            </div>
            <p className="movie-overview">{details.synopsis || "No overview available."}</p>
            <p><strong>Status:</strong> {details.status}</p>
            <p><strong>Genres:</strong> {details.genres.map((genre) => genre.name).join(", ")}</p>
            <Link to="/anime" className="btn back-to-list-btn" style={{ backgroundColor: '#FF5599', borderRadius: '25px' }}>
              Back to Anime List
            </Link>
          </div>
        </div>
      ) : (
        <div className="vh-100 d-flex align-items-center justify-content-center flex-column">
          <LifeLine color="#FF5599" size="medium" text="Loading" textColor="#FF5599" />
        </div>
      )}
    </div>
  );
}
