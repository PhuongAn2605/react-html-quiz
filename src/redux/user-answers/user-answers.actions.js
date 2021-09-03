import UserAnswerActions from "./user-answers.types";

export const selectUserAnswer = (question_id, answer_id) => ({
    type: UserAnswerActions.SELECT_USER_ANSWER,
    payload: {
        question_id: question_id,
        answer_id: answer_id
    }
    // payload: question_id
});

export const submitUserAnswersStart = (attempt_id, user_answers) => ({
    type: UserAnswerActions.SUBMIT_USER_ANSWER_START,
    payload: {
        attempt_id,
        user_answers
    }
});

export const submitUserAnswersSuccess = attempt_result => ({
    type: UserAnswerActions.SUBMIT_USER_ANSWER_SUCCESS,
    payload: attempt_result
});

export const submitUserAnswersFailure = error => ({
    type: UserAnswerActions.SUBMIT_USER_ANSWER_FAILURE,
    payload: error
});

export const clearUserAnswers = () => ({
    type: UserAnswerActions.CLEAR_USER_ANSWERS
});

export const clearAttemptResult = () => ({
    type: UserAnswerActions.CLEAR_ATTEMPT_RESULT
})