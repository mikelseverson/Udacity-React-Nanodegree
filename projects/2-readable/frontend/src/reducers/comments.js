import {
    COMMENTS_IS_LOADING,
    COMMENTS_RECEIVE,
    COMMENT_DELETED,
    COMMENT_VOTED
} from '../actions'

import {
    COMMENT_FORM_SUCCESS,
} from '../actions'


const initialState = {
    isFetching: false,
    data: []
}

export function comments(state = initialState, action) {
    let {isFetching, comments, comment, isNewComment} = action
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
        case COMMENT_DELETED:
            return {
                ...state,
                data: state.data.map(commentObj => commentObj.id === comment.id ? comment : commentObj)
            }
        case COMMENT_VOTED:
            return {
                ...state,
                data: state.data.map(commentObj => commentObj.id === comment.id ? comment : commentObj)
            }
        case COMMENT_FORM_SUCCESS: 
            return {
                ...state,
                data: isNewComment ? [comment, ...state.data] : state.data.map(commentObj => commentObj.id === comment.id ? comment : commentObj)
            }
        default:
            return {...state}
    }
}