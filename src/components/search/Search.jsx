import React from "react";
import styles from './Search.module.css'

const Search = (props) => {

  const handleChange = (e) => {
    props.onChange(e.target.value)
  }

  const handleClear = () => {
    props.onChange('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.submit(props.value)
    props.onChange('')
  }

  return (
    <form id="form" onSubmit={handleSubmit} className={styles.form}>
      <input name="search" className={styles.search} type="text" placeholder="Search wathever..." value={props.value} onChange={handleChange} />
      <button name="search-button" className={styles.searchButton} onClick={handleSubmit}><span className="material-symbols-outlined">search</span><p>Search</p></button>
      <input type="submit" hidden />
    </form>
  )
}

export default Search