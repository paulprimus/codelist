

import { combineReducers } from 'redux';
import gruppenReducer from './gruppen-reducer';

// Reducers


// Combine Reducers
var reducers = combineReducers({
	gruppenState: gruppenReducer
});

export default reducers;