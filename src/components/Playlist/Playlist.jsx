import React from "react";
import styles from "./Playlist.module.css";
import TrackList from "../TrackList/TrackList";

function Playlist({ tracks }) {
  return (
    <div className={styles.playlist}>
      <h2>Playlist</h2>
      <TrackList tracks={tracks} isRemoval={true} />
      <button className={styles.saveButton}>SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
