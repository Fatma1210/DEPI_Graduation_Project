import React, { useEffect, useState } from "react";
import axios from "axios";
import './style.css'
import '../../../App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Link } from "react-router-dom";
import bgImage from "../../../assets/gridview-bg.jpg"; // Import the same background image

const API_URL =
  "https://api.themoviedb.org/3/trending/all/day?api_key=c9fac173689f5f01ba1b0420f66d7093";

// Title Section for Movies
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
            margin: 0,
            padding: "0 15px", // Add horizontal padding for spacing
            position: "relative",
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
                    Movies
                  </li>
                </ul>
              </div>
            </div>

        {/* Centered Buttons */}
        <div className="d-flex justify-content-center mt-3">
          <a
            href="/movies"
            className="btn me-3"
            style={{
              backgroundColor: "#FF5599",
              borderRadius: "25px",
            }}
          >
            Movies
          </a>
          <a
            href="/series"
            className="btn me-3"
            style={{
              backgroundColor: "#FF5599",
              borderRadius: "25px",
            }}
          >
            Series
          </a>
          <a
            href="/anime"
            className="btn"
            style={{
              backgroundColor: "#FF5599",
              borderRadius: "25px",
            }}
          >
            Anime
          </a>
        </div>
      </div>
    </section>
  );
};


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
    <div className="container my-5">
      <TitleSection />
      <hr />
      <div className="row">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

// MovieCard Component
const MovieCard = ({ movie }) => {
  return (
    <div className="col-md-2 mb-4 movie-card-container">
      {/* Wrap the card inside a Link to navigate to the movie details */}
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