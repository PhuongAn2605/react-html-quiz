import { all, call, put, takeLatest } from "@redux-saga/core/effects"
import Http from "../../utils/Http"
import { submitUserAnswersFailure, submitUserAnswersSuccess } from "./user-answers.actions";
import UserAnswerActions from "./user-answers.types"

export function* submitUserAnswers({payload: {attempt_id, user_answers}}){
    try{
        // console.log('submit is fired');
        // yield console.log('submit: ' + attempt_id)
        // yield console.log(user_answers);
        const response = yield Http.post('/attempts/' + attempt_id + '/submit', {
            answers: user_answers
        });
        yield console.log(response.data);
        yield put(submitUserAnswersSuccess(response.data));
    }catch(error){
        yield put(submitUserAnswersFailure(error));
    }
}

export function* submitUserAnswersStart(){
    console.log('I am fired')
    yield takeLatest(
        UserAnswerActions.SUBMIT_USER_ANSWER_START,
        submitUserAnswers
    )
};

export function* userAnswersSaga(){
    yield all([call(submitUserAnswersStart)]);
}