import './index.scss'
import PopupText from '../PopupText'
import SingleSkill from './SingleSkill'
import Experience from './Experience'
import Loader from '../Loader'
import React, { useEffect, useState } from 'react';
import ParticleSnow from '../ParticleSnow'

const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setLetterClass('text-animate-hover')
    }, [])
    
    return (
        <>
        <div className='container skills-page'>
            {/* <ParticleSnow></ParticleSnow> */}
            <div className='text-zone'>
                <h1>
                    <PopupText letterClass={letterClass} 
                    strArray={['M', 'y', ' ', 's', 'k', 'i', 'l', 'l', 's']} 
                    idx={15}></PopupText>
                </h1>
                <p>
                    asddddddddddddddddddddddddddddddddddddddddddddddddddd
                    adssssssssssssssssssssssssssssssssssssssssssssssssssss
                    dasssssssssssssssssssssssssssssssssssssssssssssssssssss
                    asddddddddddddddddddddddddddddddddddddddddddddddddddd
                    adssssssssssssssssssssssssssssssssssssssssssssssssssss
                    dasssssssssssssssssssssssssssssssssssssssssssssssssssss
                    asddddddddddddddddddddddddddddddddddddddddddddddddddd
                    adssssssssssssssssssssssssssssssssssssssssssssssssssss
                    dasssssssssssssssssssssssssssssssssssssssssssssssssssss
                </p>
                <br></br>
                <h1>
                    <PopupText letterClass={letterClass} 
                    strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']} 
                    idx={15}></PopupText>
                </h1>
                <div className='experience-zone'>
                    <Experience company={'Pixel Storm'}
                                position={'Trainee'}
                                year={'2021 - summer'}
                                description={'Pixel bla bla blaa la bla bla bla bla '}
                                />
                    <Experience company={'Pixel Storm'}
                                position={'Game Developer'}
                                year={'2021 - 2022'}
                                description={'Pixel bla bla blaa la bla bla bla bla '}
                                />
                </div>
                
            </div>
            <div className='skill-zone'>
                <SingleSkill delay={1.7} amount={80} name={"C#"}></SingleSkill>
                <SingleSkill delay={1.8} amount={70} name={".NET"}></SingleSkill>
                <SingleSkill delay={1.9} amount={60} name={"ReactJS"}></SingleSkill>
                <SingleSkill delay={2}  amount={50} name={"HTML & CSS"}></SingleSkill>
                <SingleSkill delay={2.1} amount={60} name={"Git"}></SingleSkill>
                <SingleSkill delay={2.2} amount={30} name={"SQL"}></SingleSkill>
            </div>
        </div>
        <Loader></Loader>
        </>
    )
};

export default Skills