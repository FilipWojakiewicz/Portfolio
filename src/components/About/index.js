import './index.scss'
import PopupText from '../PopupText'
import Loader from '../Loader'
import Profile from '../../assets/images/pic.png'
import React, { useEffect, useState } from 'react';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setLetterClass('text-animate-hover')
    }, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text'>
                <h1>
                    <PopupText letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15}></PopupText>
                </h1>
                <p>
                    asdddddddddddd ddddddddddddddddd dddddddddddd dddddddddd
                    adssssssss sssssssssss ssssssssssssssssss sssssssssssssss
                    dassssssssssss sssssssssssssss sssssssssss sssssssssssssss
                </p>
                <p>
                    asdddddddd dddddddddddddddddd ddddddddd dddddddddddddddd
                    adssssssssssssssssssssssssssssss ssssssssssssssssssssss
                    dassssssssssssss ssssssssssss sssssssssss ssssssssssssssss
                </p>
                <p>
                    asddddddddddddddddddd ddddddddddddddd ddddddddddddddddd
                    adsssssssssssssssssss sssssss  ssssssssssssssssssss ssssss
                    dasssssssssssssss ssssssssssssssssss sssssssssss sssssssss
                </p>
            </div>

            <div className='image-zone'>
                <img src={Profile} className="background-img" alt="Background"/>
            </div>
        </div>
        <Loader></Loader>
        </>
    )
}

export default About