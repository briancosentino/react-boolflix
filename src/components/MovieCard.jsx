import React, { useState } from 'react'

const MovieCard = ({ id, path, original_language, original_name, name, title, original_title, overview, vote, carousel }) => {




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

    function generateStars(vote) {
        const numberOfStars = []

        for (let i = 0; i < Math.ceil(vote / 2); i++) {
            numberOfStars.push(i)

        }
        return numberOfStars
    }
    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    };




    return (
        <>


            <div onMouseEnter={() => handleEnter(id)} onMouseLeave={handleLeave} className={`cursor-pointer ${carousel ? 'w-full' : 'w-[50%] md:w-[33%] lg:w-[25%] xl:w-[20%]'}  h-80 p-2`}>
                <div className="w-full h-full rounded-md overflow-hidden text-[.9rem]">

                    {hoverId !== id ? <img className='w-full h-full object-cover object-center ' src={`https://image.tmdb.org/t/p/w1920/${path}`} alt={title} /> :
                        <div className='w-full h-full mt-4 text-stone-400 flex flex-col gap-2'>

                            <p><span className='font-semibold'>Titolo: </span>{title ? title : name}</p>
                            <p><span className='font-semibold'>Titolo Originale: </span>{original_title ? original_title : original_name}</p>
                            <p className='flex items-center gap-1.5'><span className='font-semibold'>Lingua Originale: </span>{findCountry(original_language) ? <img className='h-4' src={findCountry(original_language)?.img} alt={title} /> : original_language}</p>
                            <div className="flex items-center gap-1.5">
                                <div className='font-semibold'>Voto:</div>
                                <div className='relative flex gap-1'>
                                    <i className='fa-regular fa-star'></i>
                                    <i className='fa-regular fa-star'></i>
                                    <i className='fa-regular fa-star'></i>
                                    <i className='fa-regular fa-star'></i>
                                    <i className='fa-regular fa-star'></i>
                                    <div className='absolute top-0 left-0 w-full  flex gap-1 '>{generateStars(vote).map((star, idx) => (<i key={`${id}-${idx}`} className=' fa-solid  fa-star  text-amber-300'></i>))} </div>
                                </div>
                            </div>
                            <p><span className='font-semibold'>Overview: </span>{overview.length < 210 ? overview : truncateText(overview, 211)}</p>
                        </div>
                    }
                </div>

            </div>



        </>
    )
}

export default MovieCard
