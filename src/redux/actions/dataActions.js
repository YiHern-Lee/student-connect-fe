import axios from 'axios';
import { LOADING_UI, SET_FORUM_POSTS, STOP_LOADING_UI, 
    SET_POSTS, SET_FORUMS, UPVOTE_POSTS, DOWNVOTE_POSTS, 
      REMOVE_UPVOTE_POSTS, REMOVE_DOWNVOTE_POSTS, SET_POST, 
      LOADING_DATA, UPVOTE_COMMENTS, DOWNVOTE_COMMENTS, 
      REMOVE_UPVOTE_COMMENTS, REMOVE_DOWNVOTE_COMMENTS, DELETE_POST, 
      CREATE_POST, SET_ERRORS, CLEAR_ERRORS, CREATE_COMMENT, DELETE_COMMENT } from '../types';

export const getForumPosts = (forumId) => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios.get(`/forums/${forumId}`)
        .then(res => {
            dispatch({
                type: SET_FORUM_POSTS,
                payload: res.data
            });
        }).catch(err => {
            dispatch({
                type: SET_FORUM_POSTS,
                payload: {
                    forumInfo: [],
                    posts: []
                }
            })
        })
}

export const getAllPosts = () => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios.get('/posts')
        .then(res => {
            dispatch({
                type: SET_POSTS,
                payload: res.data
            });
        }).catch(err => {
            dispatch({
                type: SET_POSTS,
                payload: []
            })
        });
}

export const getAllForums = () => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios.get('/forums')
        .then(res => {
            dispatch({
                type: SET_FORUMS,
                payload: res.data
            });
        }).catch(err => { 
            dispatch({
                type: SET_FORUMS,
                payload: []
        })
    });
}

// Upvote post
export const upvotePost = (postId) => (dispatch) => {
    axios.post(`/posts/${postId}/upvote`)
        .then(res => {
            dispatch({
                type: UPVOTE_POSTS,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

export const downvotePost = (postId) => (dispatch) => {
    axios.post(`/posts/${postId}/downvote`)
        .then(res => {
            dispatch({
                type: DOWNVOTE_POSTS,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

export const unUpvotePost = (postId) => (dispatch) => {
    axios.post(`/posts/${postId}/unupvote`)
        .then(res => {
            dispatch({
                type: REMOVE_UPVOTE_POSTS,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

export const unDownvotePost = (postId) => (dispatch) => {
    axios.post(`/posts/${postId}/undownvote`)
        .then(res => {
            dispatch({
                type: REMOVE_DOWNVOTE_POSTS,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

export const upvoteComment = (commentId) => (dispatch) => {
    axios.post(`/comments/${commentId}/upvote`)
        .then(res => {
            dispatch({
                type: UPVOTE_COMMENTS,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

export const downvoteComment = (commentId) => (dispatch) => {
    axios.post(`/comments/${commentId}/downvote`)
        .then(res => {
            dispatch({
                type: DOWNVOTE_COMMENTS,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

export const unUpvoteComment = (commentId) => (dispatch) => {
    axios.post(`/comments/${commentId}/unupvote`)
        .then(res => {
            dispatch({
                type: REMOVE_UPVOTE_COMMENTS,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

export const unDownvoteComment = (commentId) => (dispatch) => {
    axios.post(`/comments/${commentId}/undownvote`)
        .then(res => {
            console.log(res.data);
            dispatch({
                type: REMOVE_DOWNVOTE_COMMENTS,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

export const getPost = (postId) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios.get(`/posts/${postId}`)
        .then(res => {
            dispatch({
                type: SET_POST,
                payload: res.data
            });
            dispatch({ type: STOP_LOADING_UI });
        }).catch(err => console.log(err))
}

export const deletePost = (postId) => (dispatch) => {
    axios.delete(`/posts/${postId}`)
        .then(() => {
            dispatch({
                type: DELETE_POST,
                payload: postId
            });
        }).catch(err => console.log(err));
}

export const deleteComment = (commentId) => (dispatch) => {
    axios.delete(`/comments/${commentId}`)
        .then(() => {
            dispatch({
                type: DELETE_COMMENT,
                payload: commentId
            });
        }).catch(err => console.log(err));
}

export const createPost = (newPost) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios.post(`/posts/${newPost.forum}`, { body: newPost.body, title: newPost.title })
        .then(res => {
            dispatch({
                type: CREATE_POST,
                payload: res.data
            });
            dispatch({ type: CLEAR_ERRORS });
        }).catch(err => {
            dispatch({ 
                type: SET_ERRORS,
                payload: err.response.data
            });
        })
}

export const createComment = (newComment) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios.post(`/posts/${newComment.postId}/comment`, { body: newComment.body })
        .then(res => {
            dispatch({
                type: CREATE_COMMENT,
                payload: res.data
            });
            dispatch({ type: CLEAR_ERRORS });
        }).catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            });
        });
}

export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}