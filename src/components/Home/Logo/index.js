import './index.scss'
import LogoTitle from '../../../assets/images/logo_no_background.png'

const Logo = () => {
    return (
        <div className='logo-container'>
            <img className='solid-logo' src={LogoTitle} alt='S'/>
        </div>
    )
}

export default Logo