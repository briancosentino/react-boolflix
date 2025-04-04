import React from 'react'
import { GlobalProvider, useGlobal } from './GlobalProvider'

const MovieCard = () => {
    const { movie } = useGlobal()
    console.log(movie);

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

    return (
        <div>
            {
                movie.results?.map(movie => (
                    <ul key={movie.id}>
                        <li>{movie.title}</li>
                        <li>{movie.original_title}</li>
                        <li>{findCountry(movie.original_language) ? <img src={findCountry(movie.original_language)?.img} alt={movie.title} /> : movie.original_language}</li>
                        <li>{movie.vote_average}</li>
                    </ul>
                ))
            }
        </div>
    )
}

export default MovieCard
