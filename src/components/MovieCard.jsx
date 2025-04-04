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

    return (
        <div>
            {
                [movie, TV].map(category => category.results?.map(element => (
                    <ul key={element.id}>
                        <li>{element.title ? element.title : element.name}</li>
                        <li>{element.original_title ? element.original_title : element.original_name}</li>
                        <li>{findCountry(element.original_language) ? <img src={findCountry(element.original_language)?.img} alt={element.title} /> : element.original_language}</li>
                        <li>{element.vote_average}</li>
                    </ul>
                )))

            }
        </div>
    )
}

export default MovieCard
