import React from "react";
import styles from "./Playlist.module.css";
import TrackList from "../TrackList/TrackList";
import { usePlaylist } from "../../Context/PlaylistContext";

function Playlist() {
  const playlist = usePlaylist();
  return (
    <div className={styles.playlist}>
      <h2>Create Playlist</h2>
      <TrackList tracks={playlist} isRemoval={true} />
      <button className={styles.saveButton}>SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
