import reducers from './reducer';
import loginReducer from './loginReducers'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    reducers,
    loginReducer
})

export default rootReducer