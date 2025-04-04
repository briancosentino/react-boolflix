import React, { useState } from 'react'
import { GlobalProvider, useGlobal } from './GlobalProvider'

const MovieCard = () => {

    //context
    const { movie, TV } = useGlobal()

    //variable state
    const [hoverId, setHoverId] = useState(null)

    //languages
    const languages = [
        { language: "it", img: "https://flagcdn.com/w40/it.png" }, // Italiano 🇮🇹
        { language: "en", img: "https://flagcdn.com/w40/gb.png" }, // Inglese 🇬🇧
        { language: "fr", img: "https://flagcdn.com/w40/fr.png" }, // Francese 🇫🇷
        { language: "de", img: "https://flagcdn.com/w40/de.png" }  // Tedesco 🇩🇪
    ];

    //functions
    const handleEnter = (id) => {
        setHoverId(id)

    }
    const handleLeave = () => {
        setHoverId(null)

    }

    const findCountry = (lang) => {
        const thisCountry = languages.find(language => lang === language.language)

        return thisCountry


    }
    console.log(findCountry('en'));

    function generateStars(element) {
        const numberOfStars = []

        for (let i = 0; i < Math.ceil(element.vote_average / 2); i++) {
            numberOfStars.push(i)

        }
        return numberOfStars
    }
    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    };




    return (
        <>
            {
                [movie, TV].map(category => category.results?.map(element => (
                    <div onMouseEnter={() => handleEnter(element.id)} onMouseLeave={handleLeave} className='w-[25%] h-80 p-2' key={element.id}>
                        <div className="w-full h-full rounded-md overflow-hidden text-[.9rem]">

                            {hoverId !== element.id ? <img className='w-full h-full object-cover object-center ' src={`https://image.tmdb.org/t/p/w185/${element.backdrop_path}`} alt="" /> :
                                <div className='w-full h-full mt-4 text-stone-400 flex flex-col gap-2'>

                                    <p><span className='font-semibold'>Titolo: </span>{element.title ? element.title : element.name}</p>
                                    <p><span className='font-semibold'>Titolo Originale: </span>{element.original_title ? element.original_title : element.original_name}</p>
                                    <p className='flex items-center gap-1.5'><span className='font-semibold'>Lingua Originale: </span>{findCountry(element.original_language) ? <img className='h-4' src={findCountry(element.original_language)?.img} alt={element.title} /> : element.original_language}</p>
                                    <div className="flex items-center gap-1.5">
                                        <div className='font-semibold'>Voto:</div>
                                        <div className='relative flex gap-1'>
                                            <i className='fa-regular fa-star'></i>
                                            <i className='fa-regular fa-star'></i>
                                            <i className='fa-regular fa-star'></i>
                                            <i className='fa-regular fa-star'></i>
                                            <i className='fa-regular fa-star'></i>
                                            <div className='absolute top-0 left-0 w-full  flex gap-1 '>{generateStars(element).map((star, idx) => (<i key={`${element.id}-${idx}`} className=' fa-solid  fa-star  text-amber-300'></i>))} </div>
                                        </div>
                                    </div>
                                    <p><span className='font-semibold'>Overview: </span>{element.overview.length < 210 ? element.overview : truncateText(element.overview, 211)}</p>
                                </div>
                            }
                        </div>

                    </div>
                )))

            }
        </>
    )
}

export default MovieCard
