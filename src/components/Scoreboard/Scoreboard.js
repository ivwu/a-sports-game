import React from "react";
import "./Scoreboard.css";

// scoreboard can be a stateless component bc it does not need to change any parts of it dynamically

function Scoreboard(props) {
  const { visitors, home } = props;
  return (
    <div className="row scoreboard-container">
      <h1 className="scoreboard column">Visitors: {visitors}</h1>
      <h1 className="scoreboard">ScoreBoard</h1>
      <h1 className="scoreboard column">Home: {home}</h1>
    </div>
  );
}

export default Scoreboard;
