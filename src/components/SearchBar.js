import React, { useState } from 'react';
import {Route} from "react-router-dom";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for movies..."
                value={query}
                onChange={handleInputChange}
            />
            <button  onClick={handleSearch}>Search</button>

        </div>
    );
};

export default SearchBar;
