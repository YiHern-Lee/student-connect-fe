import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI, 
    STOP_LOADING_UI, SET_HOME_PAGE, SET_FORUM_EXPLORE_PAGE,
    SET_FORUM_PAGE, SET_USER_PAGE, SET_DARK_MODE, SET_LIGHT_MODE } from '../types';

const initialState = {
    loading: false,
    errors: null,
    page: '',
    theme: ''
};

export default function ui(state = initialState, action) {
    switch (action.type) {
        case SET_ERRORS:
            return {
                ...state,
                loading: false,
                errors: action.payload
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                loading: false,
                errors: null
            };
        case LOADING_UI: 
            return {
                ...state,
                loading: true
            };
        case STOP_LOADING_UI:
            return {
                ...state,
                loading: false
            };
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
            };
        case SET_FORUM_EXPLORE_PAGE:
            return {
                ...state,
                page: 'forum-explore'
                
            };
        case SET_DARK_MODE:
            return {
                ...state,
                theme: 'dark'
            };
        case SET_LIGHT_MODE:
            return {
                ...state,
                theme: 'light'
            }
        default:
            return state;
    }
}