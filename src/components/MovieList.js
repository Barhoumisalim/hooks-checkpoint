import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ movies }) => {
    // console.log("#movies", movies)
    return (
        <div style={{ display: "flex", flexWrap: "wrap", width: "70%", justifyContent: "space-evenly" }}>
            {
                movies.map((movie, index) => <MovieCard movie={movie} index={index} />)
            }

        </div>
    )
}

export default MovieList