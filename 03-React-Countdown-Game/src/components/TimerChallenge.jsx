import { useState, useRef } from "react"
import ResultModal from "./ResultModal.jsx";
export default function TimerChallenge({ difficulty, targetTime }) {

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)
    const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
    const stopTimer = useRef();
    const dialog = useRef();

    if (timeRemaining <= 0) {
        clearInterval(stopTimer.current);
        dialog.current.open();
    }

    function handleResetTime() {
        setTimeRemaining(targetTime * 1000);

    }

    function handleStart() {
        stopTimer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
        }, 10);

    }

    function stopChallenge() {
        clearInterval(stopTimer.current);
        dialog.current.open();
    }

    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleResetTime} />
            <section className="challenge">
                <h2>{difficulty}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <button onClick={timeIsActive ? stopChallenge : handleStart}>
                    {timeIsActive ? 'Stop' : 'Start'} Challenge
                </button>
                <p className={timeIsActive ? "active" : undefined}>
                    {timeIsActive ? "Time is running" : "Timer inactive"}
                </p>
            </section>
        </>
    )
}