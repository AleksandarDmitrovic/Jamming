import React from "react";
import styles from "./Playlist.module.css";
import TrackList from "../TrackList/TrackList";
import { usePlaylist } from "../../Context/PlaylistContext";
import { TextField } from "@mui/material";
import { useState } from "react";

function Playlist() {
  const [playlistName, setPlaylistName] = useState("");
  const playlist = usePlaylist();

  const handlePlaylistNameChange = (event) => {
    setPlaylistName(event.target.value);
  };

  return (
    <div className={styles.playlist}>
      <h2>Create Playlist</h2>
      <TextField
        label="Playlist Name"
        variant="standard"
        className={styles.playlistInput}
        value={playlistName}
        onChange={handlePlaylistNameChange}
      />
      <TrackList tracks={playlist} isRemoval={true} />
      <button className={styles.saveButton}>SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
