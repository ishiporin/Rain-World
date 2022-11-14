import './RainWorld.css'
import Trailer from './Trailer';
import { RainWorldCS } from './Carousel';

function RainWorld() {
    return (
        <div className="rwContainer">
            <div className="rwBackground">
                <img src="../src/assets/RainWorldBanner.png" alt="" /> 
            </div>
            <div className="rwContent">
                <div className="rwBiography">
                    <p>You are a nomadic slugcat, both predator and prey in a broken ecosystem. Grab your spear and brave the industrial wastes, hunting enough food to survive, but be wary— other, bigger creatures have the same plan... and slugcats look delicious.
                    </p>
                    <Trailer />
                    <p>You are a slugcat. The world around you is full of danger, and you must face it alone. Separated from your family in a devastating flood, you must hunt for food and shelter between terrifying torrential downpours that threaten to drown all life. Climb through the ruins of an ancient civilization, evade the jaws of vicious predators, and discover new lands teeming with strange creatures and buried mysteries. Find your family before death finds you! Inspired by the simplicity and aesthetics of 16-bit classics, this survival platformer requires fast-paced sneaking, both upon your own prey and past the jaws of hungry predators. Each ravenous foe in your path will be cunning, vicious and always on the hunt – eager to sink their teeth into you, or even each other. As a small, soft slugcat you must to rely on stealth and wit rather than force: learn the ecosystem and turn their strengths to your advantage. Maybe then you can survive… Rain World!
</p>
                    <ul className='moreAboutRW'>
                        <li>Sneak, climb, and pounce your way through a dynamic, ever-changing ecosystem of predators and prey
</li>
                        <li>Explore a vast world of over 1600 rooms, spanning 12 diverse regions filled with ancient secrets and undiscovered dangers</li>
                        <li>Nimble movements and procedurally generated animation gives slugcat a natural fluidity of movement and unique sense of weight
</li>
                        <li>Intense, primal predator encounters will challenge your reflexes
</li>
                        <li>Limited resources and the constant, impending threat of rain will test your nerve
</li>
                    </ul>
                </div>
                
                <div className="rwCarousel">
                    <RainWorldCS />
                </div>
            </div>        
        </div>
    )}
export default RainWorld;