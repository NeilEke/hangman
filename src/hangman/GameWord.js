import { useDispatch, useSelector } from "react-redux";
import { updateContained, setRunBefore, setWordInPlay, showLetter} from "./GameStore";

function GameWord(){
    let dispatch = useDispatch();
    let array4Letter = ['Skin','Vied','Ruck','Seak','Gyre','Aces','Part','Crup','Halo','Gite','Wily','Kame','Feel','Agha','Scry','Vest','Mist','Zest','Rent','Neve','Grig','Dais','Lava','Unit','Tone','Live','Coif','Port','Dice','Open','Herd','Adaw','Hemp','Seek','Gift','Fain','Warm','Aery','Hail','Sold','Dich','Clam','Head','Pyre']
    let array5Letter = ['Modii','Shent','Funic','Benim','Fifth','Ether','Skein','Empty','Shoot','Lieve','Sayer','Krems','Noble','Niste','Drain','Upher','Caber','Cubic','Cadie','Trowl','Sithe','Drift','Sanny','Excur']
    let array6Letter = ['Heddle','Queasy','Avowed','Pixies','Stelae','Hardly','Pedage','Vamure','Unform','Reverb','Linger','Ending','Tureen','Cloggy','Coffin','Wasite','Filter','Eyalet','Wigged','Mescal','Tetter','Bopeep','Bundle','Behind']
    let array7Letter = ['Laterad','Sculpin','Pinweed','Chalaze','Ennoble','Iridium','Sciatic','Pivotal','Threste','Reprize','Unbowed','Scaling','Salicyl','Fracted','Flawter','Holding','Certain','Earning','Dermoid','Chiasma','Beamlet','Stammer','Outpart','Bewreke']
    let array8Letter = ['Policied','Nataloin','Trivalve','Fordrive','Conflict','Hardbeam','Cubation','Flecking','Parthian','Indurate','Blazonry','Foreseer','Coopered','Univalve','Stayedly','Disleave','Stacking','Swinking','Tumbling','Porously','Vulnific','Investor','Sea piet','Arrestee']
    let array9Letter = ['Namaycush','Deathlike','Pitchfork','Obedience','Magnetize','Preceding','Expanding','Soldering','Fecundate','Caesarism','Polyedron','Expensive','Forfeited','Galenical','Melanosis','Forcement','Polyandry','Exemplary','Hospitate','Omphacine','Supplying','Expedient','Barrelled','Dandelion']

    let returnArray = []
    const wordLength = useSelector(store => store.hangman.wordLength);
    const runBefore = useSelector(store => store.hangman.runBefore);
    const wordInPlay = useSelector(store => store.hangman.wordInPlay);
    const hiddenLetter = useSelector (store => store.hangman.showLetter);

    if (runBefore === false) {
        dispatch(setRunBefore({runBefore: true}))
   
        if (wordLength === 4){
            let random = Math.floor(Math.random() * array4Letter.length)
            let chosenWord = array4Letter[random].toUpperCase()
            dispatch(setWordInPlay({chosenWord}))
            for(let i=0; i < wordLength; i++){
                let letterContained = chosenWord[i] 
                dispatch(updateContained({letterContained}))
            }
            for(let i=0; i < wordLength; i++){
                dispatch(showLetter({i}))
            }
        }  
        
        if (wordLength === 5){
            let random = Math.floor(Math.random() * array5Letter.length)
            let chosenWord = array5Letter[random].toUpperCase()
            dispatch(setWordInPlay({chosenWord}))
            for(let i=0; i < wordLength; i++){
                let letterContained = chosenWord[i] 
                dispatch(updateContained({letterContained}))
            }
            for(let i=0; i < wordLength; i++){
                dispatch(showLetter({i}))
            }
        }
        
        if (wordLength === 6){
            let random = Math.floor(Math.random() * array6Letter.length)
            let chosenWord = array6Letter[random].toUpperCase()
            dispatch(setWordInPlay({chosenWord}))
            for(let i=0; i < wordLength; i++){
                let letterContained = chosenWord[i] 
                dispatch(updateContained({letterContained}))
            }
            for(let i=0; i < wordLength; i++){
                dispatch(showLetter({i}))
            }
        }

        if (wordLength === 7){
            let random = Math.floor(Math.random() * array7Letter.length)
            let chosenWord = array7Letter[random].toUpperCase()
            dispatch(setWordInPlay({chosenWord}))
            for(let i=0; i < wordLength; i++){
                let letterContained = chosenWord[i] 
                dispatch(updateContained({letterContained}))
            }
            for(let i=0; i < wordLength; i++){
                dispatch(showLetter({i}))
            }
        }

        if (wordLength === 8){
            let random = Math.floor(Math.random() * array8Letter.length)
            let chosenWord = array8Letter[random].toUpperCase()
            dispatch(setWordInPlay({chosenWord}))
            for(let i=0; i < wordLength; i++){
                let letterContained = chosenWord[i] 
                dispatch(updateContained({letterContained}))
            }
            for(let i=0; i < wordLength; i++){
                dispatch(showLetter({i}))
            }
        }

        if (wordLength === 9){
            let random = Math.floor(Math.random() * array9Letter.length)
            let chosenWord = array9Letter[random].toUpperCase()
            dispatch(setWordInPlay({chosenWord}))
            for(let i=0; i < wordLength; i++){
                let letterContained = chosenWord[i] 
                dispatch(updateContained({letterContained}))
            }
            for(let i=0; i < wordLength; i++){
                dispatch(showLetter({i}))
            }
        }
    }

        for(let i = 0; i < wordLength; i++){
            returnArray.push(
                <div className={hiddenLetter[i] ? "GameLetter" : "Hidden"}>
                    {wordInPlay[i]}
                </div>)
        }

           
    // RETURN // 
    return(
        <div className="GameWord">
            {returnArray}
        </div>
    )
}

export default GameWord;