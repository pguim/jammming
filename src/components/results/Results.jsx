import React from "react";
import ResultCard from './ResultCard'

import styles from './Results.module.css'

function Results (props) {
  if (props.items) {
    return (
      <section className={styles.main}>
        {props.items.map(item => {
          return <ResultCard key={item.id} item={item} />
        })}
      </section>
    )
  }

  return (
    <section className={`${styles.main} ${styles.empty}`}>
      <p>Nothing to show...</p>
    </section>
  )

}

export default Results;