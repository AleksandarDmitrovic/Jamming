import React from "react";
import styles from "./SearchBar.module.css";
import { searchSpotify } from "../../Helpers/helpers";

function SearchBar({
  onChange,
  searchQuery,
  accessTokenData,
  setSearchResults,
  checkAccessToken,
}) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  const handleSearch = async () => {
    let token;
    if (!accessTokenData) {
      token = await checkAccessToken();
    }
    console.log("token :", token);
    const response = await searchSpotify(
      token ?? accessTokenData?.access_token,
      searchQuery
    );
    console.log("response :", response);
    setSearchResults(response.tracks.items);
  };

  return (
    <div className={styles.searchBar}>
      <input
        value={searchQuery}
        placeholder="Enter A Song Title"
        onChange={handleChange}
      />
      <button className={styles.searchButton} onClick={handleSearch}>
        SEARCH
      </button>
    </div>
  );
}

export default SearchBar;
