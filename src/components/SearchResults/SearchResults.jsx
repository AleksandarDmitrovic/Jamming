import React from "react";
import styles from "./SearchResults.module.css";
import TrackList from "../TrackList/TrackList";

function SearchResults({ tracks }) {
  return (
    <div className={styles.searchResults}>
      <h2>Results</h2>
      <TrackList tracks={tracks} isRemoval={false} />
    </div>
  );
}

export default SearchResults;
