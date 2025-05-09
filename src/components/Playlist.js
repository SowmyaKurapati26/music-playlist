import React from "react";

function Playlist({ songs }) {
  return (
    <div className="playlist">
      <h2>Playlist</h2>
      {songs.length === 0 ? (
        <p>No songs added yet.</p>
      ) : (
        <ul>
          {songs.map((song, index) => (
            <li key={index}>
              <strong>{song.name}</strong> by {song.artist} ({song.duration})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Playlist;
