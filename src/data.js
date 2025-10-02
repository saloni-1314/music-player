import { v4 as uuidv4 } from "uuid";

function getSongs() {
  return [
    {
      id: uuidv4(),
      title: "Song One",
      artist: "Artist A",
      audio: "/songs/song1.mp3",
      cover: "/images/cover1.jpg"
    },
    {
      id: uuidv4(),
      title: "Song Two",
      artist: "Artist B",
      audio: "/songs/song2.mp3",
      cover: "/images/cover2.jpg"
    },
    {
      id: uuidv4(),
      title: "Song Three",
      artist: "Artist C",
      audio: "/songs/song3.mp3",
      cover: "/images/cover3.jpg"
    }
  ];
}

export default getSongs;
