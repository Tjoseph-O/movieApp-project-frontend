import React from 'react';

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card" data-testid="movie-card">
            <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
                data-testid="movie-poster"
            />
            <h3 className="movie-title" data-testid="movie-title">
                {movie.title}
            </h3>
            <p className="movie-release-date" data-testid="movie-release-date">
                Release Date: {movie.release_date}
            </p>
        </div>
    );
};

export default MovieCard;




