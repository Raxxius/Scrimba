import { useState } from "react"
import { shuffleNewDeck, playGame } from '../events/gameEvents'

export default function GameBoard() {
    const [deck, setDeck] = useState(shuffleNewDeck)
    const [playerCards, setPlayerCards] = useState([])
    const [dealerCards, setDealerCards] = useState([])
    const [gamePhase, setGamePhase] = useState(["player"])

    playGame()
    return (
        <div className="game-board">
            <div className="dealer-hand">
                {dealerCards}
            </div>
            <div className="player-hand">
                {playerCards}
            </div>
            {gamePhase === "player" 
            ? 
            <div className="player-choices">
                <button className="stick"></button>
                <button className="twist"></button>
            </div>
            :
            <div className="dealer-choices">
                <p>dealer choices</p>
            </div>
            }
        </div>
    )
}