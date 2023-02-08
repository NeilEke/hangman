import { useDispatch,useSelector } from 'react-redux';
import { checkGuess} from './GameStore';



function GameControl(){
    let dispatch = useDispatch();
    let outerArray = [];
    let line1Array = [];
    let line2Array = [];
    let line3Array = [];
    
    const gameArray = useSelector(store => store.hangman.gameArray);
    

    // CLICK ALPHABET //
    const handleClick = (id) => {
        
        dispatch(checkGuess({id: id}));
    }
 

// SET UP ALPHABET LAYOUT FOR CLICKING //
    // TOP LINE //    
    for (let i = 65; i <=73; i++){
        let char = String.fromCharCode(i);  
        let colorButton = "";
        let disabledButton = false;
        for( let j=0; j < gameArray.length; j++){
            if(gameArray[j].id === char){

                if(gameArray[j].guessed === false){
                    colorButton = "AlphabetBlue"
                    } else { 
                
                if(gameArray[j].contained === true){
                    colorButton = "AlphabetGreen"
                    disabledButton = true
                    } else {
                    colorButton = "AlphabetRed"
                    disabledButton = true
                    }
                }
            }
        }
        line1Array.push(
            <button id={char} onClick={() => handleClick(char)} className={colorButton} disabled={disabledButton}> 
                {String.fromCharCode(i)} 
            </button>)
    }
    // 2ND LINE //
    for (let i = 74; i <=81; i++){
        let char = String.fromCharCode(i);
        let colorButton = "";
        let disabledButton = false;
        for( let j=0; j < gameArray.length; j++){
            if(gameArray[j].id === char){

                if(gameArray[j].guessed === false){
                    colorButton = "AlphabetBlue"
                    } else { 
                
                if(gameArray[j].contained === true){
                    colorButton = "AlphabetGreen"
                    disabledButton = true
                    } else {
                    colorButton = "AlphabetRed"
                    disabledButton = true
                    }
                }
            }
        }
        line2Array.push(
            <button id={char} onClick={() => handleClick(char)} className={colorButton} disabled={disabledButton}> 
                {String.fromCharCode(i)} 
            </button>)
    }
    // 3RD LINE //
    for (let i = 82; i <=90; i++){
        let char = String.fromCharCode(i);
        let colorButton = "";
        let disabledButton = false;
        for( let j=0; j < gameArray.length; j++){
            if(gameArray[j].id === char){

                if(gameArray[j].guessed === false){
                    colorButton = "AlphabetBlue"
                    } else { 
                
                if(gameArray[j].contained === true){
                    colorButton = "AlphabetGreen"
                    disabledButton = true
                    } else {
                    colorButton = "AlphabetRed"
                    disabledButton = true
                    }
                }
            }
        }
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