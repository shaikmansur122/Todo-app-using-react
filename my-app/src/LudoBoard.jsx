import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({
    blue: 0,
    yellow: 0,
    red: 0,
    green: 0
  });

  let updateBlue = () => {
    setMoves((prevMoves) => ({
      ...prevMoves,
      blue: prevMoves.blue + 1
    }));
  };

  let updateYellow = () => {
    setMoves((prevMoves) => ({
      ...prevMoves,
      yellow: prevMoves.yellow + 1
    }));
  };

  let updateGreen = () => {
    setMoves((prevMoves) => ({
      ...prevMoves,
      green: prevMoves.green + 1
    }));
  };

  let updateRed = () => {
    setMoves((prevMoves) => ({
      ...prevMoves,
      red: prevMoves.red + 1
    }));
  };

  return (
    <div>
      <p>Game begins</p>
      <div className="board">
        <p>Blue moves = {moves.blue}</p>
        <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>+1</button>

        <p>Yellow moves = {moves.yellow}</p>
        <button style={{ backgroundColor: "yellow" }} onClick={updateYellow}>+1</button>

        <p>Green moves = {moves.green}</p>
        <button style={{ backgroundColor: "green" }} onClick={updateGreen}>+1</button>

        <p>Red moves = {moves.red}</p>
        <button style={{ backgroundColor: "red" }} onClick={updateRed}>+1</button>
      </div>
    </div>
  );
}
