import React from "react";
import TracklistCard from './TracklistCard'
import styles from './Tracklist.module.css'

function Tracklist (props) {
  if (!props.items) return
  if (!props.items.length) return
  return (
    <section className={styles.main}>
      {props.items.map(item => {
        return <TracklistCard key={'trk_' + item.id} item={item} />
      })}
    </section>
  )
}

export default Tracklist