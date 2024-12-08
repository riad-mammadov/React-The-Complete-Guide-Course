import Progress from "./Progress"
import Answers from "./Answers"
import { useState } from "react"
import { quizQuestions } from "../questions"

export default function Question({ index, onSelect, onSkip }) {
    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    })

    let timer = 10000;

    if (answer.selectedAnswer) {
        timer = 1000;
    }

    if (answer.isCorrect !== null) {
        timer = 2000
    }

    function handleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: quizQuestions[index].answers[0] === answer
            })

            setTimeout(() => {
                onSelect(answer);
            }, 2000);
        }, 1000);
    }

    let answerState = '';
    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? 'correct' : 'wrong'
    } else if (answer.selectedAnswer) {
        answerState = 'answered'
    }

    return (
        <div id="questions">
            <Progress key={timer} timer={timer} onTimerFinish={answer.selectedAnswer === '' ? onSkip : null} mode={answerState} />
            <h2>
                {quizQuestions[index].text}
            </h2>
            <Answers onSelect={handleSelectAnswer} answers={quizQuestions[index].answers} selectedAnswer={answer.selectedAnswer} answerState={answerState} />

        </div>
    )
}