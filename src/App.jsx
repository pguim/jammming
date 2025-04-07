import React, { useEffect, useState } from 'react'
import Search from './components/search/Search'
import Spotify from './utils/Spotify'
import Results from './components/results/Results'

export default function App () {

  const [search, setSearch] = useState('')
  const [searchCriteria, setSearchCriteria] = useState('')
  const [results, setResults] = useState([])

  const getResults = async () => {
    const res = await Spotify.searchItems(searchCriteria)
    return res
  }

  // Only to get token on first load
  useEffect(() => {
    Spotify.getAccessToken()
  }, [])

  useEffect(() => {
    getResults().then(res => {
      setResults(res)
    })
  }, [searchCriteria])

  return (
    <>
      <header>
        <h1 className="main-title">Jammming - Spotify List Creating</h1>
        <Search onChange={setSearch} value={search} submit={setSearchCriteria} />
      </header>
      <main>
        <Results items={results} />
      </main>
    </>
  )

}