import React, { useState } from 'react'
import { GlobalProvider, useGlobal } from './GlobalProvider'
import MovieCard from './MovieCard'


const PopularList = () => {
    const { populars, setPopulars } = useGlobal()
    console.log(populars);

    return (
        <>
            <h2 className=' mt-12 ml-4 mb-4 text-2xl text-white'>I Film più popolari</h2>
            <div className='flex px-2 gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory '>
                {populars.results?.map(element => (
                    <div key={element.id} className=' flex-none w-[270px]  last:mr-0'>

                        <MovieCard

                            id={element.id}
                            path={element.backdrop_path}
                            original_language={element.original_language}
                            original_name={element.original_name || ''}
                            name={element.name || ''}
                            title={element.title || ''}
                            original_title={element.original_title || ''}
                            overview={element.overview}
                            vote={element.vote_average}
                            carousel={true}
                        />
                    </div>
                ))}

            </div>
        </>
    )
}

export default PopularList
