

import {createStore, combineReducers} from 'redux';
import dictionaryReducer from './Reducers/dictionaryReducer';
import historyReducer from './Reducers/historyReducer';

let rootReducer = combineReducers({dictionary:dictionaryReducer,history:historyReducer});

const store = createStore(rootReducer);
export default store;