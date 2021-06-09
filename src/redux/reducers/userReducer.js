import { SET_USER, /* SET_ERRORS, CLEAR_ERRORS, LOADING_UI, */ SET_AUTHENTICATED } from '../types';

const initialState = {
    authenticated: false,
    credentials: {},
    upvotes: [],
    downvotes: [],
    commentUpvotes: [],
    commentDownvotes: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_AUTHENTICATED:
            return {
                ...state,
                authenticated: true
            };
        case SET_AUTHENTICATED:
            return initialState;
        case SET_USER: 
            return {
                authenticated: true,
                ...action.payload
            };
        default: 
            return state;
    }
}