import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';

const appReducer = combineReducers({
    Login: LoginReducer,
})
export default appReducer