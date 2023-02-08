import { useDispatch } from "react-redux";
import { setWordLength } from "./GameStore";


function GameStart(){
    let dispatch = useDispatch()

    const handleWordLength = (wordLength) => {
        dispatch(setWordLength({wordLength}));
        
    }

    return(
        <div className="GameStart">
            How long a word would you like to play?
            <div className="WordLengthRefreshContainer">
                
                <div className="WordLengthButtons">
                    <button className="WordLengthButton" onClick={() => handleWordLength(4)}>4</button>
                </div>
                <div className="WordLengthButtons">
                    <button className="WordLengthButton" onClick={() => handleWordLength(5)}>5</button>
                </div>
                <div className="WordLengthButtons">
                    <button className="WordLengthButton" onClick={() => handleWordLength(6)}>6</button>
                </div>
                <div className="WordLengthButtons">
                    <button className="WordLengthButton" onClick={() => handleWordLength(7)}>7</button>
                </div>
                <div className="WordLengthButtons">
                    <button className="WordLengthButton" onClick={() => handleWordLength(8)}>8</button>
                </div>
                <div className="WordLengthButtons">
                    <button className="WordLengthButton" onClick={() => handleWordLength(9)}>9</button>
                </div>
            </div>
        </div>
    ) 
}

export default GameStart;