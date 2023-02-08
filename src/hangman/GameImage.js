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





import { useSelector } from 'react-redux';

function GameImage(){

    const wrongGuesses = useSelector(store => store.hangman.wrongGuesses);

    if (wrongGuesses === 0){
        return(<div className='GameImage'>
            <img src={Image0} width="250px" height="250px" alt="Level 0"/>
            </div>)
    }
    if (wrongGuesses === 1){
        return(<div className='GameImage'>
            <img src={Image1} width="250px" height="250px" alt="Level 0"/>
            </div>)
    }
    if (wrongGuesses === 2){
        return(<div className='GameImage'>
            <img src={Image2} width="250px" height="250px" alt="Level 0"/>
            </div>)
    }
    if (wrongGuesses === 3){
        return(<div className='GameImage'>
            <img src={Image3} width="250px" height="250px" alt="Level 0"/>
            </div>)
    }
    if (wrongGuesses === 4){
        return(<div className='GameImage'>
            <img src={Image4} width="250px" height="250px" alt="Level 0"/>
            </div>)
    }
    if (wrongGuesses === 5){
        return(<div className='GameImage'>
            <img src={Image5} width="250px" height="250px" alt="Level 0"/>
            </div>)
    }
    if (wrongGuesses === 6){
        return(<div className='GameImage'>
            <img src={Image6} width="250px" height="250px" alt="Level 0"/>
            </div>)
    }
    if (wrongGuesses === 7){
        return(<div className='GameImage'>
            <img src={Image7} width="250px" height="250px" alt="Level 0"/>
            </div>)
    }
    if (wrongGuesses === 8){
        return(<div className='GameImage'>
            <img src={Image8} width="250px" height="250px" alt="Level 0"/>
            </div>)
    }
    if (wrongGuesses === 9){
        return(<div className='GameImage'>
            <img src={Image9} width="250px" height="250px" alt="Level 0"/>
            </div>)
    }
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
export default GameImage;