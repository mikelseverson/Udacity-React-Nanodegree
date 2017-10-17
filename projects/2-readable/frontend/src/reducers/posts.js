import {
    POSTS_IS_LOADING,
    POSTS_RECEIVE,
    POST_ADD,
    POST_EDIT,
    POST_REMOVE,
} from '../actions';

const initialState = {
    isFetching: false,
    data: []
}

export function posts(state = initialState, action) {
    let { isFetching, posts, post } = action
    switch (action.type) {
        case POSTS_IS_LOADING:
            return {
                ...state,
                isFetching
            }
        case POSTS_RECEIVE:
            return {
                ...state,
                data: posts
            }
        case POST_ADD:
            return {
                ...state,
                // post
            }
        case POST_EDIT:
            return {
                ...state,
                // post
            }
        case POST_REMOVE:
            return {
                ...state
                // post
            }
        default:
            return state
    }
}