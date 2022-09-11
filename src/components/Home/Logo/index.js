import './index.scss'
import LogoTitle from '../../../assets/images/logo_no_background_black_white_yellow.png'

const Logo = () => {
    return (
        <div className='logo-container'>
            <img className='solid-logo' src={LogoTitle} alt='S'/>
        </div>
    )
}

export default Logo