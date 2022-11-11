import React, { useState } from 'react'
import Square from '../Square/Square';
import './Board.css';

const Board = () => {
  const [state , setState] = useState(Array(9).fill(null));
  const [isXturn , setIsXturn] = useState(true);

  const clickHandler = (index) => {
    if(state[index] !== null){
      return;
    }
    let copyOfState = [...state];
    copyOfState[index] = isXturn ? 'X' : 'O';
    setState(copyOfState);
    setIsXturn(!isXturn);
  }

  const checkWinner = () => {
    let winners = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    for(let win of winners){
      const [a,b,c] = win;
      if(state[a] !== null && state[a] === state[b] && state[a] === state[c]){
        return state[a];
      }
    }
    return false;
  }

  const resetHandler = () => {
    setState(Array(9).fill(null));
  }

  const isWinner = checkWinner();
  return (
    <>
    <div className="board-container">
    <div className='board'>
    <div className="board-row">
     <Square className='btl' value={state[0]} onClick={() => clickHandler(0)} />
     <Square className='bt' value={state[1]} onClick={() => clickHandler(1)}  />
     <Square className='btr' value={state[2]} onClick={() => clickHandler(2)} />
    </div>
    <div className="board-row">
     <Square className='bl' value={state[3]} onClick={() => clickHandler(3)} />
     <Square value={state[4]} onClick={() => clickHandler(4)} />
     <Square className='br' value={state[5]} onClick={() => clickHandler(5)} />
    </div>
    <div className="board-row">
     <Square className='bbl' value={state[6]} onClick={() => clickHandler(6)} />
     <Square className='bb' value={state[7]} onClick={() => clickHandler(7)} />
     <Square className='bbr' value={state[8]} onClick={() => clickHandler(8)} />
    </div>
 </div>

<div className="board-content">
   <h1>Welcome To Tic Tak Toe</h1>
   {isWinner ? <h1 className='green'> Winner is {isWinner}.</h1> : <h3 className='red'> Turn For {isXturn ? 'X' : 'O'}</h3> }
   <button onClick={resetHandler}>Reset</button>
</div>
 </div>
    </>
  )
}

export default Board