import React from 'react'
import MovieCard from './MovieCard'
import { GlobalProvider, useGlobal } from './GlobalProvider'


const MovieList = () => {
    //context
    const { movie, TV, } = useGlobal()
    return (
        <div>
            {[movie, TV].map(element => (
                <MovieCard
                    id={element.id}
                    path={element.backdrop_path}
                    original_language={element.original_language}
                    original_name={element.original_name || ''}
                    name={element.name || ''}
                    title={element.title || ''}
                    original_title={element.original_title || ''}
                    overview={element.overview}
                    vote={element.vote_average} />

            ))}

        </div>
    )
}

export default MovieList
