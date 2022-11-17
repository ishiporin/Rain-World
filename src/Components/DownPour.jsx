import { DownPourCS } from './Carousel';
import './DownPour.css'
import dpBanner from '../assets/DownPourBanner.png'

import artf from '../assets/artificier.png'
import grmd from '../assets/gourmand.png'
import rvlt from '../assets/rivulet.png'
import sint from '../assets/saint.png'
import spmt from '../assets/spearmaster.png'

function DownPour() {
    return (
        <div className="container">
            <div className="rwContainer">
            <div className="dpBackground">
                <img src={dpBanner} alt="" /> 
            </div>
            <div className="rwContent">
                <div className="dpBiography">
                    <p>Rain World: Downpour is a DLC expansion of Rain World. Take control of five new characters with new abilities in this vast, redefined world. Slugcats have adapted to the harsh conditions alongside evolved predators! Survive new environmental conditions, dangers and explore uncharted territory. Return to the unwavering wild in Downpour, where you explore new, harsh lands and survive new predators. As time passed, the slugcat has evolved. With five variants of the species - take advantage of various skills that they possess and explore their own personal tales.
                    </p>
                    <ul className='newSlugcats'>
                        <li className='slugcat'>
                            <img src={artf} alt="" />
                            <div className="aboutSC">
                                <h1>The Artificier</h1>
                                <p>The Artificer is an explosive expert and can transform rocks into grenades and spears into explosive spears, however doing this costs food so they can risk going hungry.</p>
                            </div>
                        </li>
                        <li className='slugcat'>
                            <img src={grmd} alt="" />
                            <div className="aboutSC">
                                <h1>The Gourmand</h1>
                                <p>The Gourmand loves a good meal and can craft delicious dishes or useful tools for itself with the right materials but his large size makes him slower and less manuverable.</p>
                            </div>
                        </li>
                        <li  className='slugcat'>
                            <img src={rvlt} alt="" />
                            <div className="aboutSC">
                                <h1>The Rivulet</h1>
                                <p>The Rivulet jumps higher and runs faster than any other slugcats but they have less time in between the deadly rains to get food, travel through the different regions, and find shelter.</p>
                            </div>
                        </li>
                        <li className='slugcat'>
                            <img src={sint} alt="" />
                            <div className="aboutSC">
                                <h1>The Saint</h1>
                                <p>The Saint can swing through the air and over hazards using its long, long tongue, but commits to its pacifist ideology by eschewing spears.</p>
                            </div>
                        </li>
                        <li className='slugcat'>
                            <img src={spmt} alt="" />
                            <div className="aboutSC">
                                <h1>The Spearmaster</h1>
                                <p>The Spearmaster grows bony spears from their tail giving them constant access to weapons, but without a mouth they can't eat the easily plucked danglefruit and batflies.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                
                <div className="dpCarousel">
                    <p>The expansion includes optional additional mechanical additions that allows for a spin on the Rain World experience – tutorialized hints, alternate routing options, a new map system, handy collectibles tracker for storyline completion, and many more.
</p>
                    <DownPourCS />
                </div>
            </div>        
        </div>
        </div>
    )
}

export default DownPour;