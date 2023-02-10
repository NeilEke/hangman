// IMPORT ALL IMAGES AND FAIL VIDEO
import Video from './images/Hangman10.mp4';
import Image0 from './images/Hangman0.png';
import Image1 from './images/Hangman1.png';
import Image2 from './images/Hangman2.png';
import Image3 from './images/Hangman3.png';
import Image4 from './images/Hangman4.png';
import Image5 from './images/Hangman5.png';
import Image6 from './images/Hangman6.png';
import Image7 from './images/Hangman7.png';
import Image8 from './images/Hangman8.png';
import Image9 from './images/Hangman9.png';

// IMPORT
import { useSelector } from 'react-redux';


function GameImage(){
// IMPORT STATE AND SET IMAGE ARRAY
    const wrongGuesses = useSelector(store => store.hangman.wrongGuesses);
    let imageArray = [Image0, Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9]
// IF WRONG GUESSES < 10 SHOW IMAGE
    if(wrongGuesses < 10){
        return(
            <div className='GameImage'>
            <img src={imageArray[wrongGuesses]} width="250px" height="250px" alt="Level 0"/>
            </div>
        )        
    }
// IF WRONG GUESS = 10 SHOW VIDEO
    if(wrongGuesses === 10){
        return(<div className="GameImage">
                <video
                src={Video}
                muted
                width="250px" height="250px"
                autoPlay={"autoplay"}
                preload="auto"
                loop
                > 
                something 
                </video>
            </div>) 
    } 
}

// EXPORT 
export default GameImage;