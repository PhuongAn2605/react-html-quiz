import React, { useEffect }  from 'react';
import { useDispatch } from 'react-redux';
import { Router, Link } from 'react-router-dom';
import { fetchQuestions, fetchQuestionsSuccess } from '../../redux/question/question.actions';
import Button from '../button/Button';
import Header from '../header/Header';

import { clearAttemptResult, clearUserAnswers } from '../../redux/user-answers/user-answers.actions';

import './Introduction.css';

const Introduction = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(fetchQuestions());
        dispatch(clearUserAnswers());
        dispatch(clearAttemptResult());
        
        dispatch(fetchQuestions());
      },[]);
    

    return (
        <article>
            <section id="introduction">
                <div className="author">By Phuong An</div>
                <h2>The Test</h2>
                <p>The test contains 10 questions and there is no time limit.</p>
                <p>The test is not official, it's just a nice way to see how much you know, or don't know, about HTML.</p>
                <h2>Count Your Score</h2>
                <p>
                    You will get 1 point for each correct answer. At the end of the Quiz, your total score will be
                    displayed.
                    Maximum score is 10 points.</p>

                <div className="form">
                    <h2>Start the quiz</h2>
                    <p>Good luck!</p><br />
                    <Button title='Start the HTML quiz' url='/attempts' button_id='start-quiz'/>
                </div>
            </section>
        </article>
    )
}

export default Introduction;