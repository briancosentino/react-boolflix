import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { GlobalProvider, useGlobal } from './components/GlobalProvider'
import SearchBar from './components/SearchBar'
import MovieCard from './components/MovieCard'
import Header from './components/Header'
import FlexWrapper from './components/FlexWrapper'
import PopularList from './components/PopularList'
import MovieList from './components/MovieList'
import TrendingList from './components/TrendingList'
import TopRatedList from './components/TopRatedList'

function App() {
  const { query } = useGlobal()

  return (
    <>

      <Header />


      <MovieList />


      {query && query.length < 0 ? <PopularList /> : ''}
      {query && query.length < 0 ? <TrendingList /> : ''}
      {query && query.length < 0 ? <TopRatedList /> : ''}


    </>
  )
}

export default App
