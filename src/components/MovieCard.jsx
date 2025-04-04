import React from 'react'
import { GlobalProvider, useGlobal } from './GlobalProvider'

const MovieCard = () => {
    const { movie } = useGlobal()
    console.log(movie);

    return (
        <div>
            {
                movie.results?.map(movie => (
                    <ul key={movie.id}>
                        <li>{movie.title}</li>
                        <li>{movie.original_title}</li>
                        <li>{movie.original_language}</li>
                        <li>{movie.vote_average}</li>
                    </ul>
                ))
            }
        </div>
    )
}

export default MovieCard
