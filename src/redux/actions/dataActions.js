import axios from 'axios';
import { LOADING_UI, SET_FORUM_POSTS, STOP_LOADING_UI } from '../types';

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