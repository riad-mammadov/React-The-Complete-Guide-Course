import completeImage from '../assets/quiz-complete.png'
import { quizQuestions } from '../questions'

export default function Summary({ userAnswers }) {

    const skippedA = userAnswers.filter((answer) => answer === null);
    const correctA = userAnswers.filter((answer, index) => answer === quizQuestions[index].answers[0]);

    const skippedStats = Math.round((skippedA.length / userAnswers.length) * 100)

    const correctStats = Math.round((correctA.length / userAnswers.length) * 100)

    const wrongStats = 100 - skippedStats - correctStats;
    return (<div id="summary">
        <img src={completeImage} alt="" />
        <h2>Quiz Completed</h2>
        <div id="summary-stats">
            <p>
                <span className='number'>{skippedStats}%</span>
                <span className='text'>Skipped</span>

            </p>
            <p>
                <span className='number'>{correctStats}%</span>
                <span className='text'>Answered Correctly</span>

            </p>
            <p>
                <span className='number'>{wrongStats}%</span>
                <span className='text'>Answered Incorrectlly</span>

            </p>
        </div>
        <ol>
            {userAnswers.map((answer, index) => {
                let cssClass = 'user-answer'

                if (answer === null) {
                    cssClass += ' skipped';
                } else if (answer === quizQuestions[index].answers[0]) {
                    cssClass += ' correct'
                } else {
                    cssClass += ' wrong'
                }
                return (
                    <li key={index}>
                        <h3>{index + 1}</h3>
                        <p className='question'>{quizQuestions[index].text}</p>
                        <p className={cssClass}>{answer ?? 'Skipped'}</p>
                    </li>
                );
            })
            }

        </ol>
    </div>)

}