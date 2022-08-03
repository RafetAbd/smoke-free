import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { logger } from "redux-logger";
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
    // ...
}
);

const reducer = {}

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunkMiddleware, logger],
}
);

export default store;