import logo from './logo.svg';
import Board from './components/Board.jsx';
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>2048</div>
        <Board />
      </header>
    </div>
  );
}

export default App;
