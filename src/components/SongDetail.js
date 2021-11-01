// funkcijska komponenta
import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) return <div className="select-song">Please select a song</div>;
  return (
    <div className="selected-song">
      <h3>Song details:</h3>
      <p>Title: {song.title}</p>
      <p>Length: {song.duration}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);

// popraviti sutra CSS
