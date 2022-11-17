import './Credits.css'
import videoCultLogo from '../assets/videocultlogo.png'
import adultSwimLogo from '../assets/asg.png'

function Credits() {
    return (
        <div className="container">
            <div className="credits">
                <div className="logos">
                    <img src={videoCultLogo} alt="" id='videocult'/>
                    <img src={adultSwimLogo} alt="" id='adultswimgames'/>
                </div>
            
                <hr />
                <ul className='creditsFamily'>
                    <li>
                        <h1>Joar Jakobsson - Concept, Programming, Art, Design </h1>
                        <p>Joar is a Swedish illustrator and graphic designer who is obsessively interested in every art form there is. He especially enjoys game-making, believing it to be one of the most diverse creative mediums out there. </p>
                    </li>
                    <li>
                        <h1>James Primate - Music, Level Design, Sound, Business Junk </h1>
                        <p>Composer for numerous game soundtracks including Junk Jack X and Gnomoria, James is also one half of Chiptune duo Bright Primate. He can usually be found making music with hacked Gameboys and such. </p>
                    </li>
                    <li>
                        <h1>Allegra "Del" Northern - Artwork/Illustrations, Testing </h1>
                        <p>Del is a freelance illustrator whom we have gradually absorbed into the Rain World team until she's become an integral part of it. In the little freetime she still has she's usually tweeting cat pictures.
</p>
                    </li>
                    <li>
                        <h1>Lydia Esrig - Music and Audio, Voice Acting, Testing </h1>
                        <p>Lydia is the other half of aforementioned Chiptune duo Bright Primate - she has written several Rain World songs and contributed to countless. Legend has it that below the many layers of filtering, the neon lizards' hiss is actually a Lydia Primate voice sample.</p>
                    </li>
                    <li>
                        <h1>ADULT SWIM GAMES - Publishing, QA </h1>
                        <p>We have been lucky to work with Adult Swim Games since very early in the project, and their contribution can't be overstated. Thanks guys!</p>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default Credits;