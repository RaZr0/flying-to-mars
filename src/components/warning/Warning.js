import Hero from '../../assets/images/hero.png';
import WarningStyles from './Warning.scss';

const Warning = () => {
    return (
        <div className="Warning">
            <div>
                <h1 className='title'>Get your seat to Mars!</h1>
                <p>Earth is doomed, but don't worry! The last rocket is leaving for mars soon, so hurry up and book your flight!</p>
            </div>
            <img className='hero' src={Hero} alt="hero" />
        </div>
    )
}

export default Warning;