import { useState } from "react";
import Song from "./components/Song";
import Player from "./components/Player";
import getSongs from "./data";
import "./App.css";

function App() {
  const [songs] = useState(getSongs());
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        songs={songs}
        setCurrentSong={setCurrentSong}
      />
    </div>
  );
}

export default App;
