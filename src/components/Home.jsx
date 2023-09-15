
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import "../App.css";
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import MovieDetails from './MovieDetails';
import ErrorBoundary from './ErrorBoundary';
import MovieCard from "./MovieCard";
import * as PropTypes from "prop-types";
import SearchCard from "./SearchCard";
import SearchResults from "./SearchResults";
import {element} from "prop-types";
import Footer from "./image/Footer.png";

import feaMovie from "./image/Featured Movie.png";

const poster = new URL("/src/components/image/Header.png", import.meta.url);

function Switch(props) {
    return null;
}

Switch.propTypes = {children: PropTypes.node};

function Home() {
    const [topMovies, setTopMovies] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetchTopMovies();
    }, []);




    const fetchTopMovies = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                'https://api.themoviedb.org/3/movie/top_rated?api_key=987b3a5c16db4b601ef1efa91bf15850&language=en-US&page=1&results=10'
            );
            const data = await response.json();
            setTopMovies(data.results);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching top movies:', error);
            setLoading(false);
        }
    };






    // const renderTopMovies = () => {
    //     if (loading) {
    //         return <p>Loading...</p>;
    //     } else {
    //         return (
    //             <div style={{width: "30%", height: "30%"}} className="movie-list">
    //
    //                 {topMovies.map((movie) => (
    //                     <MovieCard movie={movie}/>
    //                 ))}
    //             </div>
    //         );
    //     }
    // };



    const renderSearchedMovies = () => {
        if (searchResults.length > 0) {
            console.log("length inside if -> ", searchResults.length)
            return (
                <div style={{width: "30%", height: "30%"}} className="movie-list">

                    <br/><br/>
                    {searchResults.map((movie) => (
                        <MovieCard movie={movie}/>

                    ))}

                </div>
            );

        } else {

            return <p>No search results found.</p>;
        }
    };




    const handleSearch = async (query) => {
        try {
            setLoading(true);
            const response = await fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=987b3a5c16db4b601ef1efa91bf15850&query=${query}`
            );
            const data = await response.json();
            console.log("searched movie -> ", data.results);
            setSearchResults(data.results);
            setLoading(false);
        } catch (error) {
            console.error('Error searching movies:', error);
            setLoading(false);
        }
    };


    useEffect(() => {
        renderSearchedMovies();
    }, []);

    return (
        <div className="App">

            <div className="headerImage">
                <img src={poster} />
            </div>


            <div>
                < SearchBar onSearch={handleSearch} className="button-onTop" />

            </div>


          <div>

              <div className="fea-movie" >
                  <img src={feaMovie} />

              </div>


              {loading ? (
                  <p>Loading...</p>
              ) : (
                  <MovieList movies={topMovies} />
              )}

              <h2>Search Results</h2>
              {loading ? (
                  <p>Loading...</p>
              ) : (
                  < SearchResults searchResults ={searchResults} />
              )}
          </div>
            <div>
                <img src={Footer} alt="F" className="footerImage" />

            </div>
        </div>




    );
}

export default Home;









