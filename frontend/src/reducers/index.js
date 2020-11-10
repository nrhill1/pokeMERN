import { combineReducers } from 'redux';
import loginReducer from './isLogged.js';

export default combineReducers({
    login: loginReducer
})