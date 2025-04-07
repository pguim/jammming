import React from "react";
import styles from './TracklistCard.module.css'

function ResultCard (props) {

  return (
    <article className={styles.card}>
      <h2 className={styles.title}>{props.item.name}</h2>
      <h3 className={styles.artist}>{props.item.artist}</h3>
      <h3 className={styles.album}>{props.item.album}</h3>
    </article>
  )
}

export default ResultCard