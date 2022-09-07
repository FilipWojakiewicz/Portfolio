import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo_no_background.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    return (
        <>
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={Logo} alt="logo" />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                    {/* <p className='test'>home</p> */}
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                    {/* <p className='test'>about</p> */}
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                    {/* <p className='test'>contact</p> */}
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.google.com/?gws_rd=ssl">
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.google.com/?gws_rd=ssl">
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