import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import SearchResults from "./components/SearchResults/SearchResults";
import Playlist from "./components/Playlist/Playlist";
import SearchBar from "./components/SearchBar/Searchbar";
import { PlaylistProvider } from "./Context/PlaylistContext";
import { StyledEngineProvider } from "@mui/material";
import {
  base64encode,
  generateRandomString,
  getSpotifyAccessToken,
  sha256,
} from "./Helpers/helpers";

// Mock data
const mockSearchResults = [
  { id: 1, name: "Song A", artist: "Artist A", album: "Album A" },
  { id: 2, name: "Song B", artist: "Artist B", album: "Album B" },
  { id: 3, name: "Song C", artist: "Artist C", album: "Album C" },
];

function App() {
  const [searchResults, setSearchResults] = useState(mockSearchResults);
  const [accessTokenData, setAccessTokenData] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    if (!code) {
      const requestUserAuthorization = async () => {
        const verifier = generateRandomString(64);
        window.localStorage.setItem("code_verifier", verifier);
        const hashed = await sha256(verifier);
        const challenge = base64encode(hashed);
        window.localStorage.setItem("code_challenge", challenge);

        const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
        const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;

        const scope = "user-read-private user-read-email";
        const authUrl = new URL("https://accounts.spotify.com/authorize");

        const params = {
          response_type: "code",
          client_id: clientId,
          scope,
          code_challenge_method: "S256",
          code_challenge: challenge,
          redirect_uri: redirectUri,
        };
        authUrl.search = new URLSearchParams(params).toString();
        window.location.href = authUrl.toString();
      };
      requestUserAuthorization();
    } else if (!accessTokenData) {
      const codeVerifier = window.localStorage.getItem("code_verifier");
      const getAccessToken = async () => {
        const response = await getSpotifyAccessToken(code, codeVerifier);
        console.log("response :", response);
        if (response.access_token) {
          setAccessTokenData(response);
          window.history.replaceState({}, document.title, "/");
        }
      };
      getAccessToken();
      console.log(accessTokenData);
    }
  }, []);

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
