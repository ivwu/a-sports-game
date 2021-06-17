import React from "react";
import "./Scoreboard.css";

// scoreboard can be a stateless component bc it does not need to change any parts of it dynamically

function Scoreboard(props) {
  const { visitors, home } = props;
  return (
    <div className="row scoreboard-container">
      <h1 className="scoreboard column">Home: {home}</h1>
      <h1 className="scoreboard">Score Board</h1>
      <h1 className="scoreboard column">Visitors: {visitors}</h1>
    </div>
  );
}

export default Scoreboard;
