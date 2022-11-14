import './Footer.css'

function Footer() {
    return (
        <div className="container">
            <div className="storesLogos">
                <img src="../src/assets/ps4.png" alt="" />
                <img src="../src/assets/steam.png" alt="" />
                <img src="../src/assets/switch.png" alt="" />
            </div>
            <hr />
            <p id='copyright'>©Joar Jakobsson 2022. 
©2022 Valve Corporation. Steam and the Steam logo are trademarks and/or registered trademarks of Valve Corporation in the U.S. and/or other countries.  “PlayStation Family Mark” and “PS4 logo” are registered trademarks or trademarks of Sony Interactive Entertainment Inc. Nintendo Switch is a trademark of Nintendo.</p>
        </div>
    )
}

export default Footer;