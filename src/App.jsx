import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { GlobalProvider } from './components/GlobalProvider'
import SearchBar from './components/SearchBar'
import MovieCard from './components/MovieCard'
import Header from './components/Header'
import FlexWrapper from './components/FlexWrapper'
import PopularList from './components/PopularList'

function App() {

  return (
    <>
      <GlobalProvider>
        <Header />
        <FlexWrapper>

          <MovieCard />
        </FlexWrapper>
        <PopularList />

      </GlobalProvider>
    </>
  )
}

export default App
