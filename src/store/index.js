import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { logger } from "redux-logger";
import thunkMiddleware from 'redux-thunk';
import {  } from 'redux';

const rootReducer = combineReducers({
    // ...
}
);

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunkMiddleware, logger],
}
);

export default store;