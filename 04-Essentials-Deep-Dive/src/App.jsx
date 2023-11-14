import { useState } from "react";

//Components
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard";

function App() {
  const [isPlayer, setIsPlayer] = useState("X");

  function handlerSetPlayer() {
    setIsPlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
  }
  return (
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player
          name="Player 1"
          symbol="X"
          isActiveStyle={isPlayer === "X" ? "active" : undefined}
        />
        <Player
          name="Player 2"
          symbol="O"
          isActiveStyle={isPlayer === "O" ? "active" : undefined}
        />
      </ol>
      <GameBoard onSelectPlayer={handlerSetPlayer} activePlayer={isPlayer} />
    </div>
  );
}

export default App;
