import React, { Component } from "react";
import "./Team.css";
import { Button, Card } from "react-bootstrap";

class Team extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     shots: 0,
  //     score: 0,
  //     shotPercentage: 0,
  //   };
  // }

  // handleClick needs to be made to pass in a prop because now the functionallty/states are being lifted to parent component (Game) so each functionality will be passed in thru props within the parent
  handleClick = () => {
    // this.setState((currentState) => {
    //   console.log(currentState);
    //   let randomShots = Math.floor(Math.random() * (3 - 1) + 1);

    //   let randomScore = Math.floor(Math.random() * (randomShots - 1) + 1);

    //   let newShots = currentState.shots + randomShots;
    //   let newScore = currentState.score + randomScore;
    //   return {
    //     shots: newShots,
    //     score: newScore,
    //     shotPercentage: ((newScore / newShots) * 100).toFixed(0) + "%",
    //   };
    // });
    this.props.onShootChange();
  };

  render() {
    const { name, logo, shots, score, shotPercentage } = this.props;
    return (
      <Card className="text-center" style={{ width: "18rem" }}>
        <Card.Title>{name}</Card.Title>
        <Card.Img variant="top" src={logo} alt={name} />
        <Card.Body>
          <Card.Text>
            <p>Shots: {shots}</p>
            <p>Score: {score}</p>
            {shots === 0 ? <> </> : <p>Shooting %: {shotPercentage}</p>}
          </Card.Text>
          <Button
            variant="warning"
            // className="text-center"
            onClick={this.handleClick}
          >
            SHOOT!
          </Button>
        </Card.Body>
      </Card>
      // <div className="Team-container">
      //   <h1>{name}</h1>
      //   <img src={logo} alt={name} />
      // <p>Shots: {shots}</p>
      // <p>Score: {score}</p>
      // {shots === 0 ? <> </> : <p>Shooting %: {shotPercentage}</p>}
      //   {/* <button className="myButton" onClick={this.handleClick}>
      //     SHOOT!
      //   </button> */}
      //   <Button variant="warning" onClick={this.handleClick}>
      //     SHOOT!
      //   </Button>
      // </div>
    );
  }
}

export default Team;
