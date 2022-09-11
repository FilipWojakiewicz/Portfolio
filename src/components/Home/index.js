import './index.scss'
import LogoTitle from '../../assets/images/logo_no_background_black_white.png'

import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import PopupText from '../PopupText'
import Logo from '../Home/Logo'
import Loader from '../Loader'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['i', 'l', 'i', 'p']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        setLetterClass('text-animate-hover')
    }, [])

    return (
        <>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _10`}>i</span>
                    <span className={`${letterClass} _11`}>,</span>
                <br/>
                <span className={`${letterClass} _12`}>I</span>
                <span className={`${letterClass} _13`}>'</span>
                <span className={`${letterClass} _14`}>m</span>
                <img src={LogoTitle} alt="developer" />
                <PopupText letterClass={letterClass} strArray={nameArray} idx={15}/>
                <br/>
                <PopupText letterClass={letterClass} strArray={jobArray} idx={22}/>
                </h1>
                <h2> Frontend Developer / JavaScript Developer </h2>
                <Link to="/contact" className='flat-button'> CONTACT ME!</Link>
            </div>
            <Logo></Logo>
        </div>

        <Loader></Loader>
        </>
    );
}

export default Home