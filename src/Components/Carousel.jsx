import './Carousel.css'
import { useState, useEffect, useImage } from 'react';

import rw1 from '../assets/rw1.jpg'
import rw2 from '../assets/rw2.jpg'
import rw3 from '../assets/rw3.jpg'
import rw4 from '../assets/rw4.jpg'
import rw5 from '../assets/rw5.jpg'
import rw6 from '../assets/rw6.jpg'
import dp1 from '../assets/dp1.png'
import dp2 from '../assets/dp2.png'
import dp3 from '../assets/dp3.png'
import dp4 from '../assets/dp4.png'
import dp5 from '../assets/dp5.png'
import dp6 from '../assets/dp6.png'

let rainWorldI = [
            rw1,
            rw2,
            rw3,
            rw4,
            rw5,
            rw6
]
let downPourI = [
    dp1,
    dp2,
    dp3,
    dp4,
    dp5,
    dp6
]
// let RainWorldRI = [
//     '../src/assets/rwr1.jpg',
//     '../src/assets/rwr2.png',
//     '../src/assets/rwr3.png',
//     '../src/assets/rwr4.png',
//     '../src/assets/rwr5.png',
//     '../src/assets/rwr6.png'
// ]

export const RainWorldCS = () => { 
 useEffect(() => {
     rainWorldI.forEach((url) => {
        const img = new Image();
        img.src = url;
     }), [rainWorldI]
})
    const [current, setCurrent] = useState(4);
    const length = rainWorldI.length;
    const nextSlide = () => (
        setCurrent(current === length - 1 ? 0 : current + 1)
    )
    const prevSlide = () => (
        setCurrent(current === 0 ? length - 1 : current - 1)
    )
    if(!Array.isArray(rainWorldI) || rainWorldI <= 0) {
        return null
    }

    const loadedImage = () => {
        console.log('Loaded')
    }
    return (
            <div className="carousel">
                <div className="arrows">
                    <span className='arrow' onClick={prevSlide}>‹</span>
                    <span className='arrow' onClick={nextSlide}>›</span>
                </div>
                {rainWorldI.map((url, index) => {
                    return (
                        <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}>
                            {index === current && (
                            <img src={url} alt='screenshot' key={index} className='slideImage' onLoad={loadedImage}/>
                            )}
                        </div>
                    )
                })}
            </div>
    )
}
export const DownPourCS = () => {
    useEffect(() => {
        downPourI.forEach((url) => {
            const img = new Image();
            img.src = url;
        }), [downPourI]
    })

    const [current, setCurrent] = useState(1);
    const length = downPourI.length;

    const nextSlide = () => (
        setCurrent(current === length - 1 ? 0 : current + 1)
    )
    const prevSlide = () => (
        setCurrent(current === 0 ? length - 1 : current - 1)
    )

    if(!Array.isArray(downPourI) || downPourI <= 0) {
        return null
    }
    return (
            <div className="carousel">
                <div className="arrows">
                    <span className='arrow' onClick={prevSlide}>‹</span>
                    <span className='arrow' onClick={nextSlide}>›</span>
                </div>
                {downPourI.map((url, index) => {
                    return (
                        <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}>
                            {index === current && (<img src={url} alt='screenshot' key={index} className='slideImage'/>)}
                        </div>
                    )
                })}
            </div>
    )
}

// export const RainWorldRCS = () => {
//     const [current, setCurrent] = useState(4);
//     const length = RainWorldRI.length;

//     const nextSlide = () => (
//         setCurrent(current === length - 1 ? 0 : current + 1)
//     )
//     const prevSlide = () => (
//         setCurrent(current === 0 ? length - 1 : current - 1)
//     )

//     if(!Array.isArray(RainWorldRI) || RainWorldRI <= 0) {
//         return null
//     }
//     return (
//             <div className="carousel">
//                 <div className="arrows">
//                     <span className='arrow' onClick={prevSlide}>‹</span>
//                     <span className='arrow' onClick={nextSlide}>›</span>
//                 </div>
//                 {RainWorldRI.map((url, index) => {
//                     return (
//                         <div
//                         className={index === current ? 'slide active' : 'slide'}
//                         key={index}>
//                             {index === current && (<img src={url} alt='screenshot' key={index} className='slideImage'/>)}
//                         </div>
//                     )
//                 })}
//             </div>
//     )
// }