import { useState } from "react";
import "./App.css";
import Square from "./Components/Square";
import CalculateWinner from "./Components/CalculateWinner";

function App() {
  // const propVariable = "We are one";

  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);

  const handleClick = () => {
    setSquares(["", "", "", "", "", "", "", "", ""])
    setPlayer(true)
  }

  return (
    <div className="App">
        <span><CalculateWinner arr={squares}/></span>
      <div className="container">
        {squares.map((value, index) => {
          return (
            <Square
              setSquares={setSquares}
              index={index}
              squareValue={value}
              squares={squares}
              player={player}
              setPlayer={setPlayer}
            />
          );
        })}
      </div>
      <button onClick={handleClick}>RESET</button>
    </div>
  );
}

export default App;
