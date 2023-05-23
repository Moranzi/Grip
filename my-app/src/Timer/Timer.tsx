import { useEffect, useState } from 'react';
import Duration from './Duration/Duration';
import TimeLeft from './TimeLeft/TimeLeft';
import styles from './Timer.module.scss'
const Timer = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [currTime, setCurrTime] = useState(0);
    const [duration, setDuration] = useState(60000);

    const startAndStop = () => {
        setIsRunning(!isRunning);
    }
    const reset = () => {
        setCurrTime(0);
        setIsRunning(false);
    }
    useEffect(() => {
        let intervalId: any;
        if (isRunning) {
            intervalId = setInterval(() => {
                if (duration - currTime === 0) {
                    reset();
                }
                else {
                    setCurrTime(currTime + 1)
                }
            }, 10);
        }
        return () => clearInterval(intervalId);
    }, [isRunning, currTime]);

    return (
        <div className={styles.timerContainer}>
            <div className={styles.headLine}>Timer</div>
            <div className={styles.timerContent}>
                <TimeLeft currentTime={currTime} duration={duration} />
                <Duration setDuration={setDuration} duration={duration} />
                <button className={styles.btn} onClick={startAndStop}>{isRunning ? "Reset" : "Start"}</button>
            </div>
        </div>
    )
}

export default Timer;