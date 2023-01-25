import { useState } from 'react'
import GameBoard from './components/GameBoard'
import Title from './components/Title.jsx'
import './App.css'
import {newGame, checkScore} from './events/onClickEvents.js'

function App() {
  const [gameState, setGameState] = useState(false)

  const onClickNewGame = () => {
    newGame(gameState, setGameState)
  }


  return (
    <div className="App">
      {gameState ?
        <GameBoard />
        :
        <Title
        onClickNewGame={onClickNewGame}
        />
      }

    </div>
  )
}

export default App
