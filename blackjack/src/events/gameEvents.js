

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

function fisherYatesShuffle(deck) {
    for (let i = deck.length -1; i > 0; i--){
        const randomCard = Math.floor(Math.random()*(i+1));
        const temp = deck[i];
        deck[i] = deck[randomCard];
        deck[randomCard] = temp
    }


}

export function playGame() {
    /** set game state "new game" */
    turn 
    /** draw cards for player and dealer */
    draw(player, 2)
    draw(dealer, 2)

    /** update game state to player stick or twist */

    /** stick  */

}