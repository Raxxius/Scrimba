This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Tic Tac Toe

Tic Tac Toe game constructed using the react framework.

## Site Overview

Tic Tac Toe is a single page interactive game using React state and hooks to create an interactive game board that allows people to play Tic Tac Toe (Noughts and Crosses).

## Site Requirements

The requirements of the site is to allow two people to play the game, with the state of the game being recorded by the site, with a winner or tie selected when one player wins or all squares are filled.

## Site Design

### Basic Setup

The site is a single page with a title header h1 and 3 React components, GameBoard, GameStatus and Reset.

3 React Hooks are maintained at this level, gameState - who's turn it is, gameBoard - where the board has been marked, and gameWinner - who has won the game, or a tie in the event of no further moves avalible.

the onClick events have 2 functions, onClick, which chains functions to update the gameBoard, gameStatus and check for win conditions to update gameWinner if relevant. And the onClickReset, which resets the gameBoard gameStatus and gameWinner to default to restart the game. 

### GameBoard Component

The GameBoard component comprises 9 square sub components, with gameBoard props and an onClick event passed down from the App component. When a div is clicked, the onClick function is processed.

### GameStatus Component

Gamestatus component is a div with props of gameStatus being passed down.

If the game is in progress, game status will display who's turn it is, if the game has been won then the winner will be presented in the status. In the event that all 9 squares are filled without a winner a tie will be declared

### Reset

The reset button activated the reset event that changes the gameboard to the default state. 