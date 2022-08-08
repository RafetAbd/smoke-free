import axios from 'axios';
import history from '../history';

// Action Types
const SET_AUTH = 'SET_AUTH';
const SET_AUTH_ERROR = 'SET_AUTH_ERROR';
const UPDATE_USER = 'UPDATE_USER';
const TOKEN = 'token';
const USER = 'user';

// Action Creators
export const setAuth = user => ({
    type: SET_AUTH,
    user,
})

export const setError = error => ({
    type: SET_AUTH_ERROR,
    error,
})

export const updateUser = user => ({
    type: UPDATE_USER,
    user,
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
        // set the user info in the local storage
        window.localStorage.setItem(USER, JSON.stringify(user));
        // set the user info in the store
        await dispatch(setAuth(user));
        
    }
}

export const authenticateLogin = (email, password, method) => async dispatch => {
    try {
        // get the token from the server
        const { data } = await axios.post(`auth/${method}`, { email, password });
        // set the token in the local storage
        window.localStorage.setItem(TOKEN, data.token);
        // invoke the user info action creator to get the user info
        dispatch(userInfo());
    } catch (authError) {
        // set the error in the store
        return dispatch(setError({ error: authError }));
    }
}

export const authenticateSignup = (email, password, name, quittingDay, PacketPrice, cigarettesPerDay, method) => async dispatch => {
    try {
        // get the token from the server
        const { data } = await axios.post(`auth/${method}`, { email, password, name, quittingDay, PacketPrice, cigarettesPerDay });
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
    // remove the token and user from the local storage
    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(USER);
    // remove the user info from the store
    dispatch(setAuth({}));
    // redirect the user to the login page
    history.push('/');
}

export const clearError = () => dispatch => {
    dispatch(setError({}));
}

export const updateUserInfo = (email, password, name, quittingDay, PacketPrice, cigarettesPerDay, id) => async dispatch => {
    try {
        // get the token from the local storage
        const token = window.localStorage.getItem(TOKEN);
        // update user info in the server
        const { data: user } = await axios.put(`/api/users/${id}`, { email, password, name, quittingDay, PacketPrice, cigarettesPerDay }, {
            headers: {
                authorization: token,
            }
        });
        window.localStorage.setItem(USER, JSON.stringify(user));
        // set the user info in the store
        dispatch(updateUser(user));
    } catch (authError) {
        // set the error in the store
        return dispatch(setError({ error: authError }));
    }
}



// Reducer
const initialState = {
    user: JSON.parse(window.localStorage.getItem(USER)) || {},
    error: {}
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH:
            // return a new state with the user info
            return { ...state, user: action.user };
        case UPDATE_USER:
            // return a new state with the user info
            return { ...state, user: action.user};
        case SET_AUTH_ERROR:
            // return a new state with the error
            return { ...state, error: action.error};
        default:
            return state;
    }
}

