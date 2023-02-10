import { useDispatch } from "react-redux";
import { setWordLength } from "./GameStore";


function GameStart(){

    let dispatch = useDispatch()
// SET WORD LENGTH SELECTED
    const handleWordLength = (wordLength) => {
        dispatch(setWordLength({wordLength}));
        
    }
// SET ARRAY FOR WORD LENGTH TO MAP
    let arrayWordLength = [4,5,6,7,8,9]

// CREATE BUTTONS FROM ARRAY MAP
    let innerArray = arrayWordLength.map(wordLength => (
        <div className="WordLengthButtons" key={wordLength}>
            <button key={wordLength} className="WordLengthButton" onClick={() => handleWordLength(wordLength)}>{wordLength}</button>
        </div>
    ))

// RETURN 
    return(
        <div className="GameStart">
            How long a word would you like to play?
            <div className="WordLengthRefreshContainer">
                {innerArray}
            </div>
        </div>
    ) 
}

// EXPORT
export default GameStart;