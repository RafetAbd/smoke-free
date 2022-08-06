import axios from 'axios';
import history from '../history';

// Action Types
const SET_AUTH = 'SET_AUTH';
const SET_AUTH_ERROR = 'SET_AUTH_ERROR';
const TOKEN = 'token';

// Action Creators
export const setAuth = user => ({
    type: SET_AUTH,
    user,
})

export const setError = error => ({
    type: SET_AUTH_ERROR,
    error,
})

// Thunk Creators
export const userInfo = () => async dispatch => {
    // get the token from the local storage
    const token = window.localStorage.getItem(TOKEN);
    if (token) {
        // if the token is valid, get the user info
        const { data: user } = await axios.get('/auth/me', {
            headers: {
                authorization: token,
            }
        })
        // set the user info in the store
        await dispatch(setAuth(user));
        
    }
}

export const authenticateLogin = (username, password, method) => async dispatch => {
    try {
        // get the token from the server
        const { data } = await axios.post(`auth/${method}`, { username, password });
        // set the token in the local storage
        window.localStorage.setItem(TOKEN, data.token);
        // invoke the user info action creator to get the user info
        dispatch(userInfo());
    } catch (authError) {
        // set the error in the store
        return dispatch(setError({ error: authError }));
    }
}

export const authenticateSignup = (username, password, name, quittingDay, PacketPrice, cigarettesPerDay, method) => async dispatch => {
    try {
        // get the token from the server
        const { data } = await axios.post(`auth/${method}`, { username, password, name, quittingDay, PacketPrice, cigarettesPerDay });
        // set the token in the local storage
        window.localStorage.setItem(TOKEN, data.token);
        // invoke the user info action creator to get the user info
        dispatch(userInfo());
    } catch (authError) {
        // set the error in the store
        return dispatch(setError({ error: authError }));
    }
}


export const logout = () => dispatch => {
    // remove the token from the local storage
    window.localStorage.removeItem(TOKEN);
    // remove the user info from the store
    dispatch(setAuth({}));
    // redirect the user to the login page
    history.push('/');
}

export const clearError = () => dispatch => {
    dispatch(setError({}));
}

// Reducer
const initialState = {
    user: {},
    error: {}
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH:
            // return a new state with the user info
            return { ...state, user: action.user };
        case SET_AUTH_ERROR:
            // return a new state with the error
            return { ...state, error: action.error};
        default:
            return state;
    }
}

