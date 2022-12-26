import Rocket from '../../assets/images/rocket.png';
import LogoStyles from './Logo.scss';

const Logo = () => {
    return (
        <div className="Logo">
            <img className='rocket' src={Rocket} alt="logo" />
        </div>
    )
}

export default Logo;