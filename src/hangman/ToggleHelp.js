import React, { useState } from 'react';
import ReactSwitch from 'react-switch';
import { useSelector } from 'react-redux';

function ToggleSwitch() {
  const [helpShow, setHelpShow] = useState(false);
  const wordLength = useSelector(store => store.hangman.wordLength);
  const wrongGuesses = useSelector(store => store.hangman.wrongGuesses);  
  const gameComplete = useSelector(store => store.hangman.gameComplete);

  let helpText ="";

  const handleChange = helpShow => {
    setHelpShow(helpShow)
  }

  if(wordLength === 0){
    helpText = "To start the game, choose how many letters you would like in your hidden word"
  }

  if(wordLength > 0 && gameComplete === false){
    helpText = "Choose a letter you think may be in the hidden word. If its correct it will display in the hidden word and the letter will turn green, if it isn't in the word then the letter will turn red. You lose if you guess 10 letters incorrectly, Good Luck!"
  }

  if(gameComplete === true || wrongGuesses === 10){
    helpText = "To restart, click the Re-e-wind button"
  }
  

  return (
    <div>
      <div className="HelpBarWrapper">
        <div className="HelpButtonText">Show Help</div>
        <div className="HelpButton">
          <ReactSwitch
            checked={helpShow}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
          {helpShow === true? helpText : null}
        </div>
    </div>
  );
}

export default ToggleSwitch;