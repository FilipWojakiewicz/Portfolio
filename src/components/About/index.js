import './index.scss'
import PopupText from '../PopupText'
import Loader from '../Loader'
import Background from '../../assets/images/background_image.png'
import React, { useEffect, useState } from 'react';
import ParticleSnow from '../ParticleSnow'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setLetterClass('text-animate-hover')
    }, [])

    return (
        <>
        <div className='container about-page'>
            {/* <ParticleSnow></ParticleSnow> */}
            <div className='text-zone'>
                <h1>
                    <PopupText letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15}></PopupText>
                </h1>
                <p>
                    asddddddddddddddddddddddddddddddddddddddddddddddddddd
                    adssssssssssssssssssssssssssssssssssssssssssssssssssss
                    dasssssssssssssssssssssssssssssssssssssssssssssssssssss
                </p>
                <p>
                    asddddddddddddddddddddddddddddddddddddddddddddddddddd
                    adssssssssssssssssssssssssssssssssssssssssssssssssssss
                    dasssssssssssssssssssssssssssssssssssssssssssssssssssss
                </p>
                <p>
                    asddddddddddddddddddddddddddddddddddddddddddddddddddd
                    adssssssssssssssssssssssssssssssssssssssssssssssssssss
                    dasssssssssssssssssssssssssssssssssssssssssssssssssssss
                </p>
            </div>

            <div className='image-zone'>
                <img src={Background} className="background-img" alt="Background" width="500px" height="auto"/>
                <div className='overlay'>
                    <h2>First, solve the problem. Then, write the code.</h2>
                    <h3>John Johnson</h3>
                </div>
            </div>

            <div className='blend'></div>
        </div>
        <Loader></Loader>
        </>
    )
}

export default About