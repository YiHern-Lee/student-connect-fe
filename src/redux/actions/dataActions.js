import axios from 'axios';

const getPosts = () => (dispatch) => {
    dispatch({ type: 'LOADING_DATA '});
    axios.get('/posts')
        .then(res => {
            dispatch({
                type: 'SET_POSTS',
                payload: res.data
            });
        }).catch(err => {
            dispatch({
                type: 'SET_POSTS',
                payload: []
            });
        });
}

export { getPosts };