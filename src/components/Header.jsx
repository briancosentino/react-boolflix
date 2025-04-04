import React from 'react'
import SearchBar from './SearchBar'

const Header = () => {
    return (
        <div className='w-full flex justify-between p-6'>
            <div className='text-red-600 text-2xl sm:text-4xl font-semibold'>BOOLFLIX</div>
            <SearchBar />

        </div>
    )
}

export default Header
