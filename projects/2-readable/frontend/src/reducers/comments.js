import {
    COMMENTS_IS_LOADING,
    COMMENTS_RECEIVE,
} from '../actions'

const initialState = {
    isFetching: false,
    data: []
}

export function comments(state = initialState, action) {
    let {isFetching, comments} = action
    switch (action.type) {
        case COMMENTS_IS_LOADING:
            return {
                ...state,
                isFetching
            }
        case COMMENTS_RECEIVE:
            return {
                ...state,
                isFetching: false,
                data: comments
            }
        default:
            return {...state}
    }
}