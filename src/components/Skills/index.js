import './index.scss'
import PopupText from '../PopupText'
import SingleSkill from './SingleSkill'
import Experience from './Experience'
import Loader from '../Loader'
import React, { useEffect, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';


const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setLetterClass('text-animate-hover')
    }, [])
    
    VanillaTilt.init(document.querySelectorAll(".skill-card"));
    VanillaTilt.init(document.querySelectorAll(".exp-card"));

    return (
        <>
        <div className='container skills-page'>
            <div className='myskill-zone'>
                <h1>
                    <PopupText letterClass={letterClass} 
                    strArray={['S', 'k', 'i', 'l', 'l', 's']} 
                    idx={15}></PopupText>
                </h1>
                <div className='skill-card' data-tilt data-tilt-max="4" data-tilt-speed="1000" data-tilt-perspective="1500">
                    <div className='skill-content'>
                        <div className='skill-zone'>
                            <SingleSkill delay={1.7} amount={80} name={"C#"}></SingleSkill>
                            <SingleSkill delay={1.8} amount={70} name={".NET"}></SingleSkill>
                            <SingleSkill delay={1.9} amount={60} name={"ReactJS"}></SingleSkill>
                            <SingleSkill delay={2}  amount={50} name={"HTML & CSS"}></SingleSkill>
                            <SingleSkill delay={2.1} amount={60} name={"Git"}></SingleSkill>
                            <SingleSkill delay={2.2} amount={30} name={"SQL"}></SingleSkill>
                        </div>
                    </div>
                </div>   
            </div>

            <div className='exp-zone'>
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
                    position={'Trainee'}
                    year={'2021 - summer'}
                    description={'Pixel bla bla blaa la bla bla bla bla '}
                    />
                </div>
            </div>
        </div>
        <Loader></Loader>
        </>
    )
};

export default Skills