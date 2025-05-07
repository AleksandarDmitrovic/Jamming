import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <input placeholder="Enter A Song Title" />
      <button className={styles.searchButton}>SEARCH</button>
    </div>
  );
}

export default SearchBar;
