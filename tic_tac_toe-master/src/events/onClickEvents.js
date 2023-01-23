
/*  Peripheral function of checkWinner that is repeatedly called by the onclick to check a single 
    win condition. If win condition is achieved returns true, else returns false */

const checkWin = (gameBoard, a, b, c) => {
  if ((gameBoard[a].fill !== '') && (gameBoard[b].fill !== '') && (gameBoard[c].fill !== '')) {
    if ((gameBoard[a].fill === gameBoard[b].fill) && (gameBoard[a].fill === gameBoard[c].fill)) {
      return true
    }
  }
  else return false
}


/*  Function for checking if the game condition should be set to won.
    sets gamewon variable to false, then calls the checkWin function procedurally
    for win conditions. If a win condition is matched, it changes the gamewon variable to true,
    and skips further checks.

    if gamewon is set to true, the function returns the value of the player ("X" or "O").

    if gamewon is set to fasle, there is a check to see if all spaces are occupied. If all 
    spaces are occupied the the function returns the value "Tie".

    if none of the win conditions are satisified the function returns any empty string value "". */

export function checkWinner(gameBoard, player) {
  let gamewon = false
  /* check verticles */
  if (gamewon !== true) {
    gamewon = checkWin(gameBoard, 0, 3, 6)
  }
  if (gamewon !== true) {
    gamewon = checkWin(gameBoard, 1, 4, 7)
  }
  if (gamewon !== true) {
    gamewon = checkWin(gameBoard, 2, 5, 8)
  }
  /* check horizontals */
  if (gamewon !== true) {
    gamewon = checkWin(gameBoard, 0, 1, 2)
  }
  if (gamewon !== true) {
    gamewon = checkWin(gameBoard, 3, 4, 5)
  }
  if (gamewon !== true) {
    gamewon = checkWin(gameBoard, 6, 7, 8)
  }
  /* check diagonals */
    if (gamewon !== true) {
    gamewon = checkWin(gameBoard, 0, 4, 8)
  }
  if (gamewon !== true) {
    gamewon = checkWin(gameBoard, 2, 4, 6)
  }
  if (gamewon === true) {
    return player
  }
  if (gameBoard.some(e => e.fill === '')) {
    return ''
  }
  return "Tie"
}


/*  Core function that resets the gamestate and board to the initial conditions */

export function handleReset(setGameState, setGameBoard, setGameWinner) {
      setGameState("Next player: X")
      setGameBoard([{id:0, fill:""}, {id:1, fill:""}, {id:2, fill:""}, {id:3, fill:""}, {id:4, fill:""}, {id:5, fill:""}, {id:6, fill:""}, {id:7, fill:""}, {id:8, fill:""}])
      setGameWinner("");
}

/*  Core function that processes an entry on the board, if a gameWinner has been selected, then the function just returns,
    not allowing additional moves to be processed. 
    if a gameWinner hasn't been selected, then the function will set the gameboard div, change the player from one state to 
    the other, and update the state div, then rerender. 
    */

export function processGameState(id, gameState, setGameState, gameBoard, setGameBoard, gameWinner, setGameWinner) {
        if (gameWinner !== '') {
        return
      }

      if (gameBoard[id].fill === '') {
        
        const playerTurn = () => {
          if (gameState === "Next player: X") {
              return "Next player: O"
            }
          else {
            return "Next player: X"
          }
        }

        const setPlayer = () => {
          if (gameState === "Next player: X") {
              return "X"
            }
          else {
              return "O"
          }
      }

    const turn = playerTurn()
    const player = setPlayer()
    setGameState(turn)

    /*  Peripheral function to redraw the gameboard array by mapping the original board 
        apart from the id of the div which adds the player variable (X or O) to the div
        then rerenders due to stateChange */

    const newGameBoard = gameBoard.map(board => {
      if (board.id === id) {
        if (board.fill === "") {
          return {...board, fill: player}
        }
      }
      return board
    })

    setGameBoard(newGameBoard)
    const winner = checkWinner(newGameBoard, player)
    setGameWinner(winner)
  }

}
