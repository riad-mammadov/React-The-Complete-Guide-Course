import { useCallback, useState } from 'react';
import { quizQuestions } from '../questions.js';
import Question from './Question.jsx';
import Summary from './Summary.jsx';

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const currentQuestion = userAnswers.length

    const quizIsComplete = currentQuestion === quizQuestions.length;

    const checkAnswer = useCallback(function checkAnswer(answer) {

        setUserAnswers((prevAnswers) => {
            return (
                [...prevAnswers, answer]
            );
        })

    }, []);

    const handleSkipAnswer = useCallback(() => checkAnswer(null), [checkAnswer])

    if (quizIsComplete) {
        return <Summary userAnswers={userAnswers} />
    }

    return (
        <div id="quiz">
            <Question
                key={currentQuestion}
                index={currentQuestion}
                onSelect={checkAnswer}
                onSkip={handleSkipAnswer}
            />

        </div>
    )
}