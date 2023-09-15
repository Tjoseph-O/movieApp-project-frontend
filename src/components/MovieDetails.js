
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails() {
    const { id } = useParams();

    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchMovieDetails = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=987b3a5c16db4b601ef1efa91bf15850&language=en-US`
                );
                const data = await response.json();
                setMovie(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching movie details:', error);
                setLoading(false);
            }
        };

        fetchMovieDetails();
    }, [id]); // Include 'id' in the dependency array

    return (
        <div className="movie-details">
            {loading ? (
                <p>Loading...</p>
            ) : movie ? (
                <>
                    <h2 data-testid="movie-title">{movie.title}</h2>
                    <p data-testid="movie-release-date">Release Date: {movie.release_date}</p>
                    <p data-testid="movie-runtime">Runtime: {movie.runtime} minutes</p>
                    <p data-testid="movie-overview">Overview: {movie.overview}</p>

                </>
            ) : (
                <p>Movie not found.</p>
            )}
        </div>
    );
}

export default MovieDetails;

