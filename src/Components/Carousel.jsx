import './Carousel.css'
import { useState } from 'react';

let RainWorldI = [
            '../src/assets/rw1.jpg',
            '../src/assets/rw2.jpg',
            '../src/assets/rw3.jpg',
            '../src/assets/rw4.jpg',
            '../src/assets/rw5.jpg',
            '../src/assets/rw6.jpg'
]
let DownPourI = [
    '../src/assets/dp1.png',
    '../src/assets/dp2.png',
    '../src/assets/dp3.png',
    '../src/assets/dp4.png',
    '../src/assets/dp5.png',
    '../src/assets/dp6.png'
]
let RainWorldRI = [
    '../src/assets/rwr1.jpg',
    '../src/assets/rwr2.png',
    '../src/assets/rwr3.png',
    '../src/assets/rwr4.png',
    '../src/assets/rwr5.png',
    '../src/assets/rwr6.png'
]


export const RainWorldCS = () => {
    const [current, setCurrent] = useState(4);
    const length = RainWorldI.length;

    const nextSlide = () => (
        setCurrent(current === length - 1 ? 0 : current + 1)
    )
    const prevSlide = () => (
        setCurrent(current === 0 ? length - 1 : current - 1)
    )

    if(!Array.isArray(RainWorldI) || RainWorldI <= 0) {
        return null
    }
    return (
            <div className="carousel">
                <div className="arrows">
                    <span className='arrow' onClick={prevSlide}>‹</span>
                    <span className='arrow' onClick={nextSlide}>›</span>
                </div>
                {RainWorldI.map((url, index) => {
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

export const DownPourCS = () => {
    const [current, setCurrent] = useState(4);
    const length = DownPourI.length;

    const nextSlide = () => (
        setCurrent(current === length - 1 ? 0 : current + 1)
    )
    const prevSlide = () => (
        setCurrent(current === 0 ? length - 1 : current - 1)
    )

    if(!Array.isArray(DownPourI) || DownPourI <= 0) {
        return null
    }
    return (
            <div className="carousel">
                <div className="arrows">
                    <span className='arrow' onClick={prevSlide}>‹</span>
                    <span className='arrow' onClick={nextSlide}>›</span>
                </div>
                {DownPourI.map((url, index) => {
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

export const RainWorldRCS = () => {
    const [current, setCurrent] = useState(4);
    const length = RainWorldRI.length;

    const nextSlide = () => (
        setCurrent(current === length - 1 ? 0 : current + 1)
    )
    const prevSlide = () => (
        setCurrent(current === 0 ? length - 1 : current - 1)
    )

    if(!Array.isArray(RainWorldRI) || RainWorldRI <= 0) {
        return null
    }
    return (
            <div className="carousel">
                <div className="arrows">
                    <span className='arrow' onClick={prevSlide}>‹</span>
                    <span className='arrow' onClick={nextSlide}>›</span>
                </div>
                {RainWorldRI.map((url, index) => {
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