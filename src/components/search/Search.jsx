import React from "react";
import styles from './Search.module.css'

const Search = (props) => {

  const handleChange = (e) => {
    props.onChange(e.target.value)
  }

  const handleClear = () => {
    props.onChange('')
  }

  return (
    <>
      <input name="search" className={styles.search} type="text" placeholder="Search wathever..." value={props.value} onChange={handleChange} />
      <button name="clear-search" className={styles.clearSearch} onClick={handleClear}>❌</button>
    </>
  )
}

export default Search