import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI, SET_UNAUTHENTICATED } from '../types';
import axios from 'axios';

export const loginUser = (userData, history) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios.post('/login', userData)
        // res.data is a dictionary containing the authentication token
        .then(res => {
            console.log(res.data);
            this.setState({
                loading: false
            });
            const FirebaseIdToken = `Bearer ${res.data.token}`;
            localStorage.setItem('FirebaseIdToken', FirebaseIdToken);
            axios.defaults.headers.common['Authorization'] = FirebaseIdToken;
            dispatch(getUserData());
            dispatch({ type: CLEAR_ERRORS });
            history.push('/')
        })
        .catch((err) => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            });
        });
}

export const getUserData = () => (dispatch) => {
    axios.get('/user')
        .then(res => {
            dispatch({
                type: SET_USER,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('FBIdToken');
    delete axios.defaults.headers.common['Authorization'];
    dispatch({ type: SET_UNAUTHENTICATED });
};