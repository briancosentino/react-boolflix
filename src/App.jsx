import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { GlobalProvider } from './components/GlobalProvider'
import SearchBar from './components/SearchBar'
import MovieCard from './components/MovieCard'
import Header from './components/Header'
import FlexWrapper from './components/FlexWrapper'

function App() {

  return (
    <>
      <GlobalProvider>
        <Header />
        <FlexWrapper>

          <MovieCard />
        </FlexWrapper>

      </GlobalProvider>
    </>
  )
}

export default App
