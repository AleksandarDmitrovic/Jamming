import React from "react";
import styles from "./Track.module.css";
import { IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { usePlaylistDispatch } from "../../../Context/PlaylistContext";

function Track({ track, isRemoval }) {
  const dispatch = usePlaylistDispatch();

  return (
    <div className={styles.track}>
      <div>
        <div className={styles.trackName}>{track?.name}</div>
        <div className={styles.trackInfo}>
          {track?.artists?.[0].name} | {track?.album?.name}
        </div>
      </div>
      <IconButton>
        {isRemoval ? (
          <RemoveCircleIcon
            className={styles.actionButton}
            onClick={() => dispatch({ type: "remove", track })}
          />
        ) : (
          <AddCircleIcon
            className={styles.actionButton}
            onClick={() => dispatch({ type: "add", track })}
          />
        )}
      </IconButton>
    </div>
  );
}

export default Track;
