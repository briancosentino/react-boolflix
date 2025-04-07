import React from 'react'
import MovieCard from './MovieCard'
import { GlobalProvider, useGlobal } from './GlobalProvider'


const MovieList = () => {
    const { movie, TV } = useGlobal()

    return (
        <div className='flex px-2 flex-wrap'>
            {[movie, TV].map(category =>
                category.results?.map(element => (
                    <MovieCard
                        key={`${category === movie ? 'movie' : 'tv'}-${element.id}`}
                        id={element.id}
                        path={element.backdrop_path}
                        original_language={element.original_language}
                        original_name={element.original_name || ''}
                        name={element.name || ''}
                        title={element.title || ''}
                        original_title={element.original_title || ''}
                        overview={element.overview}
                        vote={element.vote_average}
                    />
                ))
            )}
        </div>
    )
}

export default MovieList
