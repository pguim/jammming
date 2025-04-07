import React from "react";
import styles from './ResultCard.module.css'

function ResultCard (props) {

  return (
    <article className={styles.card}>
      <button className={styles.addButton}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
      </button>
      <h2 className={styles.title}>{props.item.name}</h2>
      <h3 className={styles.artist}>{props.item.artist}</h3>
      <h3 className={styles.album}>{props.item.album}</h3>
    </article>
  )
}

export default ResultCard