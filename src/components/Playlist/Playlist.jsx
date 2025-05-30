import React from "react";
import styles from "./Playlist.module.css";
import TrackList from "../TrackList/TrackList";
import { usePlaylist } from "../../Context/PlaylistContext";
import { TextField } from "@mui/material";
import { useState } from "react";
import {
  addTracksToPlaylist,
  createPlaylist,
  getSpotifyUserInfo,
} from "../../Helpers/Helpers";

function Playlist({ accessTokenData }) {
  const [playlistName, setPlaylistName] = useState("");
  const playlist = usePlaylist();

  const handlePlaylistNameChange = (event) => {
    setPlaylistName(event.target.value);
  };

  const handleSavePlaylist = async () => {
    if (!playlistName || !playlist.length) return;

    const spotifyUserInfo = await getSpotifyUserInfo(
      accessTokenData.access_token
    );

    const playlistData = await createPlaylist(
      accessTokenData.access_token,
      playlistName,
      spotifyUserInfo.id
    );

    await addTracksToPlaylist(
      accessTokenData.access_token,
      playlistData.id,
      playlist.map((track) => track.uri)
    );
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
      <button className={styles.saveButton} onClick={handleSavePlaylist}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;
