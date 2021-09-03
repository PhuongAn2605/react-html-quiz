import { takeLatest, put, all, call } from '@redux-saga/core/effects';

import Http from "../../utils/Http";
import QuestionActionTypes from "./question.types";
import { fetchQuestionsSuccess, fetchQuestionsFailure } from './question.actions';

export function* fetchQuestionsData(){
    try{
        const data = yield Http.post('/attempts');
        const attempt_data = data.data;
        // console.log(data.data.questions);
        // console.log(data.data);

        const questions = data.data.questions;

    yield put(fetchQuestionsSuccess(attempt_data));
    }catch(error){
        yield put(fetchQuestionsFailure(error));
    }
}

export function* fetchQuestions(){
    yield takeLatest(QuestionActionTypes.FETCH_QUESTIONS, fetchQuestionsData);
}

export function* questionSaga(){
    yield all([call(fetchQuestions)]);
}