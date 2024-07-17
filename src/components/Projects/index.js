import './index.scss'
import Loader from '../Loader'
import Project from './Project'
import PopupText from '../PopupText'
import React, { useEffect, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setLetterClass('text-animate-hover')
    }, [])

    VanillaTilt.init(document.querySelectorAll(".project-card"));

    return (
        <>
            <div className='container projects-page'>
                <div>
                    <h1>
                    <PopupText letterClass={letterClass} 
                    strArray={['M', 'y', ' ', 'p', 'r', 'o', 'j', 'e', 'c', 't', 's']} 
                    idx={15}></PopupText>
                    </h1>
                </div>

                <div className='project-grid'>
                    <Project name={"Event App"} tools={".NET | C# | React"}></Project>
                    <Project name={"Food App"} tools={".NET | C# | React"}></Project>
                    <Project name={"Game App"} tools={".NET | C# | React"}></Project>
                </div>
            </div>
       
            <Loader></Loader>
        </>
    )
};

export default Projects