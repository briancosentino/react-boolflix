import React, { useState } from 'react'
import { useGlobal } from './GlobalProvider'

const SearchBar = () => {
    const { movie, query, setQuery } = useGlobal()
    console.log(query);


    const [searchedMovie, setSearchedMovie] = useState('')

    const handleChange = (e) => {
        setSearchedMovie(e.target.value)

    }
    console.log(searchedMovie);

    const handleSubmit = (e) => {
        e.preventDefault()
        setQuery(searchedMovie)


    }

    return (
        <div>
            <form onSubmit={handleSubmit} >

                <input value={searchedMovie} onChange={handleChange} type="search" name="searchBar" id="searchBar" placeholder='Search...' />
                <button type="submit">Cerca</button>
            </form>

        </div>
    )
}

export default SearchBar
