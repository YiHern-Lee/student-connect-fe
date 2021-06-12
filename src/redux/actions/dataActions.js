import axios from 'axios';
import { LOADING_UI, SET_FORUM_POSTS, STOP_LOADING_UI, SET_POSTS, SET_FORUMS } from '../types';

export const getForumPosts = (forumId) => (dispatch) => {
    dispatch({ type: LOADING_UI});
    axios.get(`/forums/${forumId}`)
        .then(res => {
            dispatch({
                type: SET_FORUM_POSTS,
                payload: res.data
            });
            console.log(res.data)
            dispatch({ type: STOP_LOADING_UI});
        }).catch(err => console.log(err))
}

export const getAllPosts = () => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios.get('/posts')
        .then(res => {
            dispatch({
                type: SET_POSTS,
                payload: res.data
            });
            dispatch({ type: STOP_LOADING_UI });
        }).catch(err => console.log(err));
}

export const getAllForums = () => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios.get('/forums')
        .then(res => {
            dispatch({
                type: SET_FORUMS,
                payload: res.data
            });
            dispatch({ type: STOP_LOADING_UI });
        }).catch(err => console.log(err));
}