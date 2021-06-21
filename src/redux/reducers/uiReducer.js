<<<<<<< HEAD
import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI, STOP_LOADING_UI } from '../types';

const initialState = {
    loading: false,
    errors: null
};

export default function(state = initialState, action) {
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
        default:
            return state;
    }
=======
import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI, STOP_LOADING_UI } from '../types';

const initialState = {
    loading: false,
    errors: null
};

export default function(state = initialState, action) {
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
        default:
            return state;
    }
>>>>>>> 4305c4e0a29a38ab82bc35707653f29804a0f74c
}