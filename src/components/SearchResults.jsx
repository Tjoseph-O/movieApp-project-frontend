import React from 'react';
import MovieCard from './MovieCard';

function SearchResults({ searchResults }) {
    return (
        <div className="search-results">
            {searchResults.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
}

export default SearchResults;
