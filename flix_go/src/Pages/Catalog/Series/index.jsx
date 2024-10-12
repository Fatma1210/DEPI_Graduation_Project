import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import bgImage from '../../../assets/gridview-bg.jpg';

const API_URL = 'https://www.episodate.com/api/most-popular?page=1';

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
                Series
              </li>
            </ul>
          </div>
        </div>
                <div className="d-flex justify-content-center mt-3">
                    <Link to="/movies" className="btn me-3" style={{ backgroundColor: '#FF5599', borderRadius: '25px' }}>Movies</Link>
                    <Link to="/series" className="btn me-3" style={{ backgroundColor: '#FF5599', borderRadius: '25px' }}>Series</Link>
                    <Link to="/anime" className="btn" style={{ backgroundColor: '#FF5599', borderRadius: '25px' }}>Anime</Link>
                </div>
            </div>
        </section>
    );
};

const Series = () => {
    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSeries = async () => {
            try {
                const response = await axios.get(API_URL);
                setSeries(response.data.tv_shows);
            } catch (error) {
                console.error("Error fetching the series data", error);
            } finally {
                setLoading(false);
            }
        };

        fetchSeries();
    }, []);

    if (loading) {
        return (
            <div className="text-center mt-5">
                <h4 className="text-light">Loading...</h4>
            </div>
        );
    }

    return (
        <div className="container my-5">
            <TitleSection />
            <hr />

            {/* Series grid (4 cards per row) */}
            <div className="row">
                {series.map(serie => (
                    <div key={serie.id} className="col-md-2 mb-4">
                        <Link 
                            to={`/series/${serie.id}`} 
                            state={{ 
                                name: serie.name, 
                                permalink: serie.permalink, 
                                start_date: serie.start_date, 
                                country: serie.country, 
                                network: serie.network, 
                                image: serie.image_thumbnail_path 
                            }}
                        >
                            <div className="card h-100 bg-dark text-light movie-card">
                                <img src={serie.image_thumbnail_path} className="card-img-top" alt={serie.name} />
                                <div className="overlay">
                                    <i className="fas fa-play play-icon"></i>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{serie.name}</h5>
                                    <p className="card-text">{serie.status}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Series;
