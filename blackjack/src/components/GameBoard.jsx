import { useState } from "react"
import { shuffleNewDeck, playGame, stick, draw, sumScore } from '../events/gameEvents'

export default function GameBoard() {
    const [deck, setDeck] = useState(shuffleNewDeck)
    const [playerCards, setPlayerCards] = useState([])
    const [dealerCards, setDealerCards] = useState([])
    const [blindCard, setBlindCard] = useState([])
    const [gamePhase, setGamePhase] = useState("start")

    playGame(gamePhase, setGamePhase, deck, setDeck, playerCards, setPlayerCards, dealerCards, setDealerCards, blindCard, setBlindCard)
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
                <button className="stick" onClick={() => stick(setGamePhase)}>Stick</button>
                <button className="twist" onClick={() => draw(deck, setDeck, setPlayerCards)}>Twist</button>
            </div>
            :
            <>
                <div className="player-score">
                    <p>Player score is {sumScore(playerCards)}</p>
                </div>
                <div className="dealer-score">
                    <p>dealer score is {sumScore(dealerCards)}</p>
                </div>
            </>
            }
        </div>
    )
}