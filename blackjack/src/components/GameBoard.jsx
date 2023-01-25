import { useState } from "react"
import { shuffleNewDeck, playGame, stick, draw, sumScore } from '../events/gameEvents'

export default function GameBoard() {
    const [deck, setDeck] = useState(shuffleNewDeck)
    const [playerCards, setPlayerCards] = useState(['Ace of Spades'])
    const [dealerCards, setDealerCards] = useState([])
    const [gamePhase, setGamePhase] = useState("start")

    playGame(gamePhase, setGamePhase)
    return (
        <div className="game-board">
            <div className="dealer-hand">
                {dealerCards}
            </div>
            <div className="player-hand">
                {playerCards}
                <div className="player-score">
                    <p>player score is {sumScore(playerCards)}</p>
                </div>
            </div>
            {gamePhase === "player" 
            ? 
            <div className="player-choices">
                <button className="stick" onClick={() => stick(setGamePhase)}>Stick</button>
                <button className="twist" onClick={() => draw(deck, setDeck, setPlayerCards)}>Twist</button>
            </div>
            :
            <>
                <div className="player-score">
                    <p>Player score is {sumScore(playerCards)}</p>
                </div>
                <div className="dealer-choices">
                    <p>dealer choices</p>
                </div>
            </>
            }
        </div>
    )
}