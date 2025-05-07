import React from "react";
import styles from "./Track.module.css";
import { IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

function Track({ track, isRemoval }) {
  return (
    <div className={styles.track}>
      <div>
        <div className={styles.trackName}>{track.name}</div>
        <div className={styles.trackInfo}>
          {track.artist} | {track.album}
        </div>
      </div>
      <IconButton>
        {isRemoval ? (
          <RemoveCircleIcon className={styles.actionButton} />
        ) : (
          <AddCircleIcon className={styles.actionButton} />
        )}
      </IconButton>
    </div>
  );
}

export default Track;
