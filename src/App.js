import "./App.css";
import Board from "./components/Board";

const App = () => {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">game-info</div>
    </div>
  );
};

export default App;
