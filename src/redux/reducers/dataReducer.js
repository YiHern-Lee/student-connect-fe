import { SET_FORUM_POSTS, LOADING_FORUM_DATA } from '../types';

const initialState = {
    info: {},
    posts: [],
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
                ...state,
                loading: true
            }
        default:
            return state
    }
}