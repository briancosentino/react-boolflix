import React from 'react'
import { GlobalProvider, useGlobal } from './GlobalProvider'

const MovieCard = () => {
    const { movie, TV } = useGlobal()
    console.log(movie);
    console.log(TV);

    const languages = [
        { language: "it", img: "https://flagcdn.com/w40/it.png" }, // Italiano 🇮🇹
        { language: "en", img: "https://flagcdn.com/w40/gb.png" }, // Inglese 🇬🇧
        { language: "fr", img: "https://flagcdn.com/w40/fr.png" }, // Francese 🇫🇷
        { language: "de", img: "https://flagcdn.com/w40/de.png" }  // Tedesco 🇩🇪
    ];

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


    return (
        <div>
            {
                [movie, TV].map(category => category.results?.map(element => (
                    <ul key={element.id}>
                        <img src={`https://image.tmdb.org/t/p/w185/${element.backdrop_path}`} alt="" />
                        <li>{element.title ? element.title : element.name}</li>
                        <li>{element.original_title ? element.original_title : element.original_name}</li>
                        <li>{findCountry(element.original_language) ? <img src={findCountry(element.original_language)?.img} alt={element.title} /> : element.original_language}</li>
                        <li className='relative flex gap-1.5'>
                            <i className='fa-regular fa-star'></i>
                            <i className='fa-regular fa-star'></i>
                            <i className='fa-regular fa-star'></i>
                            <i className='fa-regular fa-star'></i>
                            <i className='fa-regular fa-star'></i>
                            <div className='absolute top-0 left-0 w-full flex gap-1.5 '>{generateStars(element).map((star, idx) => (<i key={`${element.id}-${idx}`} className=' fa-solid  fa-star  text-amber-300'></i>))} </div>
                        </li>
                        {/* {Math.ceil(element.vote_average / 2)} */}
                    </ul>
                )))

            }
        </div>
    )
}

export default MovieCard
