import './App.css';

import React from 'react';
import GameStart from './hangman/GameStart';
import GameWord from './hangman/GameWord';
import GameImage from './hangman/GameImage';
import GameScore from './hangman/GameScore';
import GameControl from './hangman/GameControl';
import GameRestart from './hangman/GameRestart';
import ToggleHelp from './hangman/ToggleHelp'
import { useSelector } from 'react-redux';


function App() {
// GATHER STATE
  const gameRunning = useSelector(store => store.hangman.gameRunning);  
  const wrongGuesses = useSelector(store => store.hangman.wrongGuesses);
  const gameComplete = useSelector(store => store.hangman.gameComplete);
  
  let showControl = false;

// IF WRONG GUESSES BELOW 10 SHOW BOARD
  if(gameRunning === true){
    if(wrongGuesses < 10){
      showControl = true
    }
  }

// GAME COMPLETE REMOVE KEYBOARD
  if(gameComplete === true){
    showControl = false
  }

// RETURN COMPONENTS BASED ON CURRENT SETUP
  return (
    <div className="AppContainer">
      React Redux Game - Hangman
      
      {gameRunning===false ? <GameStart /> : null} 
      {gameRunning===false ? null : <GameWord />} 
      <div className='SideBySide'>
        {gameRunning===false ? null : <GameImage />} 
        {gameRunning===false ? null : <GameScore />}
      </div> 
        {showControl===true ? <GameControl /> : null} 
        {gameRunning===false ? null : <GameRestart />}        
        <ToggleHelp />
    </div>
  ) ;
}

export default App;
