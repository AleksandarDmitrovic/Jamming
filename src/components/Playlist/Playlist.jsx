import React from "react";
import styles from "./Playlist.module.css";
import TrackList from "../TrackList/TrackList";
import { usePlaylist } from "../../Context/PlaylistContext";
import { TextField } from "@mui/material";
import { useState } from "react";
import { getSpotifyUserInfo } from "../../Helpers/helpers";

function Playlist({ accessTokenData }) {
  const [playlistName, setPlaylistName] = useState("");
  const playlist = usePlaylist();

  const handlePlaylistNameChange = (event) => {
    setPlaylistName(event.target.value);
  };

  const handleSavePlaylist = async () => {
    if (!playlistName || !playlist.length) return;
    console.log("accessTokenData :", accessTokenData);
    const spotifyUserInfo = await getSpotifyUserInfo(
      accessTokenData.access_token
    );
    console.log("spotifyUserInfo :", spotifyUserInfo);
    // const response = await createPlaylist(
    //   accessTokenData.access_token,
    //   playlistName,
    //   playlist
    // );
    // console.log("response :", response);
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
