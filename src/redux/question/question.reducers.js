import QuestionActionTypes from "./question.types"

const INITIAL_STATE = {
    questions: [],
    attempt_id: null,
    correct_answers: {}
}

const attemptReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case QuestionActionTypes.FETCH_QUESTIONS_SUCCESS:
            return {
                ...state,
                questions: action.payload.questions,
                attempt_id: action.payload._id,
                correct_answers: action.payload.correctAnswers,
                error: null
            }
        case QuestionActionTypes.FETCH_QUESTIONS_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default attemptReducer;