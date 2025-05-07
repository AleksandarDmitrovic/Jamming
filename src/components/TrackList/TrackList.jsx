import React from "react";
import styles from "./TrackList.module.css";
import Track from "./Track/Track";

function TrackList({ tracks, isRemoval }) {
  return (
    <div className={styles.trackList}>
      {tracks.map((track) => (
        <Track key={track.id} track={track} isRemoval={isRemoval} />
      ))}
    </div>
  );
}

export default TrackList;
