import React, { Component } from "react";
import Team from "../Team/Team";
import Scoreboard from "../Scoreboard/Scoreboard";
import "./Game.css";
import { Button } from "react-bootstrap";

class Game extends Component {
  // declare states --- lift the states from team "up" to Game and have Game component be the "soure of truth" for the scores so that reset can be calculated
  constructor(props) {
    super(props);
    this.state = {
      homeScore: 0,
      homeShots: 0,
      visitingScore: 0,
      visitingShots: 0,
      resetCounter: 0,
    };
  }

  // create method to pass props to the Team component for when the home team shoots--- need to be differenciated since they are different instances

  // onHomeShoot = () => {
  //   this.setState((currentState) => {
  //     console.log(currentState);
  //     let randomShots = Math.floor(Math.random() * (3 - 1) + 1);

  //     let randomScore = Math.floor(Math.random() * (randomShots - 1) + 1);

  //     let newShots = currentState.homeShots + randomShots;
  //     let newScore = currentState.homeScore + randomScore;
  //     return {
  //       homeShots: newShots,
  //       homeScore: newScore,
  //       // dont need to store percentage as state bc it can be calculated using the already stored states
  //       // homeShotPercentage: ((newScore / newShots) * 100).toFixed(0),
  //     };
  //   });
  // };

  // onVisitingShoot = () => {
  //   this.setState((currentState) => {
  //     console.log(currentState);
  //     let randomShots = Math.floor(Math.random() * (3 - 1) + 1);

  //     let randomScore = Math.floor(Math.random() * (randomShots - 1) + 1);

  //     let newShots = currentState.visitingShots + randomShots;
  //     let newScore = currentState.visitingScore + randomScore;
  //     return {
  //       visitingShots: newShots,
  //       visitingScore: newScore,
  //       // visitingShotPercentage: ((newScore / newShots) * 100).toFixed(0),
  //     };
  //   });
  // };

  //refactored above methods to be one function - onShoot, takes in parameters and changes states based on what is passed in

  onShoot = (shots, score) => {
    this.setState((currentState) => {
      console.log(currentState);
      let randomShots = Math.floor(Math.random() * (3 - 1) + 1);

      let randomScore = Math.floor(Math.random() * (randomShots - 1) + 1);

      let newShots = currentState[shots] + randomShots;
      let newScore = currentState[score] + randomScore;
      return {
        [shots]: newShots,
        [score]: newScore,
      };
    });
  };

  // method for when reset is clicked, changes score states to be 0 and increments resetCounter by 1
  handleReset = () => {
    this.setState((currentState) => {
      return {
        resetCounter: currentState.resetCounter + 1,
        homeScore: 0,
        homeShots: 0,
        visitingScore: 0,
        visitingShots: 0,
      };
    });
  };

  render() {
    const {
      homeScore,
      homeShots,
      // homeShotPercentage,
      visitingScore,
      visitingShots,
      // visitingShotPercentage,
      resetCounter,
    } = this.state;

    const { venue, team1, team2 } = this.props;

    const resetImage =
      "https://thumbs.dreamstime.com/b/vs-letters-versus-logo-vector-sign-isolated-transparent-background-152594029.jpg";
    return (
      <>
        <Scoreboard visitors={visitingScore} home={homeScore} />
        <h1 className="welcome">Welcome to {venue}</h1>{" "}
        <div className="row">
          <p className="stats team">
            <Team
              score={homeScore}
              shots={homeShots}
              shotPercentage={((homeScore / homeShots) * 100).toFixed(0)}
              className="Team"
              name={team1.name}
              logo={team1.logoSrc}
              onShootChange={() => this.onShoot("homeShots", "homeScore")}
            />
          </p>
          <p className="stats reset">
            <img src={resetImage} alt="resetImage(vs)" />
            Resets: {resetCounter}
            {/* <button className="myButton" onClick={this.handleReset}>
              RESET GAME
            </button> */}
            <Button onClick={this.handleReset} variant="warning">
              RESET GAME
            </Button>{" "}
          </p>
          <p className="stats team">
            <Team
              score={visitingScore}
              shots={visitingShots}
              shotPercentage={((visitingScore / visitingShots) * 100).toFixed(
                0
              )}
              className="Team"
              name={team2.name}
              logo={team2.logoSrc}
              onShootChange={() =>
                this.onShoot("visitingShots", "visitingScore")
              }
            />
          </p>
        </div>
      </>
    );
  }
}

export default Game;
