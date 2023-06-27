import Board from './components/Board.jsx';
import './App.css';
import { useState } from 'react';

function App() {
  const [gameState, setGameState] = useState({ active: true });

  return (
    <div className="App">
      <header className="App-header">
        <div>2048</div>
        <Board gameState={gameState} setGameState={setGameState} />
      </header>
    </div>
  );
}

export default App;
