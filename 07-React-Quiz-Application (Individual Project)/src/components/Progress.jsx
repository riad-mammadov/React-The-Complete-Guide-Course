import { useEffect, useState } from "react";

export default function Progress({ timer, onTimerFinish, mode }) {
    const [remainingTime, setRemainingTime] = useState(timer);

    useEffect(() => {
        const time = setTimeout(onTimerFinish, timer);

        return () => {
            clearTimeout(time);
        };
    }, [onTimerFinish, timer]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(prevTime => prevTime - 100)
        }, 100);

        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
        <progress id="question-time" value={remainingTime} max={timer} className={mode} />
    )
}