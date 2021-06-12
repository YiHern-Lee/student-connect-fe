import { SET_FORUM_POSTS, LOADING_FORUM_DATA, SET_FORUMS, SET_POSTS } from '../types';

const initialState = {
    info: {},
    posts: [],
    forums: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_FORUM_POSTS:
            return {
                loading: false,
                info: action.payload.forumInfo,
                posts: action.payload.posts
            };
        case LOADING_FORUM_DATA:
            return {
                loading: true,
                ...state,
            }
        case SET_POSTS:
            return {
                loading: false,
                posts: action.payload,
                ...state
            }
        case SET_FORUMS:
            return {
                loading: false,
                forums: action.payload
            }
        default:
            return state
    }
}