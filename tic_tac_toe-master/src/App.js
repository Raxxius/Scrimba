import React, { useState } from 'react';
import GameBoard from './components/GameBoard.js'
import GameStatus from './components/GameStatus.js'
import Reset from './components/Reset.js'
import {handleReset, processGameState} from './events/onClickEvents.js'

import './static/style/main.css';



const App = () => {
    const [gameState, setGameState] = useState("Next player: X");
    const [gameBoard, setGameBoard] = useState([{id:0, fill:""}, {id:1, fill:""}, {id:2, fill:""}, {id:3, fill:""}, {id:4, fill:""}, {id:5, fill:""}, {id:6, fill:""}, {id:7, fill:""}, {id:8, fill:""}])
    const [gameWinner, setGameWinner] = useState("");

    const onClickReset = () => {
      handleReset(setGameState, setGameBoard, setGameWinner)
    }

    const onClick = (id) => {
      processGameState(id, gameState, setGameState, gameBoard, setGameBoard, gameWinner, setGameWinner)
    }

    return (
      <>
        <h1>Tic Tac Toe</h1>
        <GameBoard 
          gameBoard={gameBoard}
          handleOnClick={onClick}
        />
        <GameStatus gameState={gameState}
          gameWinner={gameWinner}/>
        <Reset 
          onClickReset={onClickReset}
        />
      </>
    )
  }

export default App