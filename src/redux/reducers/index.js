import reducers from './reducer';
import loginReducer from './loginReducers';
import eventsReducer from './eventsReducer';
import { combineReducers } from 'redux';
import chatbotReducer from './chatbotReducer';

const rootReducer = combineReducers({
    reducers,
    loginReducer,
    eventsReducer,
    chatbotReducer
})

export default rootReducer