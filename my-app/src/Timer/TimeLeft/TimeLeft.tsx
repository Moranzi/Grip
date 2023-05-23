import styles from './TimeLeft.module.scss';

interface Props {
    currentTime: number;
    duration: number
}
const TimeLeft = ({ currentTime, duration }: Props) => {
    document.documentElement.style.setProperty("--percentageColor", `${(currentTime / duration) * 100}%`);
    document.documentElement.style.setProperty("--percentageColorLeft", `${100-(currentTime / duration) * 100}%`);

    return (
        <div className={styles.headLine}>Elapsed time:
            <div className={styles.leftTime}>{(duration - currentTime)} </div>
        </div>
    )
}

export default TimeLeft;