/** Core game function */
export function playGame(gamePhase, setGamePhase) {
    /** set game state "new game" */
    const turn = "bop"
    /** draw cards for player and dealer */
    if (gamePhase === "start") {
        draw("player", 2)
        draw("dealer", 2)
        setGamePhase("player")
        console.log("Gamephase change")
    }


    /** update game state to player stick or twist */

    /** stick  */

}

/** New game deck setup function */

export function stick(setGamePhase) {
    console.log("player sticks")
    setGamePhase("dealer")
}

export function shuffleNewDeck() {
    const deck = []
    const suit = ["Hearts", "Diamonds", "Clubs", "Spades"]
    const value = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"]

    suit.forEach((suit) => {
        value.forEach((value) => {
            deck.push(`the ${value} of ${suit}`)
        })     
    })

    fisherYatesShuffle(deck);
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

/** Draw a number of cards 'drawer = dealer/player' */

export function draw(drawer, number) {
    // console.log(`Drawing ${number} cards for ${drawer}`)
}


/** count the value of the cards in the player or dealer hand*/
export function sumScore(cards) {
    let totalScore = 0
    if (cards.length === 0) {
        return 0
    }
    cards.forEach((card) => {
        let cardValue = card.match(/(\d+)/)
        console.log(cardValue)
        if (cardValue) {
            console.log("found a number card")
            totalScore = totalScore + parseInt(cardValue[0])
        }
        else {
            const firstWord = card.replace(/ .*/,'');
            if (firstWord !== "Ace") {
                totalScore = totalScore +10
            }
    }
    })
    return (totalScore)
}