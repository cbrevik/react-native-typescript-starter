import { combineReducers } from 'redux';

import counter from './counter/reducer';

// Add more
const appReducer = combineReducers({
    counter
});

// Setup root reducer
const rootReducer = (state, action) => {
    const newState = (action.type === 'RESET') ? undefined : state;
    return appReducer(newState, action);
};

export default rootReducer;