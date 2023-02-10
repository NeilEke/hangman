import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { gameComplete } from "./GameStore";


function GameScore(){
    let dispatch = useDispatch();
// IMPORT STATES AND VARIABLES
    const wrongGuesses = useSelector(store => store.hangman.wrongGuesses);
    const wordInPlay = useSelector(store => store.hangman.wordInPlay);
    const gameArray = useSelector(store => store.hangman.gameArray);  
    let scoreText = "Wrong guesses so far: "+wrongGuesses


// IF FAILED SHOW MESSAGE
    if(wrongGuesses === 10){
        scoreText = "Oh no! Too many guesses, the word was "+ wordInPlay
    }
// CHECK FOR WIN - DOES ALL CONTAINED TRUE HAVE A GUESSED TRUE STATUS
    let diffChar = 0;
    let diffCorrectChar = 0;
    for(let i = 0; i < gameArray.length; i++){
        if(gameArray[i].contained === true && gameArray[i].guessed === true){
            diffCorrectChar = diffCorrectChar + 1;
        }
        if(gameArray[i].contained === true){
            diffChar = diffChar + 1;
        }
    }
// IF WIN SHOW MESSAGE    
    if(diffChar === diffCorrectChar){
        scoreText = "Well done, you guessed " + wordInPlay + " with only "+ wrongGuesses + " wrong guesses!"
    // UPDATE COMPLETE STATUS
        dispatch(gameComplete(true))
    }
 
// RETURN
    return(
        <div className="GameScore">
            {scoreText}
        </div>
    )
}

//EXPORT
export default GameScore;