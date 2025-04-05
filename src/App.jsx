import React, { useState } from 'react'
import Search from './components/search/Search'


export default function App () {

  const [search, setSearch] = useState('')

  return (
    <>
      <Search onChange={setSearch} value={search} />
      <p>{search}</p>
    </>
  )
  
}