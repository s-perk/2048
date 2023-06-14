import logo from './logo.svg';
import Board from './components/Board.jsx';
import { useState } from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <div>2048</div>
        <div>Score: {score}</div>
        <Board score={score} setScore={setScore} />
      </header>
    </div>
  );
}

export default App;
