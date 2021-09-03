import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import modalReducer from "./modal/modal.reducer";
import attemptReducer from "./question/question.reducers";
import userAnswerReducer from "./user-answers/user-answers.reducer";


const rootPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['userAnswers']
}

// const attemptPersistConfig = {
//     key: 'attempt',
//     storage,
//     whitelist: ['attempt']
// }



// const persistConfig = combineReducers({
//     attempt: attemptPersistConfig,
//     userAnswers: answerPersistConfig
// })

const rootReducer =  combineReducers({
    // attempt: persistReducer(attemptPersistConfig, attemptReducer),
    attempt: attemptReducer,
    showModal: modalReducer,
    userAnswers: userAnswerReducer
});


export default persistReducer(rootPersistConfig, rootReducer);