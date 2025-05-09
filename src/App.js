import React, { useState } from "react";
import SongForm from "./components/SongForm";
import Playlist from "./components/Playlist";
import "./App.css";

function App() {
  const [songs, setSongs] = useState([]);

  const addSong = (song) => {
    setSongs([...songs, song]);
  };

  return (
    <div className="app">
      <h1>🎵 Music Playlist App</h1>
      <SongForm addSong={addSong} />
      <Playlist songs={songs} />
    </div>
  );
}

export default App;
