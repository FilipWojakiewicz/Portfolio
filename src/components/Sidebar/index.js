import './index.scss'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo_no_background_green_white.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faChartSimple, faBarsProgress, faBars, faXmark} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    const [menu_class, setMenuClass] = useState("hidden")

    function openMobileMenu() {
        setMenuClass("visible")
    }

    function closeMobileMenu() {
        setMenuClass("hidden")
    }
 
    return (
        <>
            <div className='nav-bar'>
                <Link className='logo' to='/'>
                    <img src={Logo} alt="logo" />
                </Link>
                <button className='open' >
                    {/* <img src={Logo} alt="logo" target="_blank" href="https://www.linkedin.com/in/filip-wojakiewicz-06080922a/" /> */}
                    <FontAwesomeIcon icon={faBars} color='#4d4d4e' className='fa-4x' onClick={openMobileMenu}/>
                </button>

                <div className={"nav-container " + menu_class}>
                    <nav>
                        <button className='close'>
                            <FontAwesomeIcon icon={faXmark} color='#4d4d4e' className='fa-4x' 
                            onClick={closeMobileMenu} />
                        </button>
                        <NavLink onClick={closeMobileMenu} exact="true" activeclassname="active" className="home-link" to="/">
                            <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                        </NavLink>
                        <NavLink onClick={closeMobileMenu} exact="true" activeclassname="active" className="about-link" to="/about">
                            <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                        </NavLink>
                        <NavLink onClick={closeMobileMenu} exact="true" activeclassname="active" className="skills-link" to="/skills">
                            <FontAwesomeIcon icon={faChartSimple} color='#4d4d4e' />
                        </NavLink>
                        <NavLink onClick={closeMobileMenu} exact="true" activeclassname="active" className="projects-link" to="/projects">
                            <FontAwesomeIcon icon={faBarsProgress} color='#4d4d4e' />
                        </NavLink>
                        <NavLink onClick={closeMobileMenu} exact="true" activeclassname="active" className="contact-link" to="/contact">
                            <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                        </NavLink>
                    </nav>
                </div>
                
                <ul className='link-nav'>
                    <li>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/filip-wojakiewicz-06080922a/">
                            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noreferrer" href="https://github.com/FilipWojakiewicz">
                            <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noreferrer" href="https://www.google.com/?gws_rd=ssl">
                            <FontAwesomeIcon icon={faYoutube} color='#4d4d4e' />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Sidebar