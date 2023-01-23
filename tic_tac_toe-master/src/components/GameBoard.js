import React from 'react';
import Square from './Square.js'

const GameBoard = (props) => {
    const style = {
      display: "grid", 
      gridTemplateColumns: "200px 200px 200px",
      gridTemplateRows: "200px 200px 200px",
      gap: "5px 5px",
      justifyContent: "center",
    }
    const squares = props.gameBoard.map(square => {
      return (
        <Square
          key={square.id}
          handleOnClick={props.handleOnClick}
          {...square}
        />
      )
    })
    return (
      <div className="boardgame" style={style}>
        {squares}
      </div>
    )
  }

export default GameBoard