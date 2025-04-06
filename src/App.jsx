import React, { useEffect, useState } from 'react'
import Search from './components/search/Search'
import Spotify from './utils/Spotify'


export default function App () {

  const [search, setSearch] = useState('')

  useEffect(()=>{
    
  },[])

  return (
    <>
      <Search onChange={setSearch} value={search} />
      <p>{search}</p>
    </>
  )

}