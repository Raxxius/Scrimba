/** Core game function */
export function playGame(gamePhase, setGamePhase, deck, setDeck, playerCards, setPlayerCards, dealerCards, setDealerCards, blindCard, setBlindCard) {
    /** set game state "new game" */

    /** draw cards for player and dealer */
    if (gamePhase === "start") {
        draw(deck, setDeck, setPlayerCards)
        draw(deck, setDeck, setDealerCards)
        draw(deck, setDeck, setBlindCard)
        setGamePhase("player")
    }
    if (gamePhase ==="dealer") {
        setDealerCards((prevArray) => {
            return [...prevArray, blindCard[0]]
        })
        setGamePhase("pause")
    }

    /** update game state to player stick or twist */

    /** stick  */

}

/** New game deck setup function */

export function stick(setGamePhase) {
    setGamePhase("dealer")
}

export function shuffleNewDeck() {
    const deck = []
    const suit = ["Hearts", "Diamonds", "Clubs", "Spades"]
    const value = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"]

    suit.forEach((suit) => {
        value.forEach((value) => {
            deck.push(`${value} of ${suit}`)
        })     
    })

    fisherYatesShuffle(deck);

    return deck
}


/** generic functions */

/** fisherYatesShuffle  */

function fisherYatesShuffle(deck) {
    for (let i = deck.length -1; i > 0; i--){
        const randomCard = Math.floor(Math.random()*(i+1));
        const temp = deck[i];
        deck[i] = deck[randomCard];
        deck[randomCard] = temp
    }
}

function newhand(deck, setDeck, setPlayerCards, setDealerCards, setBlindCard) {
    let newDeck = [...deck]
    let playerCards = [newDeck.pop(), newDeck.pop()]
    let dealerCards = newDeck.pop()
    let blindCard = newDeck.pop()
    setPlayerCards(playerCards)
    setDealerCards(dealerCards)
    setBlindCard(blindCard)
    setDeck(newDeck)
}


/** Draw a number of cards setHand = stateupdate */

export function draw(deck, setDeck, setHand) {
    setHand((prevArray) => {
        const newArray = [...prevArray, deck.slice(-1)[0]]
        return newArray
    })

    setDeck((prevDeck) => {
        const newDeck = prevDeck.slice(0, -1)
        return newDeck
    })
}



/** count the value of the cards in the player or dealer hand*/
export function sumScore(cards) {
    let totalScore = 0
    let aces = 0
    if (cards.length === 0) {
        return 0
    }
    cards.forEach((card) => {
        let cardValue = card.match(/(\d+)/)
        if (cardValue) {
            totalScore = totalScore + parseInt(cardValue[0])
        }
        else {
            const firstWord = card.replace(/ .*/,'');
            if (firstWord !== "Ace") {
                totalScore = totalScore +10
            }
            else aces++
        }
    })
    let aceScore = aces*11
    while (aces != 0) {
        if (aceScore + totalScore <= 21) {
            aces = 0
        }
        else { 
            aceScore = aceScore - 10
            aces--
        }
    }
    const finalScore = totalScore + aceScore


    return (finalScore)
}