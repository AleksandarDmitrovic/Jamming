import React, { useState } from "react";
import styles from "./App.module.css";
import SearchResults from "./components/SearchResults/SearchResults";
import Playlist from "./components/Playlist/Playlist";
import SearchBar from "./components/SearchBar/Searchbar";
import { PlaylistProvider } from "./Context/PlaylistContext";
import { StyledEngineProvider } from "@mui/material";

// Mock data
const mockSearchResults = [
  { id: 1, name: "Song A", artist: "Artist A", album: "Album A" },
  { id: 2, name: "Song B", artist: "Artist B", album: "Album B" },
  { id: 3, name: "Song C", artist: "Artist C", album: "Album C" },
];

function App() {
  const [searchResults, setSearchResults] = useState(mockSearchResults);

  return (
    <StyledEngineProvider injectFirst>
      <PlaylistProvider>
        <div className={styles.app}>
          <h1>
            Ja<span className={styles.jamm}>mmm</span>ing
          </h1>
          <SearchBar />
          <div className={styles.main}>
            <SearchResults tracks={searchResults} />
            <Playlist />
          </div>
        </div>
      </PlaylistProvider>
    </StyledEngineProvider>
  );
}

export default App;
