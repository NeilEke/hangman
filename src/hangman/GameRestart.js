import { useDispatch } from "react-redux";
import { clearAllData } from "./GameStore";

function GameRestart(){
    let dispatch = useDispatch();

    const handleRestart = () => {
        dispatch(clearAllData());
    }

return(
    <div className="GameRestart">
        <button className="buttonRestart" onClick={() => handleRestart()}>Re-e-wind</button>
    </div>
)


}

export default GameRestart