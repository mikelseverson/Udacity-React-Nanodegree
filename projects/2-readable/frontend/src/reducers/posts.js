import {
    POST_ADD,
    POST_EDIT,
    POSTS_FETCH,
    POST_REMOVE
} from '../actions';

const initalState = {
    isFetching: false,
    data: []
}

export function posts(state = initalState, action) {
    switch (action.type) {
        case POST_ADD:
            return {}
        case POST_EDIT:
            return {...state}
        case POST_REMOVE:
            return {...state}
        case POSTS_FETCH: 
            return {...state}
        case 'POSTS_HAS_ERRORED':
            return {...state}
        case 'POSTS_IS_LOADING':
            return {...state}
        case 'POSTS_FETCH_SUCCESS':
            return {...state}
        default:
            return state
    }
}