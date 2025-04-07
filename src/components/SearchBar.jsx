import React, { useState } from 'react'
import { useGlobal } from './GlobalProvider'

const SearchBar = () => {
    const { query, setQuery, setTrending, setPopulars, setTopRated } = useGlobal()
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
    const [isActive, setIsActive] = useState(false)
    const handleActive = () => setIsActive(true)

    return (
        <div className='flex items-center'>
            {isActive ? <form onSubmit={handleSubmit} >

                <input className=' py-0.5 pl-3 pr-9 rounded-lg bg-stone-600 placeholder:text-stone-400 focus:outline-none focus:bg-stone-600 focus:text-stone-400 placeholder:text-[.9rem] ' value={searched} onChange={handleChange} type="search" name="searchBar" id="searchBar" placeholder='Cerca serie, film...' />
            </form> :
                <div className='cursor-pointer text-stone-400' onClick={handleActive}><i className='fa-solid fa-magnifying-glass'></i></div>
            }
        </div>
    )
}

export default SearchBar
