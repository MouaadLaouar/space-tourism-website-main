import  { background } from './background';
import  counter from './counter';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    background,counter
});

export default allReducers ;