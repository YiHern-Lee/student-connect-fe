import { SET_FORUM_POSTS, LOADING_DATA, SET_FORUMS, 
    SET_POSTS, UPVOTE_POSTS, DOWNVOTE_POSTS,
    REMOVE_UPVOTE_POSTS, REMOVE_DOWNVOTE_POSTS, 
    SET_POST, UPVOTE_COMMENTS, DOWNVOTE_COMMENTS, 
    REMOVE_UPVOTE_COMMENTS, REMOVE_DOWNVOTE_COMMENTS, DELETE_POST } from '../types';

const initialState = {
    info: {},
    posts: [],
    post: {},
    comments: [],
    forums: [],
    loading: false
}

export default function(state = initialState, action) {
    let index;
    switch(action.type) {
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
                loading: true
            };
        case SET_POSTS:
            return {
                ...state,
                loading: false,
                posts: action.payload
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
        default:
            return state
    }
}