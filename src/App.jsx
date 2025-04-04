import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { GlobalProvider } from './components/GlobalProvider'
import SearchBar from './components/SearchBar'
import MovieCard from './components/MovieCard'

function App() {

  return (
    <>
      <GlobalProvider>
        <SearchBar />
        <MovieCard />

      </GlobalProvider>
    </>
  )
}

export default App
