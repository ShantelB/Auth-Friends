import axios from 'axios';
import {axiosWithAuth} from '../../utils/axiosWithAuth';

export const FETCH_FRIEND_START = 'FETCH_FRIEND_START';
export const FETCH_FRIEND_SUCCESS = 'FETCH_FRIEND_SUCCESS';
export const FETCH_FRIEND_FAILURE = 'FETCH_FRIEND_FAILURE';
export const ADD_FRIEND_START = 'ADD_FRIEND_START';
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS';
export const ADD_FRIEND_FAILURE = 'ADD_FRIEND_FAILURE';

export const fetchFriend = () => {
    return dispatch => {
        dispatch({ type: FETCH_FRIEND_START});
        axiosWithAuth()
    .get('/api/friends')
    .then(response => {
        // console.log(response.data)
        dispatch({type: FETCH_FRIEND_SUCCESS, payload:response.data})
    })
    .catch(err => dispatch({type: FETCH_FRIEND_FAILURE, payload: `${err.message}`}))
}
}

export const addFriend = (friends) => {
    return dispatch => {
        dispatch({ type: ADD_FRIEND_START});
        axiosWithAuth()
    .post('/api/friends', friends)
    .then(response => {
        // console.log(response.data)
        dispatch({type: ADD_FRIEND_SUCCESS, payload:response.data})
    })
    .catch(err => dispatch({type: ADD_FRIEND_FAILURE, payload: `${err.message}`}))
}
}