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
    let firstTokenData;
    if (!accessTokenData || accessTokenData.expireTime < Date.now()) {
      firstTokenData = await checkAccessToken();
    }

    const response = await searchSpotify(
      firstTokenData?.access_token ?? accessTokenData?.access_token,
      searchQuery
    );

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
