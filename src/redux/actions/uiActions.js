import { SET_HOME_PAGE, SET_FORUM_PAGE, SET_USER_PAGE, SET_FORUM_EXPLORE_PAGE, SET_DARK_MODE, SET_LIGHT_MODE } from "../types";

export const setHomePage = () => (dispatch) => {
    dispatch({ type: SET_HOME_PAGE });
}

export const setForumPage = (forumTitle) => (dispatch) => {
    dispatch({ 
        type: SET_FORUM_PAGE,
        payload: `forum=${forumTitle}` 
    });
}

export const setUserPage = (userId) => (dispatch) => {
    dispatch({ 
        type: SET_USER_PAGE,
        payload: `user=${userId}` });
}

export const setForumExplorePage = () => (dispatch) => {
    dispatch({ type: SET_FORUM_EXPLORE_PAGE });
}

export const setDarkMode = () => (dispatch) => {
    localStorage.setItem('theme', 'dark');
    dispatch({ type: SET_DARK_MODE });
}

export const setLightMode = () => (dispatch) => {
    localStorage.setItem('theme', 'light');
    dispatch({ type: SET_LIGHT_MODE });
}