import { useState, useRef, useEffect } from "react";
import {
  FaPlay,
  FaPause,
  FaBackward,
  FaForward,
  FaHeart,
} from "react-icons/fa6";

function Player({ currentSong, songs, setCurrentSong }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({ currentTime: 0, duration: 0 });
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentSong]);

  const playSongHandler = () => {
    setIsPlaying(!isPlaying);
  };

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration });
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const skipTrackHandler = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    } else if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        setCurrentSong(songs[songs.length - 1]);
      } else {
        setCurrentSong(songs[(currentIndex - 1) % songs.length]);
      }
    }
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  return (
    <div className="player">
      {/* Removed duplicate album cover */}
      <h2>{currentSong.title}</h2>
      <h3>{currentSong.artist}</h3>

      {/* Time control */}
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          type="range"
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          onChange={dragHandler}
        />
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>

      {/* Play controls */}
      <div className="play-control">
        <FaBackward
          className="skip-back"
          size="2em"
          onClick={() => skipTrackHandler("skip-back")}
        />
        {isPlaying ? (
          <FaPause className="play" size="2em" onClick={playSongHandler} />
        ) : (
          <FaPlay className="play" size="2em" onClick={playSongHandler} />
        )}
        <FaForward
          className="skip-forward"
          size="2em"
          onClick={() => skipTrackHandler("skip-forward")}
        />
      </div>

      {/* Like button */}
      <button
        className={`like-button ${liked ? "liked" : ""}`}
        onClick={() => setLiked(!liked)}
      >
        <FaHeart />
      </button>

      <audio
        ref={audioRef}
        src={currentSong.audio}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
      ></audio>
    </div>
  );
}

export default Player;
