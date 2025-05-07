import React from "react";
import styles from "./App.module.css";
import SearchResults from "./components/SearchResults/SearchResults";
import Playlist from "./components/Playlist/Playlist";
import SearchBar from "./components/SearchBar/Searchbar";

// Mock data
const mockSearchResults = [
  { id: 1, name: "Song A", artist: "Artist A", album: "Album A" },
  { id: 2, name: "Song B", artist: "Artist B", album: "Album B" },
  { id: 3, name: "Song C", artist: "Artist C", album: "Album C" },
];
const mockPlaylist = [
  { id: 4, name: "Song D", artist: "Artist D", album: "Album D" },
];

function App() {
  return (
    <div className={styles.app}>
      <h1>
        Ja<span className={styles.jamm}>mmm</span>ing
      </h1>
      <SearchBar />
      <div className={styles.main}>
        <SearchResults tracks={mockSearchResults} />
        <Playlist tracks={mockPlaylist} />
      </div>
    </div>
  );
}

export default App;
