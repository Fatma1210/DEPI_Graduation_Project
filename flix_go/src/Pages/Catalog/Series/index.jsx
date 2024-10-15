import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './style.css';

const API_URL = 'https://www.episodate.com/api/most-popular?page=1';

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
            <div className="vh-100 d-flex align-items-center justify-content-center flex-column">
                <p>Loading...</p>
            </div>
        );
    }

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
                                    <h1 className='tittle'>Series Catalog</h1>
                                    
                                    {/* Breadcrumbs on the right */}
                                    <ul className='d-flex list m-0 align-items-center'>
                                        <li className='l-design'>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-arrow-right mx-2"></i>
                                        </li>
                                        <li>Series</li>
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
                <Link to="/movies" className="btn me-3" style={{ backgroundColor: '#FF5599', borderRadius: '25px' }}>
                    Movies
                </Link>
                <Link to="/series" className="btn me-3" style={{ backgroundColor: '#FF5599', borderRadius: '25px' }}>
                    Series
                </Link>
                <Link to="/anime" className="btn" style={{ backgroundColor: '#FF5599', borderRadius: '25px' }}>
                    Anime
                </Link>
            </div>

            <hr />

            {/* Series grid (4 cards per row) */}
            <div className="container row">
                {series.map(serie => (
                    <div key={serie.id} className="col-md-2 mb-4 movie-card-container">
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
                            className="text-decoration-none"
                        >
                            <div className="card h-100 bg-dark text-light movie-card">
                                <img 
                                    src={serie.image_thumbnail_path} 
                                    className="card-img-top" 
                                    alt={serie.name} 
                                />
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
