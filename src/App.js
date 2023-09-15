
import './App.css';
import Home from "./components/Home";
import {Routes, Route} from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import MovieCard from "./components/MovieCard";
import MovieList from "./components/MovieList";


function App() {


        return (

                <Routes>
                    <Route  path="/" element={ <Home/> } />
                    <Route  path="Movies/:id" element={ <MovieDetails/> } />

                </Routes>





        );
    }

    export default App;









