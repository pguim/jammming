import React from "react";
import ResultCard from './ResultCard'

import styles from './Results.module.css'

function Results (props) {
  if (props.items) {
    if (props.items.length) {
      return (
        <section className={styles.resultsContainer}>
          <h1 className={styles.resultsTitle}>Resultados for: </h1>
          <p className={styles.resultsTitleText}>"{props.searchCriteria}"</p>
          <section className={styles.itemsList}>
            {props.items.map(item => {
              return <ResultCard key={item.id} item={item} onClick={props.onClick} />
            })}
          </section>
        </section>
      )
    }
  }

  if (props.searchCriteria) {
    return (
      <section className={`${styles.itemsList} ${styles.empty}`}>
        <p>No results for:</p>
        <p>{props.searchCriteria}</p>
      </section>
    )
  }

  return (
    <section className={`${styles.itemsList} ${styles.empty}`}>
      <p>Nothing to show...</p>
    </section>
  )

}

export default Results;