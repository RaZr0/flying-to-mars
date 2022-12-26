import { useEffect, useRef, useState } from 'react';
import CountdownStyles from './Countdown.scss';

const DEFAULT_TIMER = 300;

const Countdown = ({ timerInSeconds = DEFAULT_TIMER, onCountdownUpdate }) => {
    const [timer, setTimer] = useState(timerInSeconds);
    const intervalRef = useRef();

    useEffect(() => {
        return clearTimer;
    }, [])

    useEffect(() => {
        if (timerInSeconds)
            initTimer(timerInSeconds);
    }, [timerInSeconds])

    useEffect(() => {
        onCountdownUpdate && onCountdownUpdate(timer);
        if (timer <= 0 && intervalRef.current) {
            alert('You missed the last rocket to mars!');
            clearTimer();
        }
    }, [timer])


    const initTimer = (time) => {
        if (intervalRef.current) {
            clearTimer();
        }

        setTimer(time);

        const interval = setInterval(() => {
            setTimer((t) => {
                return t - 1;
            })
        }, 1000);
        intervalRef.current = interval;
    }


    const clearTimer = () => {
        clearInterval(intervalRef.current);
    }

    const reset = () => {
        initTimer(DEFAULT_TIMER);
    }

    const renderMinutes = () => {
        const minutes = Math.floor(timer / 60);
        return <span className='time'>{minutes.toString().padStart(2, '0')}</span>;
    }

    const renderSeconds = () => {
        const seconds = (timer % 60);
        return <span className='time'>{seconds.toString().padStart(2, '0')}</span>;
    }
    return (
        <div className="Countdown">
            <h2>Countdown to lift off</h2>
            <div className='timer'>
                {renderMinutes()}
                <span>:</span>
                {renderSeconds()}
            </div>
            <button className='reset' onClick={reset}>Reset timer</button>
        </div>
    )
}

export default Countdown;