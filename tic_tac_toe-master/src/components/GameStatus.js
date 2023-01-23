import React from 'react';

const GameStatus = (props) => {
    return (
      <div className="status">
        {(props.gameWinner === "Tie") ? <p>{props.gameWinner}</p> 
        : props.gameWinner ? <p>Winner: {props.gameWinner}</p> 
        : <p>{props.gameState}</p>}
      </div>
    )
  }

export default GameStatus