import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AnswerCheck from '../answer-check/AnswerCheck';
import Question from '../question/Question';
import Result from '../result/Result';

const ReviewSection = () => {

    const { user_answers } = useSelector(state => state.userAnswers);
    const correct_answers = useSelector(state => state.userAnswers.attempt_result.correctAnswers);
    const { score, scoreText } = useSelector(state => state.userAnswers.attempt_result);
    // console.log(useSelector(state => state.userAnswers.attempt_result._id));

    // const state = useSelector(state => state);
    console.log(user_answers);
    console.log(correct_answers);

    // console.log(state);

    useEffect(() => {
        // console.log('I am fired')
        const input_div = document.querySelectorAll('input[type="radio"]');
        // console.log(input_div);
        let selected_div;
        // let check_answer;


        for (const ans of input_div) {

            // console.log(ans);
            ans.disabled = true;

            selected_div = ans.parentNode;
            let check_answer = document.createElement('span');


            // selected_div.addEventListener('click', (event) => {
            //     event.preventDefault();
            // });

            for (let correct_ans in correct_answers) {
                // console.log(correct_ans);
                if (correct_ans == ans.name) {
                    for (let user_ans in user_answers) {
                        // console.log(user_ans)
                        if (user_ans == ans.name && user_answers[user_ans] == ans.value && correct_answers[correct_ans] == ans.value) {
                            // if (ans.value == correct_answers[correct_ans]) {
                            check_answer.classList.add('correct-answer');
                            check_answer.textContent = 'Correct answer';

                            selected_div.classList.add('wrap-question-correct');

                            // selected_div.appendChild(check_answer);

                            ans.checked = true;

                        } else if (user_ans == ans.name && user_answers[user_ans] == ans.value) {
                            // check_answer.classList.add('wrong-answer');
                            selected_div.classList.add('isSelected');
                            selected_div.classList.add('wrap-question-wrong');


                            check_answer.classList.toggle('wrong-answer');
                            // check_answer.classList.add('wrong-answer');

                            check_answer.textContent = 'Your answer';

                            // selected_div.appendChild(check_answer);

                            ans.checked = true;
                        } else if (correct_answers[correct_ans] == ans.value) {
                            selected_div.classList.add('isSelected');

                            check_answer.classList.add('correct-answer');
                            // check_answer.classList.add('wrong-answer');

                            check_answer.textContent = 'Correct answer';

                            // selected_div.appendChild(check_answer);
                        }
                        selected_div.appendChild(check_answer);

                    }
                }
            }
        }
    }, [user_answers, correct_answers]);

    return (
        <div>
            <Question title='Try again' button_id='try-again' url='/' />
            <Result score={score} scoreText={scoreText} />
        </div>

    )
}

export default ReviewSection;