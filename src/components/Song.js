function Song({ currentSong, isPlaying }) {
  return (
    <div className="song-container">
      <div className={`album-cover ${isPlaying ? "playing" : ""}`}>
        <img src={currentSong.cover} alt={currentSong.title} />
      </div>
      <h2>{currentSong.title}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
}

export default Song;
