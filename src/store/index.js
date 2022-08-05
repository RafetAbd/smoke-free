import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { logger } from "redux-logger";
import thunkMiddleware from 'redux-thunk';
import { authReducer } from './auth';

const rootReducer = combineReducers({
    authReducer
}
);

const reducer = {}

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunkMiddleware, logger],
}
);

export default store;