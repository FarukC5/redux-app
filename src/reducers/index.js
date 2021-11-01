import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Yesterday", duration: "2:05" },
    { title: "Hey Jude", duration: "8:09" },
    { title: "Hard Day's Night", duration: "2:38" },
    { title: "Lucy in the Sky with Diamonds", duration: "3:28" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") return action.payload; // action.payload - izabrana spjesma
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
