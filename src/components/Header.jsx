import React from 'react'
import SearchBar from './SearchBar'
import { useGlobal } from './GlobalProvider'
import { useState } from 'react'

const Header = () => {
    const { genres } = useGlobal()
    console.log(genres);
    const [isGenreOpen, setIsGenreOpen] = useState(false)
    const handleOpen = () => {
        setIsGenreOpen(!isGenreOpen)
    }

    return (
        <div className='w-full flex sticky top-0 left-0 bg-linear-to-b from-stone-900 via-stone-900 via-80% to-transparent to-90% justify-between p-6'>
            <div className="flex gap-10 items-center">
                <div className='text-red-600 text-2xl sm:text-4xl font-semibold'>BOOLFLIX</div>
                <div onClick={handleOpen} className='text-lg cursor-pointer text-stone-500 relative'>Generi
                    <span className='text-xs ml-1.5'><i className='fa-solid fa-chevron-down'></i></span>
                    {isGenreOpen && <div className='w-[200px] overflow-hidden absolute top-[100%] mt-2 rounded-xl left-0 bg-stone-600 flex flex-col'>
                        {genres.genres?.map(genre => (<div key={genre.id} className='text-center text-[1rem] text-stone-400 p-2 border-b border-b-stone-500'>{genre.name}</div>))}

                    </div>}
                </div>

            </div>
            <SearchBar />

        </div>
    )
}

export default Header
