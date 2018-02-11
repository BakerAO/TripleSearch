import { combineReducers } from 'redux';

import GoogleReducer from './reducer_google';

const rootReducer = combineReducers({
    google: GoogleReducer
});

export default rootReducer;