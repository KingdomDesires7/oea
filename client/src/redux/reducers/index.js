import appSelected from './appSelected';
import loggedIn from './loggedIn';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    appSelected: appSelected,
    loggedIn: loggedIn
})

export default allReducers;