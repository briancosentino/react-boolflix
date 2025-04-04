import { createContext, useContext, useEffect, useState } from "react";
const GlobalContext = createContext();
// Definiamo un custom Provider
function GlobalProvider({ children }) {
    // Aggiungiamo le varibili di
    // stato che vogliamo condividere
    const [query, setQuery] = useState('mat')
    const url = `https://api.themoviedb.org/3/search/movie?api_key=bab981cd0dbb4aff853b810411daadd1&query=${query}`
    const [movie, setMovie] = useState('')

    function fetchMovie() {
        fetch(url)
            .then(res => res.json())
            .then(data => { setMovie(data) })
            .catch(err => console.error(err))
    }
    console.log(movie);

    useEffect(() => {
        fetchMovie()
    }, [query])

    return (
        <GlobalContext.Provider
            value={{
                movie,
                query,
                setQuery,
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