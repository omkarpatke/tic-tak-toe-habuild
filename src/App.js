import './App.css';
import React from 'react';
import Board from './Tic-Tak-Toe/Board/Board';
import NavBar from './components/Navbar/NavBar';

function App() {

  return (
    <div className="App">
     <NavBar />
     <Board />
    </div>
  );
}

export default App;
