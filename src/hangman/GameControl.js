import { useDispatch,useSelector } from 'react-redux';
import { checkGuess} from './GameStore';



function GameControl(){

// SETUP VARIABLES FOR DISPLAY KEYBOARD
    let dispatch = useDispatch();
    let outerArray = [];
    let line1Array = [];
    let line2Array = [];
    let line3Array = [];

// GET ALL LETTERS FROM ALPHABET 
    const gameArray = useSelector(store => store.hangman.gameArray);
    

// ACTION FOR WHEN LETTER CLICKED
    const handleClick = (id) => {      
        dispatch(checkGuess({id: id}));
    }
 

// SET UP LETTER LAYOUT 
// MAKING TOP LINE (A-I) 
    for (let i = 65; i <=73; i++){
        let char = String.fromCharCode(i);  
        let colorButton = "";
        let disabledButton = false;
// LOOP THRU A-I SETTING COLOUR BASED ON STATUSES
        for( let j=0; j < gameArray.length; j++){
            if(gameArray[j].id === char){
// IF UNGUESSED - BLUE
                if(gameArray[j].guessed === false){
                    colorButton = "AlphabetBlue"
                    } else { 
// IF GUESSED AND CONTAINED - GREEN             
                if(gameArray[j].contained === true){
                    colorButton = "AlphabetGreen"
                    disabledButton = true
                    } else {
// IF GUESSED AND NOT CONTAINED - RED
                    colorButton = "AlphabetRed"
                    disabledButton = true
                    }
                }
            }
        }
// CREATE ARRAY FOR TOP LINE INCLUDING ON CLICK AND ID
        line1Array.push(
            <button id={char} onClick={() => handleClick(char)} className={colorButton} disabled={disabledButton}> 
                {String.fromCharCode(i)} 
            </button>)
    }
// 2ND LINE //
// MAKING MIDDLE LINE (J-Q)
    for (let i = 74; i <=81; i++){
        let char = String.fromCharCode(i);
        let colorButton = "";
        let disabledButton = false;
// LOOP THRU J-Q SETTING COLOUR BASED ON STATUSES
        for( let j=0; j < gameArray.length; j++){
            if(gameArray[j].id === char){
// IF UNGUESSED - BLUE
                if(gameArray[j].guessed === false){
                    colorButton = "AlphabetBlue"
                    } else { 
// IF GUESSED AND CONTAINED - GREEN                
                if(gameArray[j].contained === true){
                    colorButton = "AlphabetGreen"
                    disabledButton = true
                    } else {
// IF GUESSED AND NOT CONTAINED - RED
                    colorButton = "AlphabetRed"
                    disabledButton = true
                    }
                }
            }
        }
// CREATE ARRAY FOR 2ND LINE INCLUDING ON CLICK AND ID
        line2Array.push(
            <button id={char} onClick={() => handleClick(char)} className={colorButton} disabled={disabledButton}> 
                {String.fromCharCode(i)} 
            </button>)
    }
// 3RD LINE //
// MAKING BOTTOM LINE (R-Z)
    for (let i = 82; i <=90; i++){
        let char = String.fromCharCode(i);
        let colorButton = "";
        let disabledButton = false;
// LOOP THRU J-Q SETTING COLOUR BASED ON STATUSES        
        for( let j=0; j < gameArray.length; j++){
            if(gameArray[j].id === char){
// IF UNGUESSED - BLUE
                if(gameArray[j].guessed === false){
                    colorButton = "AlphabetBlue"
                    } else { 
// IF GUESSED AND CONTAINED - GREEN               
                if(gameArray[j].contained === true){
                    colorButton = "AlphabetGreen"
                    disabledButton = true
                    } else {
// IF GUESSED AND NOT CONTAINED - RED                       
                    colorButton = "AlphabetRed"
                    disabledButton = true
                    }
                }
            }
        }
// CREATE ARRAY FOR 2ND LINE INCLUDING ON CLICK AND ID
        line3Array.push(
            <button id={char} onClick={() => handleClick(char)} className={colorButton} disabled={disabledButton}> 
                {String.fromCharCode(i)} 
            </button>) 
    }
// MERGE OUTER AND INNER ARRAYS //
    outerArray.push(<div className="GameControl">
                        <div className="ControlRow">
                            {line1Array}
                        </div>
                        <div className="ControlRow">
                            {line2Array}
                        </div>
                        <div className="ControlRow">
                            {line3Array}
                        </div>
                    </div>);
// RETURN //
        return (outerArray)
}



export default GameControl;