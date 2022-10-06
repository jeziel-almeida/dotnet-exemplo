import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

import './MoviesGrid.css'

const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;


const Home = () => {
    const [topMovies, setTopMovies] = useState([])

    const getTopRatedMovies = async (url) => {

        const res = await fetch(url)
        const data = await res.json()

        setTopMovies(data.results)
        console.log(data.results)
    }

    //! Inicia toda vez que a página carrega
    useEffect(() => {

        const topRatedUrl = `${movieURL}top_rated?${apiKey}`;

        getTopRatedMovies(topRatedUrl);

    }, [])

    return (
        <div className="container">
            <h2 className="title">Melhores filmes:</h2>
            <div className="movies-container">
                {topMovies.length === 0 && <h2 className="loading">Carregando...</h2>}
                {topMovies.length > 0 && topMovies.map((movie)  =>  <MovieCard movie={movie} key={movie.id} />)}
            </div>
        </div>
    )
}

export default Home