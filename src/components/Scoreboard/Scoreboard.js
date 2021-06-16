import React from "react";
import "./Scoreboard.css";

function Scoreboard(props) {
  const { visitors, home } = props;
  return (
    <div className="row">
      <h1 className="scoreboard column">Visitors: {visitors}</h1>
      <h1 className="scoreboard">ScoreBoard</h1>
      <h1 className="scoreboard column">Home: {home}</h1>
    </div>
  );
}

export default Scoreboard;
