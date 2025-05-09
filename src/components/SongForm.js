import React, { useState } from "react";

function SongForm({ addSong }) {
  const [song, setSong] = useState({ name: "", artist: "", duration: "" });
  const handleChange = (e) => {
    setSong({ ...song, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (song.name && song.artist && song.duration) {
      addSong(song);
      setSong({ name: "", artist: "", duration: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="song-form">
      <input name="name" value={song.name} onChange={handleChange} placeholder="Song Name" required />
      <input name="artist" value={song.artist} onChange={handleChange} placeholder="Artist" required />
      <input name="duration" value={song.duration} onChange={handleChange} placeholder="Duration" required />
      <button type="submit">Add Song</button>
    </form>
  );
}

export default SongForm;
