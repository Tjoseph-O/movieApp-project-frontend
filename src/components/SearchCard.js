import React from "react";

const SearchCard = ({ movie }) => {
    console.log("the movie in search card -> ",movie);
    return (
        <div>
            <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>Release Date: {movie.release_date}</p>
        </div>
    );
};

export default SearchCard;
