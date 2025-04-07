import { createContext, useContext, useEffect, useState } from "react";
const GlobalContext = createContext();
// Definiamo un custom Provider
function GlobalProvider({ children }) {
    // Aggiungiamo le varibili di
    // stato che vogliamo condividere

    const [query, setQuery] = useState('')
    const urlMovie = `https://api.themoviedb.org/3/search/movie?api_key=bab981cd0dbb4aff853b810411daadd1&query=${query}`
    const urlTV = `https://api.themoviedb.org/3/search/tv?api_key=bab981cd0dbb4aff853b810411daadd1&language=it_IT&query=${query}`
    const urlPopulars = `https://api.themoviedb.org/3/movie/popular?api_key=bab981cd0dbb4aff853b810411daadd1&language=it-IT&page=1`

    const [movie, setMovie] = useState('')
    const [TV, setTV] = useState('mat')
    const [populars, setPopulars] = useState('')

    function fetchMovie() {
        fetch(urlMovie)
            .then(res => res.json())
            .then(data => { setMovie(data) })
            .catch(err => console.error(err))

    }
    function fetchTv() {
        fetch(urlTV)
            .then(res => res.json())
            .then(data => {
                setTV(data)


            })
            .catch(err => console.error(err))

    }
    function fetchPopulars() {
        fetch(urlPopulars)
            .then(res => res.json())
            .then(data => {
                console.log(data)

                setPopulars(data)


            })
            .catch(err => console.error(err))

    }



    useEffect(() => {
        fetchMovie()
        fetchTv()
        fetchPopulars()
    }, [query])

    return (
        <GlobalContext.Provider
            value={{
                movie,
                TV,
                query,
                setQuery,
                populars,
                setPopulars,

            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

// Definiamo un hook per consumare il contesto
function useGlobal() {
    const context = useContext(GlobalContext);
    return context;
}
// Esportiamo il nostro provider ed il nostro hook
export { GlobalProvider, useGlobal }