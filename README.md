# Getting Started with Hangman

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Hangman - Whats it about?

The object of the game is to guess the hidden word by choosing any letter from the alphabet to see if it is contained in the hidden word. If the letter, the player has selected is in the hidden word, it will show in its correct postion and the letter will turn green to show it was contained in the word. If the letter chosen by the player is not in the hidden word, the letter turns red to show it is not contained in the word.

The player has to correctly identify the word before they guess 10 letters incorrectly from the alphabet which are not in the hidden word.

## To setup this game 

You can either visit my website at http://www.dev4web.uk/hangman
or download the files and run in VS code or similar. Navigate to the download folder in a terminal window and type 'npm start' to start the game in your browser. The default browser should open to http://127.0.0.1:3000 for you to play the game.

## To play this game

The object of the game is to identify the hidden word by guessing the letters contained without too many wrong guesses!

The player selects how long a word they would like to guess the letters within (between 4 and 9 letters).
The player then starts guessing a letter at a time, if it is correct the letter turns green and shows in the hidden word. If it is incorrect (not contained within the word) the letter will turn red and the wrong guesses counter increases!
The game continues until you either guess the word (You Win) or the number of wrong guesses hits 10 (You Lose).

Best of luck!
