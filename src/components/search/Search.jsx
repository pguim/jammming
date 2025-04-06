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
    props.onClick(props.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="search" className={styles.search} type="text" placeholder="Search wathever..." value={props.value} onChange={handleChange} />
      <button name="clear-search" className={styles.clearSearch} onClick={handleClear}><span className="material-symbols-outlined">close</span></button>
      <input type="submit" name="search-button" className={styles.searchButton} />
    </form>
  )
}

export default Search