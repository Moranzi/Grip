import ReactSlider from "react-slider";
import styles from './Duration.module.scss';

interface Props {
    setDuration: React.Dispatch<React.SetStateAction<number>>
    duration: number
}

const Duration = ({ setDuration, duration }: Props) => {
    return (
        <div className={styles.headLine}>
            Duration:<ReactSlider
                value={duration}
                onChange={(value) => setDuration(value)}
                min={15000}
                max={120000}
                className={styles.slider}
                thumbClassName={styles.thumb}
                trackClassName={styles.track}
                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>} />
        </div>
    )
}

export default Duration;