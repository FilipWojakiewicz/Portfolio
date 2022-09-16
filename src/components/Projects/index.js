import './index.scss'
import Loader from '../Loader'
import ParticleSnow from '../ParticleSnow'
import Project from './Project'
import PopupText from '../PopupText'
import React, { useEffect, useState } from 'react';

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setLetterClass('text-animate-hover')
    }, [])

    return (
        <>
        <div className='container projects-page'>
            {/* <ParticleSnow></ParticleSnow> */}
            <div className='main-zone'> 
                <div className='project-zone'>
                    <div>
                        <h1>
                        <PopupText letterClass={letterClass} 
                        strArray={['M', 'y', ' ', 'p', 'r', 'o', 'j', 'e', 'c', 't', 's']} 
                        idx={15}></PopupText>
                        </h1>
                    </div>
                    <div className='project-grid'>
                        <Project tools={"JavaScript, ReactJS, C#, .NET ..."} name={"Facebook Clone"} year={"2022"} description={"Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla"}/>
                    </div>
                </div>

                <div className='project-zone'>
                    <div>
                        <h1>
                        <PopupText letterClass={letterClass} 
                        strArray={['C', 'o', 'm', 'm', 'e', 'r', 't', 'i', 'a', 'l', ' ', 'p', 'r', 'o', 'j', 'e', 'c', 't','s']} 
                        idx={15}></PopupText>
                        </h1>
                    </div>

                    <div className='project-grid'>
                        <Project tools={"C#, Unity, Mirror, LiteNetLib"} name={"Pong Royale"} year={"2021"} description={"Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla"}/>
                        <Project tools={"C#, Unity, Mirror, TopDownEngine"} name={"Mafia Theft Auto"} year={"2022"} description={"Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla"}/>
                    </div>
                    
                </div>

                <div className='project-zone'>
                    <div>
                        <h1>
                        <PopupText letterClass={letterClass} 
                        strArray={['A', 'c', 'a', 'd', 'e', 'm', 'i', 'c', ' ', 'p', 'r', 'o', 'j', 'e', 'c', 't','s']} 
                        idx={15}></PopupText>
                        </h1>
                    </div>

                    <div className='project-grid scroll'>
                        <Project tools={"Java, JavaFX"} name={"Bandwidth Calculator"} year={"2021"} description={"Bla bla bla bla bla bla"}/>
                        <Project tools={"Java, LibGDX"} name={"World Runner"} year={"2021"} description={"Bla bla bla bla bla bla"}/>
                        <Project tools={"Python, OpenCV, PyTesseract"} name={"Licence Plate Detector"} year={"2021"} description={"Bla bla bla bla bla bla"}/>
                        <Project tools={"Python, Matlab, NumPy"} name={"JPEG/JPEG2000 Compressor"} year={"2021"} description={"Bla bla bla bla bla bla"}/>
                        <Project tools={"C#, Unity"} name={"Block Packing Problem"} year={"2021"} description={"Bla bla bla bla bla bla"}/>
                        <Project tools={"Java, Firebase, Android, OpenCV"} name={"Social Application"} year={"2022"} description={"Bla bla bla bla bla bla"}/>
                        <Project tools={"C++, SFML"} name={"Snake Game"} year={"2019"} description={"Bla bla bla bla bla bla"}/>
                    </div>
                    
                </div>
            </div>
        </div>
        <Loader></Loader>
        </>
    )
};

export default Projects