import {
    COMMENTS_FETCH,
    COMMENT_ADD,
    COMMENT_EDIT,
    COMMENT_REMOVE,
    COMMENT_VOTE,
} from '../actions'

const initalState = {
    isFetching: false,
    data: []
}

export function comments(state = initalState, action) {
    switch (action.type) {
        case COMMENT_ADD:
            return {...state}
        case COMMENT_EDIT:
            return {...state}
        case COMMENT_REMOVE:
            return {...state}
        case COMMENT_VOTE:
            return {...state}
        default:
            return {...state}
    }
}