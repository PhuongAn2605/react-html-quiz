import UserAnswerActions from "./user-answers.types"

const INITIAL_STATE = {
    user_answers: null,
    attempt_result: null
}

const userAnswerReducer = (state = INITIAL_STATE, action) => {
    // console.log(action.payload)

    // console.log(action.payload[0])
    // const question_id = action.payload.question_id;
    // const answer_id = action.payload.answer_id;

    switch (action.type) {
        case UserAnswerActions.SELECT_USER_ANSWER:
            // console.log(action.payload.question_id);
            const { question_id, answer_id } = action.payload;
            // console.log(question_id);
            state.user_answers[question_id] = answer_id;
            // console.log(state.user_answers);
            return {
                ...state,
                error: null
            }

            // return state;
        case UserAnswerActions.SUBMIT_USER_ANSWER_SUCCESS:
            // console.log(action.payload);
            // console.log(state.attempt_result);
            return {
                ...state,
                attempt_result: action.payload,
                error: null
            }

        case UserAnswerActions.SUBMIT_USER_ANSWER_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case UserAnswerActions.CLEAR_USER_ANSWERS:
            return {
                ...state,
                error: null,
                user_answers: {}
            }
        case UserAnswerActions.CLEAR_ATTEMPT_RESULT:
            return {
                ...state,
                error: null,
                attempt_result: {}
            }
        default:
            return state;
    }

};

export default userAnswerReducer;