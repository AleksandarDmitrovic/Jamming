import { createContext, useContext, useReducer } from "react";

const PlaylistContext = createContext(null);

const PlaylistDispatchContext = createContext(null);

export function PlaylistProvider({ children }) {
  const [playlist, dispatch] = useReducer(playlistReducer, initialplaylist);

  return (
    <PlaylistContext.Provider value={playlist}>
      <PlaylistDispatchContext.Provider value={dispatch}>
        {children}
      </PlaylistDispatchContext.Provider>
    </PlaylistContext.Provider>
  );
}

export function usePlaylist() {
  return useContext(PlaylistContext);
}

export function usePlaylistDispatch() {
  return useContext(PlaylistDispatchContext);
}

function playlistReducer(playlist, action) {
  switch (action.type) {
    case "add": {
      if (playlist.includes(action.track)) return playlist;
      return [...playlist, action.track];
    }
    case "remove": {
      return playlist.filter((t) => t.id !== action.track.id);
    }
  }
}

const initialplaylist = [];
