import { useDispatch } from "react-redux";
import { clearAllData } from "./GameStore";

function GameRestart(){
    let dispatch = useDispatch();

// IF RESTART CLICKED RESET ALL DATA
    const handleRestart = () => {
        dispatch(clearAllData());
    }

// SHOW RESTART BUTTON
return(
    <div className="GameRestart">
        <button className="buttonRestart" onClick={() => handleRestart()}>Re-e-wind</button>
    </div>
)


}

export default GameRestart