import { SET_FORUM_POSTS, LOADING_DATA, SET_FORUMS, 
    SET_POSTS, UPVOTE_POSTS, DOWNVOTE_POSTS,
    REMOVE_UPVOTE_POSTS, REMOVE_DOWNVOTE_POSTS, 
    SET_POST, UPVOTE_COMMENTS, DOWNVOTE_COMMENTS, 
    REMOVE_UPVOTE_COMMENTS, REMOVE_DOWNVOTE_COMMENTS, DELETE_POST, 
    CREATE_POST, CREATE_COMMENT, DELETE_COMMENT, 
    SET_OTHER_USER_DATA, ADD_POSTS, SET_HOME_PAGE, SET_FORUM_PAGE, SET_USER_PAGE } from '../types';

const initialState = {
    page: '',
    info: {},
    posts: [],
    post: {},
    comments: [],
    forums: [],
    loading: false
}

export default function data(state = initialState, action) {
    let index;
    switch(action.type) {
        case SET_HOME_PAGE:
            return {
                ...state,
                page: 'home'
            };
        case SET_FORUM_PAGE: 
            return {
                ...state,
                page: action.payload
            };
        case SET_USER_PAGE:
            return {
                ...state,
                page: action.payload
            }
        case SET_FORUM_POSTS:
            return {
                ...state,
                loading: false,
                info: action.payload.forumInfo,
                posts: action.payload.posts   
            };
        case LOADING_DATA:
            return {
                ...state,
                loading: true,
            };
        case SET_POSTS:
            return {
                ...state,
                loading: false,
                posts: action.payload
            };
        case ADD_POSTS:
            state.posts = state.posts.concat(action.payload);
            return {
                ...state,
                loading: false,
            };
        case SET_FORUMS:
            return {
                ...state,
                loading: false,
                forums: action.payload
            };
        case SET_POST:
            return {
                ...state,
                loading: false,
                post: action.payload.postInfo,
                comments: action.payload.comments
            }
        case UPVOTE_POSTS:
        case DOWNVOTE_POSTS:
        case REMOVE_UPVOTE_POSTS:
        case REMOVE_DOWNVOTE_POSTS:
            index = state.posts.findIndex(post => post.postId === action.payload.postId);
            state.posts[index] = action.payload;
            if (state.post && state.post.postId === action.payload.postId) {
                state.post = action.payload;
            }
            return {
                ...state
            };
        case UPVOTE_COMMENTS:
        case DOWNVOTE_COMMENTS:
        case REMOVE_UPVOTE_COMMENTS:
        case REMOVE_DOWNVOTE_COMMENTS:
            index = state.comments.findIndex(comment => comment.commentId === action.payload.commentId);
            state.comments[index] = action.payload;
            return {
                ...state
            };
        case DELETE_POST:
            index = state.posts.findIndex(post => post.postId === action.payload);
            state.posts.splice(index, 1);
            return {
                ...state
            };
        case DELETE_COMMENT:
            index = state.comments.findIndex(comment => comment.commentId === action.payload);
            state.comments.splice(index, 1);
            return {
                ...state
            };
        case CREATE_POST:
            return {
                ...state,
                posts: [ 
                    action.payload,
                    ...state.posts
                ]
            };
        case CREATE_COMMENT:
            if (state.post.postId === action.payload.postId) state.post = {
                ...state.post,
                commentCount: state.post.commentCount + 1
            };
            return {
                ...state,
                comments: [
                    action.payload,
                    ...state.comments
                ]
            }
        case SET_OTHER_USER_DATA:
            return {
                ...state,
                info: action.payload.userDetails,
                posts: action.payload.posts
            }
        default:
            return state
    }
}