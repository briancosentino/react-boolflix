import React, { useState } from 'react'
import { useGlobal } from './GlobalProvider'

const SearchBar = () => {
    const { query, setQuery } = useGlobal()
    console.log(query);


    const [searched, setSearched] = useState('')

    const handleChange = (e) => {
        setSearched(e.target.value)

    }
    console.log(searched);

    const handleSubmit = (e) => {
        e.preventDefault()
        setQuery(searched)
        setSearched('')


    }

    return (
        <div>
            <form onSubmit={handleSubmit} >

                <input value={searched} onChange={handleChange} type="search" name="searchBar" id="searchBar" placeholder='Search...' />
                <button type="submit">Cerca</button>
            </form>

        </div>
    )
}

export default SearchBar
