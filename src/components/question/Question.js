import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../button/Button';

import { showModal } from '../../redux/modal/modal.actions';
import ConfirmModal from '../modal/Modal';
import { selectUserAnswer } from '../../redux/user-answers/user-answers.actions';
import AnswerCheck from '../answer-check/AnswerCheck';

const Question = (props) => {

    const { title, button_id, action, url } = props;

    let { questions, attempt_id } = useSelector(state => state.attempt);
    const questions_attempted = useSelector(state => state.userAnswers.attempt_result.questions);

    const { user_answers } = useSelector(state => state.userAnswers);
    
    // console.log(questions);
    // console.log(questions_attempted);

    useEffect(() => {
        // console.log('I am fired')
        const input_div = document.querySelectorAll('input[type="radio"]');
        // console.log(input_div);

        for (const ans of input_div) {

            for (let user_ans in user_answers) {
                // console.log(user_ans)
                if (user_ans == ans.name && user_answers[user_ans] == ans.value) {
                    // if (ans.value == correct_answers[correct_ans]) {

                    ans.checked = true;

                }
        }
    }
    }, [user_answers]);

if (questions.length === 0 && questions_attempted.length > 0) {
    for (let i = 0; i < questions_attempted.length; i++) {
        questions[i] = questions_attempted[i];
    }
}else if(questions.length > 0 ){
    localStorage.removeItem('questions_list');
    localStorage.setItem('questions_list', JSON.stringify(questions));
}else{
    questions = JSON.parse(localStorage.getItem('questions_list'));
}
// console.log(attempt_id);
// console.log(useSelector(state => state.questions));
const length = questions.length;

// console.log(questions[0]);

const dispatch = useDispatch();

return (
    <article>
        <section id="attempt-quiz">
            <div id="show-question">
                {
                    questions.map((question, index) =>
                        <div key={index}>
                            <h2>Question {index + 1} of {length}</h2>
                            <p>{question.text}</p>
                            <form className='ques-form'>
                                {
                                    question.answers.map((answer, ans_index) =>
                                        <div className='wrap-question' key={ans_index}>
                                            <input type='radio' id={`choice${ans_index}qn${index + 1}`} value={ans_index} name={question._id} onChange={() => dispatch(selectUserAnswer(question._id, ans_index))}></input>
                                            <label htmlFor={`choice${ans_index}qn${index + 1}`}>{answer}</label>
                                        </div>
                                    )
                                }
                                {/* <AnswerCheck /> */}
                            </form>
                        </div>
                    )
                }
            </div>
            {/* <div id="form">
                        <Link to='/review'><button type="button" id="green-btn">Submit your answer <i className="arrow right"></i></button></Link>
                </div> */}
            <div className='form'>
                {
                    action ?
                        <Button title={title} button_id={button_id} action={action} />
                        :
                        <Button title={title} button_id={button_id} url={url} />

                }
            </div>

        </section>
    </article>
)
}

export default Question;