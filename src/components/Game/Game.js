import React, { Component } from "react";
import Team from "../Team/Team";
import Scoreboard from "../Scoreboard/Scoreboard";
import "./Game.css";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeScore: 0,
      homeShots: 0,
      homeShotPercentage: 0,
      visitingScore: 0,
      visitingShots: 0,
      visitingShotPercentage: 0,
      resetCounter: 0,
    };
  }

  onHomeShoot = () => {
    this.setState((currentState) => {
      console.log(currentState);
      let randomShots = Math.floor(Math.random() * (3 - 1) + 1);

      let randomScore = Math.floor(Math.random() * (randomShots - 1) + 1);

      let newShots = currentState.homeShots + randomShots;
      let newScore = currentState.homeScore + randomScore;
      return {
        homeShots: newShots,
        homeScore: newScore,
        homeShotPercentage: ((newScore / newShots) * 100).toFixed(0) + "%",
      };
    });
  };

  onVisitingShoot = () => {
    this.setState((currentState) => {
      console.log(currentState);
      let randomShots = Math.floor(Math.random() * (3 - 1) + 1);

      let randomScore = Math.floor(Math.random() * (randomShots - 1) + 1);

      let newShots = currentState.visitingShots + randomShots;
      let newScore = currentState.visitingScore + randomScore;
      return {
        visitingShots: newShots,
        visitingScore: newScore,
        visitingShotPercentage: ((newScore / newShots) * 100).toFixed(0) + "%",
      };
    });
  };

  handleReset = () => {
    this.setState((currentState) => {
      return {
        resetCounter: currentState.resetCounter + 1,
        homeScore: 0,
        homeShots: 0,
        homeShotPercentage: 0,
        visitingScore: 0,
        visitingShots: 0,
        visitingShotPercentage: 0,
      };
    });
  };

  render() {
    const raccoons = {
      name: "Russiaville Raccoons",
      logoSrc:
        "https://raw.githubusercontent.com/p-mayor/davey-react-sports-lab-basic/master/assets/images/raccoon.png",
    };

    const squirrels = {
      name: "Sheridan Squirrels",
      logoSrc:
        "https://raw.githubusercontent.com/p-mayor/davey-react-sports-lab-basic/master/assets/images/squirrel.png",
    };

    // const bunnies = {
    //   name: "Burlington Bunnies",
    //   logoSrc:
    //     "https://raw.githubusercontent.com/p-mayor/davey-react-sports-lab-basic/master/assets/images/bunny.png",
    // };

    // const hounds = {
    //   name: "Hammond Hounds",
    //   logoSrc:
    //     "https://raw.githubusercontent.com/p-mayor/davey-react-sports-lab-basic/master/assets/images/hound.png",
    // };
    const {
      homeScore,
      homeShots,
      homeShotPercentage,
      visitingScore,
      visitingShots,
      visitingShotPercentage,
      resetCounter,
    } = this.state;
    return (
      <>
        <Scoreboard visitors={visitingScore} home={homeScore} />
        <h1 className="welcome">Welcome to {this.props.venue}</h1>{" "}
        <div className="row">
          <p className="stats">
            <Team
              score={homeScore}
              shots={homeShots}
              shotPercentage={homeShotPercentage}
              className="Team"
              name={this.props.team1.name}
              logo={raccoons.logoSrc}
              onShootChange={this.onHomeShoot}
            />
          </p>
          <p className="stats reset">
            Resets: {resetCounter}
            <button onClick={this.handleReset}>RESET GAME</button>
          </p>
          <p className="stats">
            <Team
              score={visitingScore}
              shots={visitingShots}
              shotPercentage={visitingShotPercentage}
              className="Team"
              name={this.props.team2.name}
              logo={squirrels.logoSrc}
              onShootChange={this.onVisitingShoot}
            />
          </p>
        </div>
      </>
    );
  }
}

export default Game;
