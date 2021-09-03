import Http from "../utils/Http";
import { all, call } from "@redux-saga/core/effects";


import { questionSaga } from "./question/question.saga";
import { userAnswersSaga } from "./user-answers/user-answers.sagas";

// export function* fetchQuestionsData(){
//     try{
//         const data = yield Http.post('/attempts');

//     const questions = data.questions;

//     yield put(fetchQuestionsSuccess(questions));
//     }catch(error){
//         yield put(fetchQuestionsFailure(error));
//     }
// }

export default function* rootSaga(){
    yield all([
        call(questionSaga),
        call(userAnswersSaga)
    ])
}