import {
    POSTS_IS_LOADING,
    POSTS_RECEIVE,
    POST_IS_LOADING,
    POST_RECEIVE,
    POSTS_SORT,
    POST_DELETED,
} from '../actions'

import {
    POST_FORM_SUCCESS
} from '../actions'

const initialState = {
    isFetching: false,
    data: []
}

export function posts(state = initialState, action) {
    let { isFetching, posts, post, sort, newPost } = action
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
        case POST_IS_LOADING:
            return {
                ...state,
                isFetching
            }
        case POST_RECEIVE:
            return {
                ...state,
                data: [post]
            }
        case POST_DELETED:
            return {
                ...state,
                data: state.data.map(postObj => postObj.id === post.id ? post : postObj)
            }
        case POST_FORM_SUCCESS:
            return {
                ...state,
                data: newPost ? [post, ...state.data] : state.data.map(postObj => postObj.id === post.id ? post : postObj)
            }
        case POSTS_SORT:
            return {
                ...state,
                data: state.data
                    .sort((a, b) => {
                        switch (sort) {
                            case 'voteScore':
                                return b.voteScore - a.voteScore
                            case 'date':
                                return b.timestamp - a.timestamp
                            default: 
                                return 0
                        }
                    }),
                sort
                }
        default:
            return {...state}
    }
}