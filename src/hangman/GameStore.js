import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';


// SETUP INITIAL STATE //
let gameArray = [];
for (let i = 65; i <=90; i++){
    let char = String.fromCharCode(i);
        gameArray.push({id: char, 'contained': false, 'guessed':false});     
    }
    
export const gameSlice = createSlice({
    name: 'gameSlice',
    initialState: { gameArray, 
                    wordLength: 0, 
                    runBefore: false,
                    wrongGuesses: 0,
                    gameRunning: false,  
                    wordInPlay: '', 
                    showLetter: [],
                    gameComplete: false, 
                },
    reducers: {
        clearAllData: (state, action) => {
            state.gameArray = gameArray
            state.wordLength = 0
            state.runBefore = false
            state.wrongGuesses = 0
            state.gameRunning = false
            state.wordInPlay = ''
            state.showLetter = []
            state.gameComplete = false
        },

        gameComplete: (state, action) => {
            state.gameComplete = true
        },

        showLetter: (state, action) => {
            state.showLetter[action.payload.i] = false
        },

        setWordLength: (state, action) => {
            state.wordLength = action.payload.wordLength;
            state.gameRunning = true;
            },

        setWordInPlay: (state, action) => {
            state.wordInPlay = action.payload.chosenWord;
        },
        
        setRunBefore: (state, action) => {
            state.runBefore = true;
        },

        checkGuess: (state, action) => {
            
            
            for (let i=0; i < state.gameArray.length; i++){
                if(state.gameArray[i].id === action.payload.id){
                    state.gameArray[i].guessed = true
                    
                    if(state.gameArray[i].contained === true){
                        for (let pos = 0; pos < state.wordLength; pos++ ){
                            if(state.wordInPlay[pos] === action.payload.id){
                                state.showLetter[pos] = true  
                            }
                        }                       
                    } else {
                        state.wrongGuesses += 1
                    }
                }
            }
        },
        
        updateContained: (state, action) => {
            
            for(let i = 0; i < state.gameArray.length; i++)
                if(state.gameArray[i].id === action.payload.letterContained){
                    state.gameArray[i].contained = true;
                }  
        }
    },
});


export const {setWordLength, setWordInPlay, checkGuess, updateContained, setRunBefore, showLetter, clearAllData, gameComplete} = gameSlice.actions;

export default configureStore({
    reducer: {
        hangman: gameSlice.reducer
    }
});

