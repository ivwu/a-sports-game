import "./App.css";
import Game from "./components/Game/Game";

function App() {
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

  const bunnies = {
    name: "Burlington Bunnies",
    logoSrc:
      "https://raw.githubusercontent.com/p-mayor/davey-react-sports-lab-basic/master/assets/images/bunny.png",
  };

  const hounds = {
    name: "Hammond Hounds",
    logoSrc:
      "https://raw.githubusercontent.com/p-mayor/davey-react-sports-lab-basic/master/assets/images/hound.png",
  };
  return (
    <>
      <Game venue={"Union 525 Gem"} team1={squirrels} team2={raccoons} />
      <Game venue={"Sheridan Arena"} team1={hounds} team2={bunnies} />
    </>
  );
}

export default App;
