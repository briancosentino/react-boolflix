import React from 'react'
import SearchBar from './SearchBar'

const Header = () => {
    return (
        <div className='w-full flex sticky top-0 left-0 bg-linear-to-b from-stone-900 via-stone-900 via-80% to-transparent to-90% justify-between p-6'>
            <div className='text-red-600 text-2xl sm:text-4xl font-semibold'>BOOLFLIX</div>
            <SearchBar />

        </div>
    )
}

export default Header
